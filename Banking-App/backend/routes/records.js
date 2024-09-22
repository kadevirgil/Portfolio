const express = require("express");

const routes = express.Router();

// Connect to db
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// Login route
routes.route("/login").post(async (req, res) => {
  try {
    let db_connect = dbo.getDb();
    let myquery = { email: req.body.email, password: req.body.password };
    let status = await db_connect
      .collection("records")
      .findOne(myquery, { projection: { password: 0, _id: 0 } });
    let errorCode = 0;
    if (status) {
      if (!req.session.email) {
        req.session.email = req.body.email;
        errorCode = 200;
        //status will be a user object
      } else {
        errorCode = 400;
        status =
          "Session already set for " +
          req.session.email +
          "logging out and signing you in.";
        req.session.destroy();
      }
      res.status(errorCode).json(status);
    } else {
      res.status(401).send("Incorrect username and/or password");
    }
  } catch (err) {
    throw err;
  }
});

// Generates unique userID
const newUserID = async () => {
  let db_connect = dbo.getDb();
  const lastUser = await db_connect
    .collection("records")
    .find()
    .sort({ _id: -1 })
    .limit(1)
    .toArray();
  let newUserID = "1000"; // Starting point
  if (lastUser.length > 0) {
    newUserID = (parseInt(lastUser[0].userID, 10) + 1).toString();
  }
  return newUserID;
};

// Registration route
routes.route("/records/signup").post(async (req, res) => {
  try {
    let db_connect = dbo.getDb();
    let myobj = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userID: await newUserID(),
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      savings: 0,
      checking: 0,
      investment: 0,
    };

    //check for duplicate emails
    const account = await db_connect
      .collection("records")
      .findOne({ email: req.body.email });
    errorCode = 200;
    let status = "Account Created";
    if (account) {
      errorCode = 400;
      status = "Account already exists";
    } else {
      status = await db_connect.collection("records").insertOne(myobj);
    }
    res.status(errorCode).json(status);
  } catch (err) {
    throw err;
  }
});

// Account verification route (Session get)
routes.route("/user").get(async (req, res) => {
  try {
    let db_connect = dbo.getDb();
    let myquery = { email: req.session.email };
    let status = await db_connect.collection("records").findOne(myquery);
    let errorCode = 200;
    if (!req.session.email || req.session.email == null) {
      errorCode = 400;
      status = "No session exists";
    }
    res.status(errorCode).json(status);
  } catch (err) {
    throw err;
  }
});

//Retrieves all user accounts. Also displays their role. Also their checkings and savings amounts. Does not display passwords.
routes.route("/record").get(async (req, res) => {
  try {
    let db_connect = dbo.getDb();
    const result = await db_connect
      .collection("records")
      .find({})
      .project({ password: 0, _id: 0 })
      .toArray();
    res.json(result);
  } catch (err) {
    throw err;
  }
});

// Logout route (Session destroy)
routes.route("/logout").get(async (req, res) => {
  console.log("In /logout, session is: " + req.session.email);
  if (req.session.email) {
    req.session.destroy();
    res.status(200).json("Logged out");
  } else {
    res.status(400).json("No session found");
  }
});

// Returns all information about a single account given a user ID (uID). Does not show password or data store _id
routes.route("/account_details/:uID").get(async (req, res) => {
  try {
    let db_connect = dbo.getDb();
    let myquery = { userID: req.params.uID };
    const account = await db_connect
      .collection("records")
      .findOne(myquery, { projection: { password: 0, _id: 0 } });
    if (account) {
      res.status(200).json(account);
    } else {
      res.status(400).send("No account was found with this user ID");
    }
  } catch (err) {
    throw err;
  }
});

// Customer lookup route
routes.route("/customerlookup").get(async (req, res) => {
  try {
    let db_connect = dbo.getDb();
    let myquery = { userID: req.body.userID };
    const account = await db_connect
      .collection("records")
      .findOne(myquery, { projection: { password: 0, _id: 0 } });
    if (account) {
      res.json(account);
    } else {
      res.status(400).send("No account was found with this user ID");
    }
  } catch (err) {
    throw err;
  }
});

routes.route("/externaltransfer").put(async (req, res) => {

  try {
    let db_connect = dbo.getDb();
    //let myquery = { userID: req.params.uID };
    let newvalues = {};
    let newData = {};
    const transferAmount = parseFloat(req.body.amount);
    const fromID = { userID: req.body.fromID };
    const toID = { userID: req.body.toID };
    const transferFrom = req.body.transferFrom;
    const transferTo = req.body.transferTo;
    let accountFrom = await db_connect.collection("records").findOne(fromID);
    let accountTo = await db_connect.collection("records").findOne(toID);
    let d = new Date();
    d = d.toLocaleDateString();

    // I couldn't test for some reason with external transfer
    let myobj1 = { //who is losing money
      userID: req.body.fromID,
      type: "External Transfer",
      account: req.body.transferFrom,
      amount: '-$ ' + req.body.amount,
      date: d,
      //transferFrom: req.body.transferFrom
    }
    let myobj2 = { //who is gaining money
      userID: req.body.toID,
      account: req.body.transferTo,
      type: "External Deposit",
      amount: '$ ' + req.body.amount,
      date: d,
     //transferTo: req.body.transferTo
    }

    if (accountFrom && accountTo) {

      let fromCheckingBal = accountFrom.checking;
      let fromSavingsBal = accountFrom.savings;
      let fromInvestmentBal = accountFrom.investment;
      //
      // if account does exists after querying database
      switch (transferFrom) {
        case "Checking":
          fromCheckingBal -= transferAmount;
          newvalues = {
            $set: {
              checking: fromCheckingBal,
            },
          };
          break;
        case "Savings":
          fromSavingsBal -= transferAmount;
          newvalues = {
            $set: {
              savings: fromSavingsBal,
            },
          };
          break;
        case "Investment":
          fromInvestmentBal -= transferAmount;
          newvalues = {
            $set: {
              investment: fromInvestmentBal,
            },
          };
          break;
      }

      // Update changes after withdrawing the transfer amount from the specified account 
      await db_connect.collection("records").updateOne(accountFrom, newvalues);
      //Insert into 'history' collection
      await db_connect.collection("history").insertOne(myobj1);
      await db_connect.collection("history").insertOne(myobj2);
      let toCheckingBal = accountTo.checking;
      let toSavingsBal = accountTo.savings;
      let toInvestmentBal = accountTo.investment;
      switch (transferTo) {
        case "Checking":
          toCheckingBal += transferAmount;
          newvalues = {
            $set: {
              checking: toCheckingBal,
            },
          };
          break;
        case "Savings":
          toSavingsBal += transferAmount;
          newvalues = {
            $set: {
              savings: toSavingsBal,
            },
          };
          break;
        case "Investment":
          toInvestmentBal += transferAmount;
          newvalues = {
            $set: {
              investment: toInvestmentBal,
            },
          };
          break;
      }

      // Update changes after depositing the transfer amount to the specified account 
      await db_connect.collection("records").updateOne(accountTo, newvalues);
      res.status(200).send("Transfer completed successfully");

    } else {
      // if account doesn't exist after querying database, send error message to frontend
      res.status(400).send("Error: Invalid credentials (account with that user id doens't exist");
    }
  } catch (err) {
    throw err;
  }
});

// deposit route gets the user ID from the params, finds the user by ID as of now
routes.route("/deposit/:uID").put(async (req, res) => {
  try {
    let db_connect = dbo.getDb();
    let myquery = { userID: req.params.uID };
    let account = await db_connect.collection("records").findOne(myquery);
    const depositAmount = parseFloat(req.body.amount);
    let d = new Date();
    d = d.toLocaleDateString();

    let myobj = {
      userID: req.params.uID,
      account: req.body.depositTo,
      type: "Deposit",
      amount: "$ " + depositAmount, 
      date: d,
      //depositTo: req.body.depositTo
    }
    if (account) {
      // if the account does exist after querying our database for the userID
      switch (req.body.depositTo) {
        case "Savings":
          const savingsBal = account.savings + depositAmount;
          newvalues = {
            $set: {
              savings: savingsBal,
            },
          };
          // transaction history object
          break;
        case "Checking":
          const checkingBal = account.checking + depositAmount;
          newvalues = {
            $set: {
              checking: checkingBal,
            },
          };
          break;
        case "Investment":
          const investmentBal = account.investment + depositAmount;
          newvalues = {
            $set: {
              investment: investmentBal,
            },
          };
          break;
        default: // if the account to be deposited into isn't specified inside the body of the request, send an error message
          res.status(400).send("Bad request (no account specified");
      }
    } else {
      // if account doesn't exist after querying database
      res.status(400).send("Bad credentials (userID)");
      return;
    }
    const result = await db_connect
      .collection("records")
      .updateOne(myquery, newvalues);

    console.log(myobj.amount);
    await db_connect
      .collection("history")
      .insertOne(myobj);

    if (!result) {
      // if the result of the update isn't successful, send error message
      res.status(400).send("Unsuccessful transfer");
    } else {
      res.status(200).send("Successful transfer");
    }
  } catch (err) {
    throw err;
  }
});

//withdraw from an account based on userID
routes.route("/withdraw/:uID").put(async (req, res) => {
  try {
    let db_connect = dbo.getDb();
    let myquery = { userID: req.params.uID };
    let newvalues = {};
    let account = await db_connect.collection("records").findOne(myquery);
    const withdrawAmount = parseFloat(req.body.amount);
    let d = new Date();
    d = d.toLocaleDateString();

    let myobj = {
      userID: req.params.uID,
      account: req.body.withdrawFrom,
      type: "Withdraw",
      amount: "-$ " + withdrawAmount,
      date: d,
      //withdrawFrom: req.body.withdrawFrom
    }

    if (account) {
      // if the account does exist after querying our database for the userID
      console.log(req.body.withdrawFrom); 
      switch (req.body.withdrawFrom) {
        case "Savings":
          const savingsBal = account.savings - withdrawAmount;
          newvalues = {
            $set: {
              savings: savingsBal,
            },
          };
          break;
        case "Checking":
          const checkingBal = account.checking - withdrawAmount;
          newvalues = {
            $set: {
              checking: checkingBal,
            },
          };
          break;
        case "Investment":
          const investmentBal = account.investment - withdrawAmount;
          newvalues = {
            $set: {
              investment: investmentBal,
            },
          };
          break;
        default: // if the account to be deposited into isn't specified inside the body of the request, send an error message
          res.status(400).send("Bad request (no account specified");
      }
    } else {
      // if account doesn't exist after querying database
      res.status(400).send("Bad credentials (userID)");
      return;
    }
    const result = await db_connect
      .collection("records")
      .updateOne(myquery, newvalues);

    await db_connect
      .collection("history")
      .insertOne(myobj);

    if (!result) {
      // if the result of the update isn't successful, send error message
      res.status(400).send("Unsuccessful transfer");
    } else {
      res.status(200).send("Successful transfer");
    }
  } catch (err) {
    throw err;
  }
});


routes.route("/internaltransfer/:uID").put(async (req, res) => {
  try {
    let db_connect = dbo.getDb();
    let myquery = { userID: req.params.uID };
    let newvalues = {};
    const transferAmount = parseFloat(req.body.amount); 
    const transferFrom = req.body.transferFrom;
    const transferTo = req.body.transferTo; 
    let account = await db_connect.collection("records").findOne(myquery);
    let d = new Date();
    d = d.toLocaleDateString();

    let fromobj = {
      userID: req.params.uID,
      account: req.body.transferFrom,
      type: "Transfer to " + transferTo,
      amount: "-$ " + transferAmount,
      date: d,
      //transferFrom: req.body.transferFrom
    }

    let toobj = {
      userID: req.params.uID,
      account: req.body.transferTo,
      type: "Deposit from " + transferFrom,
      amount: "$ " + transferAmount,
      date: d,
      //transferTo: req.body.transferTo
    }

    if (account) { 
      let checkingBal = account.checking; 
      let savingsBal = account.savings;
      let investmentBal = account.investment; 

      // if account does exists after querying database
      switch (transferFrom) {
        case "Checking":
          checkingBal = account.checking - transferAmount;
          newvalues = {
            $set: {
              checking: checkingBal,
            },
          };
          break;
        case "Savings":
          savingsBal = account.savings - transferAmount; 
          newvalues = {
            $set: {
              savings: savingsBal,
            },
          };
          break;
        case "Investment":
          investmentBal = account.investment - transferAmount; 
          newvalues = {
            $set: {
              investment: investmentBal,
            },
          };
          break;
      }

      // Update changes after withdrawing the transfer amount from the specified account 
      await db_connect.collection("records").updateOne(myquery, newvalues);

      await db_connect.collection("history").insertOne(fromobj);
      await db_connect.collection("history").insertOne(toobj);

      switch (transferTo) {
        case "Checking":
          checkingBal = account.checking + transferAmount;
          newvalues = {
            $set: {
              checking: checkingBal,
            },
          };
          break;
        case "Savings":
          savingsBal = account.savings + transferAmount;
          newvalues = {
            $set: {
              savings: savingsBal,
            },
          };
          break;
        case "Investment":
          investmentBal = account.investment + transferAmount;
          newvalues ={
            $set: {
              investment: investmentBal,
            },
          };
        break;
      }

      // Update changes after depositing the transfer amount to the specified account 
      await db_connect.collection("records").updateOne(myquery, newvalues); 
      res.status(200).send("Transfer completed successfully");

    } else {
      // if account doesn't exist after querying database, send error message to frontend
      res.status(400).send("Error: Invalid credentials (account with that user id doens't exist"); 
    }
  } catch (err) {
    throw err; 
  }
});

routes.route("/updaterole/:uID").put(async (req, res) => {
  try {
    let db_connect = dbo.getDb();
    let myquery = { userID: req.params.uID };
    let newvalues = {
      $set: {
        role: req.body.role,
      },
    };
    let updatedRole = await db_connect.collection("records").updateOne(myquery, newvalues);
    if (updatedRole) {
      res.status(200).send("Role updated successfully!");
    } else {
      res.status(400).send("Role could not be updated"); 
    }
  } catch (err) {
    throw err;
  }
});

//This returns all transaction records
routes.route("/showsavingshistory/:uID").get(async (req, res) => {
  try {
    let db_connect = dbo.getDb();
    console.log(`In showsavingshistory user ID is: ${req.params.uID}`);
    let myquery = { account: "Savings", userID: req.params.uID}; 
    const result = await db_connect
      .collection("history")
      .find(myquery)
      .toArray();
    console.log(result);
    res.json(result);
  } catch (err) {
    throw err;
  }
});

routes.route("/showcheckinghistory/:uID").get(async (req, res) => {
  try {
    let db_connect = dbo.getDb();
    let myquery = { account: "Checking", userID: req.params.uID};
    const result = await db_connect
      .collection("history")
      .find(myquery)
      .toArray();
    res.json(result);
    } catch (err) {
    throw err;
  }
});

routes.route("/showinvestmenthistory/:uID").get(async (req, res) => {
  try {
    let db_connect = dbo.getDb();
    let myquery = { account: "Investment", userID: req.params.uID};
    const result = await db_connect
      .collection("history")
      .find(myquery)
      .toArray();
    res.json(result);
  } catch (err) {
    throw err;
  }
});

// const [transaction, setTransaction] = useState({
//   userID: "", //which account the transaction belongs to
//   type: "", //deposit, withdraw, transfer (including external transfers)
//   amount: 0,
//   date: new Date()

// });

/*
routes.route("/record").get(async (req, res) => {
  try {
    let db_connect = dbo.getDb();
    const result = await db_connect
      .collection("records")
      .find({})
      .project({ password: 0, _id: 0 })
      .toArray();
    res.json(result);
  } catch (err) {
    throw err;
  }
});
*/

module.exports = routes;
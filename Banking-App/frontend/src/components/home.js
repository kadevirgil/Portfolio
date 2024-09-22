import React, { useEffect } from "react";
import useState from "react-usestateref";
import { useNavigate, useParams } from "react-router";
import {
  Container,
  Card,
  Nav,
  NavDropdown,
  Navbar,
  Accordion,
  Table
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const CheckingTransactions = (props) => (
  <tr>
    <td>{props.checkingtransactions.account}</td>
    <td>{props.checkingtransactions.type}</td>
    <td>{props.checkingtransactions.amount}</td>
    <td>{props.checkingtransactions.date}</td>
  </tr>
);

const SavingsTransactions = (props) => (
  <tr>
    <td>{props.savingstransactions.account}</td>
    <td>{props.savingstransactions.type}</td>
    <td>{props.savingstransactions.amount}</td>
    <td>{props.savingstransactions.date}</td>
  </tr>
);

const InvestmentTransactions = (props) => (
  <tr>
    <td>{props.investmenttransactions.account}</td>
    <td>{props.investmenttransactions.type}</td>
    <td>{props.investmenttransactions.amount}</td>
    <td>{props.investmenttransactions.date}</td>
  </tr>
);
export default function CustomerHomepage() {
  const navigate = useNavigate();
  const params = useParams();

  const [account, setAccount, accountRef] = useState({
    firstName: "",
    lastName: "",
    userID: "",
    email: "",
    role: "",
    savings: 0,
    checking: 0,
    investment: 0,
  });

  const [savingstransactions, setSTransactions] = useState ([]); // set array of json objects
  const [checkingtransactions, setCTransactions] = useState([]);
  const [investmenttransactions, setITransactions] = useState([]);

  useEffect(() => {
    async function fetchData() {
    //   try {
    //     const response = await fetch("http://localhost:4000/user", {
    //       method: "GET",
    //       credentials: "include",
    //     });
    //     if (response.status === 400) {
    //       window.alert(await response.json());
    //       navigate("/");
    //     }
    //     setAccount(await response.json());
    //   } catch (error) {
    //     window.alert(error);
    //   }
    // }
    // async function getTransactions() {
    //   const temp = { ...accountRef.current };
    //   console.log(temp.userID + " User id inside of getTransactions in home.js");
    //   try {
    //     axios
    //       .get(`http://localhost:4000/showsavingshistory/${temp.userID}`)
    //       .then((res) => setSTransactions(res.data))
    //       .catch((err) => console.log(err)); 
    //     console.log(savingstransactions);
    //     const resChecking = await fetch(`http://localhost:4000/showcheckinghistory/${temp.userID}`, {
    //       method: "GET",
    //       credentials: "include"
    //     });
    //     setCTransactions(await resChecking.json());
    //     const resInvestment = await fetch(`http://localhost:4000/showinvestmenthistory/${temp.userID}`, {
    //       method: "GET",
    //       credentials: "include"
    //     });
    //     setITransactions(await resInvestment.json());
    //   } catch (error) {
    //     window.alert(error);
    //   }
    // }
    // getSession();
    // getTransactions();
    // return;
    try {
        const response = await fetch("http://localhost:4000/user", {
          method: "GET",
          credentials: "include",
        });

        if (response.status === 400) {
          window.alert(await response.json());
          navigate("/");
        }

        const userAccount = await response.json();
        setAccount(userAccount);

        if (userAccount.role === "Employee") {
          navigate("/customerlookup");
        }

        const uID = userAccount.userID;
        console.log(uID + " is user id")

        const resSavings = await fetch(`http://localhost:4000/showsavingshistory/${userAccount.userID}`, {
          method: "GET",
          credentials: "include"
        });
        const sTemp = await resSavings.json();
        console.log(sTemp);
        setSTransactions(sTemp);

        const resChecking = await fetch(`http://localhost:4000/showcheckinghistory/${uID}`, {
          method: "GET",
          credentials: "include"
        });
        const cTemp = await resChecking.json();
        console.log(cTemp);
        setCTransactions(cTemp);

        const resInvestment = await fetch(`http://localhost:4000/showinvestmenthistory/${uID}`, {
          method: "GET",
          credentials: "include"
        });
        const iTemp = await resInvestment.json();
        console.log(iTemp);
        setITransactions(iTemp);

      } catch (error) {
        window.alert(error);
      }  
    }
    fetchData();
    return; 
  }, [navigate, SavingsTransactions.length, CheckingTransactions.length, InvestmentTransactions.length]);

  function displayTransactions(accountType) {
    switch (accountType) {
      case "Checking":
        return checkingtransactions.map((records) => {
          return <CheckingTransactions 
            checkingtransactions={records}
            key={records._id}
          />
        });
      case "Savings":
        return savingstransactions.map((records) => {
          return <SavingsTransactions 
            savingstransactions={records}
            key={records._id}
          />
        });
      case "Investment":
        return investmenttransactions.map((records) => {
          return <InvestmentTransactions 
            investmenttransactions={records}
            key={records._id}
          />
        });
    }
  }
  
  async function logoutUser() {
    if (window.confirm("Are you sure you want to logout?")) {
      const response = await fetch("http://localhost:4000/logout", {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      navigate("/");
    }
  }

  return (
    <Container // Main Container
      fluid
      className={`py-4`}
      style={{ minHeight: "100vh", backgroundColor: "#121212" }}
    >
      <Navbar // Navbar
        expand="lg"
        className="nav-pills"
        style={{ backgroundColor: "#121212" }}
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand style={{ color: "HotPink" }}>
            Banking With Barbie
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home" style={{
                display: accountRef.current.role === "Employee" ? "none" : "block"
              }}>
                Home
              </Nav.Link>
              <Nav.Link href="/bankingfunctions"style={{
                display: accountRef.current.role === "Employee" ? "none" : "block"
              }}>
                Transfers
              </Nav.Link>
              <NavDropdown
                title="Actions"
                id="basic-nav-dropdown"
                style={{display: accountRef.current.role === "Customer" ? "none" : "block" }}
              >
                <NavDropdown.Item href="/signup">
                  Create Account
                </NavDropdown.Item>
                <NavDropdown.Item href="/customerlookup">
                  Customer Lookup
                </NavDropdown.Item>
                <NavDropdown.Item href="/externaltransfer">
                  External Transfers
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Navbar.Text>
                Signed in as:{" "}
                <a style={{ color: "White" }}>{account.firstName}</a> Your ID:{" "}
                <a style={{ color: "white" }}>{account.userID}</a>
              </Navbar.Text>
              <Nav.Link
                className="mx-4"
                style={{ color: "HotPink" }}
                onClick={logoutUser}
              >
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Banking Container */}
      <Container>
        <Card
          bg="dark"
          text="white"
          className={`my-5 mx-auto`}
          style={{ minWidth: "30rem", maxWidth: "50rem" }}
        >
          <Card.Header as="h2" className="text-center bg-primary">
            Account Summary
          </Card.Header>
          <Card.Subtitle as="h3" className="m-2 text-center">
            Welcome {account.firstName}!
          </Card.Subtitle>
          <Card.Body>
            <>
              <style type="text/css">
                {`
                  .accordion-button{
                    background-color: #191919;
                    color: #ffffff;
                  }
                  .accordion-button:not(.collapsed){
                    background-color: #007bff;
                    color: #ffffff;
                  }
                  
                `}
              </style>
            </>
            <Accordion alwaysOpen>
              <Accordion.Item eventKey="0" bsPrefix="dark">
                <Accordion.Header
                  className="text-center"
                  style={{ backgroundColor: "black" }}
                >
                  Checkings: ${account.checking}
                </Accordion.Header>
                <Accordion.Body>
                  <div>
                    <Table data-bs-theme="dark" striped bordered hover>
                      <thead>
                        <tr>
                          <th>Account</th>
                          <th>Type</th>
                          <th>Amount</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {displayTransactions("Checking")}
                      </tbody>
                    </Table>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" bsPrefix="dark">
                <Accordion.Header className="text-center bg-secondary">
                  Savings: ${account.savings}
                </Accordion.Header>
                <Accordion.Body>
                  <div>
                    <Table data-bs-theme="dark" striped bordered hover>
                      <thead>
                        <tr>
                          <th>Account</th>
                          <th>Type</th>
                          <th>Amount</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {displayTransactions("Savings")}
                      </tbody>
                    </Table>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" bsPrefix="dark">
                <Accordion.Header className="text-center bg-secondary">
                  Investments: ${account.investment}
                </Accordion.Header>
                <Accordion.Body>
                  <div>
                    <Table data-bs-theme="dark" striped bordered hover >
                      <thead>
                        <tr>
                          <th>Account</th>
                          <th>Type</th>
                          <th>Amount</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {displayTransactions("Investment")}
                      </tbody>
                    </Table>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </Container>

      {/**Start Admin Container */}
      <Container
        fluid
        className={`py-4`}
        style={{ height: "100vh", backgroundColor: "#121212" }}
      ></Container>

      {/**This container is the outermost container for the whole page*/}
    </Container>
  );
}

//Logic for the generic landing page
// For admins:
//  -Dropdown will show every function
//For employees:
//  -view account
//  -Allow user to transfer money
//For customers:
//  - deposit, withdraw, transfer
//  -show account history

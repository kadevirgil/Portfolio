import React from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import {
  Row,
  Container,
  Button,
  Form,
  InputGroup,
  Nav,
  NavDropdown,
  Navbar,
  Card,
  FloatingLabel,
} from "react-bootstrap";
import useState from "react-usestateref";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

//set some variables for file path depending on if user is an admin or employee,
// be able to return to corresponding homepage

export default function ExternalTransfer() {
  const navigate = useNavigate();

  const [transfer, setTransfer] = useState({
    fromID: "",
    transferFrom: "",
    toID: "",
    transferTo: "",
    amount: "",
  });
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

  //Start new code
  function updateTransfer(jsonObject) {
    return setTransfer((prevJsonObj) => {
      return { ...prevJsonObj, ...jsonObject }; // ...unpacks json object to key value pairs and add to jsonObject
    });
  }

  // Move money function start
  // function moveMoney() {
  //   const uID = account.userID;
  //   if (transaction.transferType === "Deposit") {
  //     axios
  //       .put(`http://localhost:4000/deposit/${uID}`, transaction)
  //       .then((res) => {
  //         if (res.status !== 200) {
  //           alert(`Error: ${res.statusText}`);
  //           return;
  //         }
  //         alert(`Error: ${res.statusText}`);
  //       })
  //       .catch((error) => window.alert(error));
  //   } else if (transaction.transferType === "Transfer") {
  //     axios
  //       .put(`http://localhost:4000/internaltransfer/${uID}`, transaction)
  //       .then((res) => {
  //         if (res.status !== 200) {
  //           alert(`Error: ${res.statusText}`);
  //           return;
  //         }
  //         alert(res.status);
  //       })
  //       .catch((error) => window.alert(error));
  //   } else if (transaction.transferType === "Withdraw") {
  //     axios
  //       .put(`http://localhost:4000/withdraw/${uID}`, transaction)
  //       .then((res) => {
  //         if (res.status !== 200) {
  //           alert(`Error: ${res.statusText}`);
  //           return;
  //         }
  //         alert(res.status);
  //       })
  //       .catch((error) => window.alert(error));
  //   }
  // }


  // //move money function end

  useEffect(() => {
    async function getSession() {
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
        if (userAccount.role === "Customer") {
          navigate("/home"); 
        }
        return;
      } catch (error) {
        window.alert(error);
      }
    }
    getSession();
    
    return;
  }, [navigate]);

  async function onSubmit(e) {
    e.preventDefault();
    let newTransfer = { ...transfer };

    const newUserRes = await fetch("http://localhost:4000/externaltransfer", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransfer),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    if (newUserRes.status === 401) {
      const message = `An error occured`;
      window.alert(message);
    } else {
      const message = `Successfully transferred!`;
      window.alert(message);
      setTransfer({
        fromID: "",
        transferFrom: "",
        toID: "",
        transferTo: "",
        amount: "",
      }); //email acts as username
    }
  }
  //end new code

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

  //commented out for now
  // const [validated, setValidated] = useState(false);

  // const onSubmit = (event) => {
  //   const loginForm = event.currentTarget;
  //   if (loginForm.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // }

  return (
    <Container
      fluid
      className={`py-4`}
      style={{ minHeight: "100vh", backgroundColor: "#121212" }}
    >
      <Navbar
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
              <Nav.Link href="/home" style={{ display: accountRef.current.role === "Employee" ? "none" : "block"}}>Home</Nav.Link>
              <Nav.Link href="/bankingfunctions" style={{ display: accountRef.current.role === "Employee" ? "none" : "block"}}>Transfers</Nav.Link>
              <NavDropdown title="Actions" id="basic-nav-dropdown" >
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

      <Container>
        <Card
          bg="dark"
          text="white"
          className={`my-5 mx-auto`}
          style={{ minWidth: "10rem", maxWidth: "35rem" }}
        >
          <Card.Header as="h2" className="text-center bg-primary">
            Customer Transfer
          </Card.Header>
          <Card.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group
                className="mb-3"
                data-bs-theme="dark"
                controlId="formBasicPassword"
              >
                <FloatingLabel
                  controlId="floatingUserID"
                  label="Enter User ID of account being transferred from"
                >
                  <Form.Control
                    type="text"
                    placeholder="Enter User ID of account being transferred from"
                    required
                    value={transfer.fromID}
                    onChange={(e) => updateTransfer({ fromID: e.target.value })}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide the User ID of the account being transferred
                    from
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>

              <Form.Group
                className="text-light mb-4"
                controlId="formBasicCheckbox"
              >
                <Form.Label>
                  Account customer would like to transfer money from:
                </Form.Label>
                <Form.Check
                  type="radio"
                  label="Checking"
                  name="transferFrom"
                  required
                  feedback="Please select an account to transfer money from"
                  feedbackType="invalid"
                  value="Checking"
                  onChange={(e) => updateTransfer({ transferFrom: e.target.value })}
                />
                <Form.Check
                  type="radio"
                  label="Savings"
                  name="transferFrom"
                  required
                  feedback="Please select an account to transfer money from"
                  feedbackType="invalid"
                  value="Savings"
                  onChange={(e) => updateTransfer({ transferFrom: e.target.value })}
                />
                <Form.Check
                  type="radio"
                  label="Investment"
                  name="transferFrom"
                  required
                  feedback="Please select an account to transfer money from"
                  feedbackType="invalid"
                  value="Investment"
                  onChange={(e) => updateTransfer({ transferFrom: e.target.value })}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                data-bs-theme="dark"
                controlId="formBasicPassword"
              >
                <FloatingLabel
                  controlId="floatingUserID"
                  label="Enter User ID of account being tranferred to"
                >
                  <Form.Control
                    type="text"
                    placeholder="Enter User ID of account being transferred to"
                    required
                    value={transfer.toID}
                    onChange={(e) => updateTransfer({ toID: e.target.value })}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide the User ID of the account begin transferred
                    to:
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
              <Form.Group
                className="text-light mb-4"
                controlId="formBasicCheckbox"
              >
                <Form.Label>
                  Account customer would like to transfer money to:
                </Form.Label>
                <Form.Check
                  type="radio"
                  label="Checking"
                  name="transferTo"
                  required
                  feedback="Please select an account to transfer money to"
                  feedbackType="invalid"
                  value="Checking"
                  onChange={(e) => updateTransfer({ transferTo: e.target.value })}
                />
                <Form.Check
                  type="radio"
                  label="Savings"
                  name="transferTo"
                  required
                  feedback="Please select an account to transfer money to"
                  feedbackType="invalid"
                  value="Savings"
                  onChange={(e) => updateTransfer({ transferTo: e.target.value })}
                />
                <Form.Check
                  type="radio"
                  label="Investment"
                  name="transferTo"
                  required
                  feedback="Please select an account to transfer money to"
                  feedbackType="invalid"
                  value="Investment"
                  onChange={(e) => updateTransfer({ transferTo: e.target.value })}
                />
              </Form.Group>
              <InputGroup
                className="mb-1"
                data-bs-theme="dark"
                controlId="formBasicPassword"
                size="lg"
              >
                {/* <InputGroup.Label>Amount</InputGroup.Label> */}
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control
                  type="number"
                  min={0}
                  placeholder="0.00"
                  aria-label="Amount (to the nearest dollar)"
                  required
                  value={transfer.amount}
                  onChange={(e) => updateTransfer({ amount: e.target.value })}
                />
                <Button
                  className="px-4"
                  type="submit"
                  variant="outline-primary"
                  id="transferBtn"
                >
                  Transfer
                </Button>
              </InputGroup>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

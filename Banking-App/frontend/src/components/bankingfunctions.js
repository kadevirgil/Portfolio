import React from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import useState from "react-usestateref";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { FormGroup } from "react-bootstrap";

export default function BankingFunctions() {
  //Send one json object with all details of money movement
  const [transaction, setTransaction] = useState({
    transferType: "", // json fields will auto-append as we fill out the form
  });

  const accounts = ["Checking", "Savings", "Investment"];
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

  const navigate = useNavigate();
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
        if (userAccount.role === "Employee") {
          navigate("/customerlookup");
        }
        return;
      } catch (error) {
        window.alert(error);
      }
    }
    getSession();

    return;
  }, [navigate]);

  function updateTransaction(jsonObject) {
    return setTransaction((prevJsonObj) => {
      return { ...prevJsonObj, ...jsonObject }; // ...unpacks json object to key value pairs and add to jsonObject
    });
  }

  //onsubmit call the appropriate route from backend depending on the transfer type
  function moveMoney() {
    const uID = account.userID;
    if (transaction.transferType === "Deposit") {
      axios
        .put(`http://localhost:4000/deposit/${uID}`, transaction)
        .then((res) => {
          if (res.status !== 200) {
            alert(`Error: ${res.statusText}`);
            return; 
          }
            alert(`Error: ${res.statusText}`);
        }) 
        .catch((error) => window.alert(error));
    } else if (transaction.transferType === "Transfer") {
      axios
        .put(`http://localhost:4000/internaltransfer/${uID}`, transaction) 
        .then((res) => {
          if (res.status !== 200) {
            alert(`Error: ${res.statusText}`);
            return; 
          }
          alert(res.status); 
        })
        .catch((error) => window.alert(error));
    } else if (transaction.transferType === "Withdraw") {
      axios
        .put(`http://localhost:4000/withdraw/${uID}`, transaction)
        .then((res) => {
          if (res.status !== 200) {
            alert(`Error: ${res.statusText}`);
            return; 
          }
            alert(res.status);
        })
        .catch((error) => window.alert(error));
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
              <Nav.Link href="/home" style={{
                display: accountRef.current.role === "Employee" ? "none" : "block"
              }}>Home</Nav.Link>
              <Nav.Link href="/bankingfunctions" style=
                {{ display: accountRef.current.role === "Employee" ? "none" : "block"}}
              >Transfers</Nav.Link>
              <NavDropdown
                title="Actions"
                id="basic-nav-dropdown"
                style={{
                  display: accountRef.current.role == "Admin" ? "block" : "none",
                }}
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
      <Container>
        <Card
          bg="dark"
          text="white"
          className="my-4 mx-auto"
          style={{ minWidth: "10rem", maxWidth: "35rem" }}
        >
          <Card.Header as={"h2"} className="text-center bg-primary">
            Make an Internal Transfer
          </Card.Header>
          <Card.Subtitle as="p" className="mt-2 text-center">
            Welcome, {account.firstName}
          </Card.Subtitle>
          <Card.Body>
            <Form className="p-2" onSubmit={moveMoney}>
              <Form.Group
                class="text-light"
                className="text-light"
                controlId="formBasicCheckbox"
              >
                <Form.Label>Select a transfer type:</Form.Label>
                <Form.Check
                  required
                  type="radio"
                  name="transferType"
                  label="Deposit"
                  value="Deposit"
                  onChange={(e) => updateTransaction({ transferType: e.target.value })}
                />
                <Form.Check
                  required
                  type="radio"
                  name="transferType"
                  label="Transfer"
                  value="Transfer"
                  onChange={(e) => updateTransaction({ transferType: e.target.value })}
                />
                <Form.Check
                  required
                  type="radio"
                  name="transferType"
                  label="Withdraw"
                  value="Withdraw"
                  onChange={(e) => updateTransaction({ transferType: e.target.value })}
                />
              </Form.Group>

              {transaction.transferType === "Transfer" && (
                //<Form className="p-2 py-2">
                <div>
                  <Form.Group
                    class="text-light"
                    className="text-light"
                    controlId="formBasicCheckbox"
                  >
                    <Form.Label>Transfer From:</Form.Label>
                    {accounts.map((account) => (
                      <Form.Check
                        required
                        key={account}
                        type="radio"
                        label={account}
                        value={account}
                        name="transferFrom"
                        onChange={(e) => updateTransaction({ transferFrom: e.target.value })}
                      />
                    ))}
                  </Form.Group>
                  <Form.Group
                    class="text-light"
                    className="text-light py-4"
                    controlId="formBasicCheckbox"
                  >
                    <Form.Label>Transfer To:</Form.Label>
                    {accounts
                      .filter((account) => account !== transaction.transferFrom)
                      .map((account) => (
                        <Form.Check
                          required
                          key={account}
                          type="radio"
                          label={account}
                          value={account}
                          name="transferTo"
                          onChange={(e) => updateTransaction({ transferTo: e.target.value })}
                        />
                      ))}
                  </Form.Group>
                </div>
                //</Form>
              )}
              {/* End transfer form */}
              {/* Start Deposit form */}
              {transaction.transferType === "Deposit" && (
                //<Form className="p-2 py-2">
                <div>
                  <Form.Group
                    class="text-light"
                    className="text-light"
                    controlId="formBasicCheckbox"
                  >
                    <Form.Label>Deposit to:</Form.Label>
                    <Form.Check
                      required
                      type="radio"
                      name="depositTo"
                      label="Checking"
                      value="Checking"
                      onChange={(e) => updateTransaction({ depositTo: e.target.value})}
                    />
                    <Form.Check
                      required 
                      type="radio" 
                      name="depositTo" 
                      label="Savings"
                      value="Savings"
                      onChange={(e) => updateTransaction({ depositTo: e.target.value})} 
                    />
                    <Form.Check
                      required
                      type="radio"
                      name="depositTo"
                      label="Investment"
                      value="Investment"
                      onChange={(e) => updateTransaction({ depositTo: e.target.value})}
                    />
                  </Form.Group>
                </div> //</Form>
              )}
              {/* End deposit form */}
              {/* Start withdraw form */}
              {transaction.transferType === "Withdraw" && (
                //<Form className="p-2">
                <div>
                  <Form.Group
                    class="text-light"
                    className="text-light"
                    controlId="formBasicCheckbox"
                  >
                    <Form.Label>Withdraw from:</Form.Label>
                    <Form.Label></Form.Label>
                    <Form.Check
                      required
                      type="radio"
                      name="withdrawFrom"
                      label="Checking"
                      value="Checking"
                      onChange={(e) => updateTransaction({ withdrawFrom: e.target.value })}
                    />
                    <Form.Check
                      required
                      type="radio"
                      name="withdrawFrom"
                      label="Savings"
                      value="Savings"
                      onChange={(e) => updateTransaction({ withdrawFrom: e.target.value })}
                    />
                    <Form.Check
                      required
                      type="radio"
                      name="withdrawFrom"
                      label="Investment"
                      value="Investment"
                      onChange={(e) => updateTransaction({ withdrawFrom: e.target.value })}
                    />
                  </Form.Group>
                </div> //</Form>
              )}
              <Row md>
                <Form.Group className="text-light mt-4">
                  <Form.Label>Amount</Form.Label>
                  <InputGroup
                    className="mb-1"
                    data-bs-theme="dark"
                    controlId="formBasicPassword"
                    size="md"
                  >
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control
                      required
                      type="number"
                      min="1"
                      max="1000000"
                      aria-label="Amount (to the nearest dollar)"
                      onChange={(e) => updateTransaction({ amount: e.target.value })}
                    />
                    <Button
                      className="px-4"
                      variant="outline-primary"
                      id="confirmBtn"
                      type="submit"
                    >
                      Confirm
                    </Button>
                  </InputGroup>
                </Form.Group>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  Button,
  Container,
  Form,
  Row,
  Card,
  FloatingLabel,
  Nav,
  NavDropdown,
  Navbar,
  Col,
  Navigate,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function SignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "", // Need to implement SHA-256
    role: "",
  });
  const [account, setAccount] = useState({
    firstName: "",
    lastName: "",
    userID: "",
    email: "",
    role: "",
    savings: 0,
    checking: 0,
    investment: 0,
  });

  async function sha256(password) {
    // Encode the message as UTF-8
    const msgBuffer = new TextEncoder().encode(password);

    // Hash the message
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);

    // Convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // Conver bytes to hex string
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    return hashHex;
  }
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

  function updateForm(jsonObject) {
    return setForm((prevJsonObj) => {
      return { ...prevJsonObj, ...jsonObject }; // ...unpacks json object to key value pairs and add to jsonObject
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    let newUser = { ...form };
    newUser.password = await sha256(newUser.password);
    const newUserRes = await fetch("http://localhost:4000/records/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    if (newUserRes.status === 401) {
      const message = `An error occured: ${newUserRes.statusText}\nInvalid email.`;
      window.alert(message);
    } else {
      //Need to route to either emp/adminhomepage or customerhomepage
      navigate("/customerlookup");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        role: "",
        password: "",
      }); //email acts as username
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
      className="py-4"
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
              <Nav.Link href="/home" style={{ display: account.role === "Employee" ? "none" : "block"}}>Home</Nav.Link>
              <Nav.Link href="/bankingfunctions" style={{ display: account.role === "Employee" ? "none" : "block"}}>Transfers</Nav.Link>
              <NavDropdown title="Actions" id="basic-nav-dropdown" style={{
                display: account.role === "Customer" ? "none" : "block"
              }}>
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
            Create New Account
          </Card.Header>
          <Card.Subtitle as="p" className="m-2 text-center text-secondary">
            Enter in users information below to create them up for an account!
          </Card.Subtitle>
          <Card.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group
                className="mb-3"
                data-bs-theme="dark"
                controlId="formName"
              >
                <Row md>
                  <Col>
                    <FloatingLabel controlId="floatingInput" label="First Name">
                      <Form.Control
                        type="text"
                        placeholder="First Name"
                        required
                        value={form.firstName}
                        onChange={(e) =>
                          updateForm({ firstName: e.target.value })
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a first name
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <FloatingLabel controlId="floatingInput" label="Last Name">
                      <Form.Control
                        type="text"
                        placeholder="Last Name"
                        required
                        value={form.lastName}
                        onChange={(e) =>
                          updateForm({ lastName: e.target.value })
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a last name
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group
                className="mb-3"
                data-bs-theme="dark"
                controlId="formBasicEmail"
              >
                <FloatingLabel controlId="floatingInput" label="Email Address">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                    value={form.email}
                    onChange={(e) => updateForm({ email: e.target.value })}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email address
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
              <Form.Group
                className="text-light mb-4 px-1"
                controlId="formBasicCheckbox"
              >
                <Form.Label>Assign a role to this account</Form.Label>
                <Form.Check
                  type="radio"
                  label="Admin"
                  name="role"
                  value={"Admin"}
                  onChange={(e) => updateForm({ role: e.target.value })}
                  required
                  feedback="Please select a role"
                  feedbackType="invalid"
                />
                <Form.Check
                  type="radio"
                  label="Employee"
                  name="role"
                  value={"Employee"}
                  onChange={(e) => updateForm({ role: e.target.value })}
                  required
                  feedback="Please select a role"
                  feedbackType="invalid"
                />
                <Form.Check
                  type="radio"
                  label="Customer"
                  name="role"
                  value={"Customer"}
                  onChange={(e) => updateForm({ role: e.target.value })}
                  required
                  feedback="Please select a role"
                  feedbackType="invalid"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                data-bs-theme="dark"
                controlId="formCreatePassword"
              >
                <FloatingLabel controlId="floatingInput" label="Password">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    id="createPassword"
                    required
                    value={form.password}
                    onChange={(e) => updateForm({ password: e.target.value })}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a password
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
              <Row className="justify-content-center" xs={3}>
                <Button
                  className="my-2"
                  variant="outline-primary"
                  type="submit"
                >
                  Create Account
                </Button>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

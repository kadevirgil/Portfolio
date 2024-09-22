import React from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import useState from "react-usestateref";
import InputGroup from "react-bootstrap/InputGroup";
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

//set some variables for file path depending on if user is an admin or employee,
// be able to return to corresponding homepage

export default function CustomerHomepage() {
  //const params = useParams();

  const navigate = useNavigate();

  const [user, setUser] = useState({
    userID: "",
  });

  const [showForm, setShowForm, showFormRef] = useState(false); // we'll check this value to determine when to show the rest of the form fields

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
        window.alert("This our problem" + error);
      }
    }
    getSession();

    return;
  }, [navigate]);

  function updateUser(jsonObject) {
    return setUser((prevJsonObj) => {
      return { ...prevJsonObj, ...jsonObject }; // ...unpacks json object to key value pairs and add to jsonObject
    });
  }

  function getAccountInfo() {
    const uID = user.userID;
    console.log("User id:" + uID);
    axios
      .get(`http://localhost:4000/account_details/${uID}`)
      .then((res) => {
        if (res.status === 200) {
          console.log("Insdide of getAccountInfo()");
          setUser(res.data)
          setShowForm(true); // populate form with customer fields
        } else {
          window.alert("Account with that User ID doesn't exist"); 
        }
      })
      .catch((error) => window.alert(error));
      setUser({
        userID: "",
        firstName: "",
        lastName: "",
        email: "",
        role: "",
      });
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

  function updateRole() {
    const uID = user.userID;
    axios
      .put(`http://localhost:4000/updaterole/${uID}`, user)
      .then((res) => {
        if (res.status == 200) {
          window.alert(`${user.firstName}'s role was updated successfully`);
        } else {
          window.alert("Failed to update role"); 
        }
      })
      .catch((err) => window.alert(err)); 
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
              <Nav.Link
                style={{
                  display:
                    accountRef.current.role == "Employee"
                      ? "none"
                      : "block",
                }}
                href="/home"
              >
                Home
              </Nav.Link>
              <Nav.Link href="/bankingfunctions" style={{
                display: accountRef.current.role === "Employee" ? "none" : "block"
              }}>Transfers</Nav.Link>
              <NavDropdown title="Actions" id="basic-nav-dropdown">
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
                <a style={{ color: "White" }}>{accountRef.current.firstName}</a>{" "}
                Your ID:{" "}
                <a style={{ color: "white" }}>{accountRef.current.userID}</a>
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
      <Container className="py-5">
        <Card
          bg="dark"
          text="white"
          className={`mx-auto`}
          style={{ minWidth: "10rem", maxWidth: "35rem" }}
        >
          <Card.Header as="h2" className="text-center bg-primary">
            Customer Lookup
          </Card.Header>
          <Card.Subtitle as="p" className="m-2 text-center">
            Welcome, {accountRef.current.firstName}!
          </Card.Subtitle>
          <Card.Body>
            <Form>
              <InputGroup
                className="mb-3"
                data-bs-theme="dark"
                controlId="formBasicUserID"
                size="md"
              >
                <FloatingLabel controlId="floatingUserID" label="Enter User ID">
                  <Form.Control
                    type="text"
                    placeholder="Enter User ID"
                    required
                    value={user.userID}
                    onChange={(e) => updateUser({ userID: e.target.value })}
                  />
                </FloatingLabel>
                <Button
                  className="px-4"
                  variant="outline-primary"
                  id="submitBtn"
                  onClick={getAccountInfo}
                >
                  Search
                </Button>
              </InputGroup>
              </Form>
              { showFormRef.current === true && (
              <div>
                <Form onSubmit={updateRole}>
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
                          readOnly
                          value={user.firstName}
                          onChange={(e) =>
                            updateUser({ firstName: e.target.value })
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
                          readOnly
                          value={user.lastName}
                          onChange={(e) =>
                            updateUser({ lastName: e.target.value })
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
                      readOnly
                      value={user.email}
                      onChange={(e) => updateUser({ email: e.target.value })}
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
                    onChange={(e) => updateUser({ role: e.target.value })}
                    required
                    feedback="Please select a role"
                    feedbackType="invalid"
                    disabled={accountRef.current.role === "Admin" ? false : true}
                    checked={user.role === "Admin"}
                  />
                  <Form.Check
                    type="radio"
                    label="Employee"
                    name="role"
                    value={"Employee"}
                    onChange={(e) => updateUser({ role: e.target.value })}
                    required
                    feedback="Please select a role"
                    feedbackType="invalid"
                    disabled={accountRef.current.role === "Admin" ? false : true}
                    checked={user.role === "Employee"}
                  />
                  <Form.Check
                    type="radio"
                    label="Customer"
                    name="role"
                    value={"Customer"}
                    onChange={(e) => updateUser({ role: e.target.value })}
                    required
                    feedback="Please select a role"
                    feedbackType="invalid"
                    disabled={accountRef.current.role === "Admin" ? false : true}
                    checked={user.role === "Customer"}
                  />
                </Form.Group>
                <Button className="my-2" variant="primary" type="submit" 
                  style={{ display: accountRef.current.role === "Admin" ? "block" : "none"}}
                >
                  Update
                </Button>
                <Button className="my-2 mx-3" variant="outline-primary" href={`/empbankingfunctions/${user.userID}`}>
                  Transfer funds
                </Button>
              </Form>
              </div>
              )}

          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

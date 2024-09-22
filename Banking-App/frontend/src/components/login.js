import { React } from "react";
import { useNavigate } from "react-router";
import useState from "react-usestateref";
import {
  Button,
  Container,
  Form,
  Row,
  Card,
  FloatingLabel,
  Nav,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  const [form, setForm] = useState({ 
    email: "",
    password: "",
  });

  const [account, setAccount, accountRef] = useState({ 
    // accountRef.current will have the most current state
    // acountRef.current.[propertyname] will have the most current value for this property
    firstName: "",
    lastName: "",
    userID: "",
    email: "",
    role: "",
    savings: 0,
    checking: 0,
    investment: 0,
  });
  // const [account, setAccount] = useState({
  //   userID: 0,
  //   role: "",
  // });

  const navigate = useNavigate();

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

  function updateForm(jsonObject) {
    return setForm((prevJsonObj) => {
      return { ...prevJsonObj, ...jsonObject }; // ...unpacks json object to key value pairs and add to jsonObject
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const userPassword = { ...form };
    userPassword.password = await sha256(userPassword.password);
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userPassword),
      credentials: "include",
    });
    console.log(response);
    if (response.status === 400) {
      window.alert(await response.json());
      return;
    }
    if (response.status === 401) {
      window.alert(await response.json());
      return;
    }
    if (response.status === 200) {
      window.alert("Successfully logged in!");
    }
    setAccount(await response.json()); 
    if (accountRef.current.role === "Employee") {
      navigate("/customerlookup");
    } else {
      navigate("/home");
    }
    setForm({ email: "", password: "" });
  }

  return (
    <Container // Background container
      fluid
      className="py-4"
      style={{ minHeight: "100vh", backgroundColor: "#121212" }}
    >
      <Card // Login Card
        bg="dark"
        text="white"
        className={`my-5 mx-auto`}
        style={{ minWidth: "10rem", maxWidth: "35rem" }}
      >
        <Card.Header as="h2" className="text-center bg-primary">
          Login
        </Card.Header>
        <Card.Subtitle as="p" className="m-2 text-center">
          Enter your account information below to log in to your account!
        </Card.Subtitle>
        <Card.Body>
          <Form onSubmit={onSubmit}>
            {" "}
            {/* Login Form */}
            <Row md>
              {" "}
              {/* Email Row */}
              <Form.Group
                className="mb-3"
                data-bs-theme="dark"
                controlId="formBasicEmail"
              >
                <FloatingLabel controlId="floatingInput" label="Email Address">
                  <Form.Control
                    required
                    type="email"
                    placeholder="Enter email"
                    value={form.email}
                    onChange={(e) => updateForm({ email: e.target.value })}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email
                  </Form.Control.Feedback>
                  <Form.Text muted>
                    We'll never share your email with anyone else.
                  </Form.Text>
                </FloatingLabel>
              </Form.Group>
            </Row>
            <Row md>
              {" "}
              {/* Password Row */}
              <Form.Group
                className="mb-3"
                data-bs-theme="dark"
                controlId="formBasicPassword"
              >
                <FloatingLabel controlId="floatingInput" label="Password">
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={(e) => updateForm({ password: e.target.value })}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a password
                  </Form.Control.Feedback>
                  <Form.Text muted>
                    Don't have an account? Contact us at Banking With Barbie!
                  </Form.Text>
                </FloatingLabel>
              </Form.Group>
            </Row>
            <Row className="justify-content-center" xs={4}>
              {" "}
              {/* Login Button Row */}
              <Button className="my-2" variant="outline-primary" type="submit">
                Login
              </Button>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

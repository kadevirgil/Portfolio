import React from "react";

// React Bootstrap Components and CSS styling
import { Container, Navbar, Nav, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Icons from FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScissors } from "@fortawesome/free-solid-svg-icons";

// Hero Image
import HeroImage from "../images/hero.jpg";

// Colors
import { darkBlue, lightYellow } from "./colors";

const Hero = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar sticky="top" bg="light" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand
            style={{ fontFamily: "Dancing Script, cursive", fontSize: "2rem" }}
            href="#top"
          >
            <FontAwesomeIcon style={{ color: "#ff6f00" }} icon={faScissors} />{" "}
            <strong>Hair by Sarah</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="ms-auto">
              <Nav.Link href="#top">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#follow">Follow</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section
        style={{ backgroundColor: darkBlue }}
        className="d-flex align-items-center position-relative min-vh-100"
      >
        <Container>
          <div
            className="d-none d-lg-flex justify-content-center align-items-center col-md-6 position-absolute top-0 end-0"
            style={{
              backgroundImage: `url(${HeroImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "100%",
            }}
          ></div>
          <Row>
            <Col lg={6}>
              <h1 className="display-3 fw-bold mb-4">
                Welcome to <br />
                <span
                  style={{ color: lightYellow, fontFamily: "Dancing Script" }}
                >
                  Hair by Sarah!
                </span>
              </h1>
              <p className="lead text-light">
                I'm Sarah Wardell, a professional stylist out of Ogden, UT.
                Looking for new clients and helping you achieve your perfect
                look!
              </p>
              <Button
                variant="light"
                size="lg"
                href="https://tinyurl.com/cddzekk8"
                style={{ backgroundColor: lightYellow }}
                target="_blank"
                rel="noreferrer"
              >
                Book with me!
              </Button>
            </Col>
            <Col lg={12}>
              <div className="d-lg-none d-block position-relative mt-4">
                <img alt="" className="img-responsive mw-100" src={HeroImage} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hero;

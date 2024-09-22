import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScissors } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// Colors
import { greenBlue, lightYellow } from "./colors";

const Footer = () => {
  return (
    <footer
      className="py-4"
      style={{ backgroundColor: greenBlue, color: lightYellow }}
    >
      <Container>
        <Row className="align-items-center py-4">
          <Col xs={12} lg={3} className="text-center text-lg-start">
            <span
              className="display-6"
              style={{ fontFamily: "Dancing Script" }}
            >
              <FontAwesomeIcon style={{ color: "#ff6f00" }} icon={faScissors} />{" "}
              Hair by Sarah
            </span>
          </Col>
          <Col xs={12} lg={6} className="navbar-expand text-center">
            <Nav className="d-block d-lg-flex justify-content-center mb-3 mb-lg-0">
              <Nav.Item>
                <Nav.Link
                  href="#top"
                  className="text-muted text-decoration-none me-lg-3"
                >
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="#about"
                  className="text-muted text-decoration-none me-lg-3"
                >
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="#pricing"
                  className="text-muted text-decoration-none me-lg-3"
                >
                  Pricing
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="#follow"
                  className="text-muted text-decoration-none me-lg-3"
                >
                  Follow
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="#contact"
                  className="text-muted text-decoration-none me-lg-3"
                >
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row className="pb-3">
          <Col xs={12} className="text-center small text-muted">
            © 2024 HairbySarah. All rights reserved.
            <br />
            Designed and Created by <strong>Kade Virgil </strong>
            <a
              className="text-muted"
              href="https://kadevirgil.github.io/Portfolio/"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
              {"  "}
            </a>
            <a
              className="text-muted"
              href="https://www.linkedin.com/in/kade-virgil-a6522a285/"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

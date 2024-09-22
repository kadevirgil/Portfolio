import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Images
import HeroImage from "../images/hero.jpg";

// Colors
import { orange, lightYellow } from "./colors";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faMapLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-5"
      style={{ backgroundColor: lightYellow }}
    >
      <Container>
        <Row className="justify-content-center text-center mb-3">
          <Col lg={8} xxl={7}>
            <span className="text-muted">Let's Talk</span>
            <h2 className="display-5 fw-bold mb-3" style={{ color: orange }}>
              Contact Me
            </h2>
            <p className="lead">
              If you have any questions or concerns about my services please
              reach out to me!
            </p>
          </Col>
        </Row>
        <Row className="justify-content-between">
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <img alt="hero" className="img-fluid" src={HeroImage} />
            </div>
          </Col>
          <Col lg={5} className="mt-5 mt-lg-0">
            <div className="mb-4">
              <a
                href="https://maps.apple.com/?address=2017%20Commerce%20Way,%20West%20Haven,%20UT%2084401,%20United%20States&auid=712703508070605604&ll=41.208485,-112.028564&lsp=9902&q=Lather%20Salon%20Utah"
                style={{ color: orange }}
              >
                <h5 style={{ color: orange }}>
                  <FontAwesomeIcon icon={faMapLocationDot} /> Lather Salon
                  Address
                </h5>
              </a>

              <p>2017 Commerce Way, West Haven, UT 84401</p>
            </div>
            <div className="mb-4">
              <a href="tel:8013885453" style={{ color: orange }}>
                <h5 style={{ color: orange }}>
                  <FontAwesomeIcon icon={faPhone} /> Phone
                </h5>
              </a>
              <p>801-388-5453</p>
            </div>
            <div className="mb-4">
              <a
                href="mailto: sarahjwardell@icloud.com"
                style={{ color: orange }}
              >
                <h5 style={{ color: orange }}>
                  <FontAwesomeIcon icon={faEnvelope} /> Email
                </h5>
              </a>
              <p>sarahjwardell@icloud.com</p>
            </div>
            <div className="mb-4">
              <h5>Socials</h5>
              <a
                className="me-2"
                style={{ color: orange, fontSize: "1.5rem" }}
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/hairdaywithsar/"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

// Insagram embed
import Instagram from "./instagramembed";

// Colors
import { orange, darkBlue } from "./colors";

const Follow = () => {
  return (
    <section id="follow" className="py-5">
      <Container>
        <Row
          className="justify-content-center text-center mb-3 mb-md-5"
          style={{ color: darkBlue }}
        >
          <Col lg={8} xxl={7}>
            <a
              href="https://www.instagram.com/hairdaywithsar/"
              className="text-decoration-none"
              style={{ color: darkBlue }}
              target="_blank"
              rel="noreferrer"
            >
              <h2 className="display-5 fw-bold mb-3">
                Follow Me <FontAwesomeIcon icon={faInstagram} />
              </h2>
            </a>
            <p className="lead">
              Follow me on{" "}
              <a
                href="https://www.instagram.com/hairdaywithsar/"
                style={{ color: orange }}
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>{" "}
              to stay up to date with me!
            </p>
            <Instagram />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Follow;

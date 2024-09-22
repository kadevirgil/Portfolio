import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faWind,
  faScissors,
} from "@fortawesome/free-solid-svg-icons";

// Colors
import { greenBlue, orange, lightOrange } from "./colors";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-5"
      style={{
        backgroundColor: lightOrange,
        color: orange,
      }}
    >
      <Container>
        <Row className="justify-content-center text-center mb-2 mb-lg-4">
          <Col xs={12} lg={8} xxl={7} className="text-center mx-auto">
            <h2 className="display-4 fw-bold">Pricing & Services</h2>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={4} className="mt-3">
            <Card className="text-center border-0">
              <Card.Body
                className="py-5"
                style={{
                  color: greenBlue,
                }}
              >
                <div className="display-3 mb-3 mx-auto">
                  <FontAwesomeIcon icon={faPalette} />
                </div>
                <h5 className="fw-bold">Gloss</h5>
                <div className="display-3 fw-bold mt-4">$35+</div>

                <Button
                  variant="light"
                  size="lg"
                  className="mt-4"
                  href="https://tinyurl.com/cddzekk8"
                  target="_blank"
                  rel="norefferer"
                  style={{ backgroundColor: greenBlue }}
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mt-3">
            <Card className="text-center border-0">
              <Card.Body
                className="py-5"
                style={{
                  color: greenBlue,
                }}
              >
                <div className="display-3 mb-3 mx-auto">
                  <FontAwesomeIcon icon={faPalette} />
                </div>
                <h5 className="fw-bold">Root Touch Up</h5>
                <div className="display-3 fw-bold mt-4">$40+</div>
                <Button
                  variant="light"
                  size="lg"
                  className="mt-4"
                  href="https://tinyurl.com/cddzekk8"
                  target="_blank"
                  rel="norefferer"
                  style={{
                    backgroundColor: greenBlue,
                  }}
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mt-3">
            <Card className="text-center border-0">
              <Card.Body
                className="bg-light py-5"
                style={{
                  color: greenBlue,
                }}
              >
                <div className="display-3 mb-3 mx-auto">
                  <FontAwesomeIcon icon={faPalette} />
                </div>
                <h5 className="fw-bold">Highlight</h5>
                <div className="display-3 fw-bold mt-4">$60+</div>
                <Button
                  variant="light"
                  size="lg"
                  className="mt-4"
                  href="https://tinyurl.com/cddzekk8"
                  target="_blank"
                  rel="norefferer"
                  style={{
                    backgroundColor: greenBlue,
                  }}
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="align-items-center justify-content-center">
          <Col md={6} lg={4} className="mt-3">
            <Card className="text-center border-0">
              <Card.Body
                className="py-5 text-light"
                style={{
                  backgroundColor: greenBlue,
                }}
              >
                <div className="display-4 mb-3 mx-auto">
                  <FontAwesomeIcon icon={faScissors} />
                </div>
                <h5 className="fw-bold">Haircut</h5>
                <div className="display-3 fw-bold mt-4 text-light">$20</div>

                <Button
                  variant="light"
                  size="lg"
                  className="mt-4"
                  href="https://tinyurl.com/cddzekk8"
                  target="_blank"
                  rel="norefferer"
                  style={{
                    color: greenBlue,
                  }}
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4} className="mt-3">
            <Card className="text-center border-0 text-light">
              <Card.Body
                className="py-5"
                style={{
                  backgroundColor: greenBlue,
                }}
              >
                <div className="display-4 mb-3 mx-auto">
                  <FontAwesomeIcon icon={faWind} />
                </div>
                <h5 className="fw-bold">Blowout</h5>
                <div className="display-3 fw-bold mt-4">$15</div>
                <Button
                  variant="light"
                  size="lg"
                  className="mt-4"
                  href="https://tinyurl.com/cddzekk8"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: greenBlue,
                  }}
                >
                  Book
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;

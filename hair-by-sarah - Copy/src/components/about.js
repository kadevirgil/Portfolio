import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

// Colors
import { orange, lightOrange } from "./colors";

const About = () => {
  return (
    <Container
      id="about"
      className="py-5 text-dark"
      style={{
        backgroundColor: orange,
      }}
      fluid
    >
      {/* Start of About Section Container */}
      <div className="row align-items-center gx-4">
        <div className="col-md-5">
          <div className="ms-md-2 ms-lg-5">
            <img
              alt="about"
              className="img-responsive rounded-3 w-100 w-md-75 w-lg-50 text-center mx-auto"
              src="https://freefrontend.dev/assets/square.png"
            />
          </div>
        </div>
        <div className="col-md-6 offset-md-1">
          <div className="ms-md-2 ms-lg-5">
            <span className="text-muted">My Story</span>
            <h2
              className="display-3 fw-bold"
              style={{
                color: lightOrange,
                fontFamily: "Dancing Script, cursive",
              }}
            >
              About Me
            </h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
            <p className="lead mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;

import React from "react";

// react-bootstrap components
import Container from "react-bootstrap/Container";

// Frontend Components that make up home page
import Hero from "./hero.js";
import About from "./about.js";
import Pricing from "./pricing.js";
import Follow from "./follow.js";
import Contact from "./contact.js";
import Footer from "./footer.js";

export default function Home() {
  return (
    <Container fluid style={{ margin: 0, padding: 0 }}>
      <Hero />
      <About />
      <Pricing />
      <Follow />
      <Contact />
      <Footer/>
    </Container>
  );
}

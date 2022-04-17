import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">
              <Link className="text-decoration-none text-white" to={"/home"}>
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="#pricing">Services</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <Link className="text-decoration-none text-white" to={"/about"}>
                About
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <Link className="text-decoration-none text-white" to={"/login"}>
                Login
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          Jhon Dental Care
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/home"} href="#features">
              Home
            </Nav.Link>
            <Nav.Link href="/home#services">Services</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to={"/about"} href="#deets">
              About
            </Nav.Link>
            {user ? (
              <Nav.Link onClick={handleLogout} eventKey={2} href="#memes">
                LogOut
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to={"/login"} eventKey={2} href="#memes">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

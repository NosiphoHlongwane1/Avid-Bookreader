import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <Navbar
      expand="lg"
      style={{ background: "linear-gradient(to right, #166145, #a4c078)" }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white fw-bold">
          Avid Bookreader
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-white">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/schedule" className="text-white">
              Schedule
            </Nav.Link>
            <Nav.Link as={Link} to="/bookstore" className="text-white">
              Bookstore
            </Nav.Link>

            {isLoggedIn ? (
              <Nav.Link onClick={handleLogout} className="text-white">
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login" className="text-white">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

import React from 'react';
import { Navbar, Container, Nav, Row, Col, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './TopNav.css';

function TopNav() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Layne Hansen</Navbar.Brand>
        <Nav className="me-auto">
          <NavDropdown title="Pages">
            <NavDropdown.Item as={Link} to="/">Home</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Projects">Projects</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Profile">Profile</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Contact">Contact Me</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default TopNav;
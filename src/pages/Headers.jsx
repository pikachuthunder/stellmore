import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import Image from '../assets/image.png';

function Header() {
  return (
    <Navbar sticky="top" className="custom-nav bg-body-tertiary">
      <Container fluid className="px-5">
        <Navbar.Brand as={Link} to="/" className="nav-brand">
          <img src={Image} alt="StellaMore Logo" className="navbar-logo-img me-2" />
        </Navbar.Brand>

        <Nav className="nav-links me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>

          <NavDropdown title="Products" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/indoor-lighting">Indoor Lighting</NavDropdown.Item>
            <NavDropdown.Item href="#outdoor">Outdoor Lighting</NavDropdown.Item>
            <NavDropdown.Item href="#industrial">Industrial Lighting</NavDropdown.Item>
            <NavDropdown.Item href="#controls">Lighting Controls</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#product-section">View All Categories</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
          <Nav.Link as={Link} to="/downloads">Downloads</Nav.Link>
          <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
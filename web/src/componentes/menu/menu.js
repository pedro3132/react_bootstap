import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav,  NavDropdown } from 'react-bootstrap';


  export default function Menu() {
  return (
   <>
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Amor</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Da minha</Nav.Link>
      <Nav.Link href="#link">Vida</Nav.Link>
      <NavDropdown title="Aceita" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Se</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Casar </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Comigo</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
   </>
  );
}


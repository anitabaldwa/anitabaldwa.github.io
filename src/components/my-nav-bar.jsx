import React from 'react';
import '../App.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


function MyNavBar(){
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
  <Navbar.Brand class="mynavbar-padding" href="#home">Anita Baldwa</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav className="ml-auto">
 
      <Nav.Link class="mynavbar-padding" href="#features">Insurance?</Nav.Link>
      <Nav.Link class="mynavbar-padding" href="#pricing">About Me</Nav.Link>
      <NavDropdown class="mynavbar-padding" title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link class="mynavbar-padding" href="#deets">Contact</Nav.Link>      
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
}

export default MyNavBar;
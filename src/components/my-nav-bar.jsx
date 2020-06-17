import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


function MyNavBar(){
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
  <Navbar.Brand className="my-padding-navbar-left" style={{fontSize:'30px'}} href="#home">Anita Baldwa</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <div className="my-padding-navbar-right">
    <Nav className="mr-auto">
      <Nav.Link className="my-navbar-size16" href="#features">About Insurance</Nav.Link>
      <Nav.Link className="my-navbar-size16" href="#pricing">About Me</Nav.Link>
      <NavDropdown className="my-navbar-size16" title="Companies" id="collasible-nav-dropdown">
        <div className="my-navbar-size14">
        <NavDropdown.Item href="#action/3.1">Aditya Birla Capital</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">MaxBupa Health Insurance</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Bajaj Allianz General Insurance</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Mutual Funds</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">NJ Wealth</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Vehicle Insurance of All Companies</NavDropdown.Item></div>
      </NavDropdown>
      {/* <Nav.Link class="mynavbar-padding" href="#LifeInsurance">Life Insurance</Nav.Link>
      <Nav.Link class="mynavbar-padding" href="#HealthInsurance">Health Insurance</Nav.Link>
      <Nav.Link class="mynavbar-padding" href="#MutualFunds">Mutual Funds</Nav.Link> */}
      <Nav.Link className="mynavbar-padding my-navbar-size16" href="#deets">Contact</Nav.Link>      
    </Nav></div>
  </Navbar.Collapse>
</Navbar>
    );
}

export default MyNavBar;
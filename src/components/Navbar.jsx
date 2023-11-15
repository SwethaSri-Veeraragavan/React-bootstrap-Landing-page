import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { GiHummingbird } from 'react-icons/gi';
const Navbarpage = () => {
  return (
    <Navbar expand="lg" >
    <Container>
      <Navbar.Brand href="#home"><GiHummingbird size={70} />Fly High</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto circleBehind">
          <Nav.Link className="each" href="#home">Home</Nav.Link>
          <Nav.Link className="each" href="#link">About</Nav.Link>
          <Nav.Link className="each" href="#link">Features</Nav.Link>
          <Nav.Link className="each" href="#link">Screenshots</Nav.Link>
          <Nav.Link className="each" href="#link">Team</Nav.Link>
          <NavDropdown title="News" id="basic-nav-dropdown">
            <NavDropdown.Item  href="#action/3.1">Recent News</NavDropdown.Item>
            <NavDropdown.Item  href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Old News</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="each" href="#link">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbarpage
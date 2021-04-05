import { render } from '@testing-library/react'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";

import {Navbar, Nav,NavDropdown, Row, Container, Col, Button} from 'react-bootstrap'
import Subscribe from './Subscribe'
import { Link } from 'react-router-dom';



function Header(){

    return(

        <Navbar bg="light" expand="lg" variant="light" sticky="top">
          <Container>
  <Navbar.Brand href="#home" style={{fontSize: "70px"}}>CMS</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav className="mx-auto">
      <Nav.Link href="#home" style={{color: 'red' , paddingRight: "10px", paddingLeft: "10px"}}><Link to="/home">Home</Link></Nav.Link>
      <Nav.Link href="#about" style={{color: 'black' , paddingRight: "20px", paddingLeft: "20px"}}><Link to="/pages/about">About Us</Link></Nav.Link>
      <Nav.Link href="#product" style={{color: 'black' , paddingRight: "20px", paddingLeft: "20px"}}><Link to="/productlist">Product</Link></Nav.Link>
      <Nav.Link href="#services" style={{color: 'black' , paddingRight: "20px", paddingLeft: "20px"}}><Link to="/services">Services</Link></Nav.Link>
      <Nav.Link href="#blog" style={{color: 'black' , paddingRight: "20px", paddingLeft: "20px"}}><Link to="/blog">Blog</Link></Nav.Link>
      <Nav.Link href="#contact" style={{color: 'black' , paddingRight: "20px", paddingLeft: "20px"}}><Link to="/contact">Contact Us</Link></Nav.Link>
        <NavDropdown title="Other Link" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Link One</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Link Two</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Link Three</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Main Link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav className="ml-auto"> 
     
      <div style={{display: "flex"}}>
        <Subscribe />
      <div><FontAwesomeIcon icon={faFacebook} size="lg"  className="mr-3" /></div>
      <div> <FontAwesomeIcon icon={faTwitter} size="lg"  className="mr-3"/></div>
      <div><FontAwesomeIcon icon={faLinkedin} size="lg"  className="mr-3" /></div>
      <div><FontAwesomeIcon icon={faYoutube} size="lg"  className="mr-3" /></div>
      </div> 
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>

     
    )
    
}
export default Header;
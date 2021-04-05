import React from 'react'
import {Navbar, Nav,NavDropdown, Row, Container, Col, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";


   function Footer(){
    return(
  <>
        <div style={{backgroundColor: "#eee", color: "fff"}}>
        <Container className="mt-5">
            
            <Row>
                <Col sm="4">
                 
                <Navbar >
         
  
  
  <Navbar.Collapse className="mt-5">
    <Nav style={{display: "table-column"}}>
    <Nav.Link href="#home" style={{color: 'red'}}>Home</Nav.Link>
      <Nav.Link href="#about" style={{color: 'black' }}>About Us</Nav.Link>
      <Nav.Link href="#product" style={{color: 'black'}}>Product</Nav.Link>
      <Nav.Link href="#services" style={{color: 'black'}}>Services</Nav.Link>
      <Nav.Link href="#blog" style={{color: 'black'}}>Blog</Nav.Link>
      <Nav.Link href="#contact" style={{color: 'black'}}>Contact Us</Nav.Link>
      
      
           </Nav>
    
    
  </Navbar.Collapse>
 
</Navbar>


                 </Col>
                 <Col sm="4" className="mt-5">
                 <div>
                     <h3 className="mb-4 mt-4">Our Contacts</h3>

                     <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
                     <h3 className="mb-4 mt-4">Address</h3>
                        <p>245 King Street, Touterie Victoria 8520 Australia</p> 

                        <h3 className="mb-4 mt-4">Phone</h3>
                        
                        <p>0-123-456-7890, 
0-123-456-7890</p>

                 </div>
                 </Col>

                 <Col sm="4" className="mt-5">
                 <h3 className="mb-4 mt-4">Social Media</h3>
                 <div style={{display: "flex"}}>
      <div><FontAwesomeIcon icon={faFacebook} size="2x"   className="mr-3" /></div>
      <div> <FontAwesomeIcon icon={faTwitter} size="2x"   className="mr-3"/></div>
      <div><FontAwesomeIcon icon={faLinkedin} size="2x"   className="mr-3" /></div>
      <div><FontAwesomeIcon icon={faYoutube} size="2x"    className="mr-3" /></div>
      </div> 
                 </Col>

            </Row>
        </Container></div>
     <div style={{backgroundColor: "#000", color: "#fff", textAlign: "center"}}>Privacy Policy | © 2018 CP Chauhan. All rights reserved</div>  </> 
    )
}
    
export default Footer;
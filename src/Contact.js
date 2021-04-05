import React from 'react'

import {Button, Form, Col, Container, Row, Fade} from 'react-bootstrap'
function Contact(){
    return(
        <div  style={{  
          backgroundImage: "url(" + "https://thumbs.dreamstime.com/z/contract-document-two-men-sign-paper-office-toned-faded-image-contract-document-two-men-sign-paper-office-toned-125453007.jpg" + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',      
          paddingBottom: '50px'         
          
        }}>
          
         <h1 className="mr-500" style={{color: "fff", textAlign: "center", paddingTop: "20px"}}>Contact Us</h1>
        
        <Container className="mt-5 mb-10">
            <Row>
              
                <Col sm="6">
                 <div><img
        className="d-block w-100"
        
        src="https://thumbs.dreamstime.com/b/contact-us-customer-support-hotline-people-connect-call-custo-contact-us-customer-support-hotline-people-connect-call-customer-130733557.jpg"
        alt="First slide"
        /></div>
                 </Col>
                 <Col sm="6">
                 
                 <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Contact Us
  </Button>
</Form>


                 </Col>
            </Row>
        </Container>
        
        
        
        
        </div>
    )
}
export default Contact;
import React from 'react'
import {Button, Col, Container, Row} from 'react-bootstrap'


   function About(){
    return(
        
        <Container className="mt-5">
            <Row>
                <Col sm="6">
                 <div><img
        className="d-block w-100"
        
        src="https://hellloexpert.com/tf/html/barristar-live/assets/images/about/2.jpg"
        alt="First slide"
        /></div>
                 </Col>
                 <Col sm="6">
                 <div>
                     <h1 className="mb-4 mt-4">About Us</h1>
                     <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                         
                        <p>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at ,

and going through the cites of the word in classical literature, discovered the undoubtable source.</p> <p>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum</p>
<Button variant="danger">Go somewhere</Button>
                 </div>
                 </Col>
            </Row>
        </Container>
    )
}
    
export default About;
import React from 'react'
import {Button, Col, Container, Row} from 'react-bootstrap'
import { faMeetup, faCodepen, faCreativeCommonsSamplingPlus, } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


   function Services(){
    return(
        
        <Container className="mt-5">
            <Row> 
            
                <Col sm="2">
                <FontAwesomeIcon icon={faMeetup} size="9x"  />
                 </Col>
                 <Col sm="10" >
                 <div className="mb-5">
                     <h1 className="mb-4 mt-4">Web Development</h1>
                     <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                         
                         <p>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum</p>
<Button variant="danger">Go somewhere</Button>
                 </div>
                 
                 </Col>
             
                 <Col sm="2">
                <div><FontAwesomeIcon icon={faCodepen} size="9x"  /></div>
                 </Col>
                 <Col sm="10" >
                 <div className="mb-5">
                     <h1 className="mb-4 mt-4">Design</h1>
                     <p>Richard McClintock, a Latin professor at ,

and going through the cites of the word in classical literature, discovered the undoubtable source.</p> <p>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum</p>
<Button variant="danger">Go somewhere</Button>
                 </div>
                 </Col>
<hr /> 
                 <Col sm="2">
                <div><FontAwesomeIcon icon={faCreativeCommonsSamplingPlus} size="9x"  /></div>
                 </Col>
                 <Col sm="10" >
                 <div>
                     <h1 className="mb-4 mt-4">Digital Marketiong</h1>
                     
                        <p>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at ,

and going through the cites of the word in classical literature, discovered the undoubtable source.</p> <p>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum</p>
<Button variant="danger">Go somewhere</Button>
                 </div>
                 
                 </Col>
                 </Row>
        </Container>
    )
}
    
export default Services;
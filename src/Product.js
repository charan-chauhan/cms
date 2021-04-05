import React from 'react'
import {Container, Col, Row, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faQuestionCircle, faQrcode, faGithub } from '@fortawesome/free-solid-svg-icons';

function Product(){
    return(
        <div style={{backgroundColor: "#eee"}}>
            
            <Container>
           
            <Row>

                <Col sm="4" className="mb-4 mt-4">
                <div style={{float: "left"}}><FontAwesomeIcon icon={faCopy} size="5x" color="grey" className="mr-3" /></div>
                <span className="tithead">Book</span> 
                    <div className="titheadmain">Your Appointment</div>
                </Col>

                <Col sm="4" className="mb-4 mt-4">
                <div style={{float: "left",}}><FontAwesomeIcon icon={faQrcode} size="5x" color="grey" className="mr-3" /></div>
                    <span className="tithead-1">Get Free</span> 
                    <div className="titheadmain">Expert Advice</div>

                </Col>

                <Col sm="4" className="mb-4 mt-4">
                <div style={{float: "left"}}><FontAwesomeIcon icon={faQuestionCircle} size="5x" color="grey" className="mr-3" /></div>
                    <span className="tithead-2">You Can Easily</span>
                    <div className="titheadmain">Join Our Team</div>
                </Col>
            </Row>
            </Container>
            
            </div>
    )
}
export default Product;
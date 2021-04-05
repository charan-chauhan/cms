import React from 'react'
import {Card, Button, Container, CardGroup, Row, Col} from 'react-bootstrap'
import ReactDOM from 'react-dom';
import './App.css';


function Blog(){
  

    return(

       
      <>
      <h1 className="mr-500 mt-5" style={{color: "fff", textAlign: "center", padding: "20px", backgroundColor: "#eee "}}>Blog</h1>
      <Container className="mb-5">
        <Row>
           
           <div class="col-sm-4 mt-5">
  <Card>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHyLRkt4OW9ujxKS6o1fGzVKGCcfXYFAwUVg&usqp=CAU" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </div>

    
  <div class="col-sm-4 mt-5">
  <Card>
    <Card.Img variant="top" src="data:image/jpeg;base64,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" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </div>
  <div class="col-sm-4 mt-5">
  <Card className="r-2">
    <Card.Img variant="top" src="https://akm-img-a-in.tosshub.com/aajtak/images/photo_gallery/202104/6._mannat_gettyimages-577607768-sixteen_nine.jpg?size=670:376" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </div>
  
  <div class="col-sm-4 mt-5">
  <Card>
    <Card.Img variant="top" src="https://c.ndtvimg.com/2021-03/e5kcofr_param-bir-singh-pti_625x300_20_March_21.jpg?downsize=570:351" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
 </div>
 <div class="col-sm-4 mt-5">
  <Card>
    <Card.Img variant="top" src="https://akm-img-a-in.tosshub.com/aajtak/images/story/202104/anil-sixteen_nine_0.jpg?size=360:205" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </div>

    
  <div class="col-sm-4 mt-5">
  <Card>
    <Card.Img variant="top" src="https://c.ndtvimg.com/2021-03/e5kcofr_param-bir-singh-pti_625x300_20_March_21.jpg?downsize=570:351" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </div>
</Row>
</Container>
     </>

         
    )
}



export default Blog;


import React from 'react'
import {Container, Col, Row, Carousel, Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import Product from './Product'
import About from './About'
import Contact from './Contact'
import Blog from './Blog';

function Home(){

  return(  
      <>
<Container className="mx-auto my-5">

<Carousel >
    <Carousel.Item>
        <img
        className="d-block w-100"
        height="500"
        src="https://hbr.org/resources/images/article_assets/2019/12/Dec19_31_BusinessDeals.jpg"
        alt="First slide"
        />
        <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        height="500"
        src="https://cdn.searchenginejournal.com/wp-content/uploads/2018/04/businesses-need-seo-1520x800.png"
        alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        height="500"
        src="https://d1czs14lkefjhh.cloudfront.net/public/images/Analytics%20for%20Business%20Success-min.jpg"
        alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
    </Carousel.Item>
</Carousel>

</Container>
<Product />
 <About />
 <Blog />
 <Contact />
</>
)

}

export default Home;


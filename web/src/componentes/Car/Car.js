import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import amor from '../imagens/amor.jpg'
import v from '../Video/v.mp4'


  export default function Car() {
  return (
   <>
   <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={amor}
      alt="First slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <video autoPlay
      className="d-block w-100"
      src={v}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
   </>
  );
}


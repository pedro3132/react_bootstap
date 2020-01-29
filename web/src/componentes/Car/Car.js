import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import amor from '../imagens/amor.jpg'
import v from '../Video/v.mp4'
import './car.css'

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
      <h2>Te amo </h2>
      <p><strong>E sempre te amarei.</strong></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <video controls autoPlay
      className="d-block w-100"
      src={v}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2>Poema</h2>
      <p>Duvida da luz dos astros,
De que o sol tenha calor,
Duvida até da verdade,
Mas confia em meu amor.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
   </>
  );
}


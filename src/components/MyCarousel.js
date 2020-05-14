import React from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';

const MyCarousel = ({images}) => {
    return (
<Carousel>
    {images.map((item, index) =>
  <Carousel.Item key={index}>
    <img 
      className="d-block w-100"
      src={item.url}
      alt= ""
    />
    <Carousel.Caption>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </Carousel.Caption>
  </Carousel.Item>
    )}
</Carousel>
    )
}

export default MyCarousel;
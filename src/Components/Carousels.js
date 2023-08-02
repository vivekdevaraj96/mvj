import React from "react";
import { Carousel } from "react-bootstrap";
import Bajaj from "../Images/Bajaj.jpg";
import Hero from "../Images/Hero.jpg";
import Honda from "../Images/Honda.jpg";
import Suzuki from "../Images/Suzuki.jpg";
import TVS from "../Images/TVS.jpg";

function Carousels() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item interval={1500}>
          <img src={Bajaj} alt="Bajaj" width="100%" />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img src={Hero} alt="Hero" width="100%" />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img src={Honda} alt="Honda" width="100%" />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img src={Suzuki} alt="Hero" width="100%" />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img src={TVS} alt="TVS" width="100%" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousels;

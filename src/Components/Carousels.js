import React from "react";
import { Carousel } from "react-bootstrap";
import Bajaj from "../Images/Bajaj.jpg";
import Honda from "../Images/Honda.jpg";
import TVS from "../Images/TVS.jpg";

function Carousels() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item interval={2000}>
          <img src={Bajaj} alt="Bajaj" width="100%" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={Honda} alt="Honda" width="100%" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img src={TVS} alt="TVS" width="100%" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousels;

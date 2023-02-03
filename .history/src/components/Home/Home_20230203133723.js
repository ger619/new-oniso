import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../images/slider1.png";
import image2 from "../../images/Slider2.png";

const Home = () => (
  <div style={{ overflow: "none" }}>
    <Carousel fade>
      <Carousel.Item>
        <img
          src={image}
          className="d-block w-100"
          alt="stock"
          // style={{ height: "100vh" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={image2}
          alt="stock2"
          className="d-block w-100 "
          style={{
            objectFit: "contain",
            objectPosition: "center",
            backgroundSize: "cover",
            height: "100vh"
          }}
          // style={{ height: "100vh" }}
        />
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Home;

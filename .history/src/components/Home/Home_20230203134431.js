import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../images/slider1.png";
import image2 from "../../images/Slider2.png";

const Home = () => (
  <>
    //line across the top of the page
    <div
      style={{
        width: "100%",
        height: "5px",
        backgroundColor: "#f5f5f5",
        position: "fixed",
        top: "100px",
        left: "0",
        zIndex: "100",
      }}
    ></div>
    <div style={{ overflow: "none", paddingTop: "60px" }}>
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
            // style={{ height: "100vh" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  </>
);

export default Home;

import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/j6tnXzB/dentists-treat-patients-teeth-1-1-1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="fs-1 fw-bolder">50% Off for Firs Sign UP</h3>
          <p>Hurry Up and SignUp now . Don't miss This Offer.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/xJH4XCn/close-up-little-girl-having-her-teeth-examined-by-dentist-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="fs-1 fw-bolder">Kids Care</h3>
          <p>Spicial combo pack for KIds.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://i.ibb.co/F4qP1fz/woman-patient-dentist-1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="text-dark fs-1 fw-bolder">Spicial Friday Sell</h3>
          <p>We have Spicial discount at Friday.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;

import React from "react";
import SimpleContainer from "../References/SimpleContainer";
import Carousel from "../Carousel/Carousel.jsx";

const Quotes = () => {
  return (
    <SimpleContainer
      Header="Our customers and personel had to say:"
      Body={<Carousel></Carousel>}
    ></SimpleContainer>
  );
};
export default Quotes;

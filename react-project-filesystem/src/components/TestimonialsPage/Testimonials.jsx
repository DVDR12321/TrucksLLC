import React from "react";
import { SectionOverlayGrid } from "./StyledComponents";
import { Card } from "./Card/Card";
import Image1 from "../../assets/quotemark.png";
import Image2 from "../../assets/quotemark2.png";
import Carousel from "./Carousel/Carousel";
import References from "./Laurels/References";
import { useRef, useEffect } from "react";

export const Testimonials = (props) => {
  const { scrollTo, setScrollTo } = props;
  const laurelsRef = useRef();

  useEffect(() => {
    if (scrollTo.laurels === "Laurels") {
      laurelsRef.current.scrollIntoView({ behavior: "smooth" });
      setScrollTo("");
    }
  }, [scrollTo]);

  return (
    <SectionOverlayGrid ref={laurelsRef} container spacing={2}>
      <Card img1={Image1} img2={Image2} content={<Carousel></Carousel>}></Card>
      <Card
        img1={Image1}
        img2={Image2}
        content={<References></References>}
      ></Card>
    </SectionOverlayGrid>
  );
};

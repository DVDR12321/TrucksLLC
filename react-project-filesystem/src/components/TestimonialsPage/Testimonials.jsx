import React from "react";
import { SectionOverlayGrid } from "./StyledComponents";
import { Card } from "./Card/Card";
import Image1 from "../../assets/quotemark.png";
import Image2 from "../../assets/quotemark2.png";
import Carousel from "./Carousel/Carousel";
import References from "./Laurels/References";
import { useRef, useEffect } from "react";
import { Grid } from "@mui/material";

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
    <SectionOverlayGrid ref={laurelsRef} container>
      <Grid item xs={0} md={2}></Grid>
      <Grid item xs={12} md={3}>
        <Card
          img1={Image1}
          img2={Image2}
          content={<Carousel></Carousel>}
        ></Card>
      </Grid>
      <Grid item xs={0} md={1}></Grid>
      <Grid item xs={12} md={3}>
        <Card
          img1={Image1}
          img2={Image2}
          content={<References></References>}
        ></Card>
      </Grid>
      <Grid item xs={0} md={2}></Grid>
    </SectionOverlayGrid>
  );
};

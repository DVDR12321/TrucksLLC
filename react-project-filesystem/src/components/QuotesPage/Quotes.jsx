import { Grid } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { StyledBox } from "./StyledComponents";
import CarouselComponent from "../Carousel/CarouselComponent";

const Quotes = (props) => {
  const { scrollTo, setScrollTo } = props;
  const quotesRef = useRef();
  useEffect(() => {
    if (scrollTo.laurels === "Laurels") {
      quotesRef.current.scrollIntoView({ behavior: "smooth" });
      setScrollTo("");
    }
  }, [scrollTo]);
  return (
    <Grid container ref={quotesRef}>
      <Grid item xs={0} sm={1} md={3}></Grid>
      <Grid item xs={12} sm={10} md={6}>
        <StyledBox>
          <CarouselComponent />
        </StyledBox>
      </Grid>
      <Grid item xs={0} sm={1} md={3}></Grid>
    </Grid>
  );
};
export default Quotes;

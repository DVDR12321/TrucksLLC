import { Grid } from "@mui/material";
import React from "react";
import img1 from "../../assets/Colaboratos/CHRobinson.png";
import img2 from "../../assets/Colaboratos/JBHunt.png";
import img3 from "../../assets/Colaboratos/TQL.png";
import img4 from "../../assets/Colaboratos/UPS.png";
import img5 from "../../assets/Colaboratos/XPO.png";
import {
  StlyedTitle,
  StyledContainerGrid,
  StyledImage,
} from "./StyledComponents";

const OurColaborators = () => {
  return (
    <StyledContainerGrid container columns={18} spacing={2} padding={5}>
      <Grid item xs={0} md={1} lg={3}></Grid>
      <Grid item xs={18} md={6} lg={2}>
        <StlyedTitle>Our partners:</StlyedTitle>
      </Grid>
      <Grid item xs={6} md={2}>
        <StyledImage src={img1} alt="CH"></StyledImage>
      </Grid>
      <Grid item xs={6} md={2}>
        <StyledImage src={img2} alt="JBHunt"></StyledImage>
      </Grid>
      <Grid item xs={6} md={2}>
        <StyledImage src={img3} alt="TQL"></StyledImage>
      </Grid>
      <Grid item xs={6} md={2}>
        <StyledImage src={img4} alt="UPS"></StyledImage>
      </Grid>
      <Grid item xs={6} md={2}>
        <StyledImage src={img5} alt="XPO"></StyledImage>
      </Grid>
      <Grid item xs={6} md={1} lg={3}></Grid>
    </StyledContainerGrid>
  );
};

export default OurColaborators;

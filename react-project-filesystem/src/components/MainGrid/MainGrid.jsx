import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MainScreen from "../MainScreen/MainScreen";
import VideoPlayer from "../VideoScreen/VideoPlayer";
import { AboutSection } from "../AboutUsSection/AboutUsSection";
import { Testimonials } from "../TestimonialsPage/Testimonials";
import { StyledGridContainer } from "./StyledComponents";

export default function MainGrid() {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <MainScreen></MainScreen>
        </Grid>
        <Grid item xs={12} sx={{ paddingTop: "30px" }}>
          <AboutSection></AboutSection>
        </Grid>
        <StyledGridContainer container columns={10} > 
          <StyledGridContainer item xs={10} sx={{ display:'flex',justifyContent:"center"}}>
          <Grid item xs={9}>
            <VideoPlayer></VideoPlayer>
          </Grid>
          </StyledGridContainer>
        </StyledGridContainer>
        <Grid item xs={12}>
          <Testimonials></Testimonials>
        </Grid>
        <Grid item xs={12}>
          <div style={{ textAlign: "center" }}>
            <h1>? $ Payments $ ?</h1>
            <h1> Find us </h1>
            <h1> Newsletter </h1>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

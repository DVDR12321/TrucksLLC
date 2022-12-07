import * as React from "react";
import Grid from "@mui/material/Grid";
import MainScreen from "../MainScreen/MainScreen";
import VideoPlayer from "../VideoScreen/VideoPlayer";
import { AboutSection } from "../AboutUsSection/AboutUsSection";
import { Testimonials } from "../TestimonialsPage/Testimonials";
import {
  StyledGridContainer,
  StyledAboutGrid,
  StyledBox,
  StyledTestimonialsGrid,
  StyledVideoGrid,
} from "./StyledComponents";

export default function MainGrid() {
  return (
    <StyledBox sx={{ flexGrow: 2 }}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <MainScreen></MainScreen>
        </Grid>
        <StyledAboutGrid item xs={12} sx={{ paddingTop: "10vmin" }}>
          <AboutSection></AboutSection>
        </StyledAboutGrid>
        <StyledVideoGrid container columns={10}>
          <StyledGridContainer item xs={9}>
            <Grid item xs={9}>
              <VideoPlayer></VideoPlayer>
            </Grid>
          </StyledGridContainer>
        </StyledVideoGrid>
        <StyledTestimonialsGrid item xs={12}>
          <Testimonials></Testimonials>
        </StyledTestimonialsGrid>
        <Grid item xs={12}>
          <div style={{ textAlign: "center" }}>
            <h1>? $ Payments $ ?</h1>
            <h1> Find us </h1>
          </div>
        </Grid>
      </Grid>
    </StyledBox>
  );
}

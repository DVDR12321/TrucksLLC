import * as React from "react";
import Grid from "@mui/material/Grid";
import MainScreen from "../MainScreen/MainScreen";
import VideoPlayer from "../VideoScreen/VideoPlayer";
import AboutUsSection from "../AboutUsSection/AboutUsSection";
import OurColaborators from "../OurColaborators/OurColaborators";

import {
  StyledAboutGrid,
  StyledBox,
  StyledGridContainer,
  StyledTestimonialsGrid,
  StyledVideoGrid,
} from "./StyledComponents";
import BackToTop from "../BackToTop/BackToTop";
import { useState } from "react";
import Quotes from "../QuotesPage/Quotes";
import LaurelsPage from "../LaurelsPage/LaurelsPage";

const MainGrid = () => {
  const [scrollTo, setScrollTo] = useState({ about: "", laurels: "" });
  const [BackToTopButton, setBackToTopButton] = useState("");

  return (
    <StyledBox sx={{ flexGrow: 2 }}>
      <StyledGridContainer container spacing={0}>
        <Grid item xs={12} sx={{ height: "100%" }}>
          <MainScreen
            scrollTo={scrollTo}
            setScrollTo={setScrollTo}
          ></MainScreen>
        </Grid>

        <StyledAboutGrid item xs={12} sx={{ paddingTop: "10vmin" }}>
          <AboutUsSection
            scrollTo={scrollTo}
            setScrollTo={setScrollTo}
          ></AboutUsSection>
        </StyledAboutGrid>
        <StyledVideoGrid item xs={12}>
          <VideoPlayer></VideoPlayer>
        </StyledVideoGrid>

        <StyledTestimonialsGrid item xs={12}>
          <Quotes scrollTo={scrollTo} setScrollTo={setScrollTo}></Quotes>
        </StyledTestimonialsGrid>
        <Grid item xs={12}>
          <LaurelsPage></LaurelsPage>
        </Grid>
        <Grid item xs={12}>
          <OurColaborators />
        </Grid>
        <Grid item xs={12}>
          <div style={{ textAlign: "center" }}>
            <h1>? $ Payments $ ?</h1>
          </div>
        </Grid>
      </StyledGridContainer>
      <BackToTop
        BackToTopButton={BackToTopButton}
        setBackToTopButton={setBackToTopButton}
      ></BackToTop>
    </StyledBox>
  );
};

export default MainGrid;

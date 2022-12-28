import React from "react";
import img3 from "../../assets/usa.webp";
import img4 from "../../assets/logo.gif";
import img5 from "../../assets/truckgif.gif";
import img6 from "../../assets/Card Pie Chart.gif";
import Grid from "@mui/material/Grid";
import BrokerCard from "../BrokerCard/BrokerCard";
import { Link as LinkScroll } from "react-scroll";

import {
  StyledButton,
  StyledMainTitle,
  StyledGrid,
  StyledButtonGrid,
  StyledCardsGrid,
  StyledHeaderGrid,
  StyledLink,
} from "./StyledComponents";

const MainScreen = () => {
  return (
    <StyledGrid container>
      <Grid container spacing={0}>
        <StyledHeaderGrid item xs={12} md={6}>
          <StyledMainTitle color="primary">
            Transporation Done Right
          </StyledMainTitle>
        </StyledHeaderGrid>
        <StyledButtonGrid item xs={0} md={6}>
          <StyledLink to="apply">
            <StyledButton variant="outlined" color="secondary">
              Join us
            </StyledButton>
          </StyledLink>
        </StyledButtonGrid>
      </Grid>
      <Grid item xs={0} md={1}></Grid>
      <StyledCardsGrid item xs={12} md={10}>
        <Grid container sx={{ justifyContent: "center" }} spacing={15}>
          <Grid item xs={12} md={3}>
            <StyledLink to="">
              <BrokerCard imagep={img4} headerp="About Us" />
            </StyledLink>
          </Grid>
          <Grid item xs={12} md={3}>
            <StyledLink to="">
              <BrokerCard imagep={img3} headerp="Driver benefits" />
            </StyledLink>
          </Grid>
          <Grid item xs={12} md={3}>
            <StyledLink to="">
              <BrokerCard imagep={img5} headerp="Our fleet" />
            </StyledLink>
          </Grid>
          <Grid item xs={12} md={3}>
            <LinkScroll to="/#references">
              <BrokerCard imagep={img6} headerp="Recognitions" />
            </LinkScroll>
          </Grid>
        </Grid>
      </StyledCardsGrid>
      <Grid item xs={0} md={1}></Grid>
    </StyledGrid>
  );
};
export default MainScreen;

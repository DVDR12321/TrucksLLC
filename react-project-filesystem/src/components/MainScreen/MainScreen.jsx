import React from "react";
import img3 from "../../assets/usa.webp";
import img4 from "../../assets/logo.gif";
import img5 from "../../assets/truckgif.gif";
import img6 from "../../assets/Card Pie Chart.gif";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import BrokerCard from "../BrokerCard/BrokerCard";
import { Link as LinkScroll } from "react-scroll";

import {
  StyledButton,
  StyledMainTitle,
  StyledGrid,
  StyledButtonGrid,
  StyledCardsGrid,
  StyledHeaderGrid,
} from "./StyledComponents";

const MainScreen = () => {
  return (
    <StyledGrid container>
      <Grid container spacing={0}>
        <StyledHeaderGrid item xs={9} md={6}>
          <StyledMainTitle color="primary">
            Transporation Done Right
          </StyledMainTitle>
        </StyledHeaderGrid>
        <StyledButtonGrid item xs={3} md={6}>
          <Link to="apply">
            <StyledButton variant="outlined" color="red">
              Join us
            </StyledButton>
          </Link>
        </StyledButtonGrid>
      </Grid>
      <StyledCardsGrid container spacing={0}>
        <Grid item xs={3}>
          <Link to="">
            <BrokerCard
              imagep={img4}
              headerp="About Us"
              // textp="Clic to ind out about us and our mission"
            />
          </Link>
        </Grid>
        <Grid item xs={3}>
          <Link to="">
            <BrokerCard
              imagep={img3}
              headerp="Driver benefits"
              // textp="Find out how to reach us"
            />
          </Link>
        </Grid>
        <Grid item xs={3}>
          <Link to="">
            <BrokerCard
              imagep={img5}
              headerp="Our fleet"
              // textp="Find out about our available assets"
            />
          </Link>
        </Grid>
        <Grid item xs={3}>
          <LinkScroll to="/#references">
            <BrokerCard imagep={img6} headerp="Recognitions" />
          </LinkScroll>
        </Grid>
      </StyledCardsGrid>
    </StyledGrid>
  );
};
export default MainScreen;

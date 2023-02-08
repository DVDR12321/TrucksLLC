import img3 from "../../assets/MainPage/CardMoney.png";
import img3h from "../../assets/MainPage/CardMoneyHover.png";
import img4 from "../../assets/MainPage/CardAbout.png";
import img4h from "../../assets/MainPage/CardAboutHover.png";
import img5 from "../../assets/MainPage/CardTruck.png";
import img5h from "../../assets/MainPage/CardTruckGif.gif";
import img6 from "../../assets/MainPage/CardQuotes.png";
import img6h from "../../assets/MainPage/CardQuotesHover.png";
import Grid from "@mui/material/Grid";
import BrokerCard from "../BrokerCard/BrokerCard";
import { Link as LinkScroll } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  StyledButton,
  StyledMainTitle,
  StyledGrid,
  StyledButtonGrid,
  StyledCardsGrid,
  StyledHeaderGrid,
  StyledLink,
} from "./StyledComponents";
import { makeStyles } from "@mui/styles";
import { Stack } from "@mui/system";
import { useState, useEffect } from "react";

const MainScreen = (props) => {
  const { setScrollTo, scrollTo } = props;
  // page loader

  //loading animation liberary
  useEffect(() => {
    AOS.init();
  }, []);

  // links for cards
  const handleClickAbout = () => {
    setScrollTo((scrollTo) => ({
      ...scrollTo,
      about: "About",
    }));
    console.log(scrollTo);
  };
  const handleClickLaurels = () => {
    setScrollTo((scrollTo) => ({
      ...scrollTo,
      laurels: "Laurels",
    }));
    console.log(scrollTo);
  };

  const useStyles = makeStyles((theme) => ({
    outlined: {
      borderWidth: "2px",
      color: "primary",
    },
  }));
  const classes = useStyles();

  return (
    <StyledGrid container>
      <Grid container spacing={0}>
        <Grid xs={0} md={1}></Grid>
        <StyledHeaderGrid item xs={12} md={5}>
          <Stack>
            <StyledMainTitle
              data-aos="fade-in"
              data-aos-duration="500"
              data-aos-offset="150"
              data-aos-easing="ease-in-out"
              color="primary"
              data-aos-once
            >
              Transporation Done Right
            </StyledMainTitle>
            <StyledLink to="apply">
              <StyledButton
                variant="contained"
                color="secondary"
                className={classes.outlined}
                data-aos="fade-in"
                data-aos-duration="500"
                data-aos-offset="150"
                data-aos-easing="ease-in-out"
                data-aos-delay="500"
                data-aos-once
              >
                Apply
              </StyledButton>
            </StyledLink>
          </Stack>
        </StyledHeaderGrid>
        <StyledButtonGrid item xs={0} md={5}></StyledButtonGrid>
        <Grid xs={0} md={1}></Grid>
      </Grid>
      <Grid item xs={0} md={1}></Grid>
      <StyledCardsGrid item xs={12} md={10}>
        <Grid container sx={{ justifyContent: "center" }} spacing={10}>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            data-aos="slide-up"
            data-aos-duration="350"
            data-aos-offset="150"
            data-aos-easing="ease-in-out"
            data-aos-delay="1000"
            data-aos-once
          >
            <StyledLink to="">
              <BrokerCard
                sx={{ objectFit: "contain" }}
                imagep={img4}
                imageph={img4h}
                headerp="About us"
                onClickCard={handleClickAbout}
              />
            </StyledLink>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            data-aos="slide-up"
            data-aos-duration="350"
            data-aos-offset="150"
            data-aos-easing="ease-in-out"
            data-aos-delay="1150"
            data-aos-once
          >
            <StyledLink to="/drivers">
              <BrokerCard
                href="/drivers"
                imagep={img3}
                imageph={img3h}
                headerp="Drivers' benefits"
              />
            </StyledLink>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            data-aos="slide-up"
            data-aos-duration="350"
            data-aos-offset="150"
            data-aos-easing="ease-in-out"
            data-aos-delay="1300"
            data-aos-once
          >
            <StyledLink to="/aboutus">
              <BrokerCard imagep={img5} imageph={img5h} headerp="Our fleet" />
            </StyledLink>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            data-aos="slide-up"
            data-aos-duration="350"
            data-aos-offset="150"
            data-aos-easing="ease-in-out"
            data-aos-delay="1450"
            data-aos-once
          >
            <LinkScroll to="/#references">
              <BrokerCard
                onClickCard={handleClickLaurels}
                imagep={img6}
                imageph={img6h}
                headerp="Recognitions"
              />
            </LinkScroll>
          </Grid>
        </Grid>
      </StyledCardsGrid>
      <Grid item xs={0} md={1}></Grid>
    </StyledGrid>
  );
};
export default MainScreen;

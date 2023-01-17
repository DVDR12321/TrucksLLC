import img3 from "../../assets/CardMoney.png";
import img4 from "../../assets/logo.gif";
import img5 from "../../assets/CardTruck.png";
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
import { makeStyles } from "@material-ui/core/styles";
import { Stack } from "@mui/system";

const MainScreen = (props) => {
  const { setScrollTo, scrollTo } = props;

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
            <StyledMainTitle color="primary">
              Transporation Done Right
            </StyledMainTitle>
            <StyledLink to="apply">
              <StyledButton
                variant="contained"
                color="secondary"
                className={classes.outlined}
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
          <Grid item xs={12} sm={6} md={3}>
            <StyledLink to="">
              <BrokerCard
                sx={{ objectFit: "contain" }}
                imagep={img4}
                headerp="About Us"
                onClickCard={handleClickAbout}
              />
            </StyledLink>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StyledLink to="/drivers">
              <BrokerCard
                href="/drivers"
                imagep={img3}
                headerp="Driver benefits"
              />
            </StyledLink>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StyledLink to="/aboutus">
              <BrokerCard imagep={img5} headerp="Our fleet" />
            </StyledLink>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <LinkScroll to="/#references">
              <BrokerCard
                onClickCard={handleClickLaurels}
                imagep={img6}
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

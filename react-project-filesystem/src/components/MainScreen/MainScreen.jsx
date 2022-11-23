import React from "react";
import img2 from "../../assets/chicago.jpg";
import img3 from "../../assets/usa.webp";
import img4 from "../../assets/logo.gif";
import img5 from "../../assets/truckgif.gif";
import img6 from "../../assets/piechart.webp";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import BrokerCard from "../BrokerCard/BrokerCard";
import { Link as LinkScroll } from "react-scroll";
import { MainHeader } from "./MainHeader";

import { StyledMainGrid } from "./StyledComponents";

const MainScreen = () => {
  return (
    <Grid
      container
      style={{
        height: "100vh",
        backgroundImage: `url(${img2})`,
        backgroundSize: "cover",
      }}
    >
      <Grid item>
        <Grid container spacing={1}>
          <Grid item xs={9} md={6}>
            <StyledMainGrid>
              <MainHeader></MainHeader>
            </StyledMainGrid>
          </Grid>
          <Grid item xs={3} md={6}>
            <Link to="apply">
              <Button
                sx={{
                  position: "relative",
                  top: "40vb",
                  left: "1vb",
                  backgroundColor: "#ba000d",
                  fontWeight: "bold",
                  fontSize: "5vb",
                  height: "7vb",
                  width: "30vb",
                }}
                variant="contained"
                color="error"
              >
                Join us
              </Button>
            </Link>
          </Grid>
          <Grid
            container
            spacing={1}
            item
            sx={{
              height: "50vh",
              justifyContent: "center",
              alignItems: "flex-end",
              marginLeft: "2%",
            }}
          >
            <Grid item xs={3}>
              <Link to="">
                <BrokerCard
                  imagep={img4}
                  headerp="Our Servces"
                  // textp="Clic to ind out about us and our mission"
                />
              </Link>
            </Grid>
            <Grid item xs={3}>
              <Link to="">
                <BrokerCard
                  imagep={img3}
                  headerp="Finances"
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
                <BrokerCard imagep={img6} headerp="References" />
              </LinkScroll>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default MainScreen;

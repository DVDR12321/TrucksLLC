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
import {
  StyledMainGrid,
  StyledMainHeading,
  StyledMainRedHeading,
  StyledSubHeading,
} from "./StyledComponents";

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
          <Grid item xs={6}>
            <StyledMainGrid>
              <StyledMainHeading>
                Transporation
                
              </StyledMainHeading>
              <StyledSubHeading>
                  Done
                 
                </StyledSubHeading>
              <StyledMainRedHeading>Right</StyledMainRedHeading>
            </StyledMainGrid>
          </Grid>
          <Grid item xs={6}>
            <Button
              sx={{
                position: "relative",
                top: "39vb",
                left: "1vb",
                backgroundColor: "#ba000d",
                fontFamily: "helvetica",
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
          </Grid>
          <Grid
            container
            spacing={1}
            item
            xs={12}
            style={{ height: "40vh", justifyContent: "center" }}
          >
            <Grid item xs={3}>
              <Link to="finances">
                <BrokerCard
                  imagep={img4}
                  headerp="Finances"
                  textp="Clic to ind out about us and our mission"
                />
              </Link>
            </Grid>
            <Grid item xs={3}>
              <Link to="aboutus">
                <BrokerCard
                  imagep={img3}
                  headerp="About US"
                  textp="Find out how to reach us"
                />
              </Link>
            </Grid>
            <Grid item xs={3}>
              <Link to="fleet">
                <BrokerCard
                  imagep={img5}
                  headerp="Our fleet"
                  textp="Find out about our available assets"
                />
              </Link>
            </Grid>
            <Grid item xs={3}>
              <BrokerCard imagep={img6} headerp="Our reviews" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default MainScreen;

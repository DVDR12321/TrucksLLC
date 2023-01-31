import { Grid, Stack, Divider, Typography } from "@mui/material";
import React from "react";
import DriverCard from "./DriverCard";
import Referral from "./RefferalForm";
import img from "../../assets/Drivers/ScrollBarWhite.png";
import Image from "../../assets/OwnerOperator.jpg";
import Image2 from "../../assets/CompanyDriver.webp";
import {
  StyledContentGrid,
  StyledGrid,
  StyledHeaderText,
  StyledImage,
  StyledScrollGrid,
} from "./StyledComponents";
import { useEffect, useState } from "react";
import GridLoader from "react-spinners/GridLoader";

function Drivers() {
  const [loading, setLoading] = useState(true);
  const override = {
    top: "50vh",
    left: "50vw",
  };
  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {loading ? (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <GridLoader
            cssOverride={override}
            color="#b71c1c"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <Grid container spacing={3} sx={{ justifyContent: "center" }}>
          <StyledGrid container>
            <Grid item xs={12}>
              <StyledHeaderText>Drive With Us</StyledHeaderText>
            </Grid>
            <StyledScrollGrid container>
              <StyledImage src={img} alt="scroll"></StyledImage>
              <Typography> Scroll to learn more</Typography>
            </StyledScrollGrid>
          </StyledGrid>

          <StyledContentGrid item xs={12}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 8 }}
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              <DriverCard
                img1={Image}
                header="Owner Operator"
                text="Become an owner operator; become a part of TrucksLLC family today!"
                button1="Learn more"
                button2="Apply"
                link2="/apply"
                link1="/OwnerOperators"
              ></DriverCard>
              <Divider orientation="vertical" variant="middle" flexItem />
              <DriverCard
                img1={Image2}
                header="Company Driver"
                text="No truck? No worries! Become our company driver - we will handle the stress, you handle the miles!"
                button1="Learn more"
                button2="Apply"
                link2="/apply"
                link1="/CompanyDrivers"
              ></DriverCard>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Referral></Referral>
            </Stack>
          </StyledContentGrid>
        </Grid>
      )}
    </div>
  );
}
export default Drivers;

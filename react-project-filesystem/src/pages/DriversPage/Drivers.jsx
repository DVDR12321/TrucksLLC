import { Grid, Stack, Divider, Typography } from "@mui/material";
import React from "react";
import DriverCard from "./DriverCard";
import ReferralForm from "./RefferalForm";
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
import AOS from "aos";
import "aos/dist/aos.css";

function Drivers() {
  //page loader

  //fixing scroll to top when visited from another page ( in contrary scrolls to the height of that button)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //loading animation library
  useEffect(() => {
    AOS.init();
  }, []);

  return (
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
          data-aos="slide-up"
          data-aos-duration="500"
          data-aos-offset="150"
          data-aos-delay="250"
          data-aos-easing="ease-out"
          data-aos-once
        >
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            padding={2}
            margin={2}
          >
            <Grid item>
              <DriverCard
                img1={Image}
                header="Owner Operator"
                text="Become an owner operator. Become a part of Trucks LLC family today. Become a happy driver forever! "
                button1="Learn more"
                button2="Apply"
                link2="/apply"
                link1="/OwnerOperators"
              ></DriverCard>
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Grid item>
              <DriverCard
                img1={Image2}
                header="Company Driver"
                text="Don't have a truck? Don't worry! Become our company driver - you handle the miles, we handle the stress!"
                button1="Learn more"
                button2="Apply"
                link2="/apply"
                link1="/CompanyDrivers"
              ></DriverCard>
            </Grid>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Grid item>
              <ReferralForm></ReferralForm>
            </Grid>
          </Grid>
        </Stack>
      </StyledContentGrid>
    </Grid>
  );
}
export default Drivers;

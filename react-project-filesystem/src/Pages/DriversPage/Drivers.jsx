import { Grid, Stack, Divider } from "@mui/material";
import React from "react";
import DriverCard from "./DriverCard";
import Referral from "./RefferalForm";
import Image from "../../assets/OwnerOperator.jpg";
import Image2 from "../../assets/CompanyDriver.webp";
import { StyledGrid, StyledHeaderText } from "./StyledComponents";
import { useEffect } from "react";

function Drivers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Grid container spacing={3} sx={{ justifyContent: "center" }}>
      <StyledGrid container>
        <Stack>
          <StyledHeaderText>Drive With Us</StyledHeaderText>
        </Stack>
      </StyledGrid>
      <Grid item xs={12} sx={{ margin: "10px" }}>
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
      </Grid>
    </Grid>
  );
}
export default Drivers;

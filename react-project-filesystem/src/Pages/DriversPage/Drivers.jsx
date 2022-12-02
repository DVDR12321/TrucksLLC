import { Grid, Stack, Divider } from "@mui/material";
import React from "react";
import DriverCard from "./DriversCard";
import Referral from "./RefferalForm";
import Image from "../../assets/OwnerOperator.jpg";
import Image2 from "../../assets/CompanyDriver.webp";
import {
  StyledGrd,
  StyledHeaderText,
  StyledParagraph,
  StyledSpan,
} from "./StyledComponents";

function Drivers() {
  return (
    <Grid container spacing={3} sx={{ justifyContent: "center" }}>
      <StyledGrd container sx={12}>
      <Stack>
          <StyledHeaderText> Drive With Us - <StyledSpan>Today!</StyledSpan> </StyledHeaderText>
          {/* <StyledParagraph>
            Whether you prefer to be a company driver or an owner-oprator, we
            have the best solutions for on the market for you.
          </StyledParagraph> */}
        </Stack>
      </StyledGrd>
      <Grid item xs={12} spacing={0} sx={{margin:'10px'}}>
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
          ></DriverCard>
          <Divider orientation="vertical" variant="middle" flexItem />
          <DriverCard
            img1={Image2}
            header="Company Driver"
            text="No truck? No worries! Become our company driver - we will handle the stress, you handle the miles!"
            button1="Learn more"
            button2="Apply"
          ></DriverCard>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Referral></Referral>
        </Stack>
      </Grid>
    </Grid>
  );
}
export default Drivers;

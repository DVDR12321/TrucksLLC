import { Grid, Stack } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import {
  StyledContentGrid,
  StyledHeaderGrid,
  StyledMainDescription,
  StyledMainGrid,
  StyledMainHeader,
  StyledSectionHeader,
} from "./StyledComponents";

const OwnerOperators = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <StyledMainGrid container>
      <StyledHeaderGrid item xs={12}>
        <Stack direction="column">
          <StyledMainHeader>Company driver</StyledMainHeader>
          <StyledMainDescription>
            Wether you are leasing renting or bringing your own truck, driving
            as a team or a solo driver, we have a plan for you here at Trucks
            LLC
          </StyledMainDescription>
        </Stack>
      </StyledHeaderGrid>
      <StyledContentGrid>
        <Grid item xs={12}>
          <p>
            Whether you are bringing your own truck , or you are looking for an
            opportunity to lease a top of the line truck and pull steady dry van
            freight for excellent earnings – Trucks LLC is the right choice for
            you!
          </p>
          <p>
            We offer different choices of operating options, such as Dedicated,
            Over the Road, Regional, and Short Hauls and with an assigned
            dispatcher you’re always going to find the mix of miles and home
            time that you want with a great pay.
          </p>
        </Grid>
        <Grid container sx={{ textAlign: "left" }}>
          <Grid item xs={12} md={12} lg={6}>
            <StyledSectionHeader>Solo Drivers</StyledSectionHeader>
            <ul>
              <li>benefit1</li>
              <li>benefit2</li>
              <li>benefit3</li>
              <li>benefit4</li>
              <li>benefit5</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <StyledSectionHeader>Team Drivers</StyledSectionHeader>
            <ul>
              <li>benefit1</li>
              <li>benefit2</li>
              <li>benefit3</li>
              <li>benefit4</li>
              <li>benefit5</li>
            </ul>
          </Grid>
        </Grid>
      </StyledContentGrid>
      <Grid item xs={12}>
        <StyledSectionHeader> Payment options </StyledSectionHeader>
        <ul>
          <li> Paid in full</li>
          <li> Paid by % </li>
        </ul>
      </Grid>
      <Grid item xs={12}>
        <StyledSectionHeader>
          {" "}
          Lease and rent qualification{" "}
        </StyledSectionHeader>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus
          ante, suscipit quis faucibus at, auctor nec nibh. Curabitur dictum
          elit sed dui malesuada, sit amet malesuada lacus gravida. Nullam lorem
          neque, consectetur a metus euismod, ullamcorper elementum quam.
        </p>
        <p>
          Praesent ut sem sed velit tristique fermentum vel ut purus. Sed
          sollicitudin, dui in fringilla venenatis, sem lectus auctor tortor,
          sit amet dignissim dolor nisl at mi. Mauris ac tempus arcu, id
          vestibulum dui. Vivamus eget posuere velit, ut tempus arcu. Interdum
          et malesuada fames ac ante ipsum primis in faucibus. Nullam a nisi eu
          felis rhoncus elementum nec quis augue. Sed ullamcorper nibh vitae
          pellentesque hendrerit. Aenean convallis nunc augue. Praesent varius
          ultricies rutrum.{" "}
        </p>
      </Grid>
    </StyledMainGrid>
  );
};
export default OwnerOperators;

import { Grid, Stack } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import {
  StyledContentGrid,
  StyledHeaderGrid,
  StyledList,
  StyledMainDescription,
  StyledMainGrid,
  StyledMainHeader,
  StyledParagraph,
  StyledSectionHeader,
} from "./StyledComponents";

const CompanyDrivers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <StyledMainGrid container>
      <StyledHeaderGrid item xs={12}>
        <Stack direction="column">
          <StyledMainHeader>Company Driver</StyledMainHeader>
          <StyledMainDescription>
            Wether you are solo or a team driver, want to be paid by mile or buy
            %, you will find yourself at home at Trucks LLC as a company driver.
          </StyledMainDescription>
        </Stack>
      </StyledHeaderGrid>
      <StyledContentGrid>
        <Grid item xs={12}>
          <StyledParagraph>
            Whether you are bringing your own truck , or you are looking for an
            opportunity to lease a top of the line truck and pull steady dry van
            freight for excellent earnings – Trucks LLC is the right choice for
            you!
          </StyledParagraph>
          <StyledParagraph>
            We offer different choices of operating options, such as Dedicated,
            Over the Road, Regional, and Short Hauls and with an assigned
            dispatcher you’re always going to find the mix of miles and home
            time that you want with a great pay.
          </StyledParagraph>
        </Grid>
        <Grid container sx={{ textAlign: "left" }}>
          <Grid item xs={12} md={12} lg={6}>
            <StyledSectionHeader>Get paid by mile</StyledSectionHeader>
            <StyledList>
              <li>Competitive payment</li>
              <li>
                Get payed by load, up to 88% - small fee is deducted for
                dispatch eld and accounting services
              </li>
              <li>Liability, cargo trailer and OCC insurance</li>
              <li>Dispath services - 27/7 dispatch 7 days a week</li>
              <li>
                Personalized dispatch - get a dispatcher that works for your
                style of driving
              </li>
              <li>No forced dispatch!</li>
              <li>
                ELD services - 24/7 7 days a week. Incudes all your logbook
                needs
              </li>
              <li>
                Accounting services - get all your needs met quickly. Payout
                every week.
              </li>
              <li>Pre Pass</li>
              <li>Fuel cards</li>
            </StyledList>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <StyledSectionHeader>Get paid by % </StyledSectionHeader>
            <StyledList>
              <li>Competitive payment</li>
              <li>
                Get payed by load, up to 88% - small fee is deducted for
                dispatch eld and accounting services
              </li>
              <li>Liability, cargo trailer and OCC insurance</li>
              <li>Dispath services - 27/7 dispatch 7 days a week</li>
              <li>
                Personalized dispatch - get a dispatcher that works for your
                style of driving
              </li>
              <li>No forced dispatch!</li>
              <li>
                ELD services - 24/7 7 days a week. Incudes all your logbook
                needs
              </li>
              <li>
                Accounting services - get all your needs met quickly. Payout
                every week.
              </li>
              <li>Pre Pass</li>
              <li>Fuel cards</li>
            </StyledList>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <StyledSectionHeader>
            {" "}
            Owner operator requirements{" "}
          </StyledSectionHeader>
          <StyledParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus
            ante, suscipit quis faucibus at, auctor nec nibh. Curabitur dictum
            elit sed dui malesuada, sit amet malesuada lacus gravida. Nullam
            lorem neque, consectetur a metus euismod, ullamcorper elementum
            quam.
          </StyledParagraph>
          <StyledParagraph>
            Praesent ut sem sed velit tristique fermentum vel ut purus. Sed
            sollicitudin, dui in fringilla venenatis, sem lectus auctor tortor,
            sit amet dignissim dolor nisl at mi. Mauris ac tempus arcu, id
            vestibulum dui. Vivamus eget posuere velit, ut tempus arcu. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Nullam a nisi
            eu felis rhoncus elementum nec quis augue. Sed ullamcorper nibh
            vitae pellentesque hendrerit. Aenean convallis nunc augue. Praesent
            varius ultricies rutrum.{" "}
          </StyledParagraph>
        </Grid>
      </StyledContentGrid>
    </StyledMainGrid>
  );
};
export default CompanyDrivers;

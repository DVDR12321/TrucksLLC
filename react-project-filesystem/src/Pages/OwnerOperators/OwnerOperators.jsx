import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import img from "../../assets/Drivers/ScrollBarWhite.png";
import {
  StyledContentGrid,
  StyledHeaderGrid,
  StyledImage,
  StyledList,
  StyledMainDescription,
  StyledMainGrid,
  StyledMainHeader,
  StyledParagraph,
  StyledScrollGrid,
  StyledSectionHeader,
} from "./StyledComponents";
import { useEffect, useState } from "react";
import GridLoader from "react-spinners/GridLoader";

const OwnerOperators = () => {
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
        <StyledMainGrid container>
          <StyledHeaderGrid item xs={12}>
            <Stack direction="column">
              <StyledMainHeader>Owner Operator</StyledMainHeader>
              <StyledMainDescription>
                Wether you are bringing your own truck leasing or renting,
                driving as a team or a solo driver, we have a plan for you here
                at Trucks LLC
              </StyledMainDescription>
              <StyledScrollGrid container>
                <StyledImage src={img} alt="scroll"></StyledImage>
                <Typography> Scroll to learn more</Typography>
              </StyledScrollGrid>
            </Stack>
          </StyledHeaderGrid>
          <StyledContentGrid>
            <Grid item xs={12}>
              <StyledParagraph>
                Whether you are bringing your own truck , or you are looking for
                an opportunity to lease a top of the line truck and pull steady
                dry van freight for excellent earnings – Trucks LLC is the right
                choice for you!
              </StyledParagraph>
              <StyledParagraph>
                At our company, we provide a variety of operating options,
                including dedicated lanes, one-day runs, and multi-day runs.
                Additionally, each driver is assigned their own dispatcher to
                ensure they can find the perfect balance of miles and home time.
                All of this is offered with the added bonus of competitive pay.
              </StyledParagraph>
            </Grid>
            <Grid container sx={{ textAlign: "left" }}>
              <Grid item xs={12} md={12} lg={6}>
                <StyledSectionHeader>Solo Drivers</StyledSectionHeader>
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
                  <li>PrePass</li>
                  <li>Fuel cards</li>
                </StyledList>
              </Grid>
              <Grid item xs={12} md={12} lg={6}>
                <StyledSectionHeader>Team Drivers</StyledSectionHeader>
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
                  <li>PrePass</li>
                  <li>Fuel cards</li>
                </StyledList>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <StyledSectionHeader>
                {" "}
                Lease and rent requirements{" "}
              </StyledSectionHeader>
              <StyledParagraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                lacus ante, suscipit quis faucibus at, auctor nec nibh.
                Curabitur dictum elit sed dui malesuada, sit amet malesuada
                lacus gravida. Nullam lorem neque, consectetur a metus euismod,
                ullamcorper elementum quam.
              </StyledParagraph>
              <StyledParagraph>
                Praesent ut sem sed velit tristique fermentum vel ut purus. Sed
                sollicitudin, dui in fringilla venenatis, sem lectus auctor
                tortor, sit amet dignissim dolor nisl at mi. Mauris ac tempus
                arcu, id vestibulum dui. Vivamus eget posuere velit, ut tempus
                arcu. Interdum et malesuada fames ac ante ipsum primis in
                faucibus. Nullam a nisi eu felis rhoncus elementum nec quis
                augue. Sed ullamcorper nibh vitae pellentesque hendrerit. Aenean
                convallis nunc augue. Praesent varius ultricies rutrum.{" "}
              </StyledParagraph>
            </Grid>
          </StyledContentGrid>
        </StyledMainGrid>
      )}
    </div>
  );
};
export default OwnerOperators;

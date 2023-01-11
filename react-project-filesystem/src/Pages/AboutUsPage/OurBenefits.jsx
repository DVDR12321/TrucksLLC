import { Divider, Grid } from "@mui/material";
import React from "react";
import FlipCard from "../../components/FlipCard/FlipCard";
import {
  StyledCardWrapper,
  StyledFrontCard,
  StyledSectionCaption,
} from "./StyledComponents";
import img1 from "../../assets/support.png";
import { Stack } from "@mui/system";

const FrontCard = (props) => (
  <StyledFrontCard>
    <Stack direction="column">
      <h3>{props.name} </h3>
      <img src={props.image} alt=""></img>{" "}
    </Stack>
  </StyledFrontCard>
);

const BackCard = () => <div> Back CARD </div>;

const cards = [
  { name: "Van" },
  { name: "Box Truck" },
  { name: "24/7 dispatch", image: img1 },
  { name: "Live tracking" },
  { name: "FTL/LTL" },
  { name: "Yard parking and shop" },
];

const OurBenefits = () => {
  return (
    <StyledCardWrapper
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Grid xs={12} item justifyContent="center">
        <StyledSectionCaption> Our Services </StyledSectionCaption>
      </Grid>
      <Grid item>
        <Divider></Divider>
      </Grid>
      <Grid item>
        <Grid container spacing={5} justifyContent="center">
          {cards.map((card, index) => {
            return (
              <Grid item key={index}>
                <FlipCard
                  FrontCard={() => (
                    <FrontCard name={card.name} image={card.image}></FrontCard>
                  )}
                  BackCard={BackCard}
                ></FlipCard>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </StyledCardWrapper>
  );
};

export default OurBenefits;

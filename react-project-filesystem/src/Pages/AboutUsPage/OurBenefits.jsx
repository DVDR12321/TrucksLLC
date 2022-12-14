import { Divider, Grid } from "@mui/material";
import React from "react";
import FlipCard from "../../components/FlipCard/FlipCard";
import {
  StyledCardWrapper,
  StyledFrontCard,
  StyledSectionCaption,
} from "./StyledComponents";

const FrontCard = (props) => <StyledFrontCard>{props.name} </StyledFrontCard>;

const BackCard = () => <div>Back CARD </div>;

const cards = [
  { name: "Truckload" },
  { name: "LTL" },
  { name: "Intermodal" },
  { name: "International Air & Ocean" },
  { name: "Small Parcel" },
  { name: "Specialized/Partial" },
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
      <Grid item justifyContent="center">
        <StyledSectionCaption> Our services for you </StyledSectionCaption>
      </Grid>
      <Grid item>
        <Divider></Divider>
      </Grid>
      <Grid item>
        <Grid container spacing={3} justifyContent="center">
          {cards.map((card, index) => {
            return (
              <Grid item key={index}>
                <FlipCard
                  FrontCard={() => <FrontCard name={card.name}></FrontCard>}
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

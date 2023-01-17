import { Grid } from "@mui/material";
import React from "react";
import { CardWrapperGrid, StyledWrapper } from "./StyledComponents";
import LaurelsCard from "../LaurelsCard/LaurelsCard";

const cards = [
  {
    id: 1,
    name: "Card1",
  },
  {
    id: 2,
    name: "Card2",
  },
  {
    id: 3,
    name: "Card3",
  },
];
const LaurelsPage = () => {
  return (
    <StyledWrapper container>
      {" "}
      <Grid item xs={0} md={1}></Grid>
      <CardWrapperGrid item xs={12} md={10}>
        <Grid container>
          {cards.map((card) => (
            <Grid item xs={12} sm={6} md={4}>
              {" "}
              <LaurelsCard key={card.id} name={card.name} />{" "}
            </Grid>
          ))}
        </Grid>
      </CardWrapperGrid>
      <Grid item xs={0} md={1}></Grid>
    </StyledWrapper>
  );
};

export default LaurelsPage;

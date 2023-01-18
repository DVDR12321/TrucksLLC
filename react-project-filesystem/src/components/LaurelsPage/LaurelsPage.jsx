import { Grid } from "@mui/material";
import React from "react";
import { CardWrapperGrid, StyledWrapper } from "./StyledComponents";
import LaurelsCard from "../LaurelsCard/LaurelsCard";

const cards = [
  {
    id: 1,
    name: "Card1",
    color1: "#d50000",
    color2: "#000",
    number: "95",
  },
  {
    id: 2,
    name: "Card2",
    color1: "#d50000",
    color2: "#000",
    number: "100",
  },
  {
    id: 3,
    name: "Card3",
    color1: "#d50000",
    color2: "#000",
    number: "70",
  },
];
const LaurelsPage = () => {
  return (
    <StyledWrapper container>
      {" "}
      <Grid item xs={0} md={1}></Grid>
      <CardWrapperGrid item xs={12} md={10}>
        <Grid container spacing={3}>
          {cards.map((card) => (
            <Grid item xs={12} sm={6} md={4}>
              {" "}
              <LaurelsCard
                key={card.id}
                name={card.name}
                color1={card.color1}
                color2={card.color2}
                number={card.number}
              />{" "}
            </Grid>
          ))}
        </Grid>
      </CardWrapperGrid>
      <Grid item xs={0} md={1}></Grid>
    </StyledWrapper>
  );
};

export default LaurelsPage;

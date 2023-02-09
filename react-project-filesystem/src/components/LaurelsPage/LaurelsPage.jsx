import { Grid } from "@mui/material";
import React from "react";
import { CardWrapperGrid, StyledWrapper } from "./StyledComponents";
import LaurelsCard from "../LaurelsCard/LaurelsCard";
const cards = [
  {
    id: 1,
    name: "Drivers pay",
    color1: "#b71c1c",
    color2: "#b71c1c",
    number: "88",
    bgColor: " #bdbdbd",
    headerColor: "#bdbdbd",
  },
  {
    id: 2,
    name: "Freight Safety Policy",
    color1: "#b71c1c",
    color2: "#b71c1c",
    number: "100",
    bgColor: "#bdbdbd",
    headerColor: "#bdbdbd",
  },
  {
    id: 3,
    name: "Deliveries completed",
    color1: "#b71c1c",
    color2: "#b71c1c",
    number: "100",
    bgColor: "#bdbdbd",
    headerColor: "#bdbdbd",
  },
];
const LaurelsPage = () => {
  return (
    <StyledWrapper container padding={2}>
      {" "}
      <Grid item xs={0} md={2}></Grid>
      <CardWrapperGrid item xs={12} md={8}>
        <Grid container spacing={3}>
          {cards.map((card) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {" "}
              <LaurelsCard
                key={card.id}
                name={card.name}
                color1={card.color1}
                color2={card.color2}
                number={card.number}
                backgroundColor={card.bgColor}
                headerColor={card.headerColor}
              />{" "}
            </Grid>
          ))}
        </Grid>
      </CardWrapperGrid>
      <Grid item xs={0} md={2}></Grid>
    </StyledWrapper>
  );
};

export default LaurelsPage;

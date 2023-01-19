import { Grid } from "@mui/material";
import React from "react";
import { CardWrapperGrid, StyledWrapper } from "./StyledComponents";
import LaurelsCard from "../LaurelsCard/LaurelsCard";
import { grey } from "@mui/material/colors";

const cards = [
  {
    id: 1,
    name: "Drivers pay",
    color1: "#fff",
    color2: "#fff",
    number: "88",
    bgColor: " linear-gradient(120deg , #000 0%, #fff 100%);",
    headerColor: "#6d0713",
  },
  {
    id: 2,
    name: "Freight Safety Policy",
    color1: "#d50000",
    color2: "#000",
    number: "100",
    bgColor: "#C0C0C0",
    headerColor: "#7f0000",
  },
  {
    id: 3,
    name: "Deliveries completed",
    color1: "#d50000",
    color2: "#000",
    number: "100",
    bgColor: "linear-gradient(-120deg , #000 0%, #fff 100%);",
    headerColor: "#6d0713",
  },
];
const LaurelsPage = () => {
  return (
    <StyledWrapper container>
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

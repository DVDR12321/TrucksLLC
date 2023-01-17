import React from "react";
import { Divider, Grid, Stack } from "@mui/material";
import {
  StyledBox,
  StyledImage,
  StyledPaper,
  StyledParagraph,
  StyledParagraphGrid,
} from "./StyledComponents";

const Item = (props) => {
  return (
    <StyledPaper elevation={3}>
      <StyledBox>''</StyledBox>
      <StyledParagraphGrid>
        <StyledParagraph>" {props.item.description} "</StyledParagraph>
      </StyledParagraphGrid>
      <Divider component="p"></Divider>
      <Grid sx={{ display: "flex", alignItems: "center" }}>
        <StyledImage src={props.item.image} alt="logo"></StyledImage>
        <h2 style={{ paddingLeft: "3ch" }}>{props.item.name}</h2>
      </Grid>
    </StyledPaper>
  );
};

export default Item;

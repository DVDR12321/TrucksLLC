import React from "react";
import {
  StyledCard,
  StyledCardHeader,
  StyledChartGrid,
  StyledHeaderGrid,
} from "./StyledComponents";
import { ProgressBar } from "../TestimonialsPage/ProgressBar/ProgressBar";
import { Grid } from "@mui/material";

const LaurelsCard = (props) => {
  return (
    <StyledCard backgroundColor={props.backgroundColor} elevation={5}>
      <Grid container spacing={5}>
        <StyledHeaderGrid headerColor={props.headerColor} item xs={12}>
          <StyledCardHeader>{props.name}</StyledCardHeader>
        </StyledHeaderGrid>
        <StyledChartGrid headerColor={props.headerColor} item xs={12}>
          <ProgressBar
            color1={props.color1}
            color2={props.color2}
            number={props.number}
          ></ProgressBar>
        </StyledChartGrid>
      </Grid>
    </StyledCard>
  );
};

export default LaurelsCard;

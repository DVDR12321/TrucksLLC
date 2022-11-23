import React from "react";
import Grid from "@mui/material/Grid";
import image from "../../assets/GrayLogo.jpg";
import { StyledImg } from "./StyledComponents";
import QuerryField from "./QuerryComponent";
import Questionform from "./QuestionsComponent";

const QuestionsPage = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <StyledImg src={image} alt="" />
      </Grid>
      <Grid item xs={12}>
        <QuerryField></QuerryField>
      </Grid>
      <Grid item xs={12}>
        <h1 style={{ textColor: "red" }}>1. About our firm</h1>
        <Questionform></Questionform>
      </Grid>
      <Grid item xs={12}>
        <h1 style={{ textColor: "red" }}>2. About our fleet</h1>
        <Questionform></Questionform>
      </Grid>
    </Grid>
  );
};
export default QuestionsPage;

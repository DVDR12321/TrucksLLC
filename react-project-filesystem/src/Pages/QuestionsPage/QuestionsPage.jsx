import React from "react";
import Grid from "@mui/material/Grid";
import image from "../../assets/GrayLogo.jpg";
import { StyledImg } from "./StyledComponents";
import QuerryField from "./QuerryComponent";
import Questionform from "./QuestionsComponent";

const QuestionsPage = () => {
  return (
    <Grid
      container
      spacing={5}
      sx={{ justifyContent: "center", textAlign: "center" }}
    >
      <Grid item xs={12}>
        <StyledImg src={image} alt="" />
      </Grid>

      <Grid item xs={10}>
        <h1 style={{ color: "red" }}> About our firm</h1>
        <Questionform></Questionform>
      </Grid>
      <Grid item xs={10}>
        <h1 style={{ color: "red" }}> About our fleet</h1>
        <Questionform></Questionform>
      </Grid>
      <Grid item xs={12}>
        <QuerryField></QuerryField>
      </Grid>
    </Grid>
  );
};
export default QuestionsPage;

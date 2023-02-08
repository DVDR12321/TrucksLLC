import React from "react";
import Grid from "@mui/material/Grid";
import image from "../../assets/Logo_Gray_Background.jpg";
import {
  StyledGridContainer,
  StyledHeaderTypography,
  StyledImg,
} from "./StyledComponents";
import Form from "./QuestionsForm";
import Accordion from "./QuestionsAccordion";
import { useEffect, useState } from "react";
import GridLoader from "react-spinners/GridLoader";

const QAPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StyledGridContainer
      container
      spacing={5}
      sx={{ justifyContent: "center", textAlign: "center" }}
    >
      <Grid item xs={12}>
        <StyledImg src={image} alt="" />
      </Grid>

      <Grid item xs={12} md={10}>
        <StyledHeaderTypography variant="h3" color="primary" gutterBottom>
          {" "}
          Regarding our company
        </StyledHeaderTypography>
        <Accordion></Accordion>
      </Grid>
      <Grid item xs={12} md={10}>
        <StyledHeaderTypography variant="h3" color="primary" gutterBottom>
          {" "}
          Regarding our fleet
        </StyledHeaderTypography>
        <Accordion></Accordion>
      </Grid>
      <Grid item xs={12}>
        <Form></Form>
      </Grid>
    </StyledGridContainer>
  );
};
export default QAPage;

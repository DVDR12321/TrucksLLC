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
  const [loading, setLoading] = useState(true);
  const override = {
    top: "50vh",
    left: "50vw",
  };
  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {loading ? (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <GridLoader
            cssOverride={override}
            color="#b71c1c"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
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
      )}
    </div>
  );
};
export default QAPage;

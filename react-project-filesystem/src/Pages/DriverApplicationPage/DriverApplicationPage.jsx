import { Card, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { Screen1 } from "./Screen1";
import { Screen2 } from "./Screen2";
import Screen3 from "./Screen3";
import img from "./LogoForm.png";

const FirstPageButton = (props) => {
  return (
    <Button
      variant={props.variant}
      fullWidth
      onClick={props.addTrip}
      color="red"
    >
      First Page
    </Button>
  );
};
const SecondPageButton = (props) => {
  return (
    <Button
      variant={props.variant}
      fullWidth
      onClick={props.addTrip}
      color="red"
    >
      Second Page
    </Button>
  );
};
const ThirdPageButton = (props) => {
  return (
    <Button
      variant={props.variant}
      fullWidth
      onClick={props.addTrip}
      color="red"
    >
      Third Page
    </Button>
  );
};

export const Apply = () => {
  const data = {
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
    EmailCheck: "",
    PhoneNumberCheck: "",
    Compare: false,
    Adress: [""],
    Accident: [{ Date: "", Description: "" }],
    Licence: [{ LDate: "", LDescription: "" }],
    Employment: [{ Name: "", DateFrom: "", DateTo: "" }],
    Position: "",
  };
  const [Trip, setTrip] = useState({
    First: true,
    Second: false,
    Third: false,
    VariantFirst: "",
    VariantSecond: "contained",
    VariantThird: "contained",
  });

  const [state, setState] = useState(data);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        sx={{ maxWidth: "70vw", height: "100%", margin: "20px 10px 20px 10px" }}
      >
        <Grid
          container
          sx={{
            padding: "30px",
            borderBottom: "3px inset black",
          }}
        >
          <Grid item xs={12} md={5}>
            <img
              src={img}
              alt="Trucks LLC logo"
              style={{ height: "100%", width: "100%", opacity: "0.5" }}
            ></img>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              variant="h2"
              textAlign="center"
              color="rgba(0, 0, 0, 0.3)"
            >
              {" "}
              Job Application Form
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            {Trip.First === true && (
              <Screen1 setState={setState} state={state} />
            )}
            {Trip.Second === true && (
              <Screen2 setState={setState} state={state} />
            )}
            {Trip.Third === true && (
              <Screen3 setState={setState} state={state}></Screen3>
            )}
          </Grid>

          <Grid item xs={12} md={4}>
            <FirstPageButton
              variant={Trip.VariantFirst}
              fullWidth
              addTrip={() =>
                setTrip((Trip) => ({
                  ...Trip,
                  First: true,
                  Second: false,
                  Third: false,
                  VariantFirst: "",
                  VariantSecond: "contained",
                  VariantThird: "contained",
                }))
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <SecondPageButton
              variant={Trip.VariantSecond}
              fullWidth
              addTrip={() =>
                setTrip((Trip) => ({
                  ...Trip,
                  First: false,
                  Second: true,
                  Third: false,
                  VariantFirst: "contained",
                  VariantSecond: "",
                  VariantThird: "contained",
                }))
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ThirdPageButton
              variant={Trip.VariantThird}
              addTrip={() =>
                setTrip((Trip) => ({
                  ...Trip,
                  First: false,
                  Second: false,
                  Third: true,
                  VariantFirst: "contained",
                  VariantSecond: "contained",
                  VariantThird: "",
                }))
              }
            />
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

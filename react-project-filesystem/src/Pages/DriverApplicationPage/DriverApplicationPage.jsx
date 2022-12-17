import React from "react";
import { Card, Button, Grid } from "@mui/material";
import { useState } from "react";
import { Screen1 } from "./Screen1";
import { Screen2 } from "./Screen2";

const Next = (props) => {
  return <Button onClick={props.addTrip}>Next</Button>;
};
const Back = (props) => {
  return <Button onClick={props.addTrip}>Back</Button>;
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
  };
  const [Trip, setTrip] = useState(true);
  const [state, setState] = useState(data);

  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <Card sx={{ maxWidth: "70vw" }}>
        {Trip === false && <Screen1 setState={setState} state={state} />}
        {Trip === true && <Screen2 />}
        <Back addTrip={() => setTrip(true)} />
        <Next addTrip={() => setTrip(false)} />
      </Card>
    </Grid>
  );
};

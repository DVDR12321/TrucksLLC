import React from "react";
import { Card, Button, Grid } from "@mui/material";
import { useState } from "react";
import { Screen1 } from "./Screen1";
import { Screen2 } from "./Screen2";
import Screen3 from "./Screen3";

const SecondPage = (props) => {
  return <Button onClick={props.addTrip}>Second Page</Button>;
};
const FirstPage = (props) => {
  return <Button onClick={props.addTrip}>First Page</Button>;
};
const ThirdPage = (props) => {
  return <Button onClick={props.addTrip}>Third Page</Button>;
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
    Licence: [{ Date: "", Description: "" }],
    Employment: [{ Name: "", DateFrom: "", DateTo: "" }],
    Position: "",
  };

  const [Trip, setTrip] = useState({
    First: true,
    Second: false,
    Third: false,
  });

  const [state, setState] = useState(data);

  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <Card sx={{ maxWidth: "70vw", height: "100%" }}>
        {Trip.First === true && <Screen1 setState={setState} state={state} />}
        {Trip.Second === true && <Screen2 setState={setState} state={state} />}
        {Trip.Third === true && (
          <Screen3 setState={setState} state={state}></Screen3>
        )}
      </Card>
      <Grid item xs={4}>
        <FirstPage
          fullWidth
          addTrip={() =>
            setTrip((Trip) => ({
              ...Trip,
              First: true,
              Second: false,
              Third: false,
            }))
          }
        />
      </Grid>
      <Grid item xs={4}>
        <SecondPage
          fullWidth
          addTrip={() =>
            setTrip((Trip) => ({
              ...Trip,
              First: false,
              Second: true,
              Third: false,
            }))
          }
        />
      </Grid>
      <Grid item xs={4}>
        <ThirdPage
          fullWidth
          addTrip={() =>
            setTrip((Trip) => ({
              ...Trip,
              First: false,
              Second: false,
              Third: true,
            }))
          }
        />
      </Grid>
    </Grid>
  );
};

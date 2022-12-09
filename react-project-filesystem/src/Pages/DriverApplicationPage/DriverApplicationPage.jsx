import React from "react";
import {
  Card,
  Button,
} from "@mui/material";
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
  const [state, setState] = useState(true);
  return (
    <Card>
      {state === true && <Screen1/>}
      {state === false && <Screen2 />}
      <Back addTrip={() => setState(true)} />  
      <Next addTrip={() => setState(false)} /> 
    </Card>
  );
};





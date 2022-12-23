import React from "react";
import {
  TextField,
  Grid,
  Typography,
  CardContent,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import PreviousEmployments from "./PreviousEmployments";

export const Screen2 = (props) => {
  const { state, setState } = props;

  // ADRESS FIELD ******************************************
  function AddAdress() {
    setState((state) => ({
      ...state,
      Adress: [...state.Adress, ""],
    }));
  }

  function RemoveAdress(index1) {
    let list = [...state.Adress];
    console.log(list);
    list.splice(-1);
    setState((state) => ({
      ...state,
      Adress: list,
    }));
  }

  function AdressChange(e, index1) {
    const { value } = e.target;
    let list = [...state.Adress];
    list[index1] = value;
    setState((state) => ({
      ...state,
      Adress: list,
    }));
  }

  // ACCIDENTS AND CITATIONS FIELD ******************************************

  function AddAccident() {
    setState((state) => ({
      ...state,
      Accident: [...state.Accident, { Date: "", Time: "" }],
    }));
  }

  function RemoveAccident(index) {
    let list = [...state.Accident];
    list.splice(-1);
    setState((state) => ({
      ...state,
      Accident: list,
    }));
  }

  function AccidentChange(e, index) {
    const { name, value } = e.target;
    let list = [...state.Accident];
    //console.log("list update", list);
    list[index][name] = value;
    setState((state) => ({
      ...state,
      Accident: list,
    }));
  }
  // TICKETS ******************************************

  function AddLicence() {
    setState((state) => ({
      ...state,
      Licence: [...state.Licence, { Date: "", Time: "" }],
    }));
  }

  function RemoveLience(Licence) {
    let list = [...state.Licence];
    list.splice(-1);
    setState((state) => ({
      ...state,
      Licence: list,
    }));
  }

  function LicenceChange(e, index) {
    const { name, value } = e.target;
    let list = [...state.Licence];
    //console.log("list update", list);
    list[index][name] = value;
    setState((state) => ({
      ...state,
      Licence: list,
    }));
  }
  //Main render..................................................................
  return (
    <form>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3" textAlign="center" color="rgb(255, 0, 0)">
              {" "}
              Drive for us
            </Typography>
            <Typography variant="body1" component="p" sx={{ margin: "1ch" }}>
              {" "}
              Send us aditional information so that we may expedite recruitment
              process for you !{" "}
            </Typography>
            <Typography variant="body3" component="p" sx={{ margin: "1ch" }}>
              {" "}
              * Symbol marks a required field{" "}
            </Typography>
            <br></br>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body3" component="p" sx={{ margin: "1ch" }}>
              {" "}
              Add current and previous adresses of residence:{" "}
            </Typography>
            {state.Adress.map((Adress, index1) => {
              return (
                <Grid container key={index1}>
                  <Grid item xs={12} md={12}>
                    <TextField
                      name="Adress"
                      color="red"
                      label={"Adress " + index1.toString()}
                      placeholder="476 Alderwood Rd.
                  Seymour, IN 47274"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => AdressChange(e, index1)}
                    ></TextField>
                  </Grid>
                </Grid>
              );
            })}
            <IconButton
              aria-label="add"
              color="red"
              onClick={() => AddAdress()}
            >
              <AddIcon />
            </IconButton>
            <IconButton aria-label="remove" color="red" onClick={RemoveAdress}>
              <RemoveIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" component="p" sx={{ margin: "1ch" }}>
              {" "}
              Were you in any major motor vheicle related Accidents in the past,
              and/or did you receive any trafic tickets? If so please list the
              date with a brief description of the event:
            </Typography>

            {state.Accident.map((x, index) => {
              return (
                <Grid container key={index}>
                  <Grid item xs={12} md={3}>
                    <TextField
                      name="Date"
                      type="date"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => AccidentChange(e, index)}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <TextField
                      name="Description"
                      type="Message"
                      label="Description"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => AccidentChange(e, index)}
                    ></TextField>
                  </Grid>
                </Grid>
              );
            })}
            <IconButton
              aria-label="add"
              color="red"
              onClick={() => AddAccident()}
            >
              <AddIcon />
            </IconButton>
            <IconButton
              aria-label="remove"
              color="red"
              onClick={RemoveAccident}
            >
              <RemoveIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" component="p" sx={{ margin: "1ch" }}>
              {" "}
              Please add your driving licences for the past 3 years along with
              their expiration dates:
            </Typography>
            {state.Licence.map((x, index) => {
              return (
                <Grid container key={index}>
                  <Grid item xs={12} md={3}>
                    <TextField
                      name="LicenceDate"
                      type="date"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => LicenceChange(e, index)}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <TextField
                      name="LicenceDescription"
                      type="Message"
                      label="State / Licence# / Type"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => LicenceChange(e, index)}
                      placeholder="State / Licence# / Type"
                    ></TextField>
                  </Grid>
                </Grid>
              );
            })}
            <IconButton
              aria-label="add"
              color="red"
              onClick={() => AddLicence()}
            >
              <AddIcon />
            </IconButton>
            <IconButton aria-label="remove" color="red" onClick={RemoveLience}>
              <RemoveIcon />
            </IconButton>
          </Grid>
          <Grid container>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{ margin: "1ch" }}
                >
                  Please enter the names of your previous employers, why you
                  left, and priod of time when you worked for them.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <PreviousEmployments> </PreviousEmployments>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  name="reason"
                  fullWidth
                  variant="outlined"
                  label="reason for leaving"
                ></TextField>
              </Grid>
              <Grid item xs={6} md={2}>
                <TextField
                  name="Date"
                  type="date"
                  variant="outlined"
                  fullWidth
                  required
                ></TextField>
              </Grid>
              <Grid item xs={6} md={2}>
                <TextField
                  name="Date"
                  type="date"
                  variant="outlined"
                  fullWidth
                  required
                ></TextField>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </form>
  );
};

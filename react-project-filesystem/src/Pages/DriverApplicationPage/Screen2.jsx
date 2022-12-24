import React from "react";
import {
  TextField,
  Grid,
  Typography,
  CardContent,
  IconButton,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import PreviousEmployments from "./PreviousEmployments";
import emailjs from "@emailjs/browser";

export const Screen2 = (props) => {
  const { state, setState } = props;

  // ADRESS FIELD ******************************************************

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
  const handleSubmit = () => {
    const form = state.form1Ref.current;
    emailjs
      .sendForm(
        "default_service",
        "template_5muable",
        form,
        "Bt5FJk_8UapAuvKNi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body1" component="p" sx={{ margin: "1ch" }}>
              {" "}
              Send us aditional information so that we may expedite recruitment
              process for you !{" "}
            </Typography>
            <Typography variant="body3" component="p" sx={{ margin: "1ch" }}>
              {" "}
              * Symbol marks a{" "}
              <span style={{ color: "rgb(255, 0, 0)" }}>
                required
              </span> field{" "}
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
                      label={"Adress " + (index1 += 1).toString()}
                      placeholder="476 Alderwood Rd.
                  Seymour, IN 47274"
                      variant="outlined"
                      fullWidth
                      required
                      multiline
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
              Were you in any major motor vehicle - related accidents in the
              past, and/or did you receive any trafic tickets? If so please list
              the date with a brief description of the event:
            </Typography>

            {state.Accident.map((x, index) => {
              return (
                <Grid container key={index} spacing={2}>
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
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="Description"
                      type="Message"
                      label="Description"
                      variant="outlined"
                      fullWidth
                      required
                      multiline
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
                <Grid container key={index} spacing={2}>
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
                  <Grid item xs={12} md={9}>
                    <TextField
                      name="LicenceDescription"
                      type="Message"
                      label="State / Licence# / Type"
                      variant="outlined"
                      fullWidth
                      required
                      multiline
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
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Typography variant="body1" component="p" sx={{ margin: "1ch" }}>
                Please{" "}
                <span style={{ fontWeight: "bold", color: "rgb(255, 0, 0" }}>
                  search
                </span>{" "}
                the names of your previous employers. Describe why you left and
                enter the priod of time when you worked for them.
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
                multiline
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
          <Grid item xs={0} md={8}></Grid>
          <Grid item xs={12} md={4}>
            <Button variant="outlined" fullWidth onClick={handleSubmit}>
              Submit Application
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </form>
  );
};

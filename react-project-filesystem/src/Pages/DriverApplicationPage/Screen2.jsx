import React from "react";
import { Grid, Typography, CardContent, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import PreviousEmployments from "./PreviousEmployments";

import { StyledTextField } from "./StyledComponents";
import { useRef } from "react";

export const Screen2 = (props) => {
  const { state, setState } = props;
  let formRef2 = useRef(null);

  // ADRESS FIELD ******************************************************

  function AddAdress() {
    setState((state) => ({
      ...state,
      Adress: [...state.Adress, ""],
    }));
  }

  function RemoveAdress(index1) {
    let list = [...state.Adress];
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
      Licence: [...state.Licence, { LDate: "", LDescription: "" }],
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

  // COMPANIES .....................................................................
  function AddCompany() {
    setState((state) => ({
      ...state,
      Company: [
        ...state.Company,
        { Name: "", Reason: "", DateFrom: "", DateTo: "" },
      ],
    }));
  }
  function RemoveCompany(Licence) {
    let list = [...state.Licence];
    list.splice(-1);
    setState((state) => ({
      ...state,
      Company: list,
    }));
  }

  function CompanyChange(e, index) {
    const { name, value } = e.target;
    let list = [...state.Company];
    //console.log("list update", list);
    list[index][name] = value;
    setState((state) => ({
      ...state,
      Company: list,
    }));
  }

  //Main render..................................................................

  return (
    <form ref={formRef2}>
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
            <Grid container spacing={2}>
              {state.Adress.map((Adress, index1) => {
                return (
                  <Grid key={index1} item xs={12}>
                    <Grid container>
                      <Grid item xs={12} md={12}>
                        <StyledTextField
                          name="Adress"
                          color="primary"
                          label={"Adress " + (index1 += 1).toString()}
                          placeholder="476 Alderwood Rd.
                  Seymour, IN 47274"
                          variant="outlined"
                          fullWidth
                          required
                          onChange={(e) => AdressChange(e, index1)}
                          shape="filled"
                        ></StyledTextField>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
            <IconButton
              aria-label="add"
              color="primary"
              onClick={() => AddAdress()}
            >
              <AddIcon />
            </IconButton>
            <IconButton
              aria-label="remove"
              color="primary"
              onClick={RemoveAdress}
            >
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
            <Grid container spacing={2}>
              {state.Accident.map((x, index) => {
                return (
                  <Grid item xs={12} key={index}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={3}>
                        <StyledTextField
                          name="Date"
                          type="date"
                          variant="outlined"
                          fullWidth
                          required
                          onChange={(e) => AccidentChange(e, index)}
                        ></StyledTextField>
                      </Grid>
                      <Grid item xs={12} md={9}>
                        <StyledTextField
                          name="Description"
                          type="Message"
                          label="Description"
                          variant="outlined"
                          fullWidth
                          required
                          multiline
                          onChange={(e) => AccidentChange(e, index)}
                        ></StyledTextField>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
            <IconButton
              aria-label="add"
              color="primary"
              onClick={() => AddAccident()}
            >
              <AddIcon />
            </IconButton>
            <IconButton
              aria-label="remove"
              color="primary"
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
            <Grid container spacing={2}>
              {state.Licence.map((x, index) => {
                return (
                  <Grid item key={index} xs={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={3}>
                        <StyledTextField
                          name="LDate"
                          type="date"
                          variant="outlined"
                          fullWidth
                          required
                          onChange={(e) => LicenceChange(e, index)}
                        ></StyledTextField>
                      </Grid>
                      <Grid item xs={12} md={9}>
                        <StyledTextField
                          name="LDescription"
                          type="Message"
                          label="State / Licence# / Type"
                          variant="outlined"
                          fullWidth
                          required
                          multiline
                          onChange={(e) => LicenceChange(e, index)}
                          placeholder="State / Licence# / Type"
                        ></StyledTextField>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
            <IconButton
              aria-label="add"
              color="primary"
              onClick={() => AddLicence()}
            >
              <AddIcon />
            </IconButton>
            <IconButton
              aria-label="remove"
              color="primary"
              onClick={RemoveLience}
            >
              <RemoveIcon />
            </IconButton>
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography variant="body1" component="p" sx={{ margin: "1ch" }}>
              Please{" "}
              <span style={{ fontWeight: "bold", color: "rgb(255, 0, 0" }}>
                search
              </span>{" "}
              the companies you previously worked with. Describe why you left
              and enter the priod of time when you worked for them.
            </Typography>

            <Grid container spacing={2}>
              {state.Company.map((x, index) => {
                return (
                  <Grid item key={index} xs={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={4}>
                        <PreviousEmployments
                          index={index}
                          state={state}
                          setState={setState}
                        >
                          {" "}
                        </PreviousEmployments>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <StyledTextField
                          name="Reason"
                          fullWidth
                          variant="outlined"
                          label="reason for leaving"
                          multiline
                          onChange={(e) => CompanyChange(e, index)}
                        ></StyledTextField>
                      </Grid>
                      <Grid item xs={6} md={2}>
                        <StyledTextField
                          name="DateFrom"
                          type="date"
                          variant="outlined"
                          fullWidth
                          required
                          onChange={(e) => CompanyChange(e, index)}
                        ></StyledTextField>
                      </Grid>
                      <Grid item xs={6} md={2}>
                        <StyledTextField
                          name="DateTo"
                          type="date"
                          variant="outlined"
                          fullWidth
                          required
                          onChange={(e) => CompanyChange(e, index)}
                        ></StyledTextField>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
            <IconButton
              aria-label="add"
              color="primary"
              onClick={() => AddCompany()}
            >
              <AddIcon />
            </IconButton>
            <IconButton
              aria-label="remove"
              color="primary"
              onClick={RemoveCompany}
            >
              <RemoveIcon />
            </IconButton>
          </Grid>
          <Grid item xs={0} md={8}></Grid>
          <Grid item xs={12} md={4}></Grid>
        </Grid>
      </CardContent>
    </form>
  );
};

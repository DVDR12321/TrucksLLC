import React from "react";
import {
  Grid,
  CardContent,
  Button,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import Select from "@mui/material/Select";
import { useState } from "react";
import { forwardRef } from "react";
import { useRef, useEffect } from "react";
import {
  StyledInstructionsText,
  StyledLabelText,
  StyledSpan,
  StyledTextField,
} from "./StyledComponents";
import SnackBarComponent from "../../components/SnackBar/SnackBarComponent";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const preventCopyPaste = () => {
  const eInput = document.getElementById("echeck");
  const tInput = document.getElementById("tcheck");
  eInput.onpaste = (e) => e.preventDefault();
  tInput.onpaste = (e) => e.preventDefault();
};

export const Screen1 = (props) => {
  const { state, setState } = props;

  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState("");
  const [snackbar, setSnackbar] = useState(false);
  const formRef = useRef();
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);

  useEffect(() => {
    preventCopyPaste();
  }, []);

  function reloadWithDelay() {
    setTimeout(function () {
      setOpen(false);
      setSent(false);
      window.location.reload();
    }, 3000);
  }

  const handlePositionChange = (event) => {
    setState((state) => ({ ...state, Position: event.target.value }));
  };

  useEffect(() => {
    // Clear the custom error message for the email field if it matches the email check field
    if (state.Email === state.EmailCheck) {
      emailRef.current.setCustomValidity("");
      emailRef.current.reportValidity();
    }
  }, [state.Email, state.EmailCheck]);

  useEffect(() => {
    // Clear the custom error message for the phone number field if it matches the phone number check field
    if (state.PhoneNumber === state.PhoneNumberCheck) {
      phoneNumberRef.current.setCustomValidity("");
      phoneNumberRef.current.reportValidity();
    }
  }, [state.PhoneNumber, state.PhoneNumberCheck]);

  const handleOpenDialog = () => {
    if (formRef.current.checkValidity()) {
      // Form is valid, check email and phone number fields
      if (state.Email !== state.EmailCheck) {
        emailRef.current.setCustomValidity(
          "Entered e-mail adresses are not matching"
        );
        emailRef.current.reportValidity();
        return;
      }
      if (state.PhoneNumber !== state.PhoneNumberCheck) {
        phoneNumberRef.current.setCustomValidity(
          "Entered phone numbers are not matching"
        );
        phoneNumberRef.current.reportValidity();
        return;
      }
      // Both email and phone number fields are valid
      setOpen(true);
    } else {
      // Form is invalid, display errors
      formRef.current.reportValidity();
    }
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    setSent(true);
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    };

    fetch("http://localhost:4000/api/mailer", options)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setMessage("Data submitted successfully!");
        setSnackbar(true);
        reloadWithDelay();
      })
      .catch((res) => {
        setMessage("Error submitting data");
        setSent(false);
        setSnackbar(true);
      });
  };

  const HandleInputChange = (e) => {
    const { name, value } = e.target;
    setState((state) => ({ ...state, [name]: value }));
  };

  return (
    <form ref={formRef}>
      <CardContent>
        <Grid item xs={12}>
          <StyledInstructionsText
            component="p"
            sx={{ margin: "1ch", textAlign: "center", fontWeight: "bold" }}
          >
            {" "}
            Fill out the form and our recuriting team will get back to you as
            soon as posible{" "}
          </StyledInstructionsText>
          <StyledLabelText sx={{ marginBottom: "1ch", fontWeight: "bold" }}>
            {" "}
            * Symbol marks a{" "}
            <span style={{ color: "rgb(255, 0, 0)" }}>required</span> field{" "}
          </StyledLabelText>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <StyledTextField
              name="FirstName"
              color="primary"
              label="First Name"
              placeholder=""
              variant="outlined"
              fullWidth
              required
              onChange={(e) => HandleInputChange(e)}
              value={state.FirstName}
              shape="outlined"
            ></StyledTextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTextField
              name="LastName"
              color="primary"
              label="Last Name"
              placeholder=""
              variant="outlined"
              fullWidth
              required
              onChange={(e) => HandleInputChange(e)}
              value={state.LastName}
            ></StyledTextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTextField
              type="email"
              name="Email"
              color="primary"
              label="Email"
              placeholder="@"
              variant="outlined"
              fullWidth
              required
              onChange={(e) => HandleInputChange(e)}
              value={state.Email}
            ></StyledTextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTextField
              inputRef={emailRef}
              id="echeck"
              type="email"
              name="EmailCheck"
              color="primary"
              label="Enter your email again "
              placeholder="@"
              variant="outlined"
              fullWidth
              required
              onChange={(e) => HandleInputChange(e)}
              value={state.EmailCheck}
            ></StyledTextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTextField
              type="tel"
              name="PhoneNumber"
              color="primary"
              label="Phone Number"
              placeholder="+1"
              variant="outlined"
              fullWidth
              required
              onChange={(e) => HandleInputChange(e)}
              value={state.PhoneNumber}
            ></StyledTextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTextField
              inputRef={phoneNumberRef}
              id="tcheck"
              type="tel"
              name="PhoneNumberCheck"
              color="primary"
              label="Enter your number again "
              placeholder="+1"
              variant="outlined"
              fullWidth
              required
              onChange={(e) => HandleInputChange(e)}
              value={state.PhoneNumberCheck}
            ></StyledTextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="select-label">Position</InputLabel>
                <Select
                  name="Position"
                  labelId="select-label"
                  id="select"
                  value={state.Position}
                  label="I am applying for the position of:"
                  onChange={handlePositionChange}
                  required
                >
                  <MenuItem value={"Owner Operator"}>Owner Operator</MenuItem>
                  <MenuItem value={"Company driver"}>Company driver</MenuItem>
                  <MenuItem value={"Paid by %"}>Paid by % </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            {state.Compare === false && (
              <div>
                <Button
                  color="primary"
                  variant="outlined"
                  onClick={handleOpenDialog}
                  fullWidth
                >
                  Submit Application
                </Button>
                <Dialog
                  open={open}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleCloseDialog}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle sx={{ textAlign: "center" }}>
                    {"Are you sure you want to submit?"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                      You can provide aditional data on second and third page.
                      Providing us with more information means our team will be
                      <StyledSpan>
                        prioritizing your application
                      </StyledSpan>{" "}
                      over the others.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button disabled={sent} onClick={handleSubmit}>
                      {sent ? "Sending..." : "Submit"}
                    </Button>
                    <SnackBarComponent
                      snackbar={snackbar}
                      setSnackbar={setSnackbar}
                      message={message}
                      setMessage={setMessage}
                    ></SnackBarComponent>
                  </DialogActions>
                </Dialog>
              </div>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </form>
  );
};

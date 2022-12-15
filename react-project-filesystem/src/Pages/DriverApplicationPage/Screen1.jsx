import {
  TextField,
  Grid,
  Typography,
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
import emailjs from "@emailjs/browser";
import Select from "@mui/material/Select";
import { useState } from "react";
import { forwardRef } from "react";

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Screen1 = (props) => {
  const { state, setState } = props;
  const [position, setPosition] = useState("");
  const [open, setOpen] = useState(false);

  window.onload = () => {
    const eInput = document.getElementById("echeck");
    const tInput = document.getElementById("tcheck");
    eInput.onpaste = (e) => e.preventDefault();
    tInput.onpaste = (e) => e.preventDefault();
  };

  const handleChange = (event) => {
    setPosition(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const HandleInputChange = (e) => {
    const { name, value } = e.target;
    setState((state) => ({ ...state, [name]: value }));
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    if (
      state.PhoneNumber === state.PhoneNumberCheck &&
      state.Email === state.EmailCheck
    ) {
      emailjs
        .sendForm(
          "default_service",
          "template_5muable",
          event.target,
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
      event.target.reset();
    } else {
      setState((state) => ({ ...state, Compare: true }));
      sleep(3000);
      setState((state) => ({ ...state, Compare: false }));
    }
  };

  return (
    <form onSubmit={SubmitHandler}>
      <CardContent>
        <Grid item xs={12}>
          <Typography variant="h3" textAlign="center" color="rgb(255, 0, 0)">
            {" "}
            Drive for us
          </Typography>
          <Typography variant="body1" component="p" sx={{ margin: "1ch" }}>
            {" "}
            Fill out the form, and our recuriting team will get back at you
            within a day!{" "}
          </Typography>
          <Typography variant="body3" component="p" sx={{ margin: "1ch" }}>
            {" "}
            * Symbol marks a required field{" "}
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              name="FirstName"
              color="red"
              label="First Name"
              placeholder=""
              variant="outlined"
              fullWidth
              required
              onChange={(e) => HandleInputChange(e)}
              value={state.FirstName}
            ></TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              name="LastName"
              color="red"
              label="Last Name"
              placeholder=""
              variant="outlined"
              fullWidth
              required
              onChange={(e) => HandleInputChange(e)}
              value={state.LastName}
            ></TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              type="email"
              name="Email"
              color="red"
              label="Email"
              placeholder="@"
              variant="outlined"
              fullWidth
              required
              onChange={(e) => HandleInputChange(e)}
              value={state.Email}
            ></TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="echeck"
              type="email"
              name="EmailCheck"
              color="red"
              label="Enter your email again for validation"
              placeholder="@"
              variant="outlined"
              fullWidth
              required
              onChange={(e) => HandleInputChange(e)}
              value={state.EmailCheck}
            ></TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              type="tel"
              name="PhoneNumber"
              color="red"
              label="Phone Number"
              placeholder="+1"
              variant="outlined"
              fullWidth
              required
              onChange={(e) => HandleInputChange(e)}
              value={state.PhoneNumber}
            ></TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="tcheck"
              type="tel"
              name="PhoneNumberCheck"
              color="red"
              label="Enter your number again for validation"
              placeholder="+1"
              variant="outlined"
              fullWidth
              required
              onChange={(e) => HandleInputChange(e)}
              value={state.PhoneNumberCheck}
            ></TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="select-label">Position</InputLabel>
                <Select
                  labelId="select-label"
                  id="select"
                  value={position}
                  label="I am applying for the position of:"
                  onChange={handleChange}
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
                <Button variant="outlined" onClick={handleClickOpen} fullWidth>
                  Submit Application
                </Button>
                <Dialog
                  open={open}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleClose}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle>
                    {"Are you sure you want to submit?"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                      You can submit your application with data you entered so
                      far, or fill pages 2 and 3 (optional). Providing us with
                      more information means our team will be prioritizing your
                      application over others.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={SubmitHandler}>Submit</Button>
                  </DialogActions>
                </Dialog>
              </div>
            )}
            {state.Compare === true && (
              <Button disabled color="red">
                {" "}
                Entered data not matching{" "}
              </Button>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </form>
  );
};

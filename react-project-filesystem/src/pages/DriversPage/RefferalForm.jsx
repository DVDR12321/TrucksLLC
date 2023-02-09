import {
  CardContent,
  Grid,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import { StyledButton, StyledCard, StyledSpan } from "./StyledComponents";
import SnackBarComponent from "../../components/SnackBar/SnackBarComponent";
import { useRef, useState } from "react";

const RefferalForm = () => {
  const [snackbar, setSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const formRef = useRef(null);

  // populate with form data
  const data = {
    FirstName: "",
    LastName: "",
    Email: "",
    RefferalEmail: "",
    Message: "",
  };
  const [state, setState] = useState(data);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
    console.log(state);
  };

  // form data packed for email
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(state),
  };
  //send email
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/api/mailerRefferal", options)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setMessage("Refferal submitted successfully!");
        setSnackbar(true);
      })
      .catch((res) => {
        console.log(res);
        setMessage("Failed submitting refferal");
        setSnackbar(true);
      });
    formRef.current.reset();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <StyledCard
        sx={{
          padding: "2vmax 2vmin",
          borderRadius: "3%",
        }}
      >
        <CardContent>
          <Typography variant="h5">Reffer a friend:</Typography>
          <Typography color="textSecondary" variant="body2" component="p">
            Refer a driver you know and become eligible for the
            <StyledSpan> refferal bonus!</StyledSpan>
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="FirstName"
                label="First name"
                color="error"
                placeholder=""
                variant="outlined"
                fullWidth
                required
                onChange={(e) => {
                  handleChange(e);
                }}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="LastName"
                label="Last name"
                color="error"
                placeholder=""
                variant="outlined"
                fullWidth
                required
                onChange={(e) => {
                  handleChange(e);
                }}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="Email"
                label="Your e-mail"
                color="error"
                type="email"
                placeholder="Enter your email"
                variant="outlined"
                fullWidth
                required
                onChange={(e) => {
                  handleChange(e);
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Referred person's email"
                name="RefferalEmail"
                color="error"
                type="email"
                placeholder="Enter email of the person you wish to refer"
                variant="outlined"
                fullWidth
                required
                onChange={(e) => {
                  handleChange(e);
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Comment:"
                name="Message"
                color="error"
                type="Message"
                multiline
                rows={2}
                placeholder=""
                variant="outlined"
                fullWidth
                required
                onChange={(e) => {
                  handleChange(e);
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <MessageIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <StyledButton
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit Refferal
              </StyledButton>
              <SnackBarComponent
                snackbar={snackbar}
                setSnackbar={setSnackbar}
                message={message}
                setMessage={setMessage}
              ></SnackBarComponent>
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>
    </form>
  );
};
export default RefferalForm;

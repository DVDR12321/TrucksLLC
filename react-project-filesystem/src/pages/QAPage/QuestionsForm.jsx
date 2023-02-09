import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import MessageIcon from "@mui/icons-material/Message";
import { useRef, useState } from "react";
import SnackBarComponent from "../../components/SnackBar/SnackBarComponent";
import { StyledContactCaption } from "./StyledComponents";

const QuestionsForm = () => {
  const [snackbar, setSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const formRef = useRef(null);

  // populate with form data
  const data = {
    FirstName: "",
    LastName: "",
    Email: "",
    PhoneNumber: "",
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

  // reload wondow
  function reloadWithDelay() {
    setTimeout(function () {
      window.location.reload();
    }, 3000);
  }
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
    fetch("http://localhost:4000/api/mailerMessage", options)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setMessage("Message submitted successfully!");
        setSnackbar(true);
      })
      .catch((res) => {
        console.log(res);
        setMessage("Failed submitting message");
        setSnackbar(true);
      });
    formRef.current.reset();
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <Card
        sx={{
          maxWidth: "850px",
          margin: "20px auto",
          padding: "2vmax 2vmin",
          borderRadius: "10px",
        }}
      >
        <CardContent>
          <StyledContactCaption
            color="primary"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            We are here for all your inquiries:
          </StyledContactCaption>
          <Typography
            gutterBottom
            color="textSecondary"
            variant="body2"
            component="p"
          >
            Fill in the form and our team will get back at you within 24 hours!
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="FirstName"
                label="First Name"
                placeholder=""
                variant="outlined"
                color="primary"
                fullWidth
                required
                onChange={(e) => handleChange(e)}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="LastName"
                label="Last name"
                placeholder=""
                variant="outlined"
                color="primary"
                fullWidth
                required
                onChange={(e) => handleChange(e)}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                name="Email"
                label="E-mail"
                placeholder="@"
                variant="outlined"
                color="primary"
                fullWidth
                required
                onChange={(e) => handleChange(e)}
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
                name="PhoneNumber"
                label="Phone Number"
                placeholder="+1"
                variant="outlined"
                color="primary"
                fullWidth
                onChange={(e) => handleChange(e)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="Message"
                name="Message"
                label="Enter your question:"
                placeholder=""
                variant="outlined"
                color="primary"
                multiline
                rows={3}
                fullWidth
                onChange={(e) => handleChange(e)}
                required
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
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
              <SnackBarComponent
                snackbar={snackbar}
                setSnackbar={setSnackbar}
                message={message}
                setMessage={setMessage}
              ></SnackBarComponent>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
};

export default QuestionsForm;

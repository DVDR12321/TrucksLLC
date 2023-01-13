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
import emailjs from "@emailjs/browser";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import MessageIcon from "@mui/icons-material/Message";
import { useRef } from "react";

const QuestionsForm = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "default_service",
        "template_13pemog",
        formRef.current,
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
    formRef.current.reset();
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <Card
        sx={{
          maxWidth: "450px",
          margin: "10px auto",
          padding: "2vmax 2vmin",
          borderRadius: "5%",
        }}
      >
        <CardContent>
          <Typography variant="h5" color="primary">
            Ask us a question:
          </Typography>
          <Typography
            gutterBottom
            color="textSecondary"
            variant="body2"
            component="p"
          >
            Fill the form and our team will get back at you within 24 hours!
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="First_Name"
                label="First Name"
                placeholder=""
                variant="outlined"
                color="primary"
                fullWidth
                required
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="Last_Name"
                label="Last name"
                placeholder=""
                variant="outlined"
                color="primary"
                fullWidth
                required
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                name="Email_"
                label="E-mail"
                placeholder="@"
                variant="outlined"
                color="primary"
                fullWidth
                required
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
                name="Phone_Number"
                label="Phone Number"
                placeholder="+1"
                variant="outlined"
                color="primary"
                fullWidth
                required
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
                name="Message_"
                label="Enter your question:"
                placeholder=""
                variant="outlined"
                color="primary"
                multiline
                rows={3}
                fullWidth
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
                Submit your question
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
};

export default QuestionsForm;

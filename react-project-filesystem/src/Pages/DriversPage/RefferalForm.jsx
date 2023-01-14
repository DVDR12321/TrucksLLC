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
import MessageIcon from "@mui/icons-material/Message";
import { StyledSpan2 } from "./StyledComponents";

const RefferalForm = () => {
  return (
    <form style={{ height: "80vh" }}>
      <Card
        sx={{
          maxWidth: "450px",
          margin: "0 auto",
          padding: "2vmax 2vmin",
          borderRadius: "5%",
        }}
      >
        <CardContent>
          <Typography variant="h5">Reffer a friend:</Typography>
          <Typography color="textSecondary" variant="body2" component="p">
            Fill the form and become eligible for our refferal bonus!
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                color="error"
                label="Name"
                placeholder=""
                variant="outlined"
                fullWidth
                required
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                color="error"
                label="Last name"
                placeholder=""
                variant="outlined"
                fullWidth
                required
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                color="error"
                type="email"
                label="Your e-mail"
                placeholder="Enter your email"
                variant="outlined"
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
                color="error"
                type="email"
                label="Referral email"
                placeholder="Enter email of the person you wish to refer"
                variant="outlined"
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
                color="error"
                type="Message"
                multiline
                rows={2}
                label="Comment:"
                placeholder=""
                variant="outlined"
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
                <StyledSpan2> $ </StyledSpan2> Submit Refferal{" "}
                <StyledSpan2> $ </StyledSpan2>
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
};
export default RefferalForm;

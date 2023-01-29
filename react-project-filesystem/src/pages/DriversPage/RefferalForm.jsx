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

const RefferalForm = () => {
  return (
    <form>
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
              <StyledButton
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit Refferal
              </StyledButton>
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>
    </form>
  );
};
export default RefferalForm;

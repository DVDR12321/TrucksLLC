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

function QuerryField() {
  return (
    <form>
      <Card
        sx={{ maxWidth: "450px", margin: "0 auto", padding: "2vmax 2vmin", borderRadius:'5%' }}
      >
        <CardContent>
          <Typography variant="h5" color="red">
            Ask us a question:
          </Typography>
          <Typography color="textSecondary" variant="body2" component="p">
            Fill the form and our team will get back at you within 24 hours!
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                color="red"
                label="Name"
                placeholder=""
                variant="outlined"
                fullWidth
                required
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                color="red"
                label="Last name"
                placeholder=""
                variant="outlined"
                fullWidth
                required
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                color="red"
                type="email"
                label="e-mail"
                placeholder="@"
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
                color="red"
                label="Phone Number"
                placeholder="+1"
                variant="outlined"
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
                color="red"
                type="Message"
                multiline
                rows={3}
                label="Your question:"
                placeholder=""
                variant="filled"
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
              <Button type="submit" variant="outlined" color="red" fullWidth>
                Submit question
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
}
export default QuerryField;

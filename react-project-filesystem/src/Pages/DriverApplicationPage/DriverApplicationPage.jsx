import React from "react";
import { Grid, Card, CardContent, Typography, TextField } from "@mui/material";
import { useState } from "react";

export const Apply = () => {
  const [FirstName, setFirstName] = useState(""); 
  console.log(FirstName);
  const [LastName, setLastName] = useState("");
  console.log(LastName);
  return (
    <Card>
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
              color="red"
              label="First Name"
              placeholder=""
              variant="outlined"
              fullWidth
              required
              // value={name}
              onChange = { e => setFirstName(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              color="red"
              label="Last Name"
              placeholder=""
              variant="outlined"
              fullWidth
              required
              onChange = { e => setLastName(e.target.value)}
            ></TextField>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              color="red"
              type="tel"
              label="Phone Number"
              placeholder="+1"
              variant="outlined"
              fullWidth
              required
            ></TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              color="red"
              type="email"
              label="Email adress"
              placeholder="@"
              variant="outlined"
              fullWidth
              required
            ></TextField>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

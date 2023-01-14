import React from "react";
import Grid from "@mui/material/Grid";
import SimpleMap from "./GoogleMaps";
import { useEffect } from "react";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}>
        <div>
          <h1>Contact us</h1>
        </div>
      </Grid>
      <Grid item xs={12}>
        <SimpleMap></SimpleMap>
      </Grid>
    </Grid>
  );
};
export default ContactPage;

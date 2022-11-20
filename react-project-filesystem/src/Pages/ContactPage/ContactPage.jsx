import React from "react";
import Grid from '@mui/material/Grid';
import { StyledDiv } from "./StyledComponents";
import GoogleMaps from "./GoogleMaps";
import SimpleMap from "./GoogleMaps";

const ContactPage = () => {
  return (
    <Grid container spacing={2} >
      <Grid item xs={12}>

      </Grid>
      <Grid item xs={12}>
        <StyledDiv>
          <h1>Contact us</h1>
        </StyledDiv>
      </Grid>
      <Grid item xs={12}>
      <SimpleMap></SimpleMap>
      </Grid>
    </Grid>
    
  );
    
};
export default ContactPage;

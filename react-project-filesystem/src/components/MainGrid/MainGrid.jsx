import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Mainscreen from "../MainScreen/MainScreen";
import VideoPlayer from "../VideoScreen/VideoPlayer";
import References from "../References/References";
import Offers from "../Offers/Offers";

export default function MainGrid() {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Mainscreen></Mainscreen>
        </Grid>
        <Grid item spacing={1} xs={12}>
          <VideoPlayer></VideoPlayer>
        </Grid>
        <Grid container item spacing={2}>
          <Grid item xs={6}>
            <References></References>
          </Grid>
          <Grid item xs={6}>
            <Offers />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div>
            <h1>$$$ Payments</h1>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

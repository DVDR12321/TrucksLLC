import * as React from 'react';
//import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Mainscreen from '../MainScreen/main-screen';
import Videoplayer from '../video screen/video-player';
import References from '../references/references';
import Offers from '../offers/offers'

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function MainGrid() {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
            <Mainscreen></Mainscreen>
        </Grid>
        <Grid item spacing = {1} xs={12}>
          <Videoplayer></Videoplayer>
        </Grid>
        <Grid container item spacing ={1} sx = {{backgroundColor:'#1f1818'}}>
          <Grid item xs = {6}>
            <References></References>
          </Grid>
          <Grid item xs = {6}>
            <Offers/>
          </Grid>
        </Grid>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </Box>
  );
}

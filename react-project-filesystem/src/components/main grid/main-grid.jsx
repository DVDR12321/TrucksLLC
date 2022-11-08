import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Mainscreen from '../MainScreen/main-screen';
import Videoplayer from '../video screen/video-player';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MainGrid() {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
            <Mainscreen></Mainscreen>
        </Grid>
        <Grid item xs={12}>
          <Videoplayer></Videoplayer>
        </Grid>
        <Grid container item spacing ={2}>
          <Grid item xs = {6}>
            <Item> References </Item>
            </Grid>
          <Grid item xs = {6}>
            <Item>WhatWeOffer</Item>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Item>Payments</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image1 from '../../assets/xpo-logistics.png';
import './main-screen.css'

export default function Brokercard() {
  return (
    <Card variant="outlined" sx={{ height:'80%', width:'80%' }}>

      <CardContent>
        {/* <Typography gutterBottom variant="h5" component="div">
          Rating
        </Typography>
        <Typography variant="body2" color="text.secondary">
          100/100
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

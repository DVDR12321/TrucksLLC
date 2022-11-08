import * as React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './main-screen.css'

export default function Brokercard() {
  return (
    <Card  sx={{ height:'100vh', width:'100%'}}>
    <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="XPO"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Score
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Platinum tier carrier on XPO rating score 90/100
                OnTime 95/100 OnTimePickup 89/100
              </Typography>
            </CardContent>
          </CardActionArea>
    </Card>
  );
}

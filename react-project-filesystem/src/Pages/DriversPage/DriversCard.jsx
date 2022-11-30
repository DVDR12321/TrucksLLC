import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { StyledButton } from './StyledComponents';

export default function DriverCard({img1, text, header, button1, button2}) {
  return (
    <Card sx={{ maxWidth: 450, borderRadius:"5%"}}>
      <CardMedia
        component="img"
        height="60%"
        image={img1}
        alt=" "
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {header}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:'space-between'}}>
        <StyledButton variant="contained" color='red'>{button1}</StyledButton>
        <StyledButton  variant="contained" color='red' >{button2}</StyledButton>
      </CardActions>
    </Card>
  );
}

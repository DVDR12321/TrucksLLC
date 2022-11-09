import * as React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './broker-card.css'
import '../MainScreen/main-screen.css'

const Brokercard = (props) => {
  const {imagep, headerp, textp} = props;
  return (
    <Card variant='outlined' style={{ 
      transform: 'revert',
    backgroundColor:'black',
    opacity:'0.9'}}>
    <CardActionArea >
            <CardMedia
              component="img"
              height="140"
              image={imagep}
              alt="XPO"
              sx ={{opacity:'1',objectFit:"cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h3" color='white' component="div" sx={{alignContent:'justify'}}>
                {headerp}
              </Typography>
              <Typography variant="body2" color="white" >
                {textp}
              </Typography>
            </CardContent>
          </CardActionArea>
    </Card>
  );
}
export default Brokercard;

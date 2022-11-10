import * as React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './broker-card.css'
import '../MainScreen/main-screen.css'

const Brokercard = (props) => {
  const {imagep, headerp,} = props;
  return (
    <Card 
      sx={{ 
      backgroundColor:'#000000af',
      opacity:'0.7',
      height: '95%'
    }}
    >
    <CardActionArea >
            <CardMedia
              component="img"
              height="170"
              image={imagep}
              alt="XPO"
              sx ={{opacity:'1',objectFit:"scale-down" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h4" color='white' component="div" sx={{textAlign:'center'}}>
                {headerp}
              </Typography>
              {/* <Typography variant="body1" color="white" sx={{textAlign:'center'}} >
                {textp}
              </Typography> */}
            </CardContent>
          </CardActionArea>
    </Card>
  );
}
export default Brokercard;

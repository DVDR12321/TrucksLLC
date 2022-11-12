import React from "react";
import './main-screen.css';
import img2 from '../../assets/chicago.jpg';
import img3 from '../../assets/usa.webp';
import img4 from '../../assets/logo.gif';
import img5 from '../../assets/truckgif.gif';
import img6 from '../../assets/piechart.webp'
import Button from '@mui/material/Button';
//import styled from '@emotion/styled'
import Grid from '@mui/material/Grid';
import Brokercard from "../card-componennt/broker-card";

// const Mainbutton = styled.button`
//   padding: 15px;
//   background-color: rgba(207, 1, 1, 0.75) ;
//   font-size: 24px;
//   border-rad
//   color: black;ius: 4px;
//   font-weight: bold;
//   &:hover {
//     background-color: rgb(207, 1, 1);
//     ;
//   }

const Mainscreen = () => {
return(
    <Grid container >
            <Grid container spacing={1} items xs={12}  style = {{height:"60vh", backgroundImage: `url(${img2})`, backgroundSize: 'cover'}}>
                <Grid item  xs= {6}  >
                    <div className="main">
                        <h1 className="h11">
                            Transporation
                            <h1 className="h12">
                            Done
                            <h1 className="h13">
                            Right
                        </h1>
                        </h1> 
                        </h1>
                    </div>
                </Grid>
                <Grid item xs = {6} >
                    <Button 
                            sx={{
                                position:'relative',
                                top:"39vb",
                                left:"1vb",
                                backgroundColor: "#ba000d",
                                fontFamily :'helvetica',
                                fontWeight : 'bold',
                                fontSize :'5vb',
                                height:'7vb',
                                width:'30vb'
                            }} 
                            variant="contained"
                            color="error"
                        >
                        Join us
                        </Button>
                </Grid>
            </Grid>
            <Grid container spacing={1} item xs = {12} style = {{height:"40vh", justifyContent:'center'}}>
                <Grid item xs={3} >
                     <Brokercard
                     imagep={img4}
                     headerp = 'Who we are'
                     textp = 'Clic to ind out about us and our mission'/>
                </Grid>
                <Grid item xs={3}  >
                    <Brokercard 
                    imagep={img3} 
                    headerp='Where we are'
                    textp='Find out how to reach us'/>
                </Grid>
                <Grid item xs={3} >
                     <Brokercard
                     imagep={img5}
                     headerp="Our fleet"
                     textp="Find out about our available assets"
                     />
                </Grid>
                <Grid item xs={3}>
                     <Brokercard
                     imagep = {img6}
                     headerp = "Our reviews"
                     />
                </Grid>
            </Grid>
    </Grid>
);
}
export default Mainscreen;
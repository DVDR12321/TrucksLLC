import React from "react";
import './main-screen.css'
import img2 from '../../assets/chicago.jpg'
import Button from '@mui/material/Button';
//import styled from '@emotion/styled'
import Grid from '@mui/material/Grid';
import Brokercard from "./broker-card";

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
            <Grid container spacing={0} items xs={12}  style = {{height:"65vh", backgroundImage: `url(${img2})`, backgroundSize: 'cover'}}>
                <Grid item xs= {6}>
                    <div className="main">
                        <h1 className="h11">
                            Transporation
                        </h1>
                        <h1 className="h12">
                            Done
                            <h1 className="h13">
                            Right
                        </h1>
                        </h1>
                        
                    </div>
                </Grid>
                <Grid item xs = {6}>
                    <Button 
                            sx={{
                                position:'absolute',
                                top:"300px",
                                backgroundColor: "#ba000d",
                                fontFamily :'helvetica',
                                fontWeight : 'bold',
                                fontSize :'25px'  
                            }} 
                            variant="contained"
                            color="error"
                            size ='large'
                        >
                        Join us
                        </Button>
                </Grid>
            </Grid>
            <Grid container item xs = {12} spacing={0} style = {{height:"35vh", backgroundColor:'#444444',alignItems:'center', justifyContent:'center'}}>
                <Grid item xs={3} >
                    <Brokercard/>
                </Grid>
                <Grid item xs={3} >
                     <Brokercard/>
                </Grid>
                <Grid item xs={3}>
                     <Brokercard/>
                </Grid>
                <Grid item xs={3}>
                     <Brokercard/>
                </Grid>
            </Grid>
    </Grid>
);
}
export default Mainscreen;
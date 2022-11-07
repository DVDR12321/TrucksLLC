import React from "react";
import './main-screen.css'
import img1 from '../../assets/usamap2.gif'
import Button from '@mui/material/Button';
//import styled from '@emotion/styled'

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
    <div className="main">
        {/* <img
            className="img1"
             src={img1}
             alt = ''
            /> */}
        <div className="content">
            <h1>Transportation Done</h1> 
            <h1 className="h1s">Right</h1> 
            <Button 
                sx={{
                    position:'absolute',
                    top:"115px",
                    left:"500px",
                    backgroundColor: "#F00808",
                    fontFamily :'helvetica',
                    fontWeight : 'bold',
                    fontSize :'20px'
                    
                }} 
                variant="contained"
                color = "error"
                size ='large'
            >
            Join us
            </Button>
            
            <div className="description">
            <p>
            We provide safe and reliable transportation services to a diverse group of
            customers throughout the continental United States, Canada and Mexico.
            </p>
        </div>
        </div>
        

    </div>
);
}
export default Mainscreen;
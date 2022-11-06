import React from "react";
import './main-screen.css'
import img1 from '../../assets/viber_image_2022-11-03_00-14-39-232.jpg'


const Mainscreen = () => {
return(
    <div className="main">
        <img
            className="img1"
             src={img1}
             alt = ''
            />
        <div className="content">
            <h1>Transportation done</h1> 
            <h1 className="h1s">Right</h1> 
        </div>

    </div>
);
}
export default Mainscreen;
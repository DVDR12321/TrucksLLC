import React from "react";
import './simple-container.css';
import Carousel from  '../carousel/carousel';

const Mycontainer = (props) => {
    const {Header, Body} = props;
    return(
    <div className="containerq">
        <h1 className = "Header"> {Header} </h1>
        <div className = "Separator"></div>
        <div className = "Body"> <Carousel></Carousel>  </div>
    </div> 
    );
};  
export default Mycontainer;
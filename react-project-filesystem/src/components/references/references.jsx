import React from "react";
import './references.css';
import Mycontainer from "./simple-container";
import Carousel from  '../carousel/carousel';

const References = () => {
return (
    <div className="asd">
        <Mycontainer Header = "Our references" Body={<Carousel></Carousel>}>     
        </Mycontainer>
    </div>
)
};
export default References;

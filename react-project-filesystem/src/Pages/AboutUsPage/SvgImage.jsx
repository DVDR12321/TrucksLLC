import React from "react";
import './StyledComponents';


const Svg = () => {
    // let path = document.querySelector('path');
    // let PathLenght = document.getTotalLength();
    // path.style.strokeDasharray = PathLenght + ' ' + PathLenght; 
    // path.style.strokeDashoffset = PathLenght;
    // window.addEventListener('scroll', () => {
    //     var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElementclientHeight);
    //     var drawLength = PathLenght * scrollPercentage;
    //     path.style.strokeDashoffset = PathLenght - drawLength;

    // });
    return (
        <svg viewBox="0 0 1440 2100" fill="none" preserveAspectRatio="xMidYMax meet">
            <path  d="M731 41V71M731 71.0411C727.838 71.1707 721.416 72.9073 721.017 78.817C720.617 84.7267 727.506 86.4633 731 86.5929M731 71.0411C731 70.6523 741.482 72.9851 740.983 79.5946C740.583 84.8822 734.161 86.4633 731 86.5929M731 71.0411V86.5929M731 86.5929V468M730.478 468C727.157 468.302 720.414 470.632 720.016 477.528C719.617 484.425 726.825 486.754 730.478 487.057M730.478 468C734.298 468.302 741.738 470.632 740.941 477.528C740.144 484.425 733.634 486.754 730.478 487.057M730.478 468V487.057M730.478 487.057V973M731.003 973C728.022 973.428 721.862 975.738 721.067 981.557C720.073 988.83 730.506 990.969 731.003 990.541M731.003 990.541C731.499 990.113 739.945 990.969 740.938 982.412C741.733 975.567 734.646 973.57 731.003 973.428V990.541ZM731.003 990.541V1551" stroke="#BF0606" stroke-width="3"/>
        </svg>
    
    );
};


export default Svg;

// {/* <section class = "one"> 
//     <h1 classs="scroll" data-rate = ".4" data-direction = "vertical"></h1>

// </section>
// <section class = "one"> 
//     <h1 classs="scroll" data-rate = ".2" data-direction = "vertical"></h1>
// </section>  */}
import React from "react";
import { StyledMainTitle } from "./StyledComponents";

export const MainHeader = () => {
    return (
        <div>
            <StyledMainTitle>Transporation Done Right</StyledMainTitle>
        </div>
        
    );    
};

export const SubHeader = ({title}) => {
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );

};
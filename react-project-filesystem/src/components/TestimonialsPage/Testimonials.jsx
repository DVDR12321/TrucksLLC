import React from "react";
import Quotes from "./Recognitions/Quotes";
import { References } from "./Laurels/References";
//import Logo from "../../assets/LogoWhiteBlack.png";
import {
  ContainingGrid,
  SectionOverlayGrid,
  Recognitions,
  StyledRecognitionsHeader,
  StyledText,
  //StyledImage,
  Laurels,
  StyledLaurelsHeader,
  SeparatorDiv,
} from "./StyledComponents";
export const Testimonials = () => {
  return (
    <ContainingGrid container>
      <SectionOverlayGrid container>
        {/* <StyledImage src={Logo} alt="img"></StyledImage> */}
        <Recognitions item sx = {{backgroundColor:'#000000'}}>
          <StyledRecognitionsHeader>Recognitions</StyledRecognitionsHeader>
          <StyledText>
            <Quotes></Quotes>
          </StyledText>
        </Recognitions>
        <SeparatorDiv></SeparatorDiv>
        <Laurels item sx = {{backgroundColor:'#000000'}} >
          <StyledLaurelsHeader>Laurels</StyledLaurelsHeader>
          <StyledText>
            <References></References>
          </StyledText>
        </Laurels>
      </SectionOverlayGrid>
    </ContainingGrid>
  );
};

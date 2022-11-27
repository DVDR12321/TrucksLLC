import React from "react";
//import Quotes from "./Recognitions/Quotes";
//import { References } from "./Laurels/References";
//import Logo from "../../assets/LogoWhiteBlack.png";
import { SectionOverlayGrid } from "./StyledComponents";
import { Card } from "./Card/Card";
import Image1 from '../../assets/quotemark.png';
import Image2 from '../../assets/quotemark2.png';


export const Testimonials = () => {
  return (
    <SectionOverlayGrid container spacing={2}>
      <Card img1={Image1} img2={Image2}>

      </Card>
      <Card>

      </Card>
    </SectionOverlayGrid>
  );
  
};

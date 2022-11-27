import React from "react";
//import Quotes from "./Recognitions/Quotes";
//import { References } from "./Laurels/References";
//import Logo from "../../assets/LogoWhiteBlack.png";
import { SectionOverlayGrid } from "./StyledComponents";
import { Card } from "./Card/Card";
import Image1 from '../../assets/quotemark.png';
import Image2 from '../../assets/quotemark2.png';
import Image3 from '../../assets/laurels.png';
import Carousel from "./Carousel/Carousel";
import { References } from "./Laurels/References";


export const Testimonials = () => {
  return (
    <SectionOverlayGrid container spacing={2}>
      <Card img1={Image1} img2={Image2} content={<Carousel></Carousel>}>

      </Card>
      <Card img1 = {Image3} content = {<References></References>}>

      </Card>
    </SectionOverlayGrid>
  );
  
};

import React from "react";
import Carousel from "../Carousel/Carousel";
import {
  CardContainer,
  CardTop,
  CardMiddle,
    CardBottom,
    TopImg,
    BotImg
} from "./StyledComponents.jsx";

export const Card = ({ img1, img2, content }) => {
  return (
    <CardContainer>
      <CardTop>
        <TopImg src={img1} alt=" "></TopImg>
      </CardTop>
      <CardMiddle>{<Carousel></Carousel>}</CardMiddle>
      
      <CardBottom><BotImg src={img2} alt=" "></BotImg></CardBottom>
    </CardContainer>
  );
};

import * as React from "react";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
  StyledCard,
  StyledCardMedia,
  StyledImage,
  StyledTypography,
} from "./StyledComponents";
import { useState } from "react";

const BrokerCard = (props) => {
  const { imagep, imageph, headerp, onClickCard } = props;
  //hover images
  const ImageHover = () => {
    const [image, setImage] = useState(imagep);
    return (
      <StyledImage
        src={image}
        alt="img"
        onMouseEnter={() => setImage(imageph)}
        onMouseLeave={() => setImage(imagep)}
      ></StyledImage>
    );
  };
  return (
    <StyledCard sx={{ height: "28vh" }}>
      <CardActionArea onClick={onClickCard} sx={{ height: "100%" }}>
        <StyledCardMedia>
          <ImageHover></ImageHover>
        </StyledCardMedia>
        <CardContent>
          <StyledTypography color="white" component="div">
            {headerp}
          </StyledTypography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};
export default BrokerCard;

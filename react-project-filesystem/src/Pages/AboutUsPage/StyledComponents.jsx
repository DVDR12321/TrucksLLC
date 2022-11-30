import styled from "@emotion/styled";
import { Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "../../assets/headerimage.jpg";

import CardImage from "../../assets/card.png";
import BeneftisImage from "../../assets/app__background2.png";

export const StyledContainer = styled("div")`
  background: #ada996; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #ada996,
    #f2f2f2,
    #dbdbdb,
    #eaeaea
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #ada996,
    #f2f2f2,
    #dbdbdb,
    #eaeaea
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
export const StyledHeaderImage = styled("div")`
  display: flex;
  height: 65vh;
  background: url(${Image});
  color: white;
  padding-bottom: 10px;
`;

export const StyledHeaderBox = styled(Box)`
  background: #da1e2c;
  height: 35vh;
  margin-left: 200px;
  margin-right: 200px;
  margin-top: -100px;
  border-radius: 50px;
`;

export const StyledCaption = styled(Typography)`
  align-items: center;
  color: white;
  float: left;
  padding-left: 20px;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 1px;
  font-weight: 300;
`;

export const StyledHeaderText = styled(Typography)`
  color: white;
  float: right;
  line-height: 28px;
  font-size: 18px;
  letter-spacing: 1px;
  font-style: italic;
`;

export const StyledText = styled("p")`
  text-align: center;
  width: 100%;
  overflow: hidden;
`;

export const StyledImage = styled("img")`
  border-radius: 15%;
  width: 500px;
  height: 370px;
`;

export const StyledSectionCaption = styled(Typography)`
  color: #da1e2c;
  font-size: 30px;
  line-height: 40px;
  letter-spacing: 1px;
  font-weight: 300;
  text-align: center;
`;

export const StyledGridRow = styled(Grid)`
  margin-bottom: 30px;
`;

export const StyledMainGrid = styled(Grid)``;

export const StyledCardBox = styled(Box)`
  height: 200px;
  background: red;
`;

export const StyledCardWrapper = styled(Grid)`
  height: 60vh;
  padding-bottom: 10vh;
  // background: url(${BeneftisImage});
`;

export const StyledFlipContainer = styled(Grid)`
  height: 100vh;
`;

export const StyledFlipCardOuter = styled(Grid)`
width: 300px;
height: 400px;
margin: 25px 0;

&.focus-trigger:focus {
  outline: 5px solid greenyellow;
  outline-offset: 5px;

`;

export const StyledFlipCardInner = styled(Grid)`
  transform-style: preserve-3d;
  transition: 0.5s linear 0.1s;
  position: relative;
  width: inherit;
  height: inherit;

  &.hover-trigger:hover {
    transform: rotateY(180deg);
  }

  &.showBack {
    transform: rotateY(180deg);
  }
`;

export const StyledCard = styled(Grid)`
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &.front {
    transform: rotateY(0);
    background-color: #2d2d2d;
    color: #fff;
  }
  &.back {
    transform: rotateY(180deg);
    background-color: #fff;
    color: #2d2d2d;
  }
`;

export const StyledFrontCard = styled("div")`
  background: url(${CardImage});
`;

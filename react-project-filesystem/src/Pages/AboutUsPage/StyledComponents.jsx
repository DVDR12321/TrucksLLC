import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "../../assets/headerimage.jpg";

import CardImage from "../../assets/card.png";
import BeneftisImage from "../../assets/app__background2.png";
import { grey } from "@mui/material/colors";
import image from "../../assets/AboutPage/Map.png";

// Top ************************************************************************************
export const StyledContainer = styled("div")`
  background: -webkit-linear-gradient(
    to top,
    ${grey[300]},
    ${grey[200]},
    ${grey[100]},
    ${grey[50]}
  );
  background: linear-gradient(
    to top,
    ${grey[300]},
    ${grey[200]},
    ${grey[100]},
    ${grey[50]}
  );
`;

export const StyledHeaderImage = styled(Grid)(
  ({ theme }) => `
  display: flex;
  height: 65vh;
  background: url(${Image});
  color: ${theme.palette.common.white};
  padding-bottom: 10px;
`
);

export const StyledHeaderBox = styled(Box)(
  ({ theme }) => `
  background: ${theme.palette.common.grey};
  height: 35vh;
  margin-left: 200px;
  margin-right: 200px;
  margin-top: -100px;
  border-radius: 50px;
`
);

export const StyledCaption = styled(Typography)(
  ({ theme }) => `
  align-items: center;
  color: ${theme.palette.common.white};
  float: left;
  padding-left: 20px;
  font-size: 60px;
  line-height: 60px;
  letter-spacing: 1px;
  font-weight: 700;
  font-family: 'Archivo Black', sans-serif;
`
);

export const StyledHeaderText = styled(Typography)(
  ({ theme }) => `
  color: ${theme.palette.common.white};
  float: right;
  line-height: 28px;
  font-size: 18px;
  letter-spacing: 1px;
  font-style: italic;
  text-align:justify;
`
);

export const StyledImage = styled("img")(
  ({ theme }) => `
  
  object-fit:contain;
  height:100%;
  `
);

export const StyledScrollGrid = styled(Grid)(
  ({ theme }) => `
  color: ${theme.palette.primary.main};
  margin-top:3vh;
  height:10vh;
  display:flex;
  align-items:center;
  justify-content:center;
  font-style: italic;
  font-weight: 700;

`
);

// Sections ************************************************************************************
export const StyledHeader = styled("h1")(
  ({ theme }) => `
  font-size:50px;
  text-align:left;
  color: ${theme.palette.common.grey};
  padding: 0 5% 5% 5% ;
  font-family: 'Archivo Black', sans-serif;

`
);
export const StyledHeaderSpan = styled("span")(
  ({ theme }) => `
    color: ${theme.palette.primary.main};
    font-family: 'Archivo Black', sans-serif;
  `
);

export const StyledText = styled("p")`
  text-align: justify;
  width: 100%;
  overflow: hidden;
  padding: 0 5% 5% 5%;
  line-height: 3ch;
`;
export const StyledTextSpan = styled("span")(
  ({ theme }) => `
    color: ${theme.palette.primary.main};
    font-weight:bold;
  `
);

export const StyledImageLeft = styled("img")`
  border-radius: 5% 0 0 5%;
  height: 100%;
  width: 100%;
`;
export const StyledImageRight = styled("img")`
  border-radius: 0 5% 5% 0;
  height: 100%;
  width: 100%;
`;

export const StyledSectionCaption = styled(Typography)(
  ({ theme }) => `
  color: ${theme.palette.primary.main};;
  font-size: 70px;
  letter-spacing: 1px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 10vh;
  margin-right: 5vw;
  margin-left: 5vw;
  font-family: 'Archivo Black', sans-serif;
  border-bottom: 2px inset ${theme.palette.common.grey};
`
);

export const StyledGridRow = styled(Grid)`
  margin-bottom: 10vh;
  justifycontent: center;
`;

export const StyledGridRight = styled(Grid)(
  ({ theme }) => `
  color: ${theme.palette.common.black};
  background-color: ${theme.palette.common.white};
  padding-top:5%;
`
);
export const StyledImageGridLeft = styled(Grid)(
  ({ theme }) => `
 
`
);

export const StyledSectionBox = styled(Grid)(
  ({ theme }) => `
background-image: url(${image});
background-size:cover;
background-attachment: fixed;
width:100%;
margin-left: 200px;
margin-right: 200px;
height:35vh;
border-radius: 0px 0px 50px 50px;
border-top : 5px solid white;
`
);

export const StyledTypography = styled(Typography)(
  ({ theme }) => `
  font-size: 55px;
  padding: 5%;
  text-align:center;
  font-weight: 800;
  font-family: 'Archivo Black', sans-serif;
  color: ${theme.palette.common.white};
  &:hover{
    color: ${theme.palette.primary.main};
  }

`
);
export const StyledTypography2 = styled(Typography)(
  ({ theme }) => `
  font-size: 20px;
  padding: 5px;
  text-align:center;
  font-weight: 800;
  font-family: 'Archivo Black', sans-serif;
  color: ${theme.palette.common.black};
`
);

export const StyledGridLeft = styled(Grid)(
  ({ theme }) => `
  color: ${theme.palette.common.black};
  background-color: ${theme.palette.common.white};
  padding-top:5%;
`
);

export const StyledMainGrid = styled(Grid)`
  margin-top: 15vh;
`;

// Cards ************************************************************************************

export const StyledCardBox = styled(Box)(
  ({ theme }) => `
  height: 200px;
  background: ${theme.palette.primary.main};
`
);

export const StyledCardWrapper = styled(Grid)`
  margin-top: 16vh;
  height: 100%;
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

export const StyledCard = styled(Grid)(
  ({ theme }) => `
  
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &.front {
    transform: rotateY(0);
    background-color: #2d2d2d;
    color: ${theme.palette.common.white};;
  }
  &.back {
    transform: rotateY(180deg);
    background-color: ${theme.palette.common.white};
    color: #2d2d2d;
  }

`
);

export const StyledFrontCard = styled("div")`
  background: url(${CardImage});
`;

export const StyledCardHeader = styled("h3")(
  ({ theme }) => `
  margin: 5% 5% 10% 5%;
  padding:5%;
  border-bottom: 1px inset ${theme.palette.common.grey};
  
`
);

export const StyledCardImage = styled("img")`
  height: 70%;
  width: 70%;
`;

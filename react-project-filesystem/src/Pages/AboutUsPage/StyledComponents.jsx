import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "../../assets/headerimage.jpg";

import CardImage from "../../assets/card.png";
import BeneftisImage from "../../assets/app__background2.png";
import { grey } from "@mui/material/colors";

export const StyledContainer = styled("div")`
  background: #ada996;
  background: -webkit-linear-gradient(
    to top,
    ${grey[400]},
    ${grey[100]},
    ${grey[300]},
    ${grey[200]}
  );
  background: linear-gradient(
    to top,
    ${grey[400]},
    ${grey[100]},
    ${grey[300]},
    ${grey[200]}
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
  background: ${theme.palette.primary.main};
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
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 1px;
  font-weight: 700;
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
`
);

export const StyledText = styled("p")`
  text-align: justify;
  width: 100%;
  overflow: hidden;
  padding: 0 5% 5% 5%;
`;

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
  font-size: 50px;
  letter-spacing: 1px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 10vh;
  margin-right: 5vw;
  margin-left: 5vw;
  border-bottom: 1px inset ${theme.palette.common.grey};
  
`
);

export const StyledGridRow = styled(Grid)`
  margin-bottom: 30px;
`;

export const StyledGridRight = styled(Grid)(
  ({ theme }) => `
  color: ${theme.palette.common.grey};
  background-color: ${theme.palette.common.white};
  padding-top:5%;
`
);
export const StyledImageGridLeft = styled(Grid)(
  ({ theme }) => `
 
`
);

export const StyledGridLeft = styled(Grid)(
  ({ theme }) => `
  color: ${theme.palette.common.grey};
  background-color: ${theme.palette.common.white};
  padding-top:5%;
`
);

export const StyledMainGrid = styled(Grid)``;

export const StyledCardBox = styled(Box)(
  ({ theme }) => `
  height: 200px;
  background: ${theme.palette.primary.main};
`
);

export const StyledCardWrapper = styled(Grid)`
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
  margin: 5%;
  padding:1%;
  border-bottom: 1px inset ${theme.palette.common.grey};
`
);

export const StyledCardImage = styled("img")`
  object-fit: scale-down;
`;

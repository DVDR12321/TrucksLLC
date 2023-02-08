import { styled } from "@mui/material/styles";
import { Button, Card, Grid } from "@mui/material";
import Image from "../../assets/Drivers/DriversHeader.jpg";
import { grey } from "@mui/material/colors";

export const StyledGrid = styled(Grid)(
  ({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  text-shadow: -1px 0 ${theme.palette.common.black}, 0 1px ${theme.palette.common.black}, 1px 0 ${theme.palette.common.black}, 0 -1px ${theme.palette.common.black};
  background-image: url(${Image});
  
  
  @media only screen and (min-width: 320px) {
    background-size: cover;
  }
  @media only screen and (min-width: 768px) {
    background-size: 100% 100%;
  }
  @media only screen and (min-width: 1024px) {
    background-size: 100% 100%;
  }
  height: 100vh;
  width: 100vw;
  
`
);

export const StyledHeaderText = styled("h1")(
  ({ theme }) => `
  text-align: center;
  padding-top:15vh;
  color: ${theme.palette.common.white};
  position: relative;
  font-family: 'Archivo Black', sans-serif;
  font-size:15vmin;
  
`
);
export const StyledContentGrid = styled(Grid)(
  ({ theme }) => `
  background: #ada996;
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
`
);

export const StyledParagraph = styled("p")(
  ({ theme }) => `
  font-size: 20px;
  color: ${theme.palette.primary.main};
  text-shadow: -1px 0 ${theme.palette.common.black}, 0 1px ${theme.palette.common.black}, 1px 0 ${theme.palette.common.black}, 0 -1px ${theme.palette.common.black};
`
);

export const StyledSpan = styled("span")(
  ({ theme }) => `
  color: ${theme.palette.primary.main};
  font-weight:bold;
`
);

export const StyledButton = styled(Button)(
  ({ theme }) => `
  color: ${theme.palette.common.white};
  border-radius: 3px;
  
`
);

export const StyledCard = styled(Card)`
  border-radius: 2px;
  max-width: 350px;
  @media only screen and (min-width: 320px) {
    margin-bottom: 20px;
  }
  @media only screen and (min-width: 768px) {
    padding-bottom: 10px;
    margin-bottom: 50px;
  }
  @media only screen and (min-width: 1025px) {
    height: 100%;
  }
`;

export const StyledSpan2 = styled("span")`
  text-align: center;
`;

export const StyledImage = styled("img")(
  ({ theme }) => `
  
  object-fit:contain;
  height:100%;
  `
);

export const StyledScrollGrid = styled(Grid)(
  ({ theme }) => `
  color: ${theme.palette.common.white};
  margin-top:5vh;
  height:10vh;
  display:flex;
  align-items:center;
  justify-content:center;
  font-style: italic;
  font-weight: 700;

`
);

import { Grid } from "@mui/material";
import image from "../../assets/Drivers/OwnerOperator2.jpeg";
import { styled } from "@mui/material/styles";

export const StyledMainGrid = styled(Grid)``;

export const StyledHeaderGrid = styled(Grid)`
  background-image: url(${image});
  height: 100vh;
  background-size: 100vw 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10%;
  text-align: center;
`;

export const StyledMainHeader = styled("h1")(
  ({ theme }) => ` 
  color: ${theme.palette.common.white};
  font-size: 15vmin;
  font-family: 'Archivo Black', sans-serif; 
 `
);
export const StyledMainDescription = styled("p")(
  ({ theme }) => `
  color: ${theme.palette.common.white};
 font-weight:bold;
 font-style:italic;
 font-size: 5vmin;
 `
);

export const StyledContentGrid = styled(Grid)`
  padding: 0 8% 8% 8%;
  text-align: justify;
`;

export const StyledSectionHeader = styled("h1")(
  ({ theme }) => `
 font-size: 5vmin;
 color:${theme.palette.primary.main};
 margin-top:3ch;
 text-align:center;
 border-bottom: 1px inset ${theme.palette.common.black};
`
);

export const StyledParagraph = styled("p")`
  margin-bottom: 5%;
  margin-top: 5%;
`;

export const StyledList = styled("ul")`
  list-style: none; /* remove default bullet */
  text-align: start;

  li::before {
    content: "•"; /* set bullet content */
    color: red; /* set bullet color */
    display: inline-block; /* display bullet inline with text */
    margin-right: 0.5em; /* add spacing between bullet and text */
    margin-top: 1%;
    margin-bottom: 1%;
  }
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
  margin-top:20vh;
  height:10vh;
  display:flex;
  align-items:center;
  justify-content:center;
  font-style: italic;
  font-weight: 700;

`
);

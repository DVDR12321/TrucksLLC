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
  padding: 8%;
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

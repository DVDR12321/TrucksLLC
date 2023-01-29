import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";

export const StyledCard = styled(Card)(
  ({ theme }) => `
  height: 100%;
  width: 100%;
  background-color: transparent;
  outline: 2px solid rgba(255, 255, 255, 0.30);
  backdrop-filter: blur(3px) sepia(10%);
  color: ${theme.palette.common.white};
  :hover {
    outline-color: ${theme.palette.common.white};
    color: ${theme.palette.common.white};
    transform: scale(1.15);
    transition: transform 0.3s cubic-bezier(0,0,.58,1);
    backdrop-filter: blur(1px) sepia(10%);
  }
  border-radius: 5px 5px 5px 5px;
`
);

export const StyledTypography = styled(Typography)(
  ({ theme }) => `
 font-family: "Roboto Serif";
 text-align: center;
 font-size: 250%;
 font-weight:bold;
 
`
);

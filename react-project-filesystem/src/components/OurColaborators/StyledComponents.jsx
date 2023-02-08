import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledContainerGrid = styled(Grid)`
  display: flex;
  align-items: center;
`;

export const StyledImage = styled("img")`
  height: 100%;
  width: 100%;
`;

export const StlyedTitle = styled(Typography)`
  text-align: center;
  font-weight: 600;
  @media only screen and (min-width: 320px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

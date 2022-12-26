import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

export const StyledCard = styled(Card)(
  ({ theme }) => `
  height: 26vh;
  width: 80%;
  outline-style: solid;
  outline-width: 2px;
  outline-color: ${theme.palette.common.white};
  background-color: transparent;
  color: ${theme.palette.common.white};
  :hover {
    outline-color: ${theme.palette.common.white};
    color: ${theme.palette.common.white};
  }
`
);

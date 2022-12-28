import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

export const StyledCard = styled(Card)(
  ({ theme }) => `
  height: 100%;
  width: 100%;
  background-color: transparent;
  outline: 2px solid rgba(255, 255, 255, 0.22);
  color: ${theme.palette.common.white};
  :hover {
    outline-color: ${theme.palette.common.white};
    color: ${theme.palette.common.white};
    transform: scale3d(1.15, 1.15, 1);
  }
  border-radius: 5px 5px 5px 5px;
`
);

import styled from "@emotion/styled";
import { AppBar, Grid } from "@mui/material";

export const StyledAppBar = styled(AppBar)`
  height: 90px;
  padding: 0 5px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const StyledAppHeaderItems = styled(Grid)`
  margin: auto;
`;
export const StyledLogo = styled("img")`
  padding-top: 10px;
  padding-left: 80px;
  height: 70px;
`;

export const StyledText = styled("span")`
  text-transform: none;
  font-family: Arial;
`;
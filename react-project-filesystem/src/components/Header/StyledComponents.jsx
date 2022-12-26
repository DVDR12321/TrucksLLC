import { styled } from "@mui/material/styles";
import { AppBar, Grid } from "@mui/material";

export const StyledAppBar = styled(AppBar)(
  ({ theme }) => `
  height: 90px;
  padding: 0 5px;
  background: ${theme.palette.common.white};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
);

export const StyledAppHeaderItems = styled(Grid)`
  margin: auto;
  margin-right: 5px;
`;

export const StyledLogo = styled("img")`
  padding-top: 10px;
  padding-left: 80px;
  height: 70px;
`;

export const StyledText = styled("span")`
  text-transform: none;
  font-family: Arial;
  font-size: 16px;
  line-height: 40px;
  letter-spacing: 1px;
`;

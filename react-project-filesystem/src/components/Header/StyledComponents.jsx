import { styled } from "@mui/material/styles";
import { AppBar, Grid } from "@mui/material";

export const StyledAppBar = styled(AppBar)(
  ({ theme }) => `
  height: 90px;
  padding: 0 5px;
  background: ${theme.palette.common.white};
  transition: all 0.3s ease-in-out;
  transform: translateY(-100%);
  margin-top: -89px;
  &.fade-in {
    transform: translateY(0);
  }
  &.fade-out {
    transform: translateY(-50px);
    opacity: 0;
  }
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
);

export const StyledAppHeaderItems = styled(Grid)`
  margin: auto;
`;

export const StyledLogo = styled("img")`
  padding-top: 10px;
  height: 70px;
`;

export const StyledMenuItem = styled("span")(
  ({ theme }) => `
  text-transform: none;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 80px;
  letter-spacing: 1px;
  &: hover {
    color: ${theme.palette.primary.dark};
  }
  &.active {
    color: ${theme.palette.primary.dark};
  }
`
);

export const StyledSideMenuItem = styled("span")(
  ({ theme }) => `
  text-transform: none;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 1px;
  &: hover {
    color: ${theme.palette.primary.dark};
  }
  &.active {
    color: ${theme.palette.primary.dark};
  }
`
);

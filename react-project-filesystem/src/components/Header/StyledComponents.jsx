import { styled } from "@mui/material/styles";
import { AppBar, Grid, keyframes } from "@mui/material";

export const StyledAppBar = styled(AppBar)(
  ({ theme }) => `
  height: 90px;
  padding: 0 5px;
  background: ${theme.palette.common.white};
  animation: ${fadeIn} 0  5s ease-i n-out;
  transition: visibility 1s ease-i n-out;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
);

const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const StyledAppHeaderItems = styled(Grid)`
  margin: auto;
  // margin-right: 5px;
`;

export const StyledLogo = styled("img")`
  padding-top: 10px;
  height: 70px;
`;

export const StyledText = styled("span")(
  ({ theme }) => `
  text-transform: none;
  font-family: Montserrat;
  font-size: 14px;
  line-height: 80px;
  letter-spacing: 1px;
  &: hover {
    color: ${theme.palette.primary.dark};
  }
`
);

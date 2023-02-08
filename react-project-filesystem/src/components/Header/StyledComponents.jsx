import { styled } from "@mui/material/styles";
import { AppBar, Button, Grid, Link } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

export const StyledAppBar = styled(AppBar)(
  ({ theme }) => `
  height: 90px;
  padding: 0 5px;
  background: rgba(255, 255, 255, 0.95);
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
  font-size: 20px;
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

export const StyledButton = styled(Button)(
  ({ theme }) => `
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  
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

export const StyledLink = styled(Link)(
  ({ theme }) => `
  color: ${theme.palette.common.white};
  text-decoration: none;
`
);
export const StyledWhatsAppIcon = styled(WhatsAppIcon)(
  ({ theme }) =>
    `
  margin: 5px;
  background-color: #25D366;
  color:white;
  border-radius:5px;
  `
);
export const StyledInstagramIcon = styled(InstagramIcon)(
  ({ theme }) =>
    `
  margin: 5px;
  background: #d6249f;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
  box-shadow: 0px 3px 10px rgba(0,0,0,.25);
  border-radius:5px;
  `
);

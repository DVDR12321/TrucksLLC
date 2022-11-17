// @ts-nocheck
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Link,
  Box,
  IconButton,
  SvgIcon,
} from "@mui/material";
import logo from "../../assets/footerlogo.png";
import { Container } from "@mui/system";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import {
  StyledBox,
  StyledCaption,
  StyledLink,
  StyledSocialListItem,
  StyledSocialMenu,
} from "./StyledComponents";
// import {
//     Security,
//     Info
// } from "@mui/material/icons";

const Footer = () => (
  <footer>
    <Box
      px={{ xs: 3, sm: 10 }}
      py={{ xs: 5, sm: 10 }}
      bgcolor="#111111"
      color="white"
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <img src={logo} alt="logo"></img>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledBox>
              {" "}
              <StyledCaption> Our mission </StyledCaption>
            </StyledBox>
            <Box>
              {" "}
              We forge long-term relationships with key customers that include
              supply chain management as an integral part of their strategy.
              Working in concert, we drive out cost, add value and function as
              an extension of their enterprise.{" "}
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledBox>
              {" "}
              <StyledCaption>Contact Info</StyledCaption>{" "}
            </StyledBox>
            <Box>
              {" "}
              <PhoneIcon fontSize="xs"></PhoneIcon> +1 312 466 11 01{" "}
            </Box>
            <Box>
              {" "}
              <EmailIcon fontSize="xs" /> info@trucksllc.com{" "}
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
          <hr></hr>
          Trucks LLC | &reg; {new Date().getFullYear()}
          {/* <StyledSocialMenu>
                        <StyledSocialListItem><StyledLink href=""><i className="fa fa-facebook" color="black"></i></StyledLink></StyledSocialListItem>
                        <StyledSocialListItem><StyledLink href=""><i className="fa fa-twitter"></i></StyledLink></StyledSocialListItem>
                        <StyledSocialListItem><StyledLink href=""><i className="fa fa-instagram"></i></StyledLink></StyledSocialListItem>
                        <StyledSocialListItem><StyledLink href=""><i className="fa fa-youtube"></i></StyledLink></StyledSocialListItem>
                    </StyledSocialMenu> */}
        </Box>
      </Container>
    </Box>
  </footer>
);

export default Footer;

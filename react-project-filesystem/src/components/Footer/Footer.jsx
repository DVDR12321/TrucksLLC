import React from "react";
import { Grid, Box } from "@mui/material";
import logo from "../../assets/footerlogo.png";
import { Container } from "@mui/system";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import {
  StlyedFacebookIcon,
  StlyedInstagramIcon,
  StlyedYoutubeIcon,
  StyledBottomText,
  StyledBox,
  StyledCaption,
  StyledLink,
  StyledText,
} from "./StyledComponents";
import { grey } from "@mui/material/colors";

const Footer = () => (
  <footer>
    <Box
      px={{ xs: 3, sm: 10 }}
      py={{ xs: 5, sm: 10 }}
      bgcolor={grey[800]}
      color="white"
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <img src={logo} alt="logo"></img>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledBox>
              <StyledCaption> Our mission </StyledCaption>
            </StyledBox>
            <StyledText>
              We forge long-term relationships with key customers that include
              supply chain management as an integral part of their strategy.
              Working in concert, we drive out cost, add value and function as
              an extension of their enterprise.{" "}
            </StyledText>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledBox>
              <StyledCaption>Contact Info</StyledCaption>{" "}
            </StyledBox>
            <StyledText>
              <PhoneIcon fontSize="small"></PhoneIcon> +1 312 466 11 01{" "}
            </StyledText>
            <StyledText>
              <EmailIcon fontSize="small" /> info@trucksllc.com{" "}
            </StyledText>
          </Grid>
        </Grid>
        <Box textAlign="center" pt={{ xs: 1, sm: 2 }} pb={{ xs: 5, sm: 0 }}>
          <StyledLink
            href="https://m.facebook.com/TrucksLLC/?locale2=sr_RS"
            target="_blank"
          >
            <StlyedFacebookIcon />
          </StyledLink>
          <StyledLink
            href="https://www.instagram.com/trucks.llc/"
            target="_blank"
          >
            <StlyedInstagramIcon />
          </StyledLink>
          <StyledLink href="" target="_blank">
            <StlyedYoutubeIcon />
          </StyledLink>
        </Box>
        <hr></hr>
        <StyledBottomText>
          Trucks LLC | &reg; {new Date().getFullYear()}
        </StyledBottomText>
      </Container>
    </Box>
  </footer>
);

export default Footer;

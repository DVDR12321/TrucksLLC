import React from "react";
import { Grid, Box, TextField, Button } from "@mui/material";
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
  StyledCaptionCenter,
  StyledFooterDown,
  StyledFooterUp,
  StyledLink,
  StyledNewsletterGrid,
  StyledSubscribeTextField,
  StyledText,
} from "./StyledComponents";
import { grey } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      px={{ xs: 3, sm: 0 }}
      py={{ xs: 5, sm: 5 }}
      bgcolor={grey[900]}
      color="white"
    >
      <Container maxWidth="lg">
        <StyledFooterUp container spacing={4} justifyContent="space-between">
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
          <Grid item xs={12} sm={4}>
            <StyledBox>
              <StyledCaption> Our mission </StyledCaption>
            </StyledBox>
            <StyledText>
              We believe in building strong and lasting partnerships with our
              key customers. We understand the importance of supply chain
              management as a vital aspect of your business strategy, and we're
              here to help..{" "}
            </StyledText>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StyledBox>
              <StyledCaptionCenter>
                {" "}
                Subscribe to our newsletter!{" "}
              </StyledCaptionCenter>
            </StyledBox>
            <StyledNewsletterGrid
              container
              direction="column"
              spacing={2}
              px={{ sm: 5 }}
            >
              <StyledSubscribeTextField
                sx={{ input: { color: "white" }, border: { color: "white" } }}
                id="outlined-basic"
                label="Your email"
                color="primary"
                variant="outlined"
              />
              <Button variant="contained">Subscribe me</Button>
            </StyledNewsletterGrid>
          </Grid>
        </StyledFooterUp>

        <hr></hr>
        <StyledFooterDown
          container
          direction="row"
          justifyContent="space-between"
        >
          <Grid item>
            <StyledBottomText>
              Copyright &copy; {new Date().getFullYear()} Trucks LLC | All
              rights reserved
            </StyledBottomText>
          </Grid>
          <Grid item alignItems="right">
            <Box>
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
          </Grid>
        </StyledFooterDown>
      </Container>
    </Box>
  );
};

export default Footer;

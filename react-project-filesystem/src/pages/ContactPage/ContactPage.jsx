import React from "react";
import Grid from "@mui/material/Grid";
import SendMessage from "../QAPage/QuestionsForm";
import { IconButton, Stack } from "@mui/material";
import {
  StyledContactGrid,
  StyledContentGrid,
  StyledHeader,
  StyledIconButton,
  StyledImage,
  StyledImageGrid,
  StyledList,
  StyledListItem,
} from "./StyledComponents";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import img from "../../assets/ContactPage/map.png";
import { useEffect, useState } from "react";
import GridLoader from "react-spinners/GridLoader";

const ContactPage = () => {
  const [loading, setLoading] = useState(true);
  const override = {
    top: "50vh",
    left: "50vw",
  };

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {loading ? (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <GridLoader
            cssOverride={override}
            color="#b71c1c"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <Grid container spacing={0}>
          <StyledImageGrid item xs={12}>
            <iframe
              title="company grounds"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9476.410324084296!2d-87.64498038123831!3d41.571797370049616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e1898af3c451f%3A0x425ad20dadff41c7!2s905%20175th%20St%20%233SW%2C%20Homewood%2C%20IL%2060430%2C%20USA!5e0!3m2!1sen!2srs!4v1675207860267!5m2!1sen!2srs"
              width="100%"
              height="100%"
              //style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </StyledImageGrid>
          <StyledContentGrid container>
            <StyledContactGrid item xs={12} md={6}>
              <Stack sx={{ alignItems: "center" }}>
                <StyledHeader>Our social media</StyledHeader>
                <Stack direction="row">
                  <StyledIconButton href="https://www.instagram.com/trucks.llc/">
                    <InstagramIcon
                      sx={{ height: "5vh", width: "5vh", color: "#E4405F" }}
                    ></InstagramIcon>
                  </StyledIconButton>
                  <IconButton
                    size="large"
                    href="https://m.facebook.com/TrucksLLC/"
                  >
                    <FacebookIcon
                      sx={{ color: "#1877F2", height: "5vh", width: "5vh" }}
                    ></FacebookIcon>
                  </IconButton>
                  <IconButton
                    size="large"
                    href="https://www.youtube.com/c/VladUrdov"
                  >
                    <YouTubeIcon
                      sx={{ height: "5vh", width: "5vh", color: "#CD201F" }}
                    ></YouTubeIcon>
                  </IconButton>
                </Stack>
                <StyledHeader>Contact Information</StyledHeader>
                <StyledList>
                  <StyledListItem>
                    905 175th St Unit 3SW, Homewood, IL 60430
                  </StyledListItem>
                  <StyledListItem>+ 1.312-466-1101</StyledListItem>
                  <StyledListItem>info@trucksllc.com</StyledListItem>
                </StyledList>
              </Stack>
            </StyledContactGrid>
            <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
              <Stack direction="column">
                <StyledHeader> Get in touch with us </StyledHeader>
                <SendMessage></SendMessage>
              </Stack>
            </Grid>
          </StyledContentGrid>
        </Grid>
      )}
    </div>
  );
};
export default ContactPage;

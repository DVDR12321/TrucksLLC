import React from "react";
import Grid from "@mui/material/Grid";
import SendMessage from "../QAPage/QuestionsForm";
import { IconButton, Stack } from "@mui/material";
import {
  StyledContactGrid,
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
            <StyledImage src={img} alt="map"></StyledImage>
          </StyledImageGrid>
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
        </Grid>
      )}
    </div>
  );
};
export default ContactPage;

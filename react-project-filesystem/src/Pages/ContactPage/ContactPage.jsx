import React from "react";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import SendMessage from "../QAPage/QuestionsForm";
import { IconButton, Stack } from "@mui/material";
import {
  StyledContactGrid,
  StyledHeader,
  StyledIconButton,
  StyledList,
  StyledListItem,
} from "./StyledComponents";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import img from "../../assets/ContactPage/map.png";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <img src={img} alt="map"></img>
      </Grid>
      <StyledContactGrid item xs={12} md={6}>
        <Stack sx={{ alignItems: "center" }}>
          <StyledHeader>Our social media</StyledHeader>
          <Stack direction="row">
            <StyledIconButton href="https://www.instagram.com/trucks.llc/">
              <InstagramIcon
                sx={{ height: "5vh", width: "5vh", color: "#E4405F" }}
              ></InstagramIcon>
            </StyledIconButton>
            <IconButton size="large" href="https://m.facebook.com/TrucksLLC/">
              <FacebookIcon
                sx={{ color: "#1877F2", height: "5vh", width: "5vh" }}
              ></FacebookIcon>
            </IconButton>
            <IconButton size="large" href="https://www.youtube.com/c/VladUrdov">
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
  );
};
export default ContactPage;

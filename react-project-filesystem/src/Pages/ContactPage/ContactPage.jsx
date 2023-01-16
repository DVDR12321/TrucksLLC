import React from "react";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import SendMessage from "../QAPage/QuestionsForm";
import { IconButton, Stack } from "@mui/material";
import { StyledHeader, StyledIconButton } from "./StyledComponents";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { YouTube } from "@mui/icons-material";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Grid container spacing={0}>
      <Grid igem xs={12} md={6}>
        <Stack>
          <StyledHeader>Get social</StyledHeader>
          <Stack direction="row">
            <StyledIconButton>
              <InstagramIcon></InstagramIcon>
            </StyledIconButton>
            <IconButton size="large">
              <FacebookIcon sx={{ color: "blue" }}></FacebookIcon>
            </IconButton>
            <IconButton size="large" color="primary">
              <YouTubeIcon></YouTubeIcon>
            </IconButton>
          </Stack>
        </Stack>
      </Grid>
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

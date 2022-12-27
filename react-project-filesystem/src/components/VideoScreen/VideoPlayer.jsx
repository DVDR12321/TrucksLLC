import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import YouTubeIcon from "@mui/icons-material/YouTube";
import videop from "../../assets/vvd.mp4";
import "react-html5video/dist/styles.css";
import { Grid, IconButton } from "@mui/material";
import { ContainingDiv, ContainingGrid } from "./StyledComponents";

const VideoPlayer = () => {
  return (
    <ContainingDiv>
      <ContainingGrid container xs={12} md={10}>
        <Grid item xs={0} md={1}></Grid>
        <Grid item xs={12} md={10}>
          <IconButton
            color="secondary"
            aria-label="youtube link"
            size="Large"
            sx={{ height: "75px", width: "75px" }}
            href="https://www.youtube.com/c/VladUrdov/videos?app=desktop"
          >
            <YouTubeIcon sx={{ height: "75px", width: "75px" }} />
          </IconButton>

          <Video
            loop
            muted
            controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
            //poster="http://sourceposter.jpg"
            onCanPlayThrough={() => {}}
          >
            <source src={videop} type="video/webm" />
            {/* <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default /> */}
          </Video>
        </Grid>
        <Grid item xs={0} md={1}></Grid>
      </ContainingGrid>
    </ContainingDiv>
  );
};
export default VideoPlayer;

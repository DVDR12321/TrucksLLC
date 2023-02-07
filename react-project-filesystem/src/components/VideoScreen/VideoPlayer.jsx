import React from "react";
//import { DefaultPlayer as Video } from "react-html5video";
//import YouTubeIcon from "@mui/icons-material/YouTube";
//import videop from "../../assets/vvd.mp4";
import "react-html5video/dist/styles.css";
import { Grid } from "@mui/material";
import { ContainingDiv, ContainingGrid } from "./StyledComponents";

const VideoPlayer = () => {
  return (
    <ContainingDiv>
      <ContainingGrid container xs={12} md={10}>
        <Grid item xs={0} md={1}></Grid>
        <Grid item xs={12} md={10}>
          {/* OLD PLAYER............................................*/}
          {/* <IconButton
            color="secondary"
            aria-label="youtube link"
            size="Large"
            sx={{ height: "75px", width: "60px" }}
            href="https://www.youtube.com/c/VladUrdov/videos"
          >
            <YouTubeIcon sx={{ height: "75px", width: "75px" }} />
          </IconButton>

          <Video
            loop
            //muted
            controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
            //poster="http://sourceposter.jpg"
            onCanPlayThrough={() => {}}
          >
            <source src={videop} type="video/webm" />
             <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default /> 
          </Video> */}

          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/TiQ8KkryX4c"
            title="Trucks LLC introduction"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share fullscreen"
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen"
            msallowfullscreen="msallowfullscreen"
            oallowfullscreen="oallowfullscreen"
            webkitallowfullscreen="webkitallowfullscreen"
          ></iframe>
        </Grid>
        <Grid item xs={0} md={1}></Grid>
      </ContainingGrid>
    </ContainingDiv>
  );
};
export default VideoPlayer;

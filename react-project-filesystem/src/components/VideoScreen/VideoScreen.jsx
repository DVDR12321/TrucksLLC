import React from "react";
import VideoPlayer from "./VideoPlayer";
import { ContainingDiv, BackgroundDiv } from "./StyledComponents";

const VideoScreen = () => {
  return (
    <ContainingDiv>
      <BackgroundDiv>
        <VideoPlayer></VideoPlayer>;
      </BackgroundDiv>
    </ContainingDiv>
  );
};
export default VideoScreen;

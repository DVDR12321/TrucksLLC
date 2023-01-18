import React from "react";
import { StyledCard } from "./StyledComponents";
import { ProgressBar } from "../TestimonialsPage/ProgressBar/ProgressBar";
import { Stack } from "@mui/material";

const LaurelsCard = (props) => {
  return (
    <StyledCard>
      <Stack>
        <div>Hello everyone!</div>
        <div>What a nice day today!</div>
        <ProgressBar
          color1={props.color1}
          color2={props.color2}
          number={props.number}
        ></ProgressBar>
      </Stack>
    </StyledCard>
  );
};

export default LaurelsCard;

import { Grid } from "@mui/material";
import React from "react";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import {
  StyledReviewsItem,
  StyledHeader,
  StyledParagaph,
  StyledReviewsGrid,
  StyledProgressGrid,
} from "./StyledComponents.jsx";

const awards = [
  {
    id: "1",
    title: "Coyote",
    subtitle: "Coyote Pack Carrier member",
    progress: <ProgressBar color1="#6d0713" color2="#942633" number="95%" />,
  },
  {
    id: "2",
    title: "CH Robinson",
    subtitle: "Our longest standing partners",
    progress: <ProgressBar color1="#baf5ff" color2="#819093" number="100%" />,
  },
  {
    id: "3",
    title: "XPO Logistics",
    subtitle: "Platinum tier XPO carrier",
    progress: <ProgressBar color1="#1be44c" color2="#139b34" number="90%" />,
  },
];

const References = () => {
  return (
    <StyledReviewsGrid>
      {awards.map(({ title, subtitle, progress }, index) => (
        <StyledReviewsItem key={index}>
          <StyledProgressGrid>{progress}</StyledProgressGrid>
          <Grid>
            <StyledHeader>{title}</StyledHeader>
            <StyledParagaph>{subtitle}</StyledParagaph>
          </Grid>
        </StyledReviewsItem>
      ))}
    </StyledReviewsGrid>
  );
};

export default References;

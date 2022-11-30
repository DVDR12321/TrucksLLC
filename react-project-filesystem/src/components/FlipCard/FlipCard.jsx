import React from "react";
import {
  StyledBackCard,
  StyledFlipCard,
  StyledFlipInnerCard,
  StyledFrontCard,
} from "./StyledComponents";

const FlipCard = (props) => {
  const { FrontCard, BackCard } = props;
  return (
    <StyledFlipCard>
      <StyledFlipInnerCard>
        <StyledFrontCard>
          <FrontCard />
        </StyledFrontCard>
        <StyledBackCard>
          <BackCard />
        </StyledBackCard>
      </StyledFlipInnerCard>
    </StyledFlipCard>
  );
};

export default FlipCard;

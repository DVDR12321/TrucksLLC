import React from "react";
import Quotes from "./Quotes/Quotes";
import { References } from "./References/References";
import { WrapperDiv } from "./StyledComponents";

export const Testimonials = () => {
  return (
    <WrapperDiv>
      <References></References>
      <Quotes></Quotes>
    </WrapperDiv>
  );
};

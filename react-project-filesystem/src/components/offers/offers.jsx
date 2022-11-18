import React from "react";
import SimpleContainer from "../references/SimpleContainer";
import { StyledParagraph } from "./StyledComponents";

const Offers = () => {
  return (
    <SimpleContainer
      Header="What we offer"
      Body={
        <StyledParagraph>
          <li>24 hours Dispatch</li>
          <li>Fleet Monitoring Systems</li>
          <li>Know where your load is any given time</li>
          <li>Well maintained fleet</li>
          <li>Responsible drivers</li>
        </StyledParagraph>
      }
    ></SimpleContainer>
  );
};
export default Offers;

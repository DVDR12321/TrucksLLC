import React from "react";
import {
  StyledContainer,
  StyledContainerBody,
  StyledHeaderText,
  StyledSeparator,
} from "./StyledComponents";

const SimpleContainer = (props) => {
  const { Header, Body } = props;
  return (
    <StyledContainer>
      <StyledHeaderText> {Header} </StyledHeaderText>
      <StyledSeparator />
      <StyledContainerBody> {Body} </StyledContainerBody>
    </StyledContainer>
  );
};
export default SimpleContainer;

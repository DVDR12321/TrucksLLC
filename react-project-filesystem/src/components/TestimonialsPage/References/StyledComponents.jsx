import styled from "@emotion/styled";

// SIMPLE CONTAINER

export const StyledContainer = styled("div")`
  font-family: "Roboto Serif", serif;
  display: flex;
  align-items: center;
  justify-content: start;
  text-align: center;
  flex-direction: column;
  height: 90vb;
  width: 90%;
  background-color: "transparent";
  // border: 2px solid red;
  padding: 5px;
  margin: 10px;
`;

export const StyledHeaderText = styled("h1")`
  padding: 7px;
  color: black;
  font-size: 7vb;
`;

export const StyledSeparator = styled("div")`
  width: 40%;
  height: 3px;
  background: #be1010;
  margin: 0 auto 40px auto;
`;

export const StyledContainerBody = styled("div")`
  font-size: 5vb;
  color: black;
`;

// REVIEWS CONTAINER

export const ReviewsContainingDiv = styled("div")`
  display: flex;
  padding: 20px;
`;

export const StyledHeader = styled("h1")`
  font-size: 90%;
  color: #6d0713;
  text-align: left;
  padding-left: 20px;
`;

export const StyledP = styled("p")`
  font-size: 50%;
  font-color: red;
  text-align: left;
  padding-left: 20px;
`;

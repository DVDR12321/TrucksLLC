import styled from "@emotion/styled";

export const StyledFlipCard = styled("div")`
  background-color: transparent;
  width: 180px;
  height: 220px;
  perspective: 1000px;
  cursor: pointer;
  &:hover > * {
    transform: rotateY(180deg);
  }
`;

export const StyledFlipInnerCard = styled("div")`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const StyledFrontCard = styled("div")`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #bbb;
  color: black;
  z-index: 2;
  border-radius: 5px;
  padding: 5px;
`;

export const StyledBackCard = styled("div")`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #da1e2c;
  color: white;
  transform: rotateY(180deg);
  z-index: 1;
  border-radius: 5px;
`;

import styled from "@emotion/styled";

export const CardContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5%;
  height: 80vh;
  width: 60vh;
  background-color: transparent;
`;

export const CardTop = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 100%;
  background-color: #7f0000;
`;

export const CardMiddle = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 100%;
  background-color: black;
`;

export const CardBottom = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 100%;
  background-color: #7f0000;
`;

export const TopImg = styled("img")`
  height: 50%;
  width: 50%;
  object-fit: contain;
`;
export const BotImg = styled("img")`
  height: 50%;
  width: 50%;
  object-fit: contain;
`;

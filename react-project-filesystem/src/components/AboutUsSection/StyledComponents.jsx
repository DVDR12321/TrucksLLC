import styled from "@emotion/styled";

export const ContainingDiv = styled("div")`
  display: flex;
  justify-content: center;
`;

export const SectionOverlay = styled("div")`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 90%;
  background-color: rgba(0, 0, 0, 1);
`;
export const StyledImage = styled("img")`
  position: absolute;
  instet: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.06;
  object-fit: cover;
`;
export const AboutusDrivers = styled("div")`
  position: relative;
  z-index: 2;
  width: 45%;
  text-align: end;
  padding: 10px;
  border-right: 7px outset red;
`;

export const StyledAboutHeader = styled("h1")`
  color: white;
  font-family: "Roboto Serif", serif;
  font-size: 5rem;
  background: linear-gradient(
    139deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 240, 240, 0.7455181901862307) 64%,
    rgba(129, 16, 16, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 5%;
`;
export const StyledText = styled("p")`
  color: white;
  font-family: "Roboto", sans-serif;
  padding: 5%;
`;
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
export const AboutusCustomers = styled("div")`
  position: relative;
  z-index: 2;
  width: 45%;
  text-align: start;
  padding: 10px;
`;
export const StyledCustomersHeader = styled("h1")`
  padding: 5%;
  color: white;
  font-family: "Roboto Serif", serif;
  font-size: 5rem;
  background: linear-gradient(
    229deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 240, 240, 0.7455181901862307) 64%,
    rgba(129, 16, 16, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const StyledSpan = styled("span")`
  color: red;
`;

export const SeparatorDiv = styled("div")`
  position: absolute;
  height: 90%;
  z-index: 2;
  width: 5px;
  background-color: "red";
`;

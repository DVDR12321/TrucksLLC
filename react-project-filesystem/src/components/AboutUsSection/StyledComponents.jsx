import styled from "@emotion/styled";

export const ContainingDiv = styled("div")`
  display: flex;
  justify-content: center;
`;

export const SectionOverlay = styled("div")`
  border-radius: 4% 4% 0 0;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 90%;
  background: #f0f4f5; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #f0f4f5,
    #f0f4f5
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #f0f4f5,
    #f0f4f5
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
// export const StyledImage = styled("img")`
//   border-radius: 4% 4% 0 0;
//   position: absolute;
//   instet: 0;
//   width: 100%;
//   height: 100%;
//   z-index: 0;
//   opacity: 0.3;
//   object-fit: cover;
// `;
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
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 10, 10, 0.9) 64%,
    rgba(255, 150, 150, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 5%;
`;
export const StyledText = styled("p")`
  color: black;
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


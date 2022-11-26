import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";

export const ContainingGrid = styled(Grid)``;

export const SectionOverlayGrid = styled(Grid)`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: "transparent";
`;
// export const StyledImage = styled("img")`
// position: absolute;
// instet: 0;
// width: 100%;
// height: 100%;
// z-index: 0;
// opacity: 0.05;
// `;
// --------------------------------      RECOGNITIONS       ---------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
export const Recognitions = styled(Grid)`
  padding: 5vmin;
  height: 90%;
`;
export const StyledRecognitionsHeader = styled("h1")`
  padding-bottom: 10vmin;
  color: white;
  font-family: "Roboto Serif", serif;
  font-size: 5rem;
  background: linear-gradient(
    139deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 240, 240, 0.7455181901862307) 60%,
    rgba(179, 16, 16, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const StyledText = styled("p")`
  display: flex;
  font-family: "Roboto", sans-serif;
`;
// --------------------------------      LAURELS       --------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------

export const Laurels = styled(Grid)`
  padding: 5vmin;
  height: 90%;
`;
export const StyledLaurelsHeader = styled("h1")`
  padding-bottom: 5vmin;
  padding-left: 3vmin;
  color: white;
  font-family: "Roboto Serif", serif;
  font-size: 5rem;
  background: linear-gradient(
    229deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 240, 240, 0.7455181901862307) 60%,
    rgba(179, 16, 16, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SeparatorDiv = styled("div")`
  position: relative;
  height: 90%;
  z-index: 2;
  width: 7px;
  background-color: rgba(220, 30, 10, 1);
`;

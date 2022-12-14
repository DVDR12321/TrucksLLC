import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material";
import Image from "../../assets/DriversHeader.jpg";

export const StyledGrid = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  background-image: url(${Image});
  background-size: 100% 100%;
  height: 60vh;
  width: 100vw;
`;

export const StyledHeaderText = styled("h1")`
  text-align: center;
  color: white;
  position: relative;
`;
export const StyledParagraph = styled("p")`
  font-size: 20px;
  color: rgba(255, 50, 0, 0.9);
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;
export const StyledSpan = styled("span")`
  color: red;
`;

export const StyledButton = styled(Button)`
  border-radius: 5px;
  color: white;
`;

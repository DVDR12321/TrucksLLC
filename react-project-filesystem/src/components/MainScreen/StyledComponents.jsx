import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)`
  position: relative;
  top: 31vb;
  left: 1vb;
  background-color: #ba000d;
  font-weight: bold;
  font-size: 5vb;
  height: 7vb;
  width: 30vb;
`;

export const StyledMainGrid = styled("div")`
  font-family: Roboto, Helvetica, Arial, sans-serif;
`;

export const StyledMainTitle = styled("h1")`
  top: 5vb;
  position: relative;
  margin-left: 5vw;
  padding-bottom: 0.1ch;
  font-size: 13vh; /* Nezgodno je sto je samo na osnovu visine, treba da uzima u obzir i sirinu */
  color: #f7ecec;
  border-bottom: 10px solid red;
`;

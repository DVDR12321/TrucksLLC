import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const StyledGrid = styled(Grid)`
  background-color: #1f1818;
  height: 100vh;
`;

export const StyledContainer = styled("div")`
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  height: 90vb;
  width: 80%;
  background-color: #141010;
  border: 2px solid rgb(0, 0, 0);
  padding: 5px;
  margin: 30px;
`;

export const StyledHeaderText = styled("h1")`
  color: white;
  font-size: 7vb;
`;

export const StyledSeparator = styled("div")`
  width: 20%;
  height: 3px;
  background: #be1010;
  margin: 0 auto 40px auto;
`;

export const StyledContainerBody = styled("div")`
  padding-left: 10vb;
  font-size: 5vb;
  color: white;
`;

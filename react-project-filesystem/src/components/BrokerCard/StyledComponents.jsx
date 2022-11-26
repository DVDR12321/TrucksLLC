import styled from "@emotion/styled";
import Card from "@mui/material/Card";

export const StyledCard = styled(Card)`
  height: 25vh;
  width: 80%;
  outline-style: solid;
  outline-width: 2px;
  outline-color: rgba(255, 255, 255, 0.5);
  background-color: transparent;
  color: rgba(255, 255, 255, 0.5);
  :hover {
    outline-color: rgba(255, 255, 255, 1);
    color: rgba(255, 255, 255, 1);
  }
`;

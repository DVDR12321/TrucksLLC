import { Card, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledCard = styled(Card)`
  height: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  border-radius: 5px;
  background: ${(props) => props.backgroundColor};
  width: 100%;
  outline: 1px solid white;
  :hover {
    transform: scale(1.15);
    transition: transform 0.3s cubic-bezier(0, 0, 0.58, 1);
  }
`;

export const StyledCardHeader = styled("h2")(
  ({ theme }) => `
  padding-top:1ch;
  color: #fff;
`
);

export const StyledChartGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  padding-bottom: 10vh;
`;

export const StyledHeaderGrid = styled(Grid)`
  text-align: center;
  background-color: ${(props) => props.headerColor};
  padding-bottom: 0.5ch;
`;

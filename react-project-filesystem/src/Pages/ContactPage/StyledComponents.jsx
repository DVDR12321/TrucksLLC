import { Grid, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledHeader = styled("h1")(
  ({ theme }) => `
    color:${theme.palette.primary.main};
    margin-bottom:5vh;
    margin-top: 10vh;
    `
);
export const StyledIconButton = styled(IconButton)`
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
`;

export const StyledContactGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const StyledListItem = styled("li")`
  padding: 2ch;
`;

export const StyledList = styled("ul")`
  text-align: left;
  font-size: 3vh;
`;

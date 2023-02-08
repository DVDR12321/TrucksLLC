import { Grid, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

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
export const StyledContentGrid = styled(Grid)(
  ({ theme }) => `
background: #ada996;
background: -webkit-linear-gradient(
  to top,
  ${grey[300]},
  ${grey[200]},
  ${grey[100]},
  ${grey[50]}
);
background: linear-gradient(
  to top,
  ${grey[300]},
  ${grey[200]},
  ${grey[100]},
  ${grey[50]}
);
`
);
export const StyledContactGrid = styled(Grid)(
  ({ theme }) => `
  display: flex;
  justify-content: center;
  text-align: center;
`
);
export const StyledImageGrid = styled(Grid)`
  width: 100vw;
  height: 70vh;
`;

export const StyledListItem = styled("li")`
  padding: 2ch;
`;

export const StyledList = styled("ul")`
  text-align: left;
  font-size: 3vh;
`;

export const StyledImage = styled("img")`
  width: 100%;
`;

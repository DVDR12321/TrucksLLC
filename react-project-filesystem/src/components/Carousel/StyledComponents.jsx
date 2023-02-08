import { Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledPaper = styled(Paper)`
  margin-top: 5vh;
  height: 50vh;
  width: 100%;
  padding: 9%;
`;

export const StyledParagraph = styled("p")`
  font-size: 24px;
  text-align: justify;
  padding-bottom: 5vh;
  text-indent: 5ch;
  line-height: 2.5ch;
`;

export const StyledParagraphGrid = styled(Grid)`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const StyledImage = styled("img")`
  height: 60px;
  width: 60px;
`;

export const StyledBox2 = styled(Box)(
  ({ theme }) => `
 width:60px;
 height:60px;
 margin-left:30px;
 margin-top:-13vh;
 background-color:${theme.palette.secondary.main};
 border-radius:3px;
 font-size:100px;
 text-align:center;
 color:${theme.palette.common.white};
`
);

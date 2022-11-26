import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import image from '../../assets/app__background.png';

export const StyledGridContainer = styled(Grid)`
  border-radius: 0 0 5% 5%;
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
  justify-content: center;
  background: #f0f4f5; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #f0f4f5,
    #bdb7b7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #f0f4f5,
    #bdb7b7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const StyledBox = styled(Box)`
  background-color: rgba(0,0,0,1);
  // background-image: url(${image});
  // background-size: 100% 100%;
  // opacity:1;
`;
export const StyledTestimonialsGrid = styled(Grid)`

`;
export const StyledAboutGrid = styled(Grid)`

`;
export const StyledVideoGrid = styled(Grid)`

`;
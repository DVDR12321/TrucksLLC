import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import image from '../../assets/app__background.png';
import Background from '../../assets/app__background2.png';

export const StyledGridContainer = styled(Grid)`
  border-radius: 0 0 5% 5%;
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
  justify-content: center;
  background-image: url(${Background});
  opacity:1;
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
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Background from "../../assets/app__background2.png";

export const StyledGridContainer = styled(Grid)`
  border-radius: 0 0 5% 5%;
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
  justify-content: center;
  background-image: url(${Background});
  opacity: 1;
`;

export const StyledBox = styled(Box)(
  ({ theme }) => `
  background-color: ${theme.palette.common.black}
`
);

export const StyledTestimonialsGrid = styled(Grid)``;
export const StyledAboutGrid = styled(Grid)``;
export const StyledVideoGrid = styled(Grid)``;

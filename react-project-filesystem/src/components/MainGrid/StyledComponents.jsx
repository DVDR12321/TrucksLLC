import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { grey } from "@mui/material/colors";

export const StyledGridContainer = styled(Grid)(
  ({ theme }) => `
background: #ada996;
background: -webkit-linear-gradient(
  to top,
  ${grey[400]},
  ${grey[100]},
  ${grey[300]},
  ${grey[200]}
);
background: linear-gradient(
  to top,
  ${grey[400]},
  ${grey[100]},
  ${grey[300]},
  ${grey[200]}
);
`
);

export const StyledBox = styled(Box)(
  ({ theme }) => `
  background-color: ${theme.palette.common.black}
`
);

export const StyledTestimonialsGrid = styled(Grid)``;
export const StyledAboutGrid = styled(Grid)``;
export const StyledVideoGrid = styled(Grid)``;

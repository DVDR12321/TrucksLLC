import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const StyledImg = styled("img")`
  width: 100%;
  height: 40vh;
  object-fit: cover;
`;

export const StyledHeaderTypography = styled(Typography)(
  ({ theme }) => `
  padding-bottom: 0.3ch;
  border-bottom: 1px inset ${theme.palette.common.black};
  font-weight:bold;
  `
);

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

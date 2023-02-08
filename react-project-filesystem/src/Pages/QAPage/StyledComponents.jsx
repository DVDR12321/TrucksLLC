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
  @media only screen and (min-width: 320px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 1025px) {
    font-size: 25px;
  }

  `
);

export const StyledContactCaption = styled(Typography)`
  font-size: 20px;
`;

export const StyledGridContainer = styled(Grid)(
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

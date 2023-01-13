import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledImg = styled("img")`
  width: 100%;
  height: 40vh;
  object-fit: cover;
`;

export const StyledHeaderTypography = styled(Typography)(
  ({ theme }) => `
  padding 5%;
  border-bottom: 1px inset ${theme.palette.common.black};
  `
);

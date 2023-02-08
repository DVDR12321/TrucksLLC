import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledWrapper = styled(Grid)``;

export const CardWrapperGrid = styled(Grid)(
  ({ theme }) => `
  border-top: 5px solid ${theme.palette.primary.dark};
  display: flex;
  align-items: center;
`
);

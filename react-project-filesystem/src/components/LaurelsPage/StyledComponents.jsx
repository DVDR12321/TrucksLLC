import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledWrapper = styled(Grid)`
  height: 60vh;
`;

export const CardWrapperGrid = styled(Grid)(
  ({ theme }) => `
  border-top: 5px solid ${theme.palette.secondary.main};
  display: flex;
  align-items: center;
`
);

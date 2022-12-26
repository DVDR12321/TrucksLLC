import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledReviewsGrid = styled(Grid)`
  align-items: baseline;
`;

export const StyledProgressGrid = styled(Grid)`
  display: flex;
  align-items: center;
`;

export const StyledReviewsItem = styled(Grid)`
  display: flex;
  padding: 20px;
`;

export const StyledHeader = styled("h1")(
  ({ theme }) => `
  font-size: 4vmin;
  color: ${theme.palette.primary.light};
  text-align: left;
  padding-left: 20px;
`
);

export const StyledParagaph = styled(Typography)(
  ({ theme }) => `
  font-size: 2vmin;
  color: ${theme.palette.common.white};
  text-align: left;
  padding-left: 20px;
`
);

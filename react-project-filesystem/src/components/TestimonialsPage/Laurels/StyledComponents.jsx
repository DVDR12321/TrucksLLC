import { styled } from "@mui/material/styles";

export const ReviewsContainingDiv = styled("div")`
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

export const StyledP = styled("p")(
  ({ theme }) => `
  font-size: 2vmin;
  color: ${theme.palette.common.white};
  text-align: left;
  padding-left: 20px;
`
);

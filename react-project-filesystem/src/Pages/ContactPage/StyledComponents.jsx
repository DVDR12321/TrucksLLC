import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledHeader = styled("h1")(
  ({ theme }) => `
    color:${theme.palette.primary.main};
    `
);
export const StyledIconButton = styled(IconButton)`
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
`;

import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Instagram } from "@mui/icons-material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { grey, indigo, pink, red } from "@mui/material/colors";

export const StyledBox = styled(Box)`
  border-bottom: 1px;
  padding-bottom: 20px;
`;

export const StyledCaption = styled(Typography)(
  ({ theme }) => `
  font-weight: 700;
  font-family: Montserrat;
  text-align: justify;
  color: ${theme.palette.common.white};
`
);

export const StyledText = styled(Typography)(
  ({ theme }) => `
  color: ${theme.palette.common.white};
`
);

export const StyledLink = styled("a")(
  ({ theme }) => `
  color: ${theme.palette.common.white};
  text-decoration: none;
`
);

export const StyledBottomText = styled(Typography)(
  ({ theme }) => `
  color: ${theme.palette.common.white};
  padding-top: 15px;
`
);

export const StlyedFacebookIcon = styled(FacebookIcon)(
  ({ theme }) => `
  padding: 2px 3px;
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  color: ${theme.palette.common.white};
  background-color: ${grey[800]};
  &:hover {
    background-color: ${indigo[500]};
  }
`
);

export const StlyedInstagramIcon = styled(Instagram)(
  ({ theme }) => `
  padding: 2px 3px;
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  color: ${theme.palette.common.white};
  background-color: ${grey[800]};
  &:hover {
    background-color: ${pink[500]};
  }
`
);

export const StlyedYoutubeIcon = styled(YouTubeIcon)(
  ({ theme }) => `
  padding: 2px 3px;
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  color: ${theme.palette.common.white};
  background-color: ${grey[800]};
  &:hover {
    background-color: ${red[500]};
  }
`
);

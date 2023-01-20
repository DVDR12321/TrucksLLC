import { styled } from "@mui/material/styles";
import { Box, Grid, Link, TextField, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Instagram } from "@mui/icons-material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { grey, indigo, pink, red } from "@mui/material/colors";

export const StyledFooterUp = styled(Grid)`
  margin-bottom: 20px;
`;

export const StyledFooterDown = styled(Grid)`
  margin-top: 0px;
`;

export const StyledBox = styled(Box)`
  border-bottom: 1px;
  padding-bottom: 20px;
`;

export const StyledNewsletterGrid = styled(Grid)`
  padding-top: 20px;
`;

export const StyledSubscribeTextField = styled(TextField)`
  // border: solid 1px white;
`;

export const StyledCaption = styled(Typography)(
  ({ theme }) => `
  font-weight: 700;
  font-family: Montserrat;
  text-align: justify;
  color: ${theme.palette.common.white};
`
);

export const StyledCaptionCenter = styled(Typography)(
  ({ theme }) => `
  font-weight: 700;
  font-family: Montserrat;
  padding-left: 50px;
  color: ${theme.palette.common.white};
`
);

export const StyledText = styled(Typography)(
  ({ theme }) => `
  color: ${theme.palette.common.white};
  font-weight: 100; 
  font-family: Montserrat;
`
);

export const StyledLink = styled(Link)(
  ({ theme }) => `
  color: ${theme.palette.common.white};
  text-decoration: none;
`
);

export const StyledBottomText = styled(Typography)(
  ({ theme }) => `
  color: ${theme.palette.common.white};
  padding-top: 15px;
  text-align: center; 
`
);

export const StlyedFacebookIcon = styled(FacebookIcon)(
  ({ theme }) => `
  padding: 10px 10px;
  height: 65px;
  width: 65px;
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  color: ${theme.palette.common.white};
  background-color: ${grey[900]};
  &:hover {
    background-color: ${indigo[500]};
  }
`
);

export const StlyedInstagramIcon = styled(Instagram)(
  ({ theme }) => `
  padding: 10px 10px;
  height: 65px;
  width: 65px;
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  color: ${theme.palette.common.white};
  background-color: ${grey[900]};
  &:hover {
    background-color: ${pink[500]};
  }
`
);

export const StlyedYoutubeIcon = styled(YouTubeIcon)(
  ({ theme }) => `
  padding: 10px 10px;
  height: 65px;
  width: 65px;
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  color: ${theme.palette.common.white};
  background-color: ${grey[900]};
  &:hover {
    background-color: ${red[500]};
  }
`
);

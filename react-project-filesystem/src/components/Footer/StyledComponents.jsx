import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Instagram } from "@mui/icons-material";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const StyledBox = styled(Box)`
  border-bottom: 1px;
  padding-bottom: 20px;
`;

export const StyledCaption = styled(Typography)`
  font-weight: 700;
  font-family: Montserrat;
  text-align: justify;
`;

export const StyledLink = styled("a")`
  color: white;
  text-decoration: none;
`;

export const StlyedFacebookIcon = styled(FacebookIcon)`
  padding: 5px 7px;
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  background-color: #322f30;
  &:hover {
    background-color: #3d5b99;
  }
`;

export const StlyedInstagramIcon = styled(Instagram)`
  padding: 5px 7px;
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  background-color: #322f30;
  &:hover {
    background-color: #e1306c;
  }
`;

export const StlyedYoutubeIcon = styled(YouTubeIcon)`
  padding: 5px 7px;
  -o-transition: 0.5s;
  -ms-transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  background-color: #322f30;
  &:hover {
    background-color: #e64a41;
  }
`;

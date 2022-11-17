import styled from "@emotion/styled";
import { Box, List, ListItem, Typography } from "@mui/material";

export const StyledBox = styled(Box)`
  border-bottom: 1px;
  padding-bottom: 20px;
`;

export const StyledCaption = styled(Typography)`
  font-weight: 700;
  font-family: Montserrat;
`;

export const StyledSocialMenu = styled(List)`
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0;
  margin: 0;
  display: flex;
`;

export const StyledSocialListItem = styled(ListItem)`
  list-style: none;
  margin: 0 10px;
  &.fa {
    color: #000000;
    font-size: 25px;
    line-height: 50px;
    transition: 0.5s;
  }
  &.fa:hover {
    color: #ffffff;
  }
`;

export const StyledLink = styled("a")`
  position: relative;
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  text-align: center;
  transition: 0.5s;
  transform: translate(0, 0px);
  box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.5);
  &:hover {
    transform: rotate(0deg) skew(0deg) translate(0, -10px);
  }
`;

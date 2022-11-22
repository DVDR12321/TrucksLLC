import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "../../assets/headerimage.jpg";

export const StyledContainer = styled("div")`
  background: #ada996; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #ada996,
    #f2f2f2,
    #dbdbdb,
    #eaeaea
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #ada996,
    #f2f2f2,
    #dbdbdb,
    #eaeaea
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
export const StyledHeaderImage = styled("div")`
  display: flex;
  height: 40vh;
  background: url(${Image});
  color: white;
  padding-bottom: 10px;
`;

export const StyledHeaderBox = styled(Box)`
  background: #da1e2c;
  height: 30vh;
  margin-left: 200px;
  margin-right: 200px;
  margin-top: -100px;
  border-radius: 50px;
`;

export const StyledCaption = styled(Typography)`
  align-items: center;
  color: white;
  float: left;
  padding-left: 20px;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 1px;
  font-weight: 300;
`;

export const StyledHeaderText = styled(Typography)`
  align-items: center;
  color: white;
  float: right;
  line-height: 28px;
  font-size: 18px;
  letter-spacing: 1px;
  font-style: italic;
`;

export const StyledText = styled("p")`
  text-align: center;
  width: 100%;
  overflow: hidden;
`;

export const StyledImage = styled("img")`
  border-radius: 15%;
  width: 500px;
  height: 370px;
`;

export const StyledSectionCaption = styled(Typography)`
  color: #424242;
  font-size: 30px;
  line-height: 40px;
  letter-spacing: 1px;
  font-weight: 300;
  text-align: center;
`;

export const StyledGridRow = styled(Grid)`
  margin-bottom: 30px;
`;

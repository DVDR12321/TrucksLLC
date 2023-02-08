import { styled } from "@mui/material/styles";
import { Grid, TextField, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";

export const StyledHeader1 = styled("h1")`
  font-size: 2vmin;
  text-align: center;
  padding-bottom: 5ch;
  padding-top: 5ch;
`;

export const StyledHeader2 = styled("h1")`
  font-size: 5vmin;
  text-align: center;
  color: "rgb(255, 0, 0)";
  padding-bottom: 1ch;
`;

export const StyledHeader3 = styled("h1")`
  font-size: 3vmin;
  text-align: center;
  padding-bottom: 2ch;
`;

export const Styledp1 = styled("p")`
  text-align: justify;
  padding: 1ch;
`;

export const StyledSpan = styled("span")`
  font-weight: bold;
  padding-left: 0.3ch;
`;

export const StyledTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: `7px`,
      },
    },
  },
})(TextField);

export const StyledDiv = styled("div")`
  border-top: 1px groove gray;
  border-left: 1px groove gray;
  border-right: 1px groove gray;
  margin-right: 1px;
`;

export const StyledSearchContainer = styled("div")`
  object-fit: contain;
`;

export const StyledTypographyWrapper = styled("div")(
  ({ theme }) => `
background-color:${grey[200]};
margin: "1ch";
`
);
export const StyledTypography = styled(Typography)`
  font-weight: bold;
  margin: 1ch;
  @media only screen and (min-width: 320px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;

export const StyledCaption = styled(Typography)`
  @media only screen and (min-width: 320px) {
    font-size: 30px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 45px;
  }
  @media only screen and (min-width: 1025px) {
    font-size: 65px;
  }
`;

export const StyledInstructionsText = styled(Typography)`
  @media only screen and (min-width: 320px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 22px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 28px;
  }
`;

export const StyledLabelText = styled(Typography)`
  @media only screen and (min-width: 320px) {
    font-size: 12px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";
import SignaturePad from "react-signature-pad";
import { withStyles } from "@mui/styles";

export const StyledHeader1 = styled("h1")`
  font-size: 2vmin;
  text-align: center;
  padding-bottom: 5ch;
  padding-top: 5ch;
`;

export const StyledHeader2 = styled("h1")`
  font-size: 5vmin;
  text-align: center;
  color: red;
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

export const StyledSignature = styled(SignaturePad)`
  canvasProps= {
     {
      style: {
        border: "5px solid red";
      }
    }
  }
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

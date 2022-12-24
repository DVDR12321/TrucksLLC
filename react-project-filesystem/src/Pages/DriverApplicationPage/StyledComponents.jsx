import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import SignaturePad from "react-signature-pad";

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

export const StyledInput = styled(TextField)`
  border-radius: 10% 30% 50% 70%;
`;

import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Background from "../../assets/app__background2.png";

export const ContainingDiv = styled("div")`
  display: flex;
  align-items: start;
  justify-content: center;
  height: 100%;
  width: 100vw;
  margin-bottom: 10px;
`;

export const ContainingGrid = styled(Grid)(
  ({ theme }) => `
  background-color: ${theme.palette.common.white};
  border-radius: 0 0 30px 30px;
  border-bottom: 3px solid ${grey[50]};
  border-left: 3px solid ${grey[50]};
  border-right: 3px solid ${grey[50]};
  background-image: url(${Background});
  padding-bottom:2vh;
`
);

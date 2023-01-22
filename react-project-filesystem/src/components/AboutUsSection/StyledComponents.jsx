import { Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Background from "../../assets/app__background.png";

export const ContainingDiv = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100vw;
  padding-top: 10vh;
`;

export const SectionOverlay = styled(Grid)`
  background-image: url(${Background});
  align-items: center;
  border-radius: 30px 30px 0 0;
  border-top: 3px solid ${grey[50]};
  border-left: 3px solid ${grey[50]};
  border-right: 3px solid ${grey[50]};
`;

export const AboutusDrivers = styled(Grid)`
  z-index: 2;
  text-align: end;
  padding: 10px;
`;

export const StyledAboutHeader = styled("h1")(
  ({ theme }) => `
  color: ${theme.palette.common.white};
  font-family: "Roboto Serif", serif;
  font-size: 4rem;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    120deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(32, 9, 9, 0.8771709367340687) 65%,
    rgba(213, 0, 0, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 5%;
`
);

export const StyledText = styled("p")(
  ({ theme }) => `
  color: ${theme.palette.common.black};
  font-family: "Roboto", sans-serif;
  padding: 5%;
  line-height:3ch;
`
);

export const AboutUsCustomers = styled(Grid)`
  z-index: 2;
  text-align: start;
  padding: 10px;
`;

export const StyledCustomersHeader = styled("h1")(
  ({ theme }) => `
  padding: 5%;
  color: ${theme.palette.common.white};
  font-family: "Roboto Serif", serif;
  font-size: 4rem;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    210deg,
    ${theme.palette.common.black} 0%,
    ${theme.palette.primary.dark} 65%,
    ${theme.palette.primary.main} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
);

export const StyledSpan = styled("span")(
  ({ theme }) => `
  color: ${theme.palette.primary.main};
  font-weight:bold;
`
);

export const SeparatorDiv = styled(Grid)(
  ({ theme }) => `
 
  height: 80%;
  z-index: 2;
  width: 50px;
  background: ${theme.palette.common.black};
  background: linear-gradient(
    0deg,
    ${theme.palette.common.black} 0%,
    ${theme.palette.primary.dark} 50%,
    ${theme.palette.primary.main} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
);

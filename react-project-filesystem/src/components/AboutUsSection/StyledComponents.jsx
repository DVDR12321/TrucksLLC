import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

export const ContainingDiv = styled("div")`
  display: flex;
  justify-content: center;
`;

export const SectionOverlay = styled("div")`
  border-radius: 4% 4% 0 0;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 90%;
  background: ${grey[100]};
  background: -webkit-linear-gradient(to bottom, ${grey[100]}, ${grey[100]});
  background: linear-gradient(to bottom, ${grey[100]}, ${grey[100]});
`;

export const StyledImage = styled("img")`
  border-radius: 4% 4% 0 0;
  position: absolute;
  instet: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.85;
  object-fit: cover;
`;
export const AboutusDrivers = styled("div")`
  position: relative;
  z-index: 2;
  width: 45%;
  text-align: end;
  padding: 10px;
  border-right: 7px outset red;
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
`
);

export const AboutUsCustomers = styled("div")`
  position: relative;
  z-index: 2;
  width: 45%;
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
`
);

export const SeparatorDiv = styled("div")(
  ({ theme }) => `
  position: absolute;
  height: 90%;
  z-index: 2;
  width: 5px;
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

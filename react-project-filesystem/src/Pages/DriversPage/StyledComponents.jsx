import { styled } from "@mui/material/styles";
import { Button, Card, Grid } from "@mui/material";
import Image from "../../assets/DriversHeader.jpg";

export const StyledGrid = styled(Grid)(
  ({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  text-shadow: -1px 0 ${theme.palette.common.black}, 0 1px ${theme.palette.common.black}, 1px 0 ${theme.palette.common.black}, 0 -1px ${theme.palette.common.black};
  background-image: url(${Image});
  background-size: 100% 100%;
  height: 60vh;
  width: 100vw;
`
);

export const StyledHeaderText = styled("h1")(
  ({ theme }) => `
  text-align: center;
  color: ${theme.palette.common.white};
  position: relative;
  font-family: 'Archivo Black', sans-serif;
  
`
);

export const StyledParagraph = styled("p")(
  ({ theme }) => `
  font-size: 20px;
  color: ${theme.palette.primary.main};
  text-shadow: -1px 0 ${theme.palette.common.black}, 0 1px ${theme.palette.common.black}, 1px 0 ${theme.palette.common.black}, 0 -1px ${theme.palette.common.black};
`
);

export const StyledSpan = styled("span")(
  ({ theme }) => `
  color: ${theme.palette.primary.main};
`
);

export const StyledButton = styled(Button)(
  ({ theme }) => `
  
  color: ${theme.palette.common.white};
`
);

export const StyledCard = styled(Card)`
  width: 30%;
  height: 80vh;
  border-radius: 3%;
`;

export const StyledSpan2 = styled("span")`
  text-align: center;
`;

import { styled } from "@mui/material/styles";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import img from "../../assets/main_background_colored_cropped.png";

// Grids ------------------------------------------------------------------
export const StyledGrid = styled(Grid)`
  height: 100%;
  background-image: url(${img});
  background-size: 100% 100%;
  justify-content: center;
`;

export const StyledHeaderGrid = styled(Grid)`
  display: flex;
  align-items: end;
  padding-bottom: 17vh;
  height: 64vh;
`;

export const StyledButtonGrid = styled(Grid)`
  display: flex;
  align-items: end;
  justify-content: end;
  font-family: "Roboto", sans-serif;
  padding-bottom: 20vh;
`;

export const StyledCardsGrid = styled(Grid)`
  height: 100%;
  padding: 20px 0 20px 0;
  backdrop-filter: blur(0px) sepia(0%);
`;

// Items --------------------------------------------------------------------------------------------------------------------------------------------------

export const StyledMainTitle = styled("h1")(
  ({ theme }) => `
  //border-bottom: 4px outset ${theme.palette.primary.main};
  text-shadow: -1px 0 ${theme.palette.common.black}, 0 1px ${theme.palette.common.black}, 1px 0 ${theme.palette.common.black}, 0 -1px ${theme.palette.common.black};
  font-family: "Archivo Black", sans-serif;
  font-style: bold;
  font-size: 12vmin;
  color: white;
`
);

export const StyledButton = styled(Button)(
  ({ theme }) =>
    `
  font-weight: 700;
  font-family: "Archivo-Black", sans-serif;
  font-size: 6vmin;
  height: 7vmin;
  width: 20vmax;
  border-radius: 3px;
`
);

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

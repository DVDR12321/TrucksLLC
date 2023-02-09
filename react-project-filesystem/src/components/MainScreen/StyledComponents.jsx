import { styled } from "@mui/material/styles";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import img from "../../assets/MainPage/main3.png";

// Grids ------------------------------------------------------------------
export const StyledGrid = styled(Grid)`
  height: 100%;
  background: url(${img});
  @media only screen and (min-width: 320px) {
    background-size: cover;
  }
  @media only screen and (min-width: 768px) {
    background-size: 100% 100%;
  }
  @media only screen and (min-width: 1024px) {
    background-size: 100% 100%;
  }
  justify-content: center;
`;

export const StyledHeaderGrid = styled(Grid)`
  display: flex;
  align-items: end;
  padding-bottom: 10vh;
  height: 64vh;
`;

export const StyledButtonGrid = styled(Grid)`
  display: flex;
  align-items: end;
  justify-content: end;
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
  //font-family: "Roboto Serif";
  //text-shadow: -1px 0 ${theme.palette.common.black}, 0 1px ${theme.palette.common.black}, 1px 0 ${theme.palette.common.black}, 0 -1px ${theme.palette.common.black};
  font-family: "Archivo Black", sans-serif;
  font-style: bold;
  font-size: 12vmin;
  color: white;
  line-height:1.5ch;
  margin-bottom:5vh;
`
);

export const StyledMainDescription = styled("p")(
  ({ theme }) => `
  color: ${theme.palette.common.white};

font-family: "Roboto Serif";
 font-weight: bold;
 font-style: italic;
 font-size: 3vmin;
 margin-bottom:10vh;
 `
);

export const StyledButton = styled(Button)(
  ({ theme }) =>
    `
  font-weight: 700;
  font-family: "Archivo-Black", sans-serif;
  font-size: 6vmin;
  height: 7vmin;
  width: 15vmax;
  border-radius: 3px;
  &:hover{
    background-color:${theme.palette.primary.dark};
  }
 
`
);

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

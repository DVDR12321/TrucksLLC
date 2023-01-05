import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

export const CardContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
  height: 80vh;
  width: 100%;
  background-color: transparent;
`;

export const CardTop = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 100%;
  background-color: ${grey[900]};
`
);

export const CardMiddle = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60%;
  width: 100%;
  background-color: ${grey[600]};
`
);

export const CardBottom = styled("div")(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 100%;
  background-color: ${grey[900]};
`
);

export const TopImg = styled("img")`
  height: 50%;
  width: 50%;
  object-fit: contain;
`;
export const BotImg = styled("img")`
  height: 50%;
  width: 50%;
  object-fit: contain;
`;

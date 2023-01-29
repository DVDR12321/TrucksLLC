import * as React from "react";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { StyledCard, StyledTypography } from "./StyledComponents";

const BrokerCard = (props) => {
  const { imagep, headerp, onClickCard } = props;
  return (
    <StyledCard sx={{ height: "28vh" }}>
      <CardActionArea onClick={onClickCard} sx={{ height: "100%" }}>
        <CardMedia
          component="img"
          height="130"
          image={imagep}
          alt=""
          sx={{ objectFit: "contain" }}
        />
        <CardContent>
          <StyledTypography color="white" component="div">
            {headerp}
          </StyledTypography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};
export default BrokerCard;

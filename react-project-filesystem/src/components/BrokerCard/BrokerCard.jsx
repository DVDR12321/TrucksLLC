import * as React from "react";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { StyledCard } from "./StyledComponents";

const BrokerCard = (props) => {
  const { imagep, headerp, onClickCard } = props;
  return (
    <StyledCard>
      <CardActionArea onClick={onClickCard}>
        <CardMedia
          component="img"
          height="120"
          image={imagep}
          alt=""
          sx={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            color="white"
            component="div"
            sx={{ textAlign: "center", fontSize: "4vmin" }}
          >
            {headerp}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};
export default BrokerCard;

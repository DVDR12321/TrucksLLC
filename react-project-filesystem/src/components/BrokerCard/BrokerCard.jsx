import * as React from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const BrokerCard = (props) => {
  const { imagep, headerp } = props;
  return (
    <Card
      sx={{
        height: "100%",
        width: "85%",
        outlineStyle: "solid",
        outlineWidth: "3px",
        outlineColor: "rgba(255, 0, 0, 0.7)",
        backgroundColor: "transparent",
        backdropFilter: "blur(2px) sepia(50%)",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imagep}
          alt=""
          sx={{ objectFit: "contain" }}
        />
        <CardContent sx={{ padding: "5px" }}>
          <Typography
            gutterBottom
            color="white"
            component="div"
            sx={{ textAlign: "center", fontSize: "120%" }}
          >
            {headerp}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default BrokerCard;

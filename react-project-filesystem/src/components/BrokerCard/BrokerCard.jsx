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
        backgroundColor: "transparent",
        height: "95%",
        outlineStyle: "solid",
        outlineWidth: "2px",
        outlineColor: "#ff0000",
        backdropFilter: "blur(3px) sepia(90%)",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={imagep}
          alt=""
          sx={{ objectFit: "scale-down" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            color="white"
            component="div"
            sx={{ textAlign: "center" }}
          >
            {headerp}
          </Typography>
          {/* <Typography variant="body1" color="white" sx={{textAlign:'center'}} >
                {textp}
              </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default BrokerCard;

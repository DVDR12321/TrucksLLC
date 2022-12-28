import * as React from "react";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { StyledCard } from "./StyledComponents";
import { makeStyles } from "@material-ui/core";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 310,
//     transition: "transform 0.15s ease-in-out",
//     "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
//   },
// });

const BrokerCard = (props) => {
  const { imagep, headerp } = props;
  return (
    <StyledCard>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image={imagep}
          alt=""
          sx={{ objectFit: "cover" }}
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

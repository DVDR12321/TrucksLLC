import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { StyledButton, StyledCard } from "./StyledComponents";
import { Link } from "react-router-dom";
import { StyledLink } from "../../components/MainScreen/StyledComponents";

export default function DriverCard({
  img1,
  text,
  header,
  button1,
  button2,
  link1,
  link2,
}) {
  return (
    <StyledCard>
      <CardMedia component="img" height="60%" image={img1} alt=" " />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {header}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <StyledLink to={link1}>
          <StyledButton variant="contained" color="primary">
            {button1}
          </StyledButton>
        </StyledLink>
        <StyledLink to={link2}>
          <StyledButton variant="contained" color="primary">
            {button2}
          </StyledButton>
        </StyledLink>
      </CardActions>
    </StyledCard>
  );
}

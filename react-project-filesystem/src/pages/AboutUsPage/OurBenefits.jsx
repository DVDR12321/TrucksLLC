import { Divider, Grid } from "@mui/material";
import React from "react";
import FlipCard from "../../components/FlipCard/FlipCard";
import {
  StyledCardHeader,
  StyledCardImage,
  StyledCardWrapper,
  StyledFrontCard,
  StyledSectionCaption,
} from "./StyledComponents";
import img1 from "../../assets/AboutPage/Dispatch.png";
import img2 from "../../assets/AboutPage/DryVan.png";
import img3 from "../../assets/AboutPage/BoxTruck.png";
import img4 from "../../assets/AboutPage/Load.png";
import img5 from "../../assets/AboutPage/Tracking.png";
import img6 from "../../assets/AboutPage/Parking.png";
import { Stack } from "@mui/system";
import { useRef } from "react";

const FrontCard = (props) => (
  <StyledFrontCard>
    <Stack direction="column" sx={{ alignItems: "center" }}>
      <StyledCardHeader>{props.name} </StyledCardHeader>
      <StyledCardImage src={props.image} alt=""></StyledCardImage>{" "}
    </Stack>
  </StyledFrontCard>
);

const cards = [
  {
    name: "Dry Van",
    image: img2,
    back: "Fleet of 100+ dry vans for all of your freight needs",
  },
  {
    name: "Box Truck",
    image: img3,
    back: "State of the art box trucks, for your needs! ",
  },
  {
    name: "FTL/LTL",
    image: img4,
    back: "Full and partial truck load options, tailored to your means and requirements.",
  },
  {
    name: "24/7 dispatch",
    image: img1,
    back: "At Trucks LLC, you will never feel you are all alone on the road. Get help at any given time",
  },
  {
    name: "Live tracking",
    image: img5,
    back: "Never be out of the loop - know where your freight is at any given time.",
  },
  {
    name: "Yard parking ",
    image: img6,
    back: "Our yard in Chicago offers ample space for all of our fleet, with mechanics on site.",
  },
];

const OurBenefits = (props) => {
  const { isClicked, setIsClicked } = props;
  const sectionRef = useRef(null);

  if (isClicked === true) {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
    console.log("it is clicked");
    setIsClicked(false);
  }

  return (
    <StyledCardWrapper
      ref={sectionRef}
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <Grid xs={12} item justifyContent="center">
        <StyledSectionCaption> Our Services </StyledSectionCaption>
      </Grid>
      <Grid item>
        <Divider></Divider>
      </Grid>
      <Grid item>
        <Grid container spacing={3} justifyContent="center">
          {cards.map((card, index) => {
            return (
              <Grid item key={index}>
                <FlipCard
                  FrontCard={() => (
                    <FrontCard name={card.name} image={card.image}></FrontCard>
                  )}
                  BackCard={() => (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {" "}
                      {card.back}{" "}
                    </div>
                  )}
                ></FlipCard>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </StyledCardWrapper>
  );
};

export default OurBenefits;

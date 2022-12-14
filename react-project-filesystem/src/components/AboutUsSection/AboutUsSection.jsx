import React from "react";
import Background from "../../assets/app__background.png";
import {
  ContainingDiv,
  SectionOverlay,
  AboutusDrivers,
  StyledAboutHeader,
  StyledText,
  StyledImage,
  AboutusCustomers,
  StyledSpan,
  StyledCustomersHeader,
  SeparatorDiv,
} from "./StyledComponents";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const AboutSection = () => {
  return (
    <ContainingDiv>
      <SectionOverlay>
        <StyledImage src={Background} alt="img"></StyledImage>
        <AboutusDrivers>
          <StyledAboutHeader>About us</StyledAboutHeader>
          <StyledText>
            {" "}
            Benefits for our drivers include no - force{" "}
            <StyledSpan>24h dispatch</StyledSpan>. Flexible truck ownership
            configurations - be an owner operator, lease, or rent your truck.
            100% transparency for your weekly statements - as well as{" "}
            <StyledSpan> 0$ down </StyledSpan> on your monthly gross. Earn
            driver refferal bonuses and most miles covered bonuses - we have the
            most convenient practices, tailored to suit your every need and make
            your job as easy as possible. You drive - we pay!
          </StyledText>
          <Link to="/finances">
            <Button color="error" variant="outlined" sx={{ margin: "5%" }}>
              Learn More
            </Button>
          </Link>
        </AboutusDrivers>
        <SeparatorDiv></SeparatorDiv>
        <AboutusCustomers>
          <StyledCustomersHeader>Our Services</StyledCustomersHeader>
          <StyledText>
            Benefints for our customers imclude such and such and such and such
            and such and such and such and such and Benefints for our customers
            imclude such and such and such and such and such and such and such
            and such and such and such imclude such and such and such and such
            and such and such and such and such and such and such imclude such
            and such and such and such and such and such and such and such and
            and suchand such
          </StyledText>
          <Link to="/aboutus">
            <Button color="error" variant="outlined" sx={{ margin: "5%" }}>
              Learn More
            </Button>
          </Link>
        </AboutusCustomers>
      </SectionOverlay>
    </ContainingDiv>
  );
};

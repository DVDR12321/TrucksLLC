import React from "react";
import Logo from "../../assets/LogoWhiteBlack.png";
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
        <StyledImage src={Logo} alt="img"></StyledImage>
        <AboutusDrivers>
          <StyledAboutHeader>Drivers</StyledAboutHeader>
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
            <Button sx={{ color: "red" }} variant="See More">
              See More
            </Button>
          </Link>
        </AboutusDrivers>
        <SeparatorDiv></SeparatorDiv>
        <AboutusCustomers>
          <StyledCustomersHeader>Customers</StyledCustomersHeader>
          <StyledText>
            Benefints for our customers imclude such and such and such and such
            and such and such and such and such and Benefints for our customers
            imclude such and such and such and such and such and such and such
            and such and such and such imclude such and such and such and such
            and such and such and such and such and such and such imclude such
            and such and such and such and such and such and such and such and
            such and such
          </StyledText>
          <Link to="/aboutus">
            <Button sx={{ color: "red" }} variant="See More">
              See More
            </Button>
          </Link>
        </AboutusCustomers>
      </SectionOverlay>
    </ContainingDiv>
  );
};

import React from "react";
import {
  ContainingDiv,
  SectionOverlay,
  AboutusDrivers,
  StyledAboutHeader,
  StyledText,
  AboutUsCustomers,
  StyledSpan,
  StyledCustomersHeader,
  //SeparatorDiv,
} from "./StyledComponents";
import Button from "@mui/material/Button";
import { StyledLink } from "../MainScreen/StyledComponents";
import { Stack } from "@mui/system";
import { useEffect } from "react";
import { useRef } from "react";

const AboutUsSection = (props) => {
  const { scrollTo, setScrollTo } = props;
  const aboutRef = useRef();

  useEffect(() => {
    if (scrollTo.about === "About") {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
      setScrollTo("");
    }
  }, [scrollTo]);

  return (
    <ContainingDiv ref={aboutRef}>
      <SectionOverlay container xs={12} md={10}>
        <AboutusDrivers xs={12} md={6}>
          <Stack>
            <StyledAboutHeader>About us</StyledAboutHeader>
            <StyledText>
              {" "}
              Benefits for our drivers include no - force{" "}
              <StyledSpan>24h dispatch</StyledSpan>. Flexible truck ownership
              configurations - be an owner operator, lease, or rent your truck.
              100% transparency for your weekly statements - as well as{" "}
              <StyledSpan> 0$ down </StyledSpan> on your monthly gross. Earn
              driver refferal bonuses and most miles covered bonuses - we have
              the most convenient practices, tailored to suit your every need
              and make your job as easy as possible. You drive - we pay!
            </StyledText>
            <StyledLink to="/finances">
              <Button color="error" variant="outlined" sx={{ margin: "5%" }}>
                Learn More
              </Button>
            </StyledLink>
          </Stack>
        </AboutusDrivers>
        {/* <SeparatorDiv item xs={0} md={0}></SeparatorDiv> */}
        <AboutUsCustomers item xs={12} md={6}>
          <Stack>
            <StyledCustomersHeader>Our Services</StyledCustomersHeader>
            <StyledText>
              Benefints for our customers imclude such and such and such and
              such and such and such and such and such and Benefints for our
              customers imclude such and such and such and such and such and
              such and such and such and such and such imclude such and such and
              such and such and such and such and such and such and such and
              such imclude such and such and such and such and such and such and
              such and such and and suchand such
            </StyledText>
            <StyledLink to="/aboutus">
              <Button color="error" variant="outlined" sx={{ margin: "5%" }}>
                Learn More
              </Button>
            </StyledLink>
          </Stack>
        </AboutUsCustomers>
      </SectionOverlay>
    </ContainingDiv>
  );
};

export default AboutUsSection;

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
import AOS from "aos";
import "aos/dist/aos.css";
import { StyledLink } from "../MainScreen/StyledComponents";
import { borderRadius, Stack } from "@mui/system";
import { useEffect } from "react";
import { useRef } from "react";

const AboutUsSection = (props) => {
  const { scrollTo, setScrollTo } = props;
  const aboutRef = useRef();

  //loading animation library
  useEffect(() => {
    AOS.init();
  }, []);

  // scroll when card from first screen is clicked
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
            <StyledAboutHeader
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-offset="150"
              data-aos-easing="ease-in-out"
            >
              About us
            </StyledAboutHeader>
            <StyledText
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-offset="0"
              data-aos-easing="ease-in-out"
              data-aos-delay="250"
            >
              {" "}
              Trucks LLC is a Chicago-based trucking company. We have been
              successfully serving the transportation industry for over
              <StyledSpan> 15 years</StyledSpan>. Our 24/7 dispatch system
              guarantees prompt and efficient service, ensuring that your cargo
              is delivered on time. Our drivers can earn
              <StyledSpan> competitive wages</StyledSpan> and benefit from
              referral bonuses. We understand the unique needs of our clients
              and have implemented convenient practices that are tailored to
              meet those needs and make your job as effortless as possible. At
              our company, you focus on driving and we take care of the rest -
              including paying you for your services.
            </StyledText>
            <StyledLink to="/aboutus">
              <Button
                color="primary"
                variant="outlined"
                sx={{ margin: "5%", borderRadius: "3px" }}
              >
                Learn More
              </Button>
            </StyledLink>
          </Stack>
        </AboutusDrivers>
        {/* <SeparatorDiv item xs={0} md={0}></SeparatorDiv> */}
        <AboutUsCustomers item xs={12} md={6}>
          <Stack>
            <StyledCustomersHeader
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-offset="150"
              data-aos-easing="ease-in-out"
            >
              Our Services
            </StyledCustomersHeader>
            <StyledText
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-offset="0"
              data-aos-easing="ease-in-out"
              data-aos-delay="250"
            >
              At Trucks LLC, we are committed to providing our customers with
              the <StyledSpan>highest level </StyledSpan>of service and support.
              We understand that the safe and timely delivery of your cargo is
              of the utmost importance, which is why we prioritize freight
              safety above all else. Our fleet of dry vans and box trucks,
              combined with our <StyledSpan>24/7 responsiveness</StyledSpan> ,
              allows us to meet the diverse transportation needs of our
              customers. Rest assured that your cargo is in good hands with our
              experienced drivers and dedicated top-notch team. We are dedicated
              to ensuring that your transportation needs are met with the
              highest level of professionalism and efficiency.
            </StyledText>
            <StyledLink to="/aboutus">
              <Button
                color="primary"
                variant="outlined"
                sx={{ margin: "5%", borderRadius: "3px" }}
              >
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

import React from "react";
import {
  StyledContainer,
  StyledHeaderImage,
  StyledCaption,
  StyledText,
  StyledHeaderBox,
  StyledHeaderText,
  StyledImageLeft,
  StyledImageRight,
  StyledSectionCaption,
  StyledGridRow,
  StyledMainGrid,
  StyledGridRight,
  StyledGridLeft,
  StyledImageGridLeft,
  StyledSectionBox,
  StyledTypography,
  StyledTypography2,
  StyledHeader,
  StyledHeaderSpan,
  StyledTextSpan,
  StyledScrollGrid,
  StyledImage,
} from "./StyledComponents";
import img from "../../assets/AboutPage/ScrollBarRed.png";
import Img1 from "../../assets/AboutPage/company.png";
import Img2 from "../../assets/AboutPage/Fleet.png";
import Grid from "@mui/material/Grid";
import OurBenefits from "./OurBenefits";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };
  return (
    <StyledContainer>
      <Grid item sx={{ height: "100vh" }}>
        <StyledHeaderImage></StyledHeaderImage>
        <StyledHeaderBox
          display={{ xs: "none", sm: "none", md: "none", lg: "block" }}
        >
          {" "}
          <Grid
            container
            direction="row"
            spacing={2}
            padding={3}
            alignItems="center"
          >
            <Grid item xs={6}>
              <StyledCaption>
                Trucks <StyledHeaderSpan>LLC</StyledHeaderSpan>
              </StyledCaption>
            </Grid>
            <Grid item xs={6}>
              <StyledHeaderText>
                We believe in building strong and lasting partnerships with our
                key customers. We understand the importance of supply chain
                management as a vital aspect of your business strategy, and
                we're here to help.
              </StyledHeaderText>
            </Grid>
          </Grid>
        </StyledHeaderBox>
        <StyledScrollGrid container>
          <StyledImage src={img} alt="scroll"></StyledImage>
          <Typography> Scroll to learn more</Typography>
        </StyledScrollGrid>
      </Grid>
      <StyledMainGrid container spacing={2} paddingLeft={0} paddingRight={0}>
        <StyledGridRow container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <StyledSectionCaption>About Us</StyledSectionCaption>
          </Grid>
          <StyledImageGridLeft item xs={12} sm={12} md={12} lg={6}>
            <StyledImageLeft src={Img1} alt=""></StyledImageLeft>
          </StyledImageGridLeft>
          <StyledGridRight
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            sx={{ justifyContent: "left" }}
          >
            <StyledHeader>
              Transportation
              <br /> Done <StyledHeaderSpan>Right</StyledHeaderSpan>
            </StyledHeader>
            <StyledText>
              At Trucks LLC, we offer<StyledTextSpan> safe</StyledTextSpan> and{" "}
              <StyledTextSpan>reliable</StyledTextSpan> transportation services
              throughout the continental US. Our multimodal approach provides
              customized solutions for efficient and valuable service.
            </StyledText>
            <StyledText>
              {" "}
              We specialize in tailored freight movement for diverse customers,
              including Fortune 500 companies, through long-term contracts. Our
              ability to offer meticulous services and logistics options through
              business segments and third parties sets us apart.
            </StyledText>
            <StyledText>
              We're not just a trucking company, we're a transportation
              <StyledTextSpan> solution</StyledTextSpan>. So why wait? Contact
              us today and experience the difference our unparalleled customer
              service can make.
            </StyledText>
            <StyledText>
              <Button variant="contained" color="primary" onClick={handleClick}>
                {" "}
                Our Services{" "}
              </Button>
            </StyledText>
          </StyledGridRight>

          <StyledSectionBox
            display={{ xs: "none", sm: "none", md: "none", lg: "block" }}
          >
            <Grid container sx={{ width: "100%" }}>
              <Grid item xs={6} md={3}>
                <StyledTypography> 15 + </StyledTypography>
                <StyledTypography2> years in business</StyledTypography2>
              </Grid>

              <Grid item xs={6} md={3}>
                <StyledTypography> 15 000 </StyledTypography>
                <StyledTypography2> loads each year</StyledTypography2>
              </Grid>
              <Grid item xs={6} md={3}>
                <StyledTypography> 1M+ </StyledTypography>
                <StyledTypography2> miles each year </StyledTypography2>
              </Grid>
              <Grid item xs={6} md={3}>
                <StyledTypography>100%</StyledTypography>
                <StyledTypography2> Freight safety </StyledTypography2>
              </Grid>
            </Grid>
          </StyledSectionBox>
        </StyledGridRow>
        <StyledGridRow container sx={{ marginTop: "50px" }}>
          <Grid item xs={12}>
            <StyledSectionCaption>Our Fleet</StyledSectionCaption>
          </Grid>
          <StyledGridLeft item xs={12} sm={12} md={12} lg={6}>
            <StyledText>
              At Trucks LLC, we take pride in our state-of-the-art fleet of over{" "}
              <StyledTextSpan>100 </StyledTextSpan> meticulously maintained{" "}
              <StyledTextSpan> dry vans</StyledTextSpan>, as well as{" "}
              <StyledTextSpan> box trucks </StyledTextSpan>, making us able to
              handle even the most complex transportation needs with efficiency,
              safety and punctuality in mind
            </StyledText>
            <StyledText>
              {" "}
              Our Chicago-based yard offers ample parking for our entire fleet,
              including capacity for{" "}
              <StyledTextSpan> on-site truck maintenance.</StyledTextSpan> This
              means that our drivers never have to worry about unexpected
              downtime or delays, ensuring that your goods will always be
              delivered on time and in pristine condition.
            </StyledText>
            <StyledText>
              {" "}
              In addition to our top-notch fleet and maintenance capabilities,
              we also pride ourselves on our commitment to sustainability. Our
              fleet logs<StyledTextSpan> millions of miles </StyledTextSpan>each
              year, delivering products to thousands of locations across the
              country. But we don't just deliver more, we deliver more while
              driving fewer miles, making us not only efficient but also
              environmentally responsible.
            </StyledText>{" "}
            <StyledText>
              <Link to="/drivers">
                <Button variant="contained" color="primary">
                  {" "}
                  For Drivers{" "}
                </Button>
              </Link>
            </StyledText>
          </StyledGridLeft>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <StyledImageRight src={Img2} alt=""></StyledImageRight>
          </Grid>
        </StyledGridRow>
      </StyledMainGrid>

      <OurBenefits
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      ></OurBenefits>
    </StyledContainer>
  );
};
export default AboutUsPage;

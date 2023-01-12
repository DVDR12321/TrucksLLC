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
} from "./StyledComponents";
import Img1 from "../../assets/AboutPage/company.png";
import Img2 from "../../assets/AboutPage/fleet.jpg";
import Grid from "@mui/material/Grid";
import OurBenefits from "./OurBenefits";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";

const AboutUsPage = () => {
  const sectionRef = useRef();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    if (isClicked === true) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
      console.log("it is clicked");
    }
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
                Transportation done{" "}
                <span style={{ color: "rgb(255,255,255)" }}>right</span>
              </StyledCaption>
            </Grid>
            <Grid item xs={6}>
              <StyledHeaderText>
                We forge long-term relationships with key customers that include
                supply chain management as an integral part of their strategy.
                Working in concert, we drive out cost, add value and function as
                an extension of their enterprise.
              </StyledHeaderText>
            </Grid>
          </Grid>
        </StyledHeaderBox>
      </Grid>
      <StyledMainGrid
        container
        spacing={2}
        paddingLeft={0}
        paddingRight={0}
        sx={{ marginTop: "50px" }}
      >
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
            <StyledText>
              We provide safe and reliable transportation services to a diverse
              group of customers throughout the continental United States,
              Canada and Mexico. Utilizing an integrated, multimodal approach,
              we provide capacity-oriented solutions centered on delivering
              customer value and industry-leading service.
            </StyledText>
            <StyledText>
              {" "}
              We also provide customized freight movement and systems services
              that are tailored to meet individual customers’ requirements and
              typically involve long-term contracts. Our customer base is
              extremely diverse and includes some of Fortune 500 companies. Our
              ability to offer multiple services, utilizing our four business
              segments and a full complement of logistics services through third
              parties, represents a competitive advantage. We believe this
              unique operating strategy can add value to customers and increase
              our profits and returns to stockholders.
            </StyledText>
            <StyledText>
              <Button variant="contained" color="primary" onClick={handleClick}>
                {" "}
                Our Services{" "}
              </Button>
            </StyledText>
          </StyledGridRight>
        </StyledGridRow>
        <StyledGridRow container sx={{ marginTop: "50px" }}>
          <Grid item xs={12}>
            <StyledSectionCaption>Our Fleet</StyledSectionCaption>
          </Grid>
          <StyledGridLeft item xs={12} sm={12} md={12} lg={6}>
            <StyledText>
              Our fleet logs millions of miles every year, delivering products
              to thousands of locations across the country. So when it comes to
              sustainability and fleet efficiency, the goal is simple: deliver
              more while driving fewer miles.{" "}
            </StyledText>
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

      <OurBenefits ref={sectionRef}></OurBenefits>
    </StyledContainer>
  );
};
export default AboutUsPage;

import React from "react";
import {
  StyledContainer,
  StyledHeaderImage,
  StyledCaption,
  StyledText,
  StyledHeaderBox,
  StyledHeaderText,
  StyledImage,
  StyledSectionCaption,
  StyledGridRow,
  StyledMainGrid,
} from "./StyledComponents";
import Img1 from "../../assets/company.png";
import Img2 from "../../assets/fleet.jpg";
import Grid from "@mui/material/Grid";
import OurBenefits from "./OurBenefits";

const AboutUsPage = () => {
  return (
    <StyledContainer>
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
            <StyledCaption>Transportation done right!</StyledCaption>
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
      <StyledMainGrid
        container
        spacing={2}
        paddingLeft={15}
        paddingRight={15}
        sx={{ marginTop: "50px" }}
      >
        <StyledGridRow container>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <StyledImage src={Img1} alt=""></StyledImage>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <StyledSectionCaption>About Us</StyledSectionCaption>
            <StyledText>
              We provide safe and reliable transportation services to a diverse
              group of customers throughout the continental United States,
              Canada and Mexico. Utilizing an integrated, multimodal approach,
              we provide capacity-oriented solutions centered on delivering
              customer value and industry-leading service.{" "}
            </StyledText>
            <StyledText>
              We also provide customized freight movement and systems services
              that are tailored to meet individual customers’ requirements and
              typically involve long-term contracts. Our customer base is
              extremely diverse and includes some of Fortune 500 companies.
            </StyledText>
            <StyledText>
              Our ability to offer multiple services, utilizing our four
              business segments and a full complement of logistics services
              through third parties, represents a competitive advantage. We
              believe this unique operating strategy can add value to customers
              and increase our profits and returns to stockholders.
            </StyledText>
          </Grid>
        </StyledGridRow>
        <StyledGridRow container>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <StyledSectionCaption>Our Fleet</StyledSectionCaption>
            <StyledText>
              Our fleet logs millions of miles every year, delivering products
              to thousands of locations across the country. So when it comes to
              sustainability and fleet efficiency, the goal is simple: deliver
              more while driving fewer miles.{" "}
            </StyledText>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <StyledImage src={Img2} alt=""></StyledImage>
          </Grid>
        </StyledGridRow>
      </StyledMainGrid>

      <OurBenefits></OurBenefits>
    </StyledContainer>
  );
};
export default AboutUsPage;

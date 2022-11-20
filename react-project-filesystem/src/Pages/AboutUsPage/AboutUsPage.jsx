import React from "react";
//import Svg from "./SvgImage";
import { StyledContainer, StyledHeaderImage, StyledCaption, StyledText } from "./StyledComponents";
import Img1 from '../../assets/company.png';
import Img2 from '../../assets/fleet.jpg';
import Img3 from '../../assets/offer.jpg';
import './aboutuspage.css';
import Grid from "@mui/material/Grid";


const AboutUsPage = () => {
  return (
    <StyledContainer>
      <StyledHeaderImage><StyledCaption> "Transportation done right" </StyledCaption></StyledHeaderImage>
      <Grid container spacing={2} flex={1} sx={{marginTop:'20px'}}>
        <Grid container>
          <Grid item xs={0} sm={6}>
          <div className='aboutus__Image'>
              <img src={Img1} className = 'img__aboutus' alt = ''></img>
          </div>
          </Grid>
          <Grid item xs={12} sm={6} >
            <div><h3 style={{textAlign: 'center', fontSize:'5vh', color:'black'}}>About Us</h3></div>
            <StyledText>We provide safe and reliable transportation services to a diverse group of customers throughout the continental
                     United States, Canada and Mexico. Utilizing an integrated, multimodal approach, we provide capacity-oriented solutions centered on delivering customer value and industry-leading service. </StyledText>
            <StyledText>We also provide customized freight movement and systems services that are tailored to meet individual customers’
              requirements and typically involve long-term contracts. Our customer base is extremely diverse and includes some of Fortune 500 companies.</StyledText>
            <StyledText>Our ability to offer multiple services, utilizing our four business segments and a full complement of logistics
              services through third parties, represents a competitive advantage. We believe this unique operating strategy can add value to customers and increase our profits and returns to stockholders.</StyledText>
          </Grid>
        </Grid>
        <Grid container>
        <Grid item xs={12} sm={6}>
            <div><h3 style={{textAlign: 'center', fontSize:'5vh', color:'black'}}>Our Fleet</h3></div>
            <StyledText>Our fleet logs millions of miles every year, delivering products to thousands of locations across the country. So when it comes to sustainability and fleet efficiency, the goal is simple: deliver more while driving fewer miles. </StyledText>
          </Grid>
          <Grid item xs={0} sm={6}>
          <div className='aboutus__Image'>
              <img src={Img2} className = 'img__aboutus' alt = ''></img>
          </div>
          </Grid>
        </Grid>
        <Grid container>
        <Grid item xs={0} sm={6}>
          <div className='aboutus__Image'>
              <img src={Img3} className = 'img__aboutus' alt = ''></img>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
            <div><h3 style={{textAlign: 'center', fontSize:'5vh', color:'black'}}>Our benefits for You</h3></div>
            <StyledText> 24 hours Dispatch Fleet Monitoring Systems Know where your load is any given time Well maintained fleet Responsible drivers </StyledText>
            <StyledText>Inter-State serving all 51 We specialize in dry van freightWe transport all commodities Storage and cross dock serviceWe do not hire inexperienced driver</StyledText>
          </Grid>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};
export default AboutUsPage;

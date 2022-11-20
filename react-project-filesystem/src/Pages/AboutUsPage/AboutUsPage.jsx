import React from "react";
//import Svg from "./SvgImage";
import { DivBody, HeadDiv, H1, Pstyled } from "./StyledComponents";
import Img1 from '../../assets/company.png';
import Img2 from '../../assets/fleet.jpg';
import Img3 from '../../assets/offer.jpg';
import './aboutuspage.css';
import Grid from "@mui/material/Grid";


const AboutUsPage = () => {
  return (
    <DivBody>
      <HeadDiv><H1> "Transportation done right" </H1></HeadDiv>
      <Grid container spacing={2} flex={1} sx={{marginTop:'20px'}}>
        <Grid container>
          <Grid item xs={0} sm={6}>
          <div className='aboutus__Image'>
              <img src={Img1} className = 'img__aboutus' alt = ''></img>
          </div>
          </Grid>
          <Grid item xs={12} sm={6} >
            <div><h3 style={{textAlign: 'center', fontSize:'5vh', color:'white'}}>About Us</h3></div>
            <Pstyled>We provide safe and reliable transportation services to a diverse group of customers throughout the continental
                     United States, Canada and Mexico. Utilizing an integrated, multimodal approach, we provide capacity-oriented solutions centered on delivering customer value and industry-leading service. </Pstyled>
            <Pstyled>We also provide customized freight movement and systems services that are tailored to meet individual customers’
              requirements and typically involve long-term contracts. Our customer base is extremely diverse and includes some of Fortune 500 companies.</Pstyled>
            <Pstyled>Our ability to offer multiple services, utilizing our four business segments and a full complement of logistics
              services through third parties, represents a competitive advantage. We believe this unique operating strategy can add value to customers and increase our profits and returns to stockholders.</Pstyled>
          </Grid>
        </Grid>
        <Grid container>
        <Grid item xs={12} sm={6}>
            <div><h3 style={{textAlign: 'center', fontSize:'5vh', color:'white'}}>Our Fleet</h3></div>
            <Pstyled>Our fleet logs millions of miles every year, delivering products to thousands of locations across the country. So when it comes to sustainability and fleet efficiency, the goal is simple: deliver more while driving fewer miles. </Pstyled>
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
            <div><h3 style={{textAlign: 'center', fontSize:'5vh', color:'white'}}>Our benefits for You</h3></div>
            <Pstyled> 24 hours Dispatch Fleet Monitoring Systems Know where your load is any given time Well maintained fleet Responsible drivers </Pstyled>
            <Pstyled>Inter-State serving all 51 We specialize in dry van freightWe transport all commodities Storage and cross dock serviceWe do not hire inexperienced driver</Pstyled>
          </Grid>
        </Grid>
      </Grid>

      {/*
      <li>Neki hvalospevi - mapa kao na superego u about us </li> */}
    </DivBody>
  );
};
export default AboutUsPage;

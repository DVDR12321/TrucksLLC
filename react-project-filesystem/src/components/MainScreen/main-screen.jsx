import React from "react";
import "./main-screen.css";
import img2 from "../../assets/chicago.jpg";
import img3 from "../../assets/usa.webp";
import img4 from "../../assets/logo.gif";
import img5 from "../../assets/truckgif.gif";
import img6 from "../../assets/piechart.webp";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Brokercard from "../card-componennt/broker-card";
import {Link} from 'react-router-dom';

const Mainscreen = () => {
  return (
    <Grid container style={{
      height: "100vh",
      backgroundImage: `url(${img2})`,
      backgroundSize: "cover",
    }}>
      <Grid
        container
        spacing={1}
        xs={12}
      >
        <Grid item xs={6}>
          <div className="main">
            <h1 className="h11">
              Transporation
              <h1 className="h12">
                Done
                <h1 className="h13">Right</h1>
              </h1>
            </h1>
          </div>
        </Grid>
        <Grid item xs={6}>
          <Button
            sx={{
              position: "relative",
              top: "39vb",
              left: "1vb",
              backgroundColor: "#ba000d",
              fontFamily: "helvetica",
              fontWeight: "bold",
              fontSize: "5vb",
              height: "7vb",
              width: "30vb",
            }}
            variant="contained"
            color="error"
          >
            Join us
          </Button>
        </Grid>
        <Grid
        container
        spacing={1}
        item
        xs={12}
        style={{ height: "40vh", justifyContent: "center" }}
      >
        <Grid item xs={3} >
            <Link to = 'finances'>
                <Brokercard
                imagep={img4}
                headerp="Finances"
                textp="Clic to ind out about us and our mission"
                
                />
            </Link>
        </Grid>
        <Grid item xs={3}>
            <Link to = 'aboutus'>
                <Brokercard
                imagep={img3}
                headerp="About US"
                textp="Find out how to reach us"
                />         
            </Link>
        </Grid>
        <Grid item xs={3}>
            <Link to = 'fleet'>
                <Brokercard
                imagep={img5}
                headerp="Our fleet"
                textp="Find out about our available assets"
                />          
            </Link>
        </Grid>
        <Grid item xs={3}>
          <Brokercard imagep={img6} headerp="Our reviews" />
        </Grid>
      </Grid>
      </Grid>
     
    </Grid>
  );
};
export default Mainscreen;

import React from "react";
import "./heroSection.css";
import Marquee from "react-fast-marquee";
import { Typography, Container, Box, Grid, Button } from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForward";
import HeaderMenus from "../headerMenus/headerMenus";

import hero_logo from "../../assets/Technosphere - White.svg";
import { Link } from "react-router-dom";

const HeroSection: React.FC<{}> = () => {
  return (
    <>
      <Box className="Background">
        <Box className="Background_sphere"></Box>
      </Box>
      <HeaderMenus />
      <Container>
        <Grid className="Hero">
          <Grid>
            <Typography className="Event_date">Nov 28 - Dec 2</Typography>
          </Grid>
          <Grid>
            <Box component="img" className="Hero_logo" src={hero_logo} />
          </Grid>
          <Grid>
            <Typography className="hero_text">
              TECHNOSPHERE 2022 is a technical convention organized by the FOSS
              Community of NSBM Green University in collaboration with Women in
              FOSS NSBM.
              <br />
              <br />
              This would pioneer a new generation of technophiles!
            </Typography>
            <Typography sx={{color: '#938fbe', fontWeight: 'bold', marginTop: '20px'}}>
              Hit the challenges & win the flags. Here you can go forward.
            </Typography>
          </Grid>
          <Box>
            <Button
              component={Link}
              to="/challenges"
              variant="contained"
              className="register_button"
              endIcon={<ArrowForward />}
            >
              Capture the flag
            </Button>
          </Box>
        </Grid>
      </Container>
      <Box className="marquee_section">
        <Marquee
          gradient={false}
          speed={50}
          pauseOnClick={true}
          pauseOnHover={false}
        >
          <div className="mq">
            <p className="mq_txt">Artificial intelligence</p>
            <p className="mq_txt">cloud computing</p>
            <p className="mq_txt">Blockchain and cryptocurrency</p>
            <p className="mq_txt">internet of things</p>
            <p className="mq_txt">Edge computing and deployment</p>
            <p className="mq_txt">Game Development</p>
          </div>
        </Marquee>
      </Box>
    </>
  );
};
export default HeroSection;

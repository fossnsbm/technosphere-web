import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Technosphere from "../assets/Technosphere.png"
import FOSSLogo from "../assets/FOSSLogo.png"
import WIFLogo from "../assets/WIFLogo.png"
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';
import { FaHeart } from "react-icons/fa";
import "./Footer.scss";
import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from "@mui/icons-material";

function Footer() {
  return (
    <div className="footer">
      <div className="footerPadding">
        <Grid container direction="row" justifyContent="space-between" alignItems="stretch" >

          <Grid item xs={12} md={4} className="CenterAlign">
            <img src={Technosphere} alt="Technosphere Logo" className="mobileSize3" />
            <p className="intro">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="footerBottomMargin mobileMargin">
              <Button variant="outlined" href="#outlined-buttons" color="inherit">
                REGISTER NOW <ArrowRightAltRoundedIcon />
              </Button>
            </div>
          </Grid>

          <Grid xs={12} md={2} style={{ marginTop: "0.5%" }}
            alignItems="center" justifyContent="space-between" direction="column"
            className="LinkList footerBottomMargin" >

            <Link to="/" className="link">ABOUT</Link>
            <Link to="/" className="link">AGENDA</Link>
            <Link to="/" className="link">SPEAKERS</Link>
            <Link to="/" className="link">SPONSORS</Link>

          </Grid>

          <Grid item xs={12} sm={12} md={4}
            style={{ marginTop: "0.5%" }}
            sx={{
              flexDirection: { xs: "row", sm: "row", md: "column" },
              alignItems: { xs: "flex-start", sm: "flex-start", md: "flex-end" }
            }}
            justifyContent="space-between" className="FooterRight">
            <div className="leftAlign">
              Organized by
              <div className="Logos">
                <img src={FOSSLogo} alt="FOSS Logo" className="LogoImg mobileSize1" />
                <img src={WIFLogo} className="mobileSize2" alt="WomenInFoss Logo" />
              </div>
            </div>

            <div>
              Follow us on
              <div className="footerBottomMargin">
                <a href="https://www.facebook.com/foss.nsbm/" target={"_blank"}>
                  <Facebook style={{ color: 'white' }} className="SocialLogo" />
                </a>
                <a href="https://www.instagram.com/fossnsbm/" target={"_blank"}>
                  <Instagram style={{ color: 'white' }} className="SocialLogo" />
                </a>
                <a href="https://twitter.com/fossnsbm" target={"_blank"}>
                  <Twitter style={{ color: 'white' }} className="SocialLogo" />
                </a>
                <a href="https://www.youtube.com/channel/UC_bx6hMjxj3hqqQhBw2LCLA/featured/" target={"_blank"}>
                  <YouTube style={{ color: 'white' }} className="SocialLogo" />
                </a>
                <a href="https://www.linkedin.com/company/fossnsbm" target={"_blank"}>
                  <LinkedIn style={{ color: 'white' }} className="SocialLogo" />
                </a>
              </div>
            </div>

          </Grid>

        </Grid>

      </div>

      <div className="copyright footerPadding">
        <Grid container justifyContent="space-between"
          sx={{
            flexDirection: { xs: "column", sm: "column", md: "row" },
            alignItems: { xs: "center", sm: "center", md: "center" }
          }}>

          <p className="copyrightText CenterAlign">© 2022 FOSS Community of NSBM</p>


          <p className="copyrightText CenterAlign">
            &lt;/&gt; WITH <FaHeart color={"red"} className="heart" /> BY THE FOSS COMMUNITY OF NSBM
          </p>

        </Grid>
      </div>


    </div>
  );
}
export default Footer;
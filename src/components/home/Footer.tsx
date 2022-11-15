import { useEffect } from "react";
import { Grid, Button, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import Technosphere from "../../assets/logo.svg";
import FOSSLogo from "../../assets/FOSSLogo.svg";
import WIFLogo from "../../assets/WIFLogo.svg";
import { FaHeart } from "react-icons/fa";
import ArrowForward from "@mui/icons-material/ArrowForward";
import "./Footer.scss";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";

function Footer() {
  const location = useLocation()


  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
  }, [location,])

  return (
    <div className="footer">
      <div className="footerPadding footerContent">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="stretch"
        >
          <Grid item xs={12} md={4} className="CenterAlign">
            <img
              src={Technosphere}
              alt="Technosphere Logo"
              className="mobileSize3 footer_logo"
            />
            <p className="intro">
              Want to learn about future-ready technologies that are sure to
              make an impact on your life? Then register below!
            </p>
            <div className="footerBottomMargin mobileMargin">
              <Button
                variant="outlined"
                href="#outlined-buttons"
                color="inherit"
                endIcon={<ArrowForward />}
                sx={{
                  padding: "8px 18px",
                  fontWeight: 600,
                }}
              >
                REGISTER NOW
              </Button>
            </div>
          </Grid>

          <Grid
            xs={12}
            md={2}
            style={{ marginTop: "0.5%" }}
            alignItems="center"
            justifyContent="space-between"
            direction="column"
            className="LinkList footerBottomMargin"
          >
            <Link to="/#about" className="link">
              ABOUT
            </Link>
            <Link to="/#agenda" className="link">
              AGENDA
            </Link>
            <Link to="/#speakers" className="link">
              SPEAKERS
            </Link>
            <Link to="/#sponsors" className="link">
              SPONSORS
            </Link>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            style={{ marginTop: "0.5%" }}
            sx={{
              flexDirection: { xs: "row", sm: "row", md: "column" },
              alignItems: {
                xs: "flex-start",
                sm: "flex-start",
                md: "flex-end",
              },
            }}
            justifyContent="space-between"
            className="FooterRight"
          >
            <div className="leftAlign">
              <Typography className="organize_text">Organized by</Typography>
              <div className="Logos">
                <img
                  src={FOSSLogo}
                  alt="FOSS Logo"
                  className="LogoImg mobileSize1"
                />
                <img
                  src={WIFLogo}
                  className="mobileSize2"
                  alt="WomenInFoss Logo"
                />
              </div>
            </div>

            <div>
              <Typography className="follow_text">Follow us on</Typography>
              <div className="footerBottomMargin">
                <a href="https://www.facebook.com/foss.nsbm/" target={"_blank"}>
                  <Facebook style={{ color: "white" }} className="SocialLogo" />
                </a>
                <a href="https://www.instagram.com/fossnsbm/" target={"_blank"}>
                  <Instagram
                    style={{ color: "white" }}
                    className="SocialLogo"
                  />
                </a>
                <a href="https://twitter.com/fossnsbm" target={"_blank"}>
                  <Twitter style={{ color: "white" }} className="SocialLogo" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC_bx6hMjxj3hqqQhBw2LCLA/featured/"
                  target={"_blank"}
                >
                  <YouTube style={{ color: "white" }} className="SocialLogo" />
                </a>
                <a
                  href="https://www.linkedin.com/company/fossnsbm"
                  target={"_blank"}
                >
                  <LinkedIn style={{ color: "white" }} className="SocialLogo" />
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="copyright footerPadding">
        <Grid
          container
          justifyContent="space-between"
          sx={{
            flexDirection: { xs: "column", sm: "column", md: "row" },
            alignItems: { xs: "center", sm: "center", md: "center" },
          }}
        >
          <p className="copyrightText CenterAlign">
            © 2022 FOSS Community of NSBM
          </p>

          <p className="copyrightText CenterAlign">
            &lt;/&gt; WITH <FaHeart className="heart" /> BY THE FOSS COMMUNITY
            OF NSBM
          </p>
        </Grid>
      </div>
    </div>
  );
}
export default Footer;

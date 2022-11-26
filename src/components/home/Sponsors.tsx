import "./sponsor.scss";
import learningPartner from "../../assets/sponsors/learning_partner.png";
import outfitPartner from "../../assets/sponsors/outifit_partner.png";
import eventPartner from "../../assets/sponsors/event_partner.png";
import titlePartner from "../../assets/sponsors/title_partner.png";
import mediaPartner from "../../assets/sponsors/media-partner.png";
import mediaPartnerMobile from "../../assets/sponsors/media-partner-mobile.png";
import { Typography, Container } from "@mui/material";

import ball from "../../assets/ball.svg";

const Sponsors = () => {
  return (
    <section className="sponsors" id="sponsors">
      <Container>
        <div className="heading">
          <Typography variant="h3" className="sponsors_heading">
            Sponsors
          </Typography>
          <Typography className="sponsors_tagline">
            Meet our sponsors
          </Typography>
        </div>
        <div className="sponsor_cards">
          <div className="card_top-section">
            <SponsorCard text="Title Partner" logo={titlePartner} />
            <SponsorCard text="Event Partner" logo={eventPartner} />
            <SponsorCard text="Learning Partner" logo={learningPartner} />
          </div>
          <div className="card_bottom-section">
            <div className="co_sponsor sponsor_bottom">
              <p>Media Partners</p>
              <div className="logo">
                <img
                  src={mediaPartner}
                  alt="Content Management and Solutions (Pvt) Ltd"
                />
              </div>
            </div>
            <div className="other_sponsors">
              <div className="sponsor_bottom b-none">
                <p>Official Outfit Partner</p>
                <div className="logo_cms">
                  <img
                    src={outfitPartner}
                    alt="Content Management and Solutions (Pvt) Ltd"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={ball} alt="" className="ball" />
      </Container>
    </section>
  );
};

export default Sponsors;

interface CardProps {
  text: string;
  logo: string;
}
const SponsorCard = ({ logo, text }: CardProps) => {
  return (
    <div className="sponsor_card_container">
      <p>{text}</p>
      <div className="sponsor_card">
        <div className="logo">
          <img src={logo} alt="Content Management and Solutions (Pvt) Ltd" />
        </div>
      </div>
    </div>
  );
};

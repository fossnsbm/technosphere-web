import React from "react";
import { Card, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import arrow from "../../assets/speaker_arrow.svg";
import athuraliya from "../../assets/speakers/athuraliya.jpg";
import migara from "../../assets/speakers/migara.jpg";
import sithila from "../../assets/speakers/sithila.jpg";
import rishan from "../../assets/speakers/rishan.jpg";
import ravindu from "../../assets/speakers/ravindu.jpg";
import asanga from "../../assets/speakers/asanga.jpg";
import kasun from "../../assets/speakers/kasun.jpg";
import kanishka from "../../assets/speakers/kanishka.jpg";
import "./speakersSection.css";
import SpeakerCard from "../global/SpeakerCard";

function SpeakersSection() {
  return (
    <div className="speakers_section" id="speakers">
      <Container className="speakers">
        <Typography variant="h3" className="speakers_heading">
          Speakers
        </Typography>
        <Typography className="speakers_tagline">Industrial Leads</Typography>
        <Typography className="webinar_heading">Webinar Speakers</Typography>
        <Grid container spacing={5}>
          <SpeakerCard
            photo={sithila}
            speaker="Mr. Sithila Konara"
            jobTitle="Associate Tech Specialist"
            company="Pearson"
            link="https://www.linkedin.com/in/sithila-konara-19240355"
          />

          <SpeakerCard
            photo={rishan}
            speaker="Mr. Rishan Riyal"
            jobTitle="Software Engineer"
            company="Surge Global"
            link="https://www.linkedin.com/in/rishanriyal"
          />

          <SpeakerCard
            photo={asanga}
            speaker="Mr. Asanga Wanniarachchi"
            jobTitle="Senior Tech Lead"
            company="LSEG Technology"
            link="https://www.linkedin.com/in/asanga-wanniarachchi-629a4a145"
          />

          <SpeakerCard
            photo={kanishka}
            speaker="Mr. Kanishka Weeramunda"
            jobTitle="Founder & CEO"
            company="PayMedia (Pvt) Ltd."
            link="https://www.linkedin.com/in/kanishka-weeramunda-781b4a14"
          />
        </Grid>

        <Typography className="inperson_heading">
          In-person Event Speakers
        </Typography>
        <Grid container spacing={5}>
          <SpeakerCard
            photo={athuraliya}
            speaker="Mr. C.D. Athuraliya"
            jobTitle="Co-founder"
            company="ConscientAI"
            link="https://www.linkedin.com/in/cdathuraliya"
          />

          <SpeakerCard
            photo={kasun}
            speaker="Mr. Kasun Magedaragama"
            jobTitle="Principal Technology Solution Architect"
            company="Oracle"
            link="https://www.linkedin.com/in/kasunmagedaragama"
          />

          <SpeakerCard
            photo={migara}
            speaker="Mr. Migara Amithodhana"
            jobTitle="Co-founder & CEO"
            company="Magicbits (Pvt) Ltd"
            link="https://www.linkedin.com/in/amithodhana"
          />

          <SpeakerCard
            photo={ravindu}
            speaker="Mr. Ravindu Omantha"
            jobTitle="Co-Founder & Head of Studio"
            company="RAM Studios (Pvt) Ltd"
            link="https://www.linkedin.com/in/ravinducooray"
          />
        </Grid>
      </Container>
    </div>
  );
}
export default SpeakersSection;

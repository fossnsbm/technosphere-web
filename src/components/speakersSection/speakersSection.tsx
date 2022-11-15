import React from "react";
import { Card, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import arrow from "../../assets/speaker_arrow.svg";
import athuraliya from "../../assets/speakers/athuraliya.jpg";
import speaker from "../../assets/speakers/speaker_placeholder.png";
import "./speakersSection.css";
import SpeakerCard from "../global/SpeakerCard"

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
            photo={speaker}
            speaker="Forthcoming"
            jobTitle=""
            company=""
            link=""
          />

          <SpeakerCard
            photo={speaker}
            speaker="Forthcoming"
            jobTitle=""
            company=""
            link=""
          />

          <SpeakerCard
            photo={speaker}
            speaker="Forthcoming"
            jobTitle=""
            company=""
            link=""
          />

          <SpeakerCard
            photo={speaker}
            speaker="Forthcoming"
            jobTitle=""
            company=""
            link=""
          />

        </Grid>

        <Typography className="inperson_heading">
          In-person Event Speakers
        </Typography>
        <Grid container spacing={5}>

          <SpeakerCard
            photo={speaker}
            speaker="Forthcoming"
            jobTitle=""
            company=""
            link=""
          />

          {/* <SpeakerCard
            photo={athuraliya}
            speaker="Mr. C.D. Athuraliya"
            jobTitle="Co-founder"
            company="ConscientAI"
            link="https://www.linkedin.com/in/cdathuraliya"
          /> */}

          <SpeakerCard
            photo={speaker}
            speaker="Forthcoming"
            jobTitle=""
            company=""
            link=""
          />

          <SpeakerCard
            photo={speaker}
            speaker="Forthcoming"
            jobTitle=""
            company=""
            link=""
          />

          <SpeakerCard
            photo={speaker}
            speaker="Forthcoming"
            jobTitle=""
            company=""
            link=""
          />

        </Grid>
      </Container>
    </div>
  );
}
export default SpeakersSection;

import * as React from "react";
import "./agenda.scss";
import { Container, Grid, Card, Divider, Typography, Box } from "@mui/material";
import AgendaCard, { AlignType } from "../global/AgendaCard";
import speaker from "../../assets/speakers/speaker_placeholder.png";
import athuraliya from "../../assets/speakers/athuraliya.jpg";
import migara from "../../assets/speakers/migara.jpg";
import sithila from "../../assets/speakers/sithila.jpg";
import rishan from "../../assets/speakers/rishan.jpg";
import ravindu from "../../assets/speakers/ravindu.jpg";
import asanga from "../../assets/speakers/asanga.jpg";

export default function Agenda() {
  return (
    <div className="agenda_section" id="agenda">
      <Container>
        <Typography variant="h3" className="agenda_heading">
          Agenda
        </Typography>
        <Typography className="agenda_tagline">Mark your calendars</Typography>
        <AgendaCard
          date="28"
          month="Nov"
          title="Cloud Computing"
          time="7.00PM ONWARDS | WEBINAR"
          description="Cloud computing is the delivery of different services through the Internet, and it can be considered a treasure trove of the tech world."
          photo={sithila}
          speaker="Mr. Sithila Konara"
          jobTitle="Associate Tech Specialist"
          company="Pearson"
          alignType={AlignType.Left}
        />

        <AgendaCard
          date="30"
          month="Nov"
          title="Edge Computing"
          time="7.00PM ONWARDS | WEBINAR"
          description="Edge computing and deployment bring applications closer to where the data is created, and the actual actions are happening."
          photo={rishan}
          speaker="Mr. Rishan Riyal"
          jobTitle="Software Engineer"
          company="Surge Global"
          alignType={AlignType.Right}
        />

        <AgendaCard
          date="01"
          month="Dec"
          title="Cyber Security"
          time="7.00PM ONWARDS | WEBINAR"
          description="
          A beneficial technology to be aware of, cyber security
          seeks to protect against the unauthorised use of systems,
          networks, and technology, by lowering cyberattack risks."
          photo={asanga}
          speaker="Mr. Asanga Wanniarachchi"
          jobTitle="Senior Tech Lead"
          company="LSEG Technology"
          alignType={AlignType.Left}
        />

        <AgendaCard
          date="29"
          month="Nov"
          title="Blockchain and Cryptocurrency"
          time="7.00PM ONWARDS | WEBINAR"
          description="Blockchain and Cryptocurrency are turning the world upside down as they technicise monetary transactions."
          photo={speaker}
          speaker="Forthcoming"
          jobTitle=""
          company=""
          alignType={AlignType.Right}
        />



        <Grid container>
          <Grid item xs={12} sm={12} md={11} lg={10}>
            <Card className="inperson_agenda_card">
              <Grid container>
                <Grid item xs={12} sm={12} md="auto" lg="auto">
                  <Typography className="date">02</Typography>
                  <Typography className="month">Dec</Typography>
                  <Divider
                    flexItem
                    className="horz_divider"
                    sx={{
                      display: {
                        xs: "block",
                        sm: "none",
                        md: "none",
                        lg: "none",
                      },
                    }}
                  />
                </Grid>
                <Divider
                  orientation="vertical"
                  flexItem
                  className="divider"
                  sx={{
                    display: {
                      xs: "none",
                      sm: "none",
                      md: "block",
                      lg: "block",
                    },
                  }}
                />
                <Grid container xs={12} sm={12} md={10} lg={10}>
                  <Grid item xs={12} sm={6} md={6} lg={7}>
                    <Typography variant="h2" className="heading">
                      in-person event
                    </Typography>
                    <Typography className="time">9.00AM - 4.30PM</Typography>
                  </Grid>
                  <Divider
                    orientation="vertical"
                    flexItem
                    className="divider"
                    sx={{
                      display: {
                        xs: "none",
                        sm: "block",
                        md: "block",
                        lg: "block",
                      },
                    }}
                  />

                  <Grid item xs={12} sm={6} md={6} lg={7}>
                    <Typography variant="h2" className="title">
                      Artificial Intelligence
                    </Typography>
                    <Typography className="content">
                      Artificial intelligence is performing things which
                      traditionally require human intelligence, completely
                      altering our day-to-day existence.
                    </Typography>
                  </Grid>
                  <Divider
                    orientation="vertical"
                    flexItem
                    className="divider"
                    sx={{
                      display: {
                        xs: "none",
                        sm: "block",
                        md: "block",
                        lg: "block",
                      },
                    }}
                  />
                  <Grid item xs={12} sm="auto" md={3} lg={4}>
                    <Box component="img" className="speaker" src={athuraliya} />
                    <Typography variant="h5" className="name">
                      Mr. CD Athuraliya
                    </Typography>
                    <Typography className="job">Co-Founder</Typography>
                    <Typography className="company">ConscientAI</Typography>
                    <Divider
                      flexItem
                      className="horz_divider"
                      sx={{
                        display: {
                          xs: "block",
                          sm: "none",
                          md: "none",
                          lg: "none",
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} lg={7}>
                    <Typography variant="h2" className="title">
                      Big Data
                    </Typography>
                    <Typography className="content">
                      Big data is a term that describes large, hard-to-manage, structured and unstructured data, but it's not merely about the amount of data.
                    </Typography>
                  </Grid>
                  <Divider
                    orientation="vertical"
                    flexItem
                    className="divider"
                    sx={{
                      display: {
                        xs: "none",
                        sm: "block",
                        md: "block",
                        lg: "block",
                      },
                    }}
                  />
                  <Grid item xs={12} sm="auto" md={3} lg={4}>
                    <Box component="img" className="speaker" src={speaker} />
                    <Typography variant="h5" className="name">
                      Forthcoming
                    </Typography>
                    <Typography className="job"></Typography>
                    <Typography className="company"></Typography>
                    <Divider
                      flexItem
                      className="horz_divider"
                      sx={{
                        display: {
                          xs: "block",
                          sm: "none",
                          md: "none",
                          lg: "none",
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} lg={7}>
                    <Typography variant="h2" className="title">
                      Internet of Things
                    </Typography>
                    <Typography className="content">
                      As one of the most important technologies of the 21st
                      century, the Internet of Thinallowsing seamless
                      communication between people, processes, and things.
                    </Typography>
                  </Grid>
                  <Divider
                    orientation="vertical"
                    flexItem
                    className="divider"
                    sx={{
                      display: {
                        xs: "none",
                        sm: "block",
                        md: "block",
                        lg: "block",
                      },
                    }}
                  />
                  <Grid item xs={12} sm="auto" md={3} lg={4}>
                    <Box component="img" className="speaker" src={migara} />
                    <Typography variant="h5" className="name">
                      Mr. Migara Amithodhana
                    </Typography>
                    <Typography className="job">Co-founder & CEO</Typography>
                    <Typography className="company">Magicbits (Pvt) Ltd</Typography>
                    <Divider
                      flexItem
                      className="horz_divider"
                      sx={{
                        display: {
                          xs: "block",
                          sm: "none",
                          md: "none",
                          lg: "none",
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} lg={7}>
                    <Typography variant="h2" className="title">
                      Game Development
                    </Typography>
                    <Typography className="content">
                      Game development is the art of creating games, something
                      that excites a considerable amount of the earth's
                      population.
                    </Typography>
                  </Grid>
                  <Divider
                    orientation="vertical"
                    flexItem
                    className="divider"
                    sx={{
                      display: {
                        xs: "none",
                        sm: "block",
                        md: "block",
                        lg: "block",
                      },
                    }}
                  />
                  <Grid item xs={12} sm="auto" md={3} lg={4}>
                    <Box component="img" className="speaker" src={ravindu} />
                    <Typography variant="h5" className="name">
                      Mr. Ravindu Omantha
                    </Typography>
                    <Typography className="job">Co-Founder & Head of Studio</Typography>
                    <Typography className="company">RAM Studios (Pvt) Ltd</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

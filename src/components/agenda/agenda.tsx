import * as React from "react";
import "./agenda.scss";
import { Container, Grid, Card, Divider, Typography, Box } from "@mui/material";
import AgendaCard, { AlignType } from '../global/AgendaCard'
import speaker from "../../assets/speaker-1.png";

export default function Agenda() {
  return (
    <div className="agenda_section">
      <Container>
        <Typography variant="h3" className="agenda_heading">Agenda</Typography>
        <Typography className="agenda_tagline">Lorem ipsum dolor</Typography>
        <AgendaCard
          date="28"
          month="Nov"
          title="Cloud Computing"
          time="7.00PM - 8.00PM | WEBINAR"
          description="Cloud computing is the delivery of different services through the Internet, and it can be considered a treasure trove of the tech world."
          photo={speaker}
          speaker="Thaanu Perera"
          jobTitle="UI/UX Design"
          company="Surge Global"
          alignType={AlignType.Left} />

        <AgendaCard
          date="29"
          month="Nov"
          title="Blockchain and Cryptocurrency"
          time="7.00PM - 8.00PM | WEBINAR"
          description="Blockchain and Cryptocurrency are turning the world upside down as they technicise monetary transactions."
          photo={speaker}
          speaker="Thaanu Perera"
          jobTitle="UI/UX Design"
          company="Surge Global"
          alignType={AlignType.Right} />

        <AgendaCard
          date="30"
          month="Nov"
          title="Edge Computing"
          time="7.00PM - 8.00PM | WEBINAR"
          description="Edge computing and deployment bring applications closer to where the data is created, and the actual actions are happening."
          photo={speaker}
          speaker="Thaanu Perera"
          jobTitle="UI/UX Design"
          company="Surge Global"
          alignType={AlignType.Left} />

        <AgendaCard
          date="01"
          month="Dec"
          title="Big Data"
          time="7.00PM - 8.00PM | WEBINAR"
          description="Big data is a term that describes large, hard-to-manage, structured and unstructured data, but it's not merely about the amount of data."
          photo={speaker}
          speaker="Thaanu Perera"
          jobTitle="UI/UX Design"
          company="Surge Global"
          alignType={AlignType.Right} />

        <Grid container>
          <Grid item xs={12} sm={12} md={11} lg={10}>
            <Card className="inperson_agenda_card">
              <Grid container>
                <Grid item xs={12} sm={12} md="auto" lg="auto">
                  <Typography className="date">02</Typography>
                  <Typography className="month">Dec</Typography>
                  <Divider flexItem className="horz_divider" sx={{ display: { xs: 'block', sm: 'none', md: 'none', lg: 'none' } }} />
                </Grid>
                <Divider orientation="vertical" flexItem className="divider" sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }} />
                <Grid container xs={12} sm={12} md={10} lg={10}>
                  <Grid item xs={12} sm={6} md={6} lg={7}>
                    <Typography variant="h2" className="heading">in-person event</Typography>
                    <Typography className="time">9.00PM - 4.30PM</Typography>
                  </Grid>
                  <Divider orientation="vertical" flexItem className="divider" sx={{ display: { xs: 'none', sm: 'block', md: 'block', lg: 'block' } }} />

                  <Grid item xs={12} sm={6} md={6} lg={7}>
                    <Typography variant="h2" className="title">Artificial Intelligence</Typography>
                    <Typography className="content">Artificial intelligence is performing things which traditionally require human intelligence, completely altering our day-to-day existence.</Typography>
                  </Grid>
                  <Divider orientation="vertical" flexItem className="divider" sx={{ display: { xs: 'none', sm: 'block', md: 'block', lg: 'block' } }} />
                  <Grid item xs={12} sm="auto" md="auto" lg="auto">
                    <Box component="img" className="speaker" src={speaker} />
                    <Typography variant="h5" className="name">Thaanu Perera</Typography>
                    <Typography className="job">UI/UX Design</Typography>
                    <Typography className="company">Surge Global</Typography>
                    <Divider flexItem className="horz_divider" sx={{ display: { xs: 'block', sm: 'none', md: 'none', lg: 'none' } }} />
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} lg={7}>
                    <Typography variant="h2" className="title">Cyber Security</Typography>
                    <Typography className="content">A beneficial technology to be aware of, cyber security seeks to protect against the unauthorised use of systems, networks, and technology, by lowering cyberattack risks.</Typography>
                  </Grid>
                  <Divider orientation="vertical" flexItem className="divider" sx={{ display: { xs: 'none', sm: 'block', md: 'block', lg: 'block' } }} />
                  <Grid item xs={12} sm="auto" md="auto" lg="auto">
                    <Box component="img" className="speaker" src={speaker} />
                    <Typography variant="h5" className="name">Thaanu Perera</Typography>
                    <Typography className="job">UI/UX Design</Typography>
                    <Typography className="company">Surge Global</Typography>
                    <Divider flexItem className="horz_divider" sx={{ display: { xs: 'block', sm: 'none', md: 'none', lg: 'none' } }} />
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} lg={7}>
                    <Typography variant="h2" className="title">Internet of Things</Typography>
                    <Typography className="content">As one of the most important technologies of the 21st century, the Internet of Thinallowsing seamless communication between people, processes, and things.</Typography>
                  </Grid>
                  <Divider orientation="vertical" flexItem className="divider" sx={{ display: { xs: 'none', sm: 'block', md: 'block', lg: 'block' } }} />
                  <Grid item xs={12} sm="auto" md="auto" lg="auto">
                    <Box component="img" className="speaker" src={speaker} />
                    <Typography variant="h5" className="name">Thaanu Perera</Typography>
                    <Typography className="job">UI/UX Design</Typography>
                    <Typography className="company">Surge Global</Typography>
                    <Divider flexItem className="horz_divider" sx={{ display: { xs: 'block', sm: 'none', md: 'none', lg: 'none' } }} />
                  </Grid>

                  <Grid item xs={12} sm={6} md={6} lg={7}>
                    <Typography variant="h2" className="title">Game Development</Typography>
                    <Typography className="content">Game development is the art of creating games, something that excites a considerable amount of the earth's population.</Typography>
                  </Grid>
                  <Divider orientation="vertical" flexItem className="divider" sx={{ display: { xs: 'none', sm: 'block', md: 'block', lg: 'block' } }} />
                  <Grid item xs={12} sm="auto" md="auto" lg="auto">
                    <Box component="img" className="speaker" src={speaker} />
                    <Typography variant="h5" className="name">Thaanu Perera</Typography>
                    <Typography className="job">UI/UX Design</Typography>
                    <Typography className="company">Surge Global</Typography>
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

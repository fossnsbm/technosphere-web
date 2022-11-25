import "../styles/challenges.scss";
import logo from "../assets/Technosphere - Purple.svg";
import HeaderMenus from "../components/headerMenus/headerMenus";
import { Typography, Container, Box, Grid, Button } from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import ChallengeCard from "../components/global/ChallengeCard";

const Challenges = () => {
  return (
    <Box className="challenges">
      <Container>
        <HeaderMenus />
        <Box className="main-wrapper">
          <Typography className="road-to">Road To</Typography>
          <Box
            className="technosphere-logo"
            component="img"
            src={logo}
            alt="Hero_Logo"
          ></Box>
          <Typography className="ctf-title-main">Capture The Flag</Typography>
          <Typography className="ctf-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </Typography>
          <Button
            component={Link}
            to="/rules"
            variant="contained"
            className="rules-button"
            endIcon={<ArrowForward />}
          >
            Rules & Regulations
          </Button>
          <Typography className="ctf-title-intro">
            Lorem ipsum dolor sit amet
          </Typography>
          <Typography className="ctf-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam.
          </Typography>
          <Typography className="challenges-title">
            eiusmod tempor incididunt ut labore et dolore ma
          </Typography>
          <Grid
            className="ctf-challenges"
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 6, md: 12 }}
          >
            <Grid item xs={12} sm={3} md={3}>
              <ChallengeCard
                title="CHALLANGE NO.01"
                description="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod "
                number="25.12"
                submissionCount="35 + Submissions"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <ChallengeCard
                title="CHALLANGE NO.01"
                description="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod "
                number="25.12"
                submissionCount="35 + Submissions"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <ChallengeCard
                title="CHALLANGE NO.01"
                description="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod "
                number="25.12"
                submissionCount="35 + Submissions"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <ChallengeCard
                title="CHALLANGE NO.01"
                description="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod "
                number="25.12"
                submissionCount="35 + Submissions"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <ChallengeCard
                title="CHALLANGE NO.01"
                description="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod "
                number="26.12"
                submissionCount="35 + Submissions"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <ChallengeCard
                title="CHALLANGE NO.01"
                description="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod "
                number="26.12"
                submissionCount="35 + Submissions"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <ChallengeCard
                title="CHALLANGE NO.01"
                description="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod "
                number="26.12"
                submissionCount="35 + Submissions"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <ChallengeCard
                title="CHALLANGE NO.01"
                description="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod "
                number="26.12"
                submissionCount="35 + Submissions"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <ChallengeCard
                title="CHALLANGE NO.01"
                description="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod "
                number="26.12"
                submissionCount="35 + Submissions"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <ChallengeCard
                title="CHALLANGE NO.01"
                description="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod "
                number="26.12"
                submissionCount="35 + Submissions"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <ChallengeCard
                title="CHALLANGE NO.01"
                description="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod "
                number="26.12"
                submissionCount="35 + Submissions"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <ChallengeCard
                title="CHALLANGE NO.01"
                description="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod "
                number="26.12"
                submissionCount="35 + Submissions"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <ChallengeCard
                title="CHALLANGE NO.01"
                description="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod "
                number="26.12"
                submissionCount="35 + Submissions"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <ChallengeCard
                title="CHALLANGE NO.01"
                description="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod "
                number="26.12"
                submissionCount="35 + Submissions"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <ChallengeCard
                title="CHALLANGE NO.01"
                description="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod "
                number="26.12"
                submissionCount="35 + Submissions"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <ChallengeCard
                title="CHALLANGE NO.01"
                description="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod "
                number="26.12"
                submissionCount="35 + Submissions"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <ChallengeCard
                title="CHALLANGE NO.01"
                description="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod "
                number="26.12"
                submissionCount="35 + Submissions"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <ChallengeCard
                title="CHALLANGE NO.01"
                description="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod "
                number="26.12"
                submissionCount="35 + Submissions"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <ChallengeCard
                title="CHALLANGE NO.01"
                description="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod "
                number="26.12"
                submissionCount="35 + Submissions"
              />
            </Grid>
            <Grid item xs={12} sm={3} md={3}>
              <ChallengeCard
                title="CHALLANGE NO.01"
                description="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod "
                number="26.12"
                submissionCount="35 + Submissions"
              />
            </Grid>
          </Grid>
          <Typography className="ctf-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Challenges;

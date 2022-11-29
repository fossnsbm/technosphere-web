import "../styles/challenges.scss";
import logo from "../assets/Technosphere - Purple.svg";
import HeaderMenus from "../components/headerMenus/headerMenus";
import {
  Typography,
  Container,
  Box,
  Grid,
  Button,
  CircularProgress,
} from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import ChallengeCard from "../components/global/ChallengeCard";
import { GetChallengers } from "../services/react-query/challenges/useChallenges";

const Challenges = () => {
  const data = GetChallengers();

  return (
    <Box className="challenges">
      <Container>
        <HeaderMenus />
        <Box className="main-wrapper">
          <Typography className="road-to">ROAD TO</Typography>
          <Box
            className="technosphere-logo"
            component="img"
            src={logo}
            alt="Hero_Logo"
          ></Box>
          <Typography className="ctf-title-main">Capture The Flag</Typography>
          <Typography className="ctf-description">
            The Technosphere, a capture the flag competition is organized by
            Women in FOSS NSBM. The treasure hunt commences on 28th of November
            at 4.00pm. You will get 48 hours to complete the challenges. All are
            welcome to the competition. Happy Hacking!!!
          </Typography>
          <Button
            component={"a"}
            href="https://discord.gg/3qpH6ghY"
            target="_blank"
            variant="contained"
            className="rules-button"
            endIcon={<ArrowForward />}
            sx={{marginRight: '30px'}}
          >
            Join Discord Server
          </Button>
          <Button
            component={Link}
            to="/leaderboard"
            variant="contained"
            className="rules-button"
            endIcon={<ArrowForward />}
          >
            Leaderboard
          </Button>
          <Typography className="ctf-description" sx={{marginTop: '40px'}}>
            Technosphere CTF consists of Web, Mobile, Binary exploitation, Misc
            and Privilege. You can submit the challenges here: There is a
            separate page for Technosphere CTF. There are separate cards for
            each and every challenge. You can submit the relevant flags to
            relevant challenge cards. Some challenges are visible from today & wait till tomorrow to others.
          </Typography>
          <Typography className="challenges-title">Challenges</Typography>
          {data.isLoading && (
            <>
              <CircularProgress />
            </>
          )}
          <Grid
            className="ctf-challenges"
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 6, md: 12 }}
          >
            {data.isSuccess && (
              <>
                {data.data.map(
                  (challenge: {
                    id: string;
                    name: string;
                    description: string;
                    isDownlodAvalible: boolean;
                    downloadUrl: string;
                    isActive: boolean;
                    challengeUrl: string;
                    solves: number;
                    isCompleted: boolean;
                  }) => {
                    console.log(challenge.isDownlodAvalible);
                    console.log(challenge.description);

                    return (
                      <>
                        <div className="challenge_holder">
                          <ChallengeCard
                            downloadURL={
                              challenge.isDownlodAvalible
                                ? challenge.downloadUrl
                                : ""
                            }
                            title={challenge.name}
                            description={challenge.description}
                            id={challenge.id}
                            isCompleted={challenge?.isCompleted}
                            submissionCount={`${challenge.solves} Submissions`}
                          />
                        </div>
                      </>
                    );
                  }
                )}
              </>
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Challenges;

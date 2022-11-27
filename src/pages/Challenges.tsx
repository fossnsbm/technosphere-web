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
                    return (
                      <>
                        <Grid item xs={12} sm={3} md={3}>
                          <ChallengeCard
                            title={challenge.name}
                            description={challenge.description}
                            id={challenge.id}
                            isCompleted={challenge?.isCompleted}
                            submissionCount={`${challenge.solves} Submissions`}
                          />
                        </Grid>
                      </>
                    );
                  }
                )}
              </>
            )}
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

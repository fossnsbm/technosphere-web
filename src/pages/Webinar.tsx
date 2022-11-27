import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import HeaderMenus from "../components/headerMenus/headerMenus";
import HeroSection from "../components/heroSection/heroSection";
import VideoJS from "../components/VideoJS";
import "../styles/challenges.scss";
import "../styles/sessions.scss";
import speaker from "../assets/speakers/speaker_placeholder.png";
import { GetWebinars } from "../services/react-query/webinar/useWebinar";
import { useScreen } from "usehooks-ts";

export const WebinarPage = () => {
  const playerRef = useRef(null);
  const [selectedWebinar, setSelectedWebinar] = useState(null);
  const [userSelected, setUserSelected] = useState<null | string>(null);
  const webinarDetails = GetWebinars();

  useEffect(() => {
    // if user havent selected a webinar loop and automatically
    // select the live one if there's no session live just select
    // a random session

    if (!userSelected) {
      if (webinarDetails.isSuccess) {
        for (const webinar of webinarDetails.data) {
          console.log(webinar);
        }
      }
    }
  }, [webinarDetails.data]);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "https://d3qy2z3f9c8bfd.cloudfront.net/recordings/videoplayback.webm",
        type: "video/webm",
      },
    ],
  };

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };

  return (
    <>
      <Box className="challenges">
        <Container maxWidth="lg">
          <HeaderMenus />
        </Container>

        {webinarDetails.isLoading ? (
          <>
            <CircularProgress />
          </>
        ) : (
          <>
            <Box style={{ marginLeft: "5%", marginRight: "5%" }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                style={{ marginTop: 20 }}
              >
                <Grid item xs={4} sm={8} md={9}>
                  <Box style={{ width: "100%", backgroundColor: "black" }}>
                    <VideoJS
                      options={videoJsOptions}
                      onReady={handlePlayerReady}
                    />
                  </Box>

                  <Box sx={{ mt: 5 }}>
                    <Typography variant="h4" style={{ fontWeight: 900 }}>
                      Edge Computing
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={4} sm={8} md={3}>
                  <Stack spacing={2}>
                    {webinarDetails.isSuccess && (
                      <>
                        {webinarDetails.data.map(
                          (webinar: {
                            _id: string;
                            name: string;
                            description: string;
                            speacker: string;
                            speackerImgUrl: string;
                            date: string;
                            speackerDescription: string;
                            createdAt: Date;
                            updatedAt: Date;
                            __v: number;
                          }) => {
                            return (
                              <>
                                <div
                                  className={`event_card live_card`}
                                  style={{ width: "100%" }}
                                >
                                  <Typography className="live_status">
                                    Status
                                  </Typography>
                                  <Typography
                                    className="session_title"
                                    variant="h5"
                                    fontWeight={800}
                                    sx={{ mb: 1 }}
                                  >
                                    {webinar.name}
                                  </Typography>
                                  <Typography className="schedule">
                                    {new Date(webinar.date).toDateString()}
                                  </Typography>
                                  <Grid className="speaker_section">
                                    <img
                                      src={speaker}
                                      className="speaker_img"
                                    />
                                    <Grid>
                                      <Typography className="speakers_name">
                                        {webinar.speacker}
                                      </Typography>
                                      <Typography className="speaker_description">
                                        {webinar.speackerDescription}
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                </div>
                              </>
                            );
                          }
                        )}
                      </>
                    )}
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </>
        )}
      </Box>
    </>
  );
};

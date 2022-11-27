import {
  Box,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import HeaderMenus from "../components/headerMenus/headerMenus";
import VideoJS from "../components/VideoJS";
import speaker from "../assets/speakers/speaker_placeholder.png";
import { GetWebinars } from "../services/react-query/webinar/useWebinar";
import { IWebinar } from "../interface/webinar";
import "../styles/challenges.scss";
import "../styles/sessions.scss";
import { Comments } from "../components/comment";

export const WebinarPage = () => {
  const playerRef = useRef(null);

  const [userSelected, setUserSelected] = useState<null | IWebinar>(null);
  const [currentlyLiveWebinar, setCurrentlyLiveWebinar] = useState<
    null | string
  >(null);

  const webinarDetails = GetWebinars();

  useEffect(() => {
    // if user havent selected a webinar loop and automatically
    // select the live one if there's no session live just select
    // a random session

    if (!userSelected) {
      if (webinarDetails.isSuccess) {
        for (const webinar of webinarDetails.data) {
          const happeningOn = new Date(webinar.date);
          const currentDate = new Date();

          const hourspassed = Math.floor(
            (happeningOn.getTime() - currentDate.getTime()) / 1000 / (60 * 60)
          );

          // hours passed should be -1 or -2
          // means its been hour or 2 hours since the video
          // started to stream
          if (hourspassed == -1 || hourspassed == -2) {
            setCurrentlyLiveWebinar(webinar._id);
            setUserSelected({
              ...webinar,
              isLive: true,
            });
          }
        }
      }
    }
  }, [webinarDetails.data]);

  const handleSwitchWeinar = (webinar: IWebinar) => {
    setUserSelected(webinar);
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

  const isSelected = (webinarId: string): boolean => {
    if (userSelected) {
      return userSelected?._id === webinarId;
    }
    return false;
  };

  const checkLiveNow = (webinarId: string): boolean => {
    if (currentlyLiveWebinar) {
      return currentlyLiveWebinar === webinarId;
    }
    return false;
  };

  return (
    <>
      <Box className="challenges" sx={{ pb: 20 }}>
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
                    {userSelected && (
                      <>
                        {checkLiveNow(userSelected?._id) ? (
                          <>
                            <VideoJS
                              options={{
                                autoplay: true,
                                controls: true,
                                responsive: true,
                                fluid: true,
                                sources: [
                                  {
                                    src: userSelected?.liveStream,
                                    type: "video/mp4",
                                  },
                                ],
                              }}
                              onReady={handlePlayerReady}
                            />
                          </>
                        ) : (
                          <>
                            <VideoJS
                              options={{
                                autoplay: true,
                                controls: true,
                                responsive: true,
                                fluid: true,
                                sources: [
                                  {
                                    src: userSelected?.s3Url,
                                    type: "video/mp4",
                                  },
                                ],
                              }}
                              onReady={handlePlayerReady}
                            />
                          </>
                        )}
                      </>
                    )}

                    <Divider />
                  </Box>

                  <Box sx={{ mt: 5 }}>
                    <Typography variant="h4" style={{ fontWeight: 900 }}>
                      {userSelected ? userSelected.name : ""}
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 5 }}>
                    {userSelected ? (
                      <Comments eventId={userSelected._id} />
                    ) : null}
                  </Box>
                </Grid>

                <Grid item xs={4} sm={8} md={3}>
                  <Stack spacing={2}>
                    {webinarDetails.isSuccess && (
                      <>
                        {webinarDetails.data.map((webinar: IWebinar) => {
                          return (
                            <>
                              <div
                                className={`event_card ${
                                  isSelected(webinar._id) ? "live_card" : null
                                }`}
                                style={{ width: "100%", cursor: "pointer" }}
                                onClick={() => handleSwitchWeinar(webinar)}
                              >
                                {checkLiveNow(webinar._id) ? (
                                  <>
                                    <Typography className="live_status">
                                      ⦿ Live
                                    </Typography>
                                  </>
                                ) : null}
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
                                  <img src={speaker} className="speaker_img" />
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
                        })}
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

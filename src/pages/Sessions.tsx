import "../styles/sessions.scss";
import HeaderMenus from "../components/headerMenus/headerMenus";
import { Grid, Typography } from "@mui/material";

function Sessions() {
  return (
    <>
      <section className="sessions">
        <HeaderMenus />
        <Grid
          className="main_session_wrapper"
          container
          justifyContent="space-between"
          sx={{
            flexDirection: { xs: "column", sm: "column", md: "row" },
            alignItems: { xs: "center", sm: "center", md: "center" },
            mt: 2,
          }}
        >
          <div className="session_wrapper_left">
            <iframe
              className="live_session"
              src="https://www.youtube.com/embed/9C9vPjCfXrA"
              frameBorder="0"
              allow="accelerometer"
              title="description"
              allowFullScreen
            ></iframe>
            <Typography className="session_title">Edge Computing</Typography>
            <Grid sx={{ mb: 2.2 }} className="speaker_section">
              <div className="speaker_img" />
              <Grid>
                <Typography className="speakers_name">Thaanu Perera</Typography>
                <Typography className="speaker_description">
                  UI/UX Designer At Surge Global
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div className="session_wrapper_right">
            <Grid
              sx={{
                flexDirection: { xs: "column", sm: "column", md: "row" },
                alignItems: { xs: "center", sm: "center", md: "center" },
                margin: { xs: "0 auto" },
              }}
            >
              <div className="event_card">
                <Typography className="session_title">
                  Cloud Computing
                </Typography>
                <Typography className="schedule">
                  28 DEC | 7.00 - 8.30
                </Typography>
                <Grid className="speaker_section">
                  <div className="speaker_img" />
                  <Grid>
                    <Typography className="speakers_name">
                      Thaanu Perera
                    </Typography>
                    <Typography className="speaker_description">
                      UI/UX Designer At Surge Global
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <div className="event_card">
                <Typography className="session_title">
                  Blockchain And Cryptocurrency
                </Typography>
                <Typography className="schedule">
                  28 DEC | 7.00 - 8.30
                </Typography>
                <Grid className="speaker_section">
                  <div className="speaker_img" />
                  <Grid>
                    <Typography className="speakers_name">
                      Thaanu Perera
                    </Typography>
                    <Typography className="speaker_description">
                      UI/UX Designer At Surge Global
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <div className="event_card live_card">
                <Typography className="session_title">
                  Edge Computing
                </Typography>
                <Typography className="schedule">
                  28 DEC | 7.00 - 8.30
                </Typography>
                <Grid className="speaker_section">
                  <div className="speaker_img" />
                  <Grid>
                    <Typography className="speakers_name">
                      Thaanu Perera
                    </Typography>
                    <Typography className="speaker_description">
                      UI/UX Designer At Surge Global
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <div className="event_card">
                <Typography className="session_title">Big Data</Typography>
                <Typography className="schedule">
                  28 DEC | 7.00 - 8.30
                </Typography>
                <Grid className="speaker_section">
                  <div className="speaker_img" />
                  <Grid>
                    <Typography className="speakers_name">
                      Thaanu Perera
                    </Typography>
                    <Typography className="speaker_description">
                      UI/UX Designer At Surge Global
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </div>
        </Grid>
      </section>
    </>
  );
}

export default Sessions;

import "../styles/sessions.scss";
import HeaderMenus from "../components/headerMenus/headerMenus";
import { Divider, Grid, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const cardDetails = [
  {
    title: "Cloud Computing",
    shedule: "28 DEC | 7.00 - 8.30",
    image: "https://i.ibb.co/y5Hb9pv/speaker-1.png",
    speaker: "Thaanu Perera",
    description: "UI/UX Designer At Surge Global",
    live: "null",
  },
  {
    title: "Blockchain And Cryptocurrency",
    shedule: "28 DEC | 7.00 - 8.30",
    image: "https://i.ibb.co/y5Hb9pv/speaker-1.png",
    speaker: "Thaanu Perera",
    description: "UI/UX Designer At Surge Global",
    live: "null",
  },
  {
    title: "Edge Computing",
    shedule: "28 DEC | 7.00 - 8.30",
    image: "https://i.ibb.co/y5Hb9pv/speaker-1.png",
    speaker: "Thaanu Perera",
    description: "UI/UX Designer At Surge Global",
    live: "live_card",
    status: "⦿ Live",
  },
  {
    title: "Big Data",
    shedule: "28 DEC | 7.00 - 8.30",
    image: "https://i.ibb.co/y5Hb9pv/speaker-1.png",
    speaker: "Thaanu Perera",
    description: "UI/UX Designer At Surge Global",
    live: "null",
  },
];

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
            />
            <Typography className="session_title">Edge Computing</Typography>
            <Grid sx={{ mb: 2.2 }} className="speaker_section">
              <img
                src="https://i.ibb.co/y5Hb9pv/speaker-1.png"
                className="speaker_img"
              />
              <Grid>
                <Typography className="speakers_name">Thaanu Perera</Typography>
                <Typography className="speaker_description">
                  UI/UX Designer At Surge Global
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ borderBottomWidth: 2 }} />
            <Grid>
              <Typography className="comments_count" sx={{ mt: 2 }}>
                236 Comments
              </Typography>
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
              {cardDetails.map((card) => (
                <div key={card.title} className={`event_card ${card.live}`}>
                  <Typography className="live_status">{card.status}</Typography>
                  <Typography className="session_title">
                    {card.title}
                  </Typography>
                  <Typography className="schedule">{card.shedule}</Typography>
                  <Grid className="speaker_section">
                    <img src={`${card.image}`} className="speaker_img" />
                    <Grid>
                      <Typography className="speakers_name">
                        {card.speaker}
                      </Typography>
                      <Typography className="speaker_description">
                        {card.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              ))}
            </Grid>
          </div>
        </Grid>
      </section>
    </>
  );
}

export default Sessions;

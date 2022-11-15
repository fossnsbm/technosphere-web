import "./SpeakerCard.scss";
import { Grid, Link, Typography, Box, Button } from "@mui/material";
import arrow from "../../assets/speaker_arrow.svg";

interface AppState {
    photo: string;
    speaker: string;
    jobTitle: string;
    company: string;
    link: string
}
const SpeakerCard = ({
    photo,
    speaker,
    jobTitle,
    company,
    link,
}: AppState) => {

    const styles = {
        speakerCard: {
            minHeight: 280,
            minWidth: 280,
            borderRadius: 6,
            display: "flex",
            alignItems: "end",
            background: `linear-gradient(180deg, rgba(6, 5, 61, 0) 68.14%, rgba(6, 5, 61, 0.65) 83.24%, rgba(6, 5, 61, 0.85) 96.22%),url(${photo})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }
    };

    return (
        <Grid
            item
            xs={12}
            sm={6}
            lg={3}
            justifyContent="center"
            display="flex"
        >
            <Box
                className="speakerCard"
                sx={styles.speakerCard}
            >
                <Grid container justifyContent="space-between">
                    <Grid item >
                        <Typography className="speaker_name">
                            {speaker}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className="speaker_job">
                            {(jobTitle != "") ? jobTitle + " at " + company : ""}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid xs="auto">
                    <Grid item>
                        {(link != "") ? <Link href={link} target={"_blank"} >
                            <Box
                                component="img"
                                src={arrow}
                                sx={{ width: "24px", marginLeft: "12px" }}
                            />
                        </Link> : <></>}
                    </Grid>
                </Grid>
            </Box>
        </Grid >
    );
};

export default SpeakerCard;

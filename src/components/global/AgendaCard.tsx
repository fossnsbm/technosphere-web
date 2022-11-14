import "./AgendaCard.scss";
import { Container, Grid, Card, Divider, Typography, Box } from "@mui/material";

export enum AlignType {
    Left,
    Right,
}

interface AppState {
    date: string;
    month: string;
    title: string;
    time: string;
    description: string;
    photo: string;
    speaker: string;
    jobTitle: string;
    company: string;
    alignType: AlignType;
}
const AgendaCard = ({ date, month, title, time, description, photo, speaker, jobTitle, company, alignType }: AppState) => {
    return (
        <Grid container justifyContent={alignType === AlignType.Left ? "flex-start" : "flex-end"}>
            <Grid item xs={12} sm={12} md={11} lg={10}>
                <Card className="agenda_card">
                    <Grid container>
                        <Grid item xs={12} sm={12} md="auto" lg="auto">
                            <Typography className="date">{date}</Typography>
                            <Typography className="month">{month}</Typography>
                            <Divider flexItem className="horz_divider" sx={{ display: { xs: 'block', sm: 'none', md: 'none', lg: 'none' } }} />
                        </Grid>
                        <Divider orientation="vertical" flexItem className="divider" sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }} />
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <Typography variant="h2" className="title">{title}</Typography>
                            <Typography className="time">{time}</Typography>
                            <Typography className="content">{description}</Typography>
                        </Grid>
                        <Divider orientation="vertical" flexItem className="divider" sx={{ display: { xs: 'none', sm: 'block', md: 'block', lg: 'block' } }} />
                        <Grid item xs={12} sm="auto" md="auto" lg="auto">
                            <Box component="img" className="speaker" src={photo} />
                            <Typography variant="h5" className="name">{speaker}</Typography>
                            <Typography className="job">{jobTitle}</Typography>
                            <Typography className="company">{company}</Typography>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    );
};

export default AgendaCard;

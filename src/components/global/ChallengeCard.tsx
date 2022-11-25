import "./ChallengeCard.scss";
import { Box, Typography, Button } from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForward";

const ChallengeCard = (props: any) => {
  return (
    <>
      <Box className="challenge-card">
        <Typography className="challenge-card-title">{props.title}</Typography>
        <Typography className="challenge-card-description">
          {props.description}
        </Typography>
        <Typography className="challenge-number">{props.number}</Typography>
        <Typography className="challenge-submission-count">
          {props.submissionCount}
        </Typography>
        <Button
          variant="outlined"
          href="/challenge"
          color="inherit"
          endIcon={<ArrowForward />}
          sx={{
            padding: "8px 18px",
            fontWeight: 600,
          }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default ChallengeCard;

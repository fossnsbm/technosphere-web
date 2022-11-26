import "./ChallengeCard.scss";
import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForward";

const ChallengeCard = (props: any) => {
  const [open, setOpen] = useState(false);

  const handleSubmitChallenge = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <Dialog open={open} onClose={handleClose}>
          <Box
            sx={{
              paddingBottom: 2,
              background:
                "linear-gradient(118.92deg, #0e0c33 0%, #1b0e40 100%)",
            }}
            className="challenge-submit-box"
          >
            <DialogTitle className="challenge-submit-box-title">
              Cryptography
            </DialogTitle>
            <DialogContent>
              <Typography>Enter your flag below</Typography>
              <TextField title="Email" fullWidth />
            </DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  padding: "7px 18px",
                  marginRight: "1rem",
                  fontWeight: 600,
                  textTransform: "capitalize",
                }}
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  padding: "8px 18px",
                  marginRight: "1rem",
                  fontWeight: 600,
                  width: "222px !important",
                  backgroundColor: "#8566ff",
                  border: "none",
                  textTransform: "capitalize",
                }}
                onClick={handleClose}
              >
                Submit
              </Button>
            </DialogActions>
          </Box>
        </Dialog>
        <Button
          variant="outlined"
          color="inherit"
          endIcon={<ArrowForward />}
          sx={{
            padding: "8px 18px",
            fontWeight: 600,
            textTransform: "capitalize",
          }}
          onClick={handleSubmitChallenge}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default ChallengeCard;

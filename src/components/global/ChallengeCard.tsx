import "./ChallengeCard.scss";
import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForward";
import flagIcon from "../../assets/flag.svg";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AppConfig } from "../../config";
import toast from "react-hot-toast";
import { getAuthStorage } from "../../utils/jwt-token";
import { LoadingButton } from "@mui/lab";

const ChallengeCard = (props: any) => {
  const [open, setOpen] = useState(false);
  const [flag, setFlag] = useState("");

  const id_token = getAuthStorage();
  const queryClient = useQueryClient();

  const handleSubmitChallenge = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const reqHeaders = new Headers();
  reqHeaders.append("Authorization", `Bearer ${id_token}`);
  reqHeaders.append("Content-Type", "application/json");

  const submitFlagMutation = useMutation(
    (data: { challengeId: string; flag: string }) =>
      fetch(`${AppConfig.BACKEND_API}/users/flag/submit`, {
        method: "POST",
        headers: reqHeaders,
        body: JSON.stringify(data),
        redirect: "follow",
      }),
    {
      onSuccess: async (response: any) => {
        const r = await response.json();

        if (r?.statusCode == 400) {
          toast.error(r?.message, {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          return;
        }

        queryClient.invalidateQueries();

        toast.success("Flag submitted successfully", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });

        // @TODO
        // invalidate store
      },

      onError: (error) => {
        toast.error("Something went wrong", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      },
      onMutate: () => {},
    }
  );

  const handleSubmit = () => {
    submitFlagMutation.mutate({
      challengeId: props.id,
      flag: flag,
    });
  };

  return (
    <>
      <div className="challenge_card">
        <h4>{props.title}</h4>
        <p className="challenge-card-description">
          {props.description} {props.isCompleted}
        </p>
        {/* <Typography className="challenge-number">{props.number}</Typography> */}
        <h6>{props.submissionCount}</h6>
        <Dialog
          fullWidth
          className="dialog-box"
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              borderRadius: "15px",
              outline: "1px solid #8566ff",
            },
          }}
        >
          <Box
            sx={{
              paddingBottom: 2,
              background:
                "linear-gradient(118.92deg, #0e0c33 0%, #1b0e40 100%)",
            }}
            className="challenge-submit-box"
          >
            <DialogTitle className="challenge-submit-box-title">
              {props.title}
            </DialogTitle>
            <Box
              className="ctf-flag-icon"
              component="img"
              src={flagIcon}
              alt="CTF-Flag"
            ></Box>
            <DialogContent>
              <Typography sx={{ mb: 1, mt: 1 }}>
                Enter your flag below
              </Typography>

              {props?.challengeUrl && (
                <>
              <Typography sx={{ mb: 5, mt: 1 }} component="a" href={props.challengeUrl}>
                {props?.challengeUrl}
              </Typography>
                </>
              )}
              <TextField
                variant="standard"
                required
                title="Flag"
                name="flag"
                placeholder="Enter your flag..."
                type="text"
                id="flag"
                className="flag-input"
                fullWidth
                value={flag}
                onChange={(e) => setFlag(e.target.value)}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  padding: "7px 18px",
                  marginRight: "1rem",
                  marginLeft: "1rem",
                  fontWeight: 600,
                  textTransform: "capitalize",
                }}
                onClick={handleClose}
              >
                Cancel
              </Button>

              {props?.isDownloadAvalible && (
                <>
              <Button
                href={props.downloadURL}
                variant="outlined"
                color="inherit"
                sx={{
                  padding: "7px 18px",
                  marginRight: "1rem",
                  marginLeft: "1rem",
                  fontWeight: 600,
                  textTransform: "capitalize",
                }}
              >
                Download
              </Button>
                </>
              )}
              <LoadingButton
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
                loading={submitFlagMutation.isLoading}
                onClick={handleSubmit}
              >
                {props.isCompleted ? "Submitted" : "Submit"}
              </LoadingButton>
            </DialogActions>
          </Box>
        </Dialog>
        <Button
          className="rules-button"
          // variant="outlined"
          color="inherit"
          endIcon={props.isCompleted ? null : <ArrowForward />}
          sx={{
            padding: "8px 18px",
            fontWeight: 600,
            textTransform: "capitalize",
          }}
          onClick={handleSubmitChallenge}
        >
          {props.isCompleted ? "Submitted" : "Submit"}
        </Button>
      </div>
    </>
  );
};

export default ChallengeCard;

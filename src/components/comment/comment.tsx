import styled from "@emotion/styled";
import { LoadingButton } from "@mui/lab";
import { ButtonProps, Grid, TextField, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { AppConfig } from "../../config";
import httpCommon from "../../http-common";
import { IComment } from "./comment.interface";

const ColorButton = styled(LoadingButton)<ButtonProps>(() => ({
  color: "white",
  backgroundColor: "#8566FF",
  "&:hover": {
    backgroundColor: "#7451FF",
  },
}));

export const CommentCard = ({
  comment,
  refetchData,
}: {
  comment: IComment;
  refetchData: () => {};
}) => {
  const [replyEnable, setReplyEnabled] = useState(false);
  const [message, setMessage] = useState<null | string>(null);

  const createCommentReplyMutation = useMutation(
    (commentData: { eventId: string; message: string }) =>
      httpCommon.post(
        `${AppConfig.BACKEND_API}/comment/reply/${comment._id}`,
        commentData
      ),
    {
      onSuccess: (response) => {
        toast.success("Comment posted successfully", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });

        refetchData();
        setReplyEnabled(false);
      },

      onError: (error: AxiosError) => {
        const errorMessages: any = error?.response?.data;

        if (!errorMessages) {
          toast.error(error.message, {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          return;
        }

        if (!Array.isArray(errorMessages.message)) {
          console.log(errorMessages.message);
          toast.error(errorMessages.message, {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          return;
        }

        for (const message of errorMessages?.message) {
          toast.error(message, {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }
      },
      onMutate: () => {},
    }
  );

  const postComment = () => {
    if (!message) {
      toast.error("Comment Body is empty", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }
    createCommentReplyMutation.mutate({
      eventId: comment.eventId,
      message: message,
    });
  };

  return (
    <>
      <Grid style={{ display: "flex", marginBottom: 50, width: "100%" }}>
        <img
          src={comment.user.profileImgUrl}
          className="speaker_img"
          style={{ marginTop: 10, marginRight: 20 }}
        />
        <Grid style={{ width: "100%" }}>
          <Typography variant="h5" fontWeight={900}>
            {comment.user.fullName}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }} style={{ width: "100%" }}>
            {comment.message}
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 2, mb: 5 }}
            style={{
              color: "rgba(255, 255, 255, 0.6)",
              cursor: "pointer",
            }}
            onClick={() => setReplyEnabled(true)}
          >
            Reply
          </Typography>

          {replyEnable ? (
            <>
              <TextField
                style={{ width: "100%" }}
                id="outlined-multiline-static"
                label="Write your comment"
                multiline
                fullWidth
                rows={4}
                sx={{ mb: 2 }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <ColorButton
                sx={{ mb: 5 }}
                variant="contained"
                onClick={() => postComment()}
                loading={createCommentReplyMutation.isLoading}
              >
                Submit
              </ColorButton>
            </>
          ) : null}

          {comment.responses && (
            <>
              {comment.responses.map((response) => {
                return (
                  <>
                    <Grid style={{ display: "flex", marginBottom: 50 }}>
                      <img
                        src={response.user.profileImgUrl}
                        className="speaker_img"
                        style={{ marginTop: 10, marginRight: 20 }}
                      />
                      <Grid>
                        <Typography variant="h5" fontWeight={900}>
                          {response.user.fullName}
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                          {response.message}
                        </Typography>
                      </Grid>
                    </Grid>
                  </>
                );
              })}
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
};

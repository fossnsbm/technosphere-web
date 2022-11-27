import styled from "@emotion/styled";
import { LoadingButton } from "@mui/lab";
import { ButtonProps, TextField } from "@mui/material";
import { GetComments } from "../../services/react-query/comments/useComments";
import { IComment } from "./comment.interface";
import { CommentCard } from "./comment";
import { useMutation } from "@tanstack/react-query";
import httpCommon from "../../http-common";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { useState } from "react";
import { SettingsVoice } from "@mui/icons-material";

const ColorButton = styled(LoadingButton)<ButtonProps>(() => ({
  color: "white",
  backgroundColor: "#8566FF",
  "&:hover": {
    backgroundColor: "#7451FF",
  },
}));

export const Comments = ({ eventId }: { eventId: string }) => {
  const comments = GetComments(eventId);
  const [message, setMessage] = useState<null | string>(null);

  const createCommentMutation = useMutation(
    (commentData: { eventId: string; message: string }) =>
      httpCommon.post(`/comment`, commentData),
    {
      onSuccess: (response) => {
        toast.success("Comment posted successfully", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });

        comments.refetch();
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
    createCommentMutation.mutate({
      eventId: eventId,
      message: message,
    });
  };

  return (
    <>
      <TextField
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
        loading={createCommentMutation.isLoading}
      >
        Submit
      </ColorButton>
      {comments.isSuccess && (
        <>
          {comments.data.map((comment: IComment) => {
            return (
              <>
                <CommentCard comment={comment} refetchData={comments.refetch} />
              </>
            );
          })}
        </>
      )}
    </>
  );
};

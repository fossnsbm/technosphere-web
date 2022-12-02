import {
  Button,
  CircularProgress,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useParams } from "react-router-dom";
import HeaderMenus from "../components/headerMenus/headerMenus";
import { useApiKeyStorage } from "../hooks/user/useApiKey";
import { IUser } from "../interface/user";
import axios from "axios";
import httpCommon from "../http-common";
import { LoadingButton } from "@mui/lab";
import toast from "react-hot-toast";

export const AcceptInvitation = () => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { getApiKey } = useApiKeyStorage();
  let { id } = useParams();

  const validateUserAccount = async () => {
    setIsLoading(true);
    const config = {
      method: "post",
      url: `/qr-code/validate`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        email: email,
        hash: id,
      }),
    };

    await httpCommon(config)
      .then(function (response) {
        setUser(response.data);
      })
      .catch(function (error) {
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
          toast.error(
            errorMessages.message === "User is not confirmed."
              ? "Please verify your account through the email you received."
              : errorMessages.message,
            {
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
              },
            }
          );
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
      });

    setIsLoading(false);
  };

  const acceptUserAccount = async () => {
    setIsLoading(true);
    const config = {
      method: "post",
      url: `/qr-code/accept`,
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        email: email,
        hash: id,
      }),
    };

    await httpCommon(config)
      .then(function (response) {
        setUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    setIsLoading(false);
  };

  return (
    <>
      <Box className="challenges">
        <Container>
          <HeaderMenus />
          <Box className="main-wrapper" sx={{ mt: 2 }}>
            <Typography variant="h4">Accept User Invitation</Typography>
            <TextField
              variant="filled"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              label="Nsbm User Name"
              sx={{ mt: 5 }}
            />

            <LoadingButton
              sx={{ mt: 3 }}
              variant="contained"
              onClick={() => validateUserAccount()}
              loading={isLoading}
            >
              Submit
            </LoadingButton>

            {isLoading && (
              <Box sx={{ mt: 5 }}>
                <CircularProgress />
              </Box>
            )}

            {user && (
              <>
                <Box sx={{ mt: 5 }}>
                  <u>
                    <Typography variant="h5">
                      Valid Invitation, found
                    </Typography>
                  </u>

                  <Box sx={{ mt: 5 }}>
                    <Stack>
                      <p> {user.fullName}</p>
                      <p> {user.email}</p>
                      <p> {user.batch}</p>
                      <p> {user.food}</p>
                    </Stack>
                  </Box>

                  {user.attendaceMarked ? (
                    <>
                      <Button
                        sx={{ mt: 3 }}
                        color="warning"
                        variant="contained"
                        size="large"
                      >
                        User already marked attendace
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        sx={{ mt: 3 }}
                        color="success"
                        variant="contained"
                        onClick={() => acceptUserAccount()}
                        size="large"
                      >
                        Accept
                      </Button>
                    </>
                  )}
                </Box>
              </>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};

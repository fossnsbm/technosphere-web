import "../styles/login.scss";
import {
  Container,
  TextField,
  Avatar,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  ButtonProps,
  Link as MuiLink,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { toast } from "react-hot-toast";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

import { AppConfig } from "../config";
import HeaderMenus from "../components/headerMenus/headerMenus";
import { useUserStore } from "../store/createUserSlice";
import { useTokenStore } from "../store/createAuthStore";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const ColorLoginButton = styled(LoadingButton)<ButtonProps>(() => ({
  color: "white",
  backgroundColor: "#8566FF",
  "&:hover": {
    backgroundColor: "#7451FF",
  },
}));

export const LoginPage = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { setUser } = useUserStore();
  const { setAccessToken } = useTokenStore();

  const navigate = useNavigate();

  const createLogin = useMutation(
    (userData: { name: string; password: string }) =>
      axios.post(`${AppConfig.BACKEND_API}/auth/sign-in`, userData),
    {
      onSuccess: (response) => {
        toast.success("Login Success", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });

        if (response.data?.idToken?.jwtToken) {
          setUser(response.data?.idToken.payload);
          setAccessToken(response.data?.idToken?.jwtToken);
          navigate(`/`);
        }
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
      },
      onMutate: () => {},
    }
  );

  const userLogin = () => {
    createLogin.mutate({
      name: userName,
      password: password,
    });
  };

  return (
    <>
      <section className="register">
        <HeaderMenus />

        <div className="register_content">
          <div className="center">
            <Container>
              <Box
                sx={{
                  marginTop: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "#8566FF" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography
                  component="h1"
                  variant="h5"
                  style={{ marginBottom: 30 }}
                >
                  SIGN IN
                </Typography>
                <Box>
                  <Typography>Email Address</Typography>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    id="email"
                    placeholder="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    InputProps={{
                      disableUnderline: true,
                    }}
                    className="login_textfield"
                  />
                  <Typography>Password</Typography>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    placeholder="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    InputProps={{
                      disableUnderline: true,
                    }}
                    className="login_textfield"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <br />
                  <ColorLoginButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={() => userLogin()}
                    sx={{ mt: 3, mb: 2 }}

                    // className="login_button"
                  >
                    Sign In
                  </ColorLoginButton>
                  <Grid container>
                    <Grid item xs>
                      {/* <MuiLink component={Link} to="/rest" variant="body2">
                        Forgot password?
                      </MuiLink> */}
                    </Grid>
                    <Grid item>
                      <MuiLink
                        component={Link}
                        to="/register"
                        variant="body2"
                        className="login_link"
                      >
                        {"Don't have an account? Sign Up"}
                      </MuiLink>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </div>
        </div>
      </section>
    </>
  );
};

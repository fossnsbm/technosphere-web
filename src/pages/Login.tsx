import { Container } from "@mui/material";
import HeaderMenus from "../components/headerMenus/headerMenus";
import Avatar from "@mui/material/Avatar";
import { ButtonProps } from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material/styles";
import { Link as MuiLink } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { AppConfig } from "../config";
import { toast } from "react-hot-toast";
import { useLocalStorage } from "usehooks-ts";

const ColorLoginButton = styled(LoadingButton)<ButtonProps>(({ theme }) => ({
  color: "white",
  backgroundColor: "#8566FF",
  "&:hover": {
    backgroundColor: "#7451FF",
  },
}));

export const LoginPage = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [idToken, setIdToken] = useLocalStorage("id_token", true);
  const [authPayload, setAuthPayload] = useLocalStorage("payload", true);

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
          setIdToken(response.data?.idToken?.jwtToken);
          setAuthPayload(response.data?.idToken?.payload);
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
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography
                  component="h1"
                  variant="h5"
                  style={{ marginBottom: 30 }}
                >
                  Sign in
                </Typography>
                <Box>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <ColorLoginButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={() => userLogin()}
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </ColorLoginButton>
                  <Grid container>
                    <Grid item xs>
                      <MuiLink component={Link} to="/rest" variant="body2">
                        Forgot password?
                      </MuiLink>
                    </Grid>
                    <Grid item>
                      <MuiLink component={Link} to="/register" variant="body2">
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

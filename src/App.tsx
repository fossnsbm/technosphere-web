import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./Router";
import {
  Navigate,
  RouterProvider,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material";
import { useEffect } from "react";

const queryClient = new QueryClient();

const theme = createTheme({
  palette: {
    primary: {
      main: "#7451FF",
    },
    secondary: {
      main: "#8566FF",
    },
  },
});

function App() {
  useEffect(() => {
    // fix for having `//` in invitation url
    if (window.location.pathname.includes("//invitation")) {
      const actualPath = window.location.pathname.substring(1);
      window.location.pathname = actualPath;
    }
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Toaster />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

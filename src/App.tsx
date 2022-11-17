import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./Router";
import { RouterProvider } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material";

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

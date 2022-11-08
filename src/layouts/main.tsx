import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HeaderMenus from "../components/headerMenus/headerMenus";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <>
      
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HeaderMenus />
        <div>{children}</div>
      </ThemeProvider>
    </>
  );
};

export default MainLayout;

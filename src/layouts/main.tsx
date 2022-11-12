import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HeaderMenus from "../components/headerMenus/headerMenus";
import HeroSection from "../components/heroSection/heroSection";
import Footer from "../components/Footer";

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
        <HeroSection />
        <div>{children}</div>
        <Footer/>
      </ThemeProvider>
    </>
  );
};

export default MainLayout;

import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HeaderMenus from "../components/headerMenus/headerMenus";
import HeroSection from "../components/heroSection/heroSection";
import Footer from "../components/Footer";
import Agenda from "../components/agenda/agenda";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },

    typography: {
      fontFamily: [
        "Montserrat",
      ].join(","),
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HeroSection />
        <Agenda />  
        <div>{children}</div>
        <Footer/>
      </ThemeProvider>
    </>
  );
};

export default MainLayout;

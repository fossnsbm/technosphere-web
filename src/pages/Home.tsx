import React from "react";
import { Box, Typography } from "@mui/material";
import Footer from "../components/Footer"
import { IntroSection } from "../components/IntroSection";
import Agenda  from "../components/agenda/agenda";

export const HomePage = () => {
  return (
    <>
      <IntroSection />
      <Agenda />
    </>
  );
};

import React from "react";
import { Box, Typography } from "@mui/material";
import Footer from "../components/Footer"
import { IntroSection } from "../components/IntroSection";
import SpeakersSection from "../components/speakersSection/speakersSection";

export const HomePage = () => {
  return (
    <>
      <IntroSection />
      <SpeakersSection/>
    </>
  );
};

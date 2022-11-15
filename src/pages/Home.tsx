import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sponsors from "../components/home/Sponsors";
import { IntroSection } from "../components/IntroSection";
import SpeakersSection from "../components/speakersSection/speakersSection";
import HeroSection from "../components/heroSection/heroSection";
import AgendaSection from "../components/agenda/agenda";

export const HomePage = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
  }, [location,])

  return (
    <>
      <HeroSection />
      <IntroSection />
      <AgendaSection />
      <SpeakersSection />
      <Sponsors />
    </>
  );
};

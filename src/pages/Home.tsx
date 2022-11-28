import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Sponsors from "../components/home/Sponsors";
import { IntroSection } from "../components/IntroSection";
import SpeakersSection from "../components/speakersSection/speakersSection";
import HeroSection from "../components/heroSection/heroSection";
import AgendaSection from "../components/agenda/agenda";
import { GetWebinars } from "../services/react-query/webinar/useWebinar";

export const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const webinarDetails = GetWebinars();

  if (webinarDetails.isSuccess) {
    for (const webinar of webinarDetails.data) {
      const happeningOn = new Date(webinar.date);
      const currentDate = new Date();

      const hourspassed = Math.floor(
        (happeningOn.getTime() - currentDate.getTime()) / 1000 / (60 * 60)
      );

      if (hourspassed == -1 || hourspassed == -2) {
        navigate("/webinar");
      }
    }
  }

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

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

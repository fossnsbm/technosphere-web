import Footer from "../components/home/Footer"
import Sponsors from "../components/home/Sponsors";
import { IntroSection } from "../components/IntroSection";
import SpeakersSection from "../components/speakersSection/speakersSection";
import HeroSection from "../components/heroSection/heroSection";
import AgendaSection from "../components/agenda/agenda";


export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <AgendaSection/>
      <SpeakersSection />
      <Sponsors />
    </>
  );
};

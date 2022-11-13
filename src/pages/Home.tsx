import Footer from "../components/home/Footer"
import Sponsors from "../components/home/Sponsors";
import { IntroSection } from "../components/IntroSection";
import SpeakersSection from "../components/speakersSection/speakersSection";
import HeroSection from "../components/heroSection/heroSection";


export const HomePage = () => {
  return (
    <>
      <Sponsors />
      <Footer />
      <HeroSection />
      <IntroSection />
      <SpeakersSection />
    </>
  );
};

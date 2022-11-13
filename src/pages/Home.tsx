import { IntroSection } from "../components/IntroSection";
import SpeakersSection from "../components/speakersSection/speakersSection";
import HeroSection from "../components/heroSection/heroSection";


export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <SpeakersSection/>
    </>
  );
};

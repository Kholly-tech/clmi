import HeroSection from "../components/home/HeroSection";
import LifeToJesus from "../components/home/LifeToJesus";
import Locate from "../components/home/Locate";
import UpcomingPrograms from "../components/home/UpcomingPrograms";
import WhatWeStandFor from "../components/home/WhatWeStandFor";
import { constants } from "../utils/constants";

const Home = () => {
  return (
    <div className="font-serif">
      {/* Hero Section */}
      <HeroSection />

      {/* About Info */}
      <div className="max-w-6xl mx-auto mt-8 md:mt-102lg:mt-20 space-y-7 text-center">
        <h3 className="font-semibold text-xl md:text-3xl max-w-4xl mx-auto">
          {constants.homeTexts.text1}
        </h3>
        <h5 className="text-lg md:text-2xl font-medium">
          {constants.homeTexts.text2}
        </h5>
      </div>

      {/* What We Stand For */}
      <WhatWeStandFor />

      {/* Upcoming Programs */}
      <UpcomingPrograms />

      {/* Give Life to Christ */}
      <LifeToJesus />

      {/* Locate Comfort life Mission  */}
      <Locate />
    </div>
  );
};

export default Home;

import HeroSection from "../components/home/HeroSection";
import LifeToJesus from "../components/home/LifeToJesus";
import UpcomingPrograms from "../components/home/UpcomingPrograms";
import WhatWeStandFor from "../components/home/WhatWeStandFor";
import {constants} from '../utils/constants';


const Home = () => {
  return (
    <div className="font-serif">
      {/* Hero Section */}
      <HeroSection />

      {/* About Info */}
      <div className="max-w-6xl mx-auto mt-20 space-y-7 text-center">
        <h3 className="font-semibold text-3xl max-w-4xl mx-auto">
          {constants.homeTexts.text1}
        </h3>
        <h5 className="text-2xl font-light">{constants.homeTexts.text2}</h5>
      </div>

      {/* What We Stand For */}
      <WhatWeStandFor />

      {/* Upcoming Programs */}
      <UpcomingPrograms />

      {/* Give Life to Christ */}
      <LifeToJesus />
    </div>
  );
}

export default Home
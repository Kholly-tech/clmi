import Founder from "../components/about/Founder";
import HeroSection from "../components/about/HeroSection";
import Ministries from "../components/about/Ministries";
import Testimonies from "../components/about/Testimonies";
import Vision from "../components/about/Vision";
import Locate from "../components/home/Locate";
import image from '../assets/images/CLMI/FB_IMG_1759086089147.jpg'

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Vision & Mission */}
      <Vision />

      {/* Founder */}
      <Founder />

      {/* Ministries  */}
      <Ministries />

      {/* Testimonies */}
      <Testimonies />

      {/* Watch livestream */}
      <div className="my-16 px-4 sm:px-8 md:px-16 lg:px-24 mx-auto">
        <img src={image} alt="image" className="w-full  mx-auto h-32 rounded-xl object-cover" />
      </div>

      {/* Location */}
      <Locate />
    </div>
  );
};

export default About;

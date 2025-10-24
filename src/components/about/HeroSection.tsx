import { motion } from "framer-motion";
import heroImage from "../../assets/images/CLMI/aboutHero1.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section
      className="
  relative w-full 
  min-h-[60vh] 
  sm:min-h-[80vh] 
  md:min-h-[calc(100vh-120px)] 
  lg:min-h-[calc(100vh-120px)] 
  flex items-center justify-center overflow-hidden
"
    >
      <img
        src={heroImage}
        alt="Hero Image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-start z-10">
        <div className="px-8 md:px-16 lg:px-30 max-w-4xl lg:max-w-5xl gap-4 flex-col text-start">
          <div className="transform transition-all duration-1000 ease-out">
            <h3 className="text-white font-extrabold text-xl sm:text-2xl md:text-2xl lg:text-3xl">
              ABOUT
            </h3>
            <h1 className="text-white font-extrabold text-xl sm:text-3xl md:text-3xl lg:text-5xl mb-4 tracking-wider leading-tight relative animate-fade-in-up">
              Comfort Life Mission{" "}
              <span className="relative inline-block">
                <span className="relative text-secondary z-10">
                  International
                </span>
                {/* Responsive Animated Red Oval */}
              </span>
            </h1>
          </div>

          {/* Animated Button */}
          <div className="mt-8 sm:mt-14 md:text-lg flex gap-4">
            <div className="animate-fade-in-up animation-delay-600">
              <motion.button
                initial={{ scale: 0 }}
                whileInView={{
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                    delay: 0.5,
                  },
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white py-2 md:py-5 px-4 md:px-16 font-semibold rounded-full mt-2 cursor-pointer"
                onClick={() => navigate("/about")}
              >
                Explore
              </motion.button>
            </div>
            <div className="animate-fade-in-up animation-delay-600">
              <motion.button
                initial={{ scale: 0 }}
                whileInView={{
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                    delay: 0.5,
                  },
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary text-primary py-2 md:py-5 px-4 md:px-16 font-semibold rounded-full mt-2 cursor-pointer"
                onClick={() => navigate("/livestreams")}
              >
                View Livestreams
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

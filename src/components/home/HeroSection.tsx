import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LineAnimate from "./LineAnimate";
import heroImage1 from "../../assets/images/CLMI/hero11.jpg";
import heroImage2 from "../../assets/images/CLMI/hero2.jpg";
import heroImage3 from "../../assets/images/CLMI/hero3.jpg";
import heroImage4 from "../../assets/images/CLMI/hero4.jpg";
import heroImage5 from "../../assets/images/CLMI/hero5.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const heroImages = [
    heroImage1,
    heroImage2,
    heroImage3,
    heroImage4,
    heroImage5,
  ];

  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto-slide images every 5 seconds
    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [heroImages.length]);

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  //   const nextSlide = () => {
  //     setCurrentImageIndex(
  //       currentImageIndex === heroImages.length - 1 ? 0 : currentImageIndex + 1
  //     );
  //   };

  //   const prevSlide = () => {
  //     setCurrentImageIndex(
  //       currentImageIndex === 0 ? heroImages.length - 1 : currentImageIndex - 1
  //     );
  //   };

  return (
    <section
      className="relative w-full 
    min-h-[60vh] 
    sm:min-h-[80vh] 
    md:min-h-[calc(100vh-120px)] 
    lg:min-h-[calc(100vh-100px)] 
    flex  items-center justify-center overflow-hidden"
    >
      {/* Image Slider Container */}
      <div className="absolute inset-0 w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              index === currentImageIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          >
            <img
              src={image}
              alt={`Hero slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/20"></div>
            {/* // bg-gradient-to-r from-black/30 via-black/20 to-black/10 */}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute hidden md:block left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button> */}

      {/* <button
        onClick={nextSlide}
        className="absolute hidden md:block right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button> */}

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-red-500 scale-125 shadow-lg shadow-red-500/50"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-start z-10">
        <div className="px-8 md:px-16 lg:px-30 max-w-4xl lg:max-w-5xl gap-4 flex-col text-start">
          {/* Animated Title */}
          <div className="transform transition-all duration-1000 ease-out">
            <h3 className="text-white font-extrabold text-xl sm:text-2xl md:text-2xl lg:text-3xl">
              WELCOME
            </h3>
            <h1 className="text-white font-extrabold text-xl sm:text-3xl md:text-3xl lg:text-5xl mb-4 tracking-wider leading-tight relative animate-fade-in-up">
              Comfort Life Mission{" "}
              <span className="relative inline-block">
                <span className="relative text-secondary z-10">
                  International
                </span>
                {/* Responsive Animated Red Oval */}
                <LineAnimate animate={animate} />
              </span>
            </h1>
          </div>

          {/* Animated Subtitle */}
          <h2 className="text-white/90 font-normal sm:text-lg md:text-xl lg:text-2xl tracking-wide animate-fade-in-up animation-delay-300"></h2>

          {/* Animated Button */}
          <div className="mt-2 sm:mt-6 flex gap-4">
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
                className="bg-primary text-white py-5 px-16 font-semibold text-lg rounded-full mt-2 cursor-pointer"
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
                className="bg-secondary text-primary py-5 px-16 font-semibold text-lg rounded-full mt-2 cursor-pointer"
                onClick={() => navigate("/livestreams")}
              >
                View Livestreams
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div
          className="h-full bg-red-500 transition-all duration-300 ease-linear"
          style={{
            width: `${((currentImageIndex + 1) / heroImages.length) * 100}%`,
          }}
        ></div>
      </div>
    </section>
  );
};

export default HeroSection;

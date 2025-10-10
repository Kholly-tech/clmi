import { useEffect, useState } from "react";

const LineAnimate = ({ animate }: { animate: boolean }) => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (animate) {
      // Force re-render to restart animation when component becomes visible
      setAnimationKey((prev) => prev + 1);
    }
  }, []);

  // CSS styles for the animation
  const animationStyles = `
    @keyframes drawEllipse {
      0% {
        stroke-dashoffset: 600;
      }
      100% {
        stroke-dashoffset: 0;
      }
    }
    
    .animated-ellipse {
      animation: drawEllipse 3s ease-in-out infinite;
    }
    
    /* Tablet */
    @keyframes drawEllipseTablet {
      0% {
        stroke-dashoffset: 700;
      }
      100% {
        stroke-dashoffset: 0;
      }
    }
    
    .animated-ellipse-tablet {
      animation: drawEllipseTablet 3s ease-in-out infinite;
    }
    
    /* Desktop */
    @keyframes drawEllipseDesktop {
      0% {
        stroke-dashoffset: 800;
      }
      100% {
        stroke-dashoffset: 0;
      }
    }
    
    .animated-ellipse-desktop {
      animation: drawEllipseDesktop 3s ease-in-out infinite;
    }
  `;

  return (
    <>
      <style>{animationStyles}</style>

      {/* Mobile Version (default) - sm and below */}
      <svg
        key={`mobile-${animationKey}`}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none sm:hidden"
        width="200"
        height="80"
        viewBox="0 0 130 80"
        style={{
          width: "calc(100% + 80px)",
          height: "calc(100% + 20px)",
        }}
      >
        <ellipse
          cx="70"
          cy="40"
          rx="85"
          ry="30"
          fill="none"
          stroke="#073260"
          strokeWidth="4"
          strokeDasharray="600"
          className="animated-ellipse"
          style={{
            filter: "drop-shadow(0 0 8px rgba(239, 68, 68, 0.6))",
          }}
        />
      </svg>

      {/* Medium Screens (Tablet) - sm to lg */}
      <svg
        key={`tablet-${animationKey}`}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden sm:block lg:hidden"
        width="250"
        height="90"
        viewBox="0 0 160 90"
        style={{
          width: "calc(100% + 60px)",
          height: "calc(100% + 25px)",
        }}
      >
        <ellipse
          cx="80"
          cy="45"
          rx="110"
          ry="35"
          fill="none"
          stroke="#073260"
          strokeWidth="5"
          strokeDasharray="700"
          className="animated-ellipse-tablet"
          style={{
            filter: "drop-shadow(0 0 10px rgba(239, 68, 68, 0.7))",
          }}
        />
      </svg>

      {/* Large Screens (Desktop) - lg and above */}
      <svg
        key={`desktop-${animationKey}`}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden lg:block"
        width="300"
        height="100"
        viewBox="0 0 100 100"
        style={{
          width: "calc(100% + 40px)",
          height: "calc(100% + 30px)",
        }}
      >
        <ellipse
          cx="50"
          cy="50"
          rx="120"
          ry="40"
          fill="none"
          stroke="#073260"
          strokeWidth="6"
          strokeDasharray="800"
          className="animated-ellipse-desktop"
          style={{
            filter: "drop-shadow(0 0 12px rgba(239, 68, 68, 0.8))",
          }}
        />
      </svg>
    </>
  );
};

export default LineAnimate;

import { useState, useEffect } from "react";

import WhiteLogoIcon from "./logoIcon";

const PARTICLE_COUNT = 12;
const DOT_COUNT = 8;

const BlackLuxuryLoader = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentDot, setCurrentDot] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 2;
      });
    }, 120);

    const dotInterval = setInterval(() => {
      setCurrentDot((prev) => (prev + 1) % DOT_COUNT);
    }, 150);

    return () => {
      clearInterval(interval);
      clearInterval(dotInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      {/* Dark background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.06),transparent_50%)]" />
      </div>

      {/* Minimal floating particles */}
      <div className="absolute inset-0">
        {[...Array(PARTICLE_COUNT)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-gray-500 rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animation: `gentleFloat ${
                8 + Math.random() * 4
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.3 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative text-center">
        {/* Clean logo container */}
        <div className="relative w-20 h-20 mx-auto mb-12">
          {/* Subtle shadow ring */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl" />

          {/* Main logo container */}
          <div className="absolute inset-0.5 bg-gray-900 rounded-2xl flex items-center justify-center shadow-inner border border-gray-700">
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center p-2">
              {/* Fallback diamond icon since we don't have the image */}
              <div className="w-full h-full flex items-center justify-center">
                <WhiteLogoIcon width={"48px"} height={"48px"} />
              </div>
            </div>
          </div>

          {/* Subtle pulsing effect */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-amber-500/10 rounded-2xl"
            style={{
              animation: "subtlePulse 4s ease-in-out infinite",
            }}
          />
        </div>

        {/* Clean company name */}
        <div className="mb-8">
          <h1 className="text-3xl font-light tracking-wide text-gray-100 mb-3">
           InstaWebs
          </h1>

          {/* Minimal divider */}
          <div className="w-16 h-px bg-gray-600 mx-auto mb-3" />

         
        </div>

        {/* Apple-style loading dots */}
        <div className="flex justify-center items-center space-x-2 mb-8">
          {[...Array(DOT_COUNT)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentDot
                  ? "bg-gray-200 scale-125 shadow-sm shadow-gray-200/30"
                  : i === (currentDot - 1 + DOT_COUNT) % DOT_COUNT
                  ? "bg-gray-400 scale-110"
                  : "bg-gray-700 scale-100"
              }`}
              style={{
                transitionDelay: `${i * 50}ms`,
              }}
            />
          ))}
        </div>

        {/* Minimal progress bar (hidden by default, like Apple) */}
        <div className="w-64 mx-auto mb-6 opacity-0">
          <div className="h-0.5 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gray-400 transition-all duration-500 ease-out rounded-full"
              style={{
                width: `${loadingProgress}%`,
              }}
            />
          </div>
        </div>

        {/* Simple tagline */}
        <p className="text-gray-500 text-xs font-light tracking-wide">
          Precision • Innovation • Excellence
        </p>
      </div>

      {/* Custom CSS animations */}
      <style>{`
        @keyframes gentleFloat {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-10px) translateX(5px); 
            opacity: 0.6;
          }
        }
        
        @keyframes subtlePulse {
          0%, 100% { 
            opacity: 0.2;
            transform: scale(1);
          }
          50% { 
            opacity: 0.4;
            transform: scale(1.02);
          }
        }
      `}</style>
    </div>
  );
};

export default BlackLuxuryLoader;
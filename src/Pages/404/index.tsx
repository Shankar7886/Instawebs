import React from "react";
import { Home } from "lucide-react";
import WhiteLogoIcon from "../../assets/logoIcon";


const LuxuryNotFoundPage: React.FC = () => {
  const handleHomeClick = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 text-white">
      {/* Company Logo */}
      <div className="mb-16">
        <div className="w-20 h-20 mb-4 mx-auto flex items-center justify-center rounded-full bg-white/10 p-4 shadow-lg">
          <WhiteLogoIcon/>
        </div>
        <div className="text-center">
          <h1 className="text-xl font-semibold tracking-wide text-yellow-400">
            Instawebs
          </h1>
        </div>
      </div>

      {/* 404 Content */}
      <div className="text-center max-w-md">
        <h3 className="text-4xl font-light text-white mb-4 tracking-wide">
          Page Not Found
        </h3>

        <p className="text-lg text-gray-400 mb-12 leading-relaxed font-light">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Home Button */}
        <button
          onClick={handleHomeClick}
          className="inline-flex items-center gap-2 px-8 py-3  text-white rounded-full font-medium  transition-all duration-200 active:scale-95 shadow-lg"
          style={{border:"1px solid grey"}}
        >
          <Home className="w-4 h-4" />
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default LuxuryNotFoundPage;

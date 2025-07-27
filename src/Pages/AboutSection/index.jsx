import React from "react";
import AboutHeroSection from "./firstSection";
import AboutCompanySection from "./secondSection";
import TeamSection from "./thirdSection";
import TechCarousel from "./fourthSection";

const AboutPage = () => {
  return (
    <>
      <AboutHeroSection />
      <TeamSection />
      <AboutCompanySection />

      <TechCarousel />
    </>
  );
};

export default AboutPage;

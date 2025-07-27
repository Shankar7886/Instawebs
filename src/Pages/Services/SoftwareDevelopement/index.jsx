import React from "react";
import SoftwareHeroSection from "./firstSection";
import ERPFeatures from "./SecondSection";
import DMSFeatures from "./thirdSection";
import POSFeatures from "./fourthSection";
import ExpertiseSection from "./fifthSection";

const SoftwarDevelopmentPage = () => {
  return (
    <>
      <SoftwareHeroSection />
      <ExpertiseSection/>
      <ERPFeatures/>
      <DMSFeatures/>
      <POSFeatures/>
    </>
  );
};

export default SoftwarDevelopmentPage;

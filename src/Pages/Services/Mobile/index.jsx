import React from "react";
import MobileHero from "./firstSection";
import AppTypesSection from "./secondSection";
import MobileAppProcessSection from "./thirdSection";
import TravelAppFeatures from "./fourthSection";


const MobileAppPage = () => {
  return (
    <>
    <MobileHero/>
    <AppTypesSection/>
    <MobileAppProcessSection/>
    <TravelAppFeatures/>
    </>
  );
};

export default MobileAppPage;

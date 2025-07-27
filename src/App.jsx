import LuxuryNotFoundPage from "./Pages/404";
import AboutPage from "./Pages/AboutSection";
import ModernFooter from "./Pages/Footer";
import Header from "./Pages/Header";
import HomePage from "./Pages/Home";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import SoftwarDevelopmentPage from "./Pages/Services/SoftwareDevelopement";
import WebDevelopmentPage from "./Pages/Services/WebDevelopment";
import MobileAppPage from "./Pages/Services/Mobile";
import BlogPage from "./Pages/Blog";
import DefaultBlogContent from "./Pages/Blog/default";
import FirstBlog from "./Pages/Blog/one/index";
import SecondBlog from "./Pages/Blog/two";
import ThirdBlog from "./Pages/Blog/three";
import ContactUs from "./Pages/Contact/contactForm";
import ScrollToTop from "./assets/scroll";
import BlackLuxuryLoader from "./assets/loader";
import { useState,useEffect } from "react";

function RouteLoaderWrapper() {
   const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700); 

    return () => clearTimeout(timer);
  }, [location]);
  return (
    <>
    {loading && <BlackLuxuryLoader />}
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomePage />} />
      <Route path="about-us" element={<AboutPage />} />
      <Route path="software-development" element={<SoftwarDevelopmentPage />} />
      <Route path="web-development" element={<WebDevelopmentPage />} />
      <Route path="mobile-app" element={<MobileAppPage />} />
      <Route path="blogs" element={<BlogPage />}>
        <Route index element={<DefaultBlogContent />} />
        <Route path="1" element={<FirstBlog />} />
        <Route path="2" element={<SecondBlog />} />
        <Route path="3" element={<ThirdBlog />} />
      </Route>
      <Route path="contact" element={<ContactUs />} />
      <Route path="*" element={<LuxuryNotFoundPage />} />
    </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <RouteLoaderWrapper />
      <ModernFooter />
    </BrowserRouter>
  );
}

export default App;

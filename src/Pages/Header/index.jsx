import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Globe,
  Menu,
  Phone,
  X,
  Home,
  User,
  Settings,
  DollarSign,
  Lightbulb,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import WhiteLogoIcon from "../../assets/logoIcon";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setMobile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Define colors for different routes
  const getRouteColor = () => {
    const path = location.pathname;
    switch (path) {
      case "/":
        return "amber"; // Home - amber
      case "/about-us":
        return "blue"; // About - blue
      case "/software-development":
        return "green"; // Software Development - green
      case "/web-development":
        return "purple"; // Web Development - purple
      case "/mobile-app":
        return "red"; // Mobile App - red
      case "/blogs":
      case "/blogs/1":
      case "/blogs/2":
      case "/blogs/3":
        return "cyan"; // Blog - cyan
      case "/contact":
        return "pink"; // Contact - pink
      default:
        return "amber"; // Default - amber
    }
  };

  const currentColor = getRouteColor();

  // Color classes mapping
  const colorClasses = {
    amber: {
      active: "text-amber-400",
      button: "text-amber-400 border-amber-400/50 shadow-[0_0_15px_rgba(252,165,16,0.5)] hover:bg-amber-400",
      mobileButton: "text-amber-400 border-amber-400/80 shadow-[0_0_15px_rgba(252,165,16,0.5)]",
      logo: "text-amber-400"
    },
    blue: {
      active: "text-blue-400",
      button: "text-blue-400 border-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:bg-blue-400",
      mobileButton: "text-blue-400 border-blue-400/80 shadow-[0_0_15px_rgba(59,130,246,0.5)]",
      logo: "text-blue-400"
    },
    green: {
      active: "text-green-400",
      button: "text-green-400 border-green-400/50 shadow-[0_0_15px_rgba(34,197,94,0.5)] hover:bg-green-400",
      mobileButton: "text-green-400 border-green-400/80 shadow-[0_0_15px_rgba(34,197,94,0.5)]",
      logo: "text-green-400"
    },
    purple: {
      active: "text-purple-400",
      button: "text-purple-400 border-purple-400/50 shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:bg-purple-400",
      mobileButton: "text-purple-400 border-purple-400/80 shadow-[0_0_15px_rgba(168,85,247,0.5)]",
      logo: "text-purple-400"
    },
    red: {
      active: "text-red-400",
      button: "text-red-400 border-red-400/50 shadow-[0_0_15px_rgba(248,113,113,0.5)] hover:bg-red-400",
      mobileButton: "text-red-400 border-red-400/80 shadow-[0_0_15px_rgba(248,113,113,0.5)]",
      logo: "text-red-400"
    },
    cyan: {
      active: "text-cyan-400",
      button: "text-cyan-400 border-cyan-400/50 shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:bg-cyan-400",
      mobileButton: "text-cyan-400 border-cyan-400/80 shadow-[0_0_15px_rgba(34,211,238,0.5)]",
      logo: "text-cyan-400"
    },
    pink: {
      active: "text-pink-400",
      button: "text-pink-400 border-pink-400/50 shadow-[0_0_15px_rgba(244,114,182,0.5)] hover:bg-pink-400",
      mobileButton: "text-pink-400 border-pink-400/80 shadow-[0_0_15px_rgba(244,114,182,0.5)]",
      logo: "text-pink-400"
    }
  };

  // Update active tab based on current route
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActiveTab("Home");
    } else if (path === "/about-us") {
      setActiveTab("About");
    } else if (path.includes("/software-development") || path.includes("/web-development") || path.includes("/mobile-app")) {
      setActiveTab("Services");
    } else if (path.includes("/blogs")) {
      setActiveTab("Blog");
    } else if (path === "/contact") {
      setActiveTab(""); // No tab should be active for contact page
    } else {
      setActiveTab(""); // No tab active for other pages like 404
    }
  }, [location.pathname]);

  // Close dropdowns when clicking outside of them
  useEffect(() => {
    const handleClickOutside = () => {
      setServicesOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const navItems = [
    { id: "Home", name: "Home", href: "/", hasLogo: true, icon: Home },
    { id: "About", name: "About", href: "/about-us", icon: User },
    {
      id: "Services",
      name: "Services",
      href: "#",
      hasDropdown: true,
      icon: Settings,
      dropdownItems: [
        { name: "Software Development", href: "/software-development" },
        { name: "Web Development", href: "/web-development" },
        { name: "Mobile Apps", href: "/mobile-app" }
      ],
    },
    { id: "Blog", name: "Blog", href: "/blogs", icon: Lightbulb },
  ];

  return (
    <>
      {/* Main Header for Desktop */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        onMouseDown={(e) => e.stopPropagation()}
        className="fixed top-8  -translate-x-1/2 z-[60]"
        style={{ left: "37%", display: !isMobile ? "flex" : "none" }}
      >
        <motion.nav
          layout
          className="relative flex items-center rounded-full px-3 py-1.5 bg-black/30 backdrop-blur-lg border border-white/10 shadow-xl"
        >
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.id} className="relative">
                  <motion.button
                    onClick={() => {
                      setActiveTab(item.id);
                      if (item.hasDropdown) {
                        setServicesOpen((prev) => !prev);
                      } else {
                        setServicesOpen(false);
                        // Navigate to the page if it's not a dropdown
                        if (item.href && item.href !== "#") {
                          navigate(item.href);
                        }
                      }
                    }}
                    className={`relative px-4 py-2 text-sm transition-colors duration-300 flex items-center gap-x-2 z-10
                      ${
                        activeTab === item.id
                          ? `${colorClasses[currentColor].active} font-semibold`
                          : "text-neutral-400 hover:text-white"
                      }`}
                  >
                    {item.hasLogo}
                    <IconComponent className="w-4 h-4" />
                    <span
                      className={`${
                        activeTab === item.id
                          ? "opacity-100"
                          : "opacity-0 w-0 overflow-hidden"
                      } transition-all duration-300`}
                    >
                      {item.name}
                    </span>
                    {item.hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </motion.button>

                  {/* Animated background pill */}
                  {activeTab === item.id && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-neutral-800/80 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                    />
                  )}

                  {/* Services Dropdown */}
                  <AnimatePresence>
                    {item.hasDropdown && servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full  -translate-x-1/2 mt-2 w-48 bg-black  rounded-xl shadow-xl overflow-hidden border border-white/10"
                      >
                        <div className="py-2">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                            >
                              {dropdownItem.name}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Contact Us Button */}
          <div className="hidden md:flex items-center ml-3">
            <motion.button
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              onClick={() => navigate("/contact")}
              className={`flex items-center gap-x-2 px-4 py-2 text-sm font-semibold bg-black/50 rounded-full hover:text-neutral-900 transition-all duration-300 ${colorClasses[currentColor].button}`}
            >
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </motion.button>
          </div>

          {/* Mobile Logo and Menu Button */}
        </motion.nav>
      </motion.header>

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-4 right-4 z-[60]"
        style={{ display: isMobile ? "flex" : "none" }}
      >
        <motion.nav
          layout
          className="relative flex items-center rounded-full px-3 py-1.5 bg-black/30 backdrop-blur-lg border border-white/10 shadow-xl"
        >
          <div className="md:hidden flex items-center justify-center">
            <button
              onClick={() => {
                setMobileMenuOpen(true);
              }}
              className="text-neutral-300 hover:text-white p-1 rounded-full transition-colors duration-200"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </motion.nav>
      </motion.header>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-[70] md:hidden"
          >
            <div className="flex justify-between items-center p-4 border-b border-neutral-800">
              <div className="flex items-center gap-x-2">
               <WhiteLogoIcon height={"40px"} width={"40px"} />
                <span className={`font-semibold ${colorClasses[currentColor].logo}`}>Instawebs</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-300 hover:text-white"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center h-[calc(100%-80px)]">
              <ul className="flex flex-col items-center gap-y-8">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <li key={item.id}>
                      {item.hasDropdown ? (
                        // For Services - show dropdown items instead
                        <div className="flex flex-col items-center gap-y-4">
                          <div className={`flex items-center gap-x-3 text-2xl font-semibold ${colorClasses[currentColor].active}`}>
                            <IconComponent className="w-6 h-6" />
                            <span>{item.name}</span>
                          </div>
                          <div className="flex flex-col items-center gap-y-3">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <button
                                key={dropdownItem.name}
                                onClick={() => {
                                  navigate(dropdownItem.href);
                                  setMobileMenuOpen(false);
                                }}
                                className="text-lg text-neutral-300 hover:text-white transition-colors"
                              >
                                {dropdownItem.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <button
                          onClick={() => {
                            setActiveTab(item.id);
                            setMobileMenuOpen(false);
                            if (item.href && item.href !== "#") {
                              navigate(item.href);
                            }
                          }}
                          className={`flex items-center gap-x-3 text-2xl font-semibold transition-colors
                            ${
                              activeTab === item.id
                                ? colorClasses[currentColor].active
                                : `text-neutral-300 hover:${colorClasses[currentColor].active}`
                            }`}
                        >
                          <IconComponent className="w-6 h-6" />
                          <span>{item.name}</span>
                        </button>
                      )}
                    </li>
                  );
                })}
                <li>
                  <button 
                    onClick={() => {
                      navigate("/contact");
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-x-2 mt-6 px-5 py-3 text-lg font-semibold bg-neutral-900 border rounded-full ${colorClasses[currentColor].mobileButton}`}
                  >
                    <Phone className="w-5 h-5" />
                    <span>Contact Us</span>
                  </button>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
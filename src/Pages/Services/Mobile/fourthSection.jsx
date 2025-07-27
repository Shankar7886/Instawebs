import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = {
  user: [
    "User registration on platform",
    "Hotel reservation",
    "Hotels listing",
    "Hotels detail page",
    "Flights listing with details",
    "Flight detail page",
    "Search tours by destination",
    "Tour detail page",
    "Payment gateway integration",
    "Search flights by criteria",
    "Home screen links to booking modules",
  ],
  agent: [
    "Agent login with admin credentials",
    "Update profile (photo, company name, etc.)",
    "Add services, cost, duration, offers, and deals",
    "Manage bookings (completed, pending, confirmed)",
    "View complete payment history",
    "Subscribe to platform usage plan",
  ],
  admin: [
    "Super admin login",
    "Add/Edit/Delete user info",
    "Add/Edit/Delete categories",
    "Add/Edit/Delete subscription plans",
    "View full booking history",
    "Booking management",
    "Register new agents",
    "Manage agent data (Add/Edit/Delete)",
  ]
};

export default function TravelAppFeatures() {
  const [activeTab, setActiveTab] = useState("user");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: i * 0.03,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    }),
    exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center mb-4">
            <div className="w-0.5 h-8 bg-amber-500 mr-4"></div>
            <span className="text-xs font-medium tracking-wider text-gray-400 uppercase">
              Application Roles
            </span>
          </div>
          <h1 className="text-4xl font-light mb-3 tracking-tight text-white">
            Role-Based <span className="text-amber-500">Features</span>
          </h1>
          <p className="text-sm text-gray-400 max-w-xl leading-relaxed">
            A powerful, secure, and scalable system tailored for each user group.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex bg-gray-900 rounded-lg p-0.5 border border-gray-700">
            {[
              { key: "user", label: "User Panel" },
              { key: "agent", label: "Agent Panel" },
              { key: "admin", label: "Admin Panel" },
            ].map((tab) => (
              <motion.button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.key
                    ? "text-white bg-gray-800 shadow-sm"
                    : "text-gray-400 hover:text-white"
                }`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {tab.label}
                {activeTab === tab.key && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gray-800 rounded-md shadow-sm border border-amber-500/40"
                    transition={{ type: "spring", bounce: 0.1, duration: 0.3 }}
                    style={{ zIndex: -1 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Feature Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {features[activeTab ].map((feature, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                custom={index}
                variants={cardVariants}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group"
              >
                <div className="relative bg-gray-900 rounded-xl p-5 border border-gray-700 hover:border-amber-400 hover:bg-gray-800 transition-all duration-300 h-full">
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-mono text-gray-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <motion.div
                    className="w-1.5 h-1.5 bg-amber-400 rounded-full mb-4"
                    animate={{
                      backgroundColor: hoveredIndex === index ? "#f59e0b" : "#fbbf24",
                      scale: hoveredIndex === index ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  <h3 className="text-white text-sm font-medium leading-snug mb-4 group-hover:text-amber-400 transition-colors duration-300">
                    {feature}
                  </h3>
                  <div className="w-full h-px bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "35%" }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.03,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center mt-12"
        >
          <div className="flex items-center space-x-4 text-xs text-gray-500 tracking-wider">
            <span>MODULAR SYSTEM</span>
            <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
            <span>ROLE-BASED ACCESS</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

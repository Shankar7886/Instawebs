import { Facebook, Twitter, Instagram, Linkedin, ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import WhiteLogoIcon from "../../assets/logoIcon";

export default function ModernFooter() {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const socialIcons = [
    { icon: Facebook, color: "hover:bg-blue-600", name: "Facebook" },
    { icon: Twitter, color: "hover:bg-blue-400", name: "Twitter" },
    { icon: Instagram, color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500", name: "Instagram" },
    { icon: Linkedin, color: "hover:bg-blue-700", name: "LinkedIn" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-300 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #ffffff 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, #ffffff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 animate-pulse" />

      <motion.div 
        className="relative z-10 py-16 px-6 md:px-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Logo & About */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
               <WhiteLogoIcon width={"100px"} height={"100px"} />
              </motion.div>
              <p className="text-gray-400 leading-relaxed">
                A modern solution for managing your business with ease and efficiency. 
                Empowering teams worldwide.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>Instawebscontact@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span>+91 9667442617</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>Moti Nagar , New Delhi </span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-white mb-6 relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500" />
              </h3>
              <ul className="space-y-3">
                {["Home", "Features", "Pricing", "Contact"].map((link, index) => (
                  <motion.li 
                    key={link}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] relative group"
                    >
                      {link}
                      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold text-white mb-6 relative">
                Resources
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
              </h3>
              <ul className="space-y-3">
                {["Blog", "Documentation", "Support", "API"].map((link, index) => (
                  <motion.li 
                    key={link}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] relative group"
                    >
                      {link}
                      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social Media & Newsletter */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-6 relative">
                  Connect With Us
                  <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500" />
                </h3>
                <div className="flex flex-wrap gap-3">
                  {socialIcons.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href="#"
                      className={`p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 transition-all duration-300 ${social.color} group relative overflow-hidden`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onHoverStart={() => setHoveredSocial(index)}
                      onHoverEnd={() => setHoveredSocial(null)}
                    >
                      <social.icon className="w-5 h-5 relative z-10 transition-colors duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
             
            </motion.div>
          </div>

          {/* Divider with gradient */}
          <motion.div 
            className="relative mb-8"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700 to-transparent h-px" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent h-px animate-pulse" />
          </motion.div>

          {/* Bottom Section */}
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center gap-4"
            variants={itemVariants}
          >
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} MyPlatform. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-4 mt-2 text-xs text-gray-600">
                <a href="#" className="hover:text-gray-400 transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-gray-400 transition-colors duration-300">Terms of Service</a>
                <a href="#" className="hover:text-gray-400 transition-colors duration-300">Cookie Policy</a>
              </div>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="p-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-gray-700/50 rounded-full text-gray-400 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
import { Instagram, Github, ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import useGoToContactPage from "../Contact/contactFn";
import WhiteLogoIcon from "../../assets/logoIcon"

const WhiteLogoIconFake = ({ width, height }) => (
  <motion.div 
    className="bg-white rounded-sm flex items-center justify-center text-black font-light text-xl tracking-[0.2em]"
    style={{ width, height }}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
  >
    
    INSTAWEBS
  </motion.div>
);

export default function PremiumFooter() {
  const goContact = useGoToContactPage()
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialIcons = [
    { icon: Instagram, name: "Instagram" },
    { icon: Github, name: "GitHub" }
  ];

  const importantLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    { name: "Blog", path: "/blogs" },
    { name: "Contact", path: "/contact" }
  ];

  const contactInfo = [
    { icon: Mail, text: "Instawebscontact@gmail.com", label: "Email" },
    { icon: Phone, text: "+91 96674 42617", label: "Phone" },
    { icon: MapPin, text: "New Delhi, India", label: "Location" }
  ];

  return (
    <footer className="bg-zinc-950 text-zinc-300 relative z-50" style={{ pointerEvents: 'auto' }}>
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      </div>

              <div className="relative z-10" style={{ pointerEvents: 'auto' }}>
        {/* Main content */}
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Brand section */}
            <motion.div 
              className="lg:col-span-5 space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <WhiteLogoIconFake width="160px" height="48px" />
                
                <motion.p 
                  className="text-zinc-400 text-lg leading-relaxed font-light max-w-md"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  viewport={{ once: true }}
                >
                  We craft digital experiences that blend innovation with timeless design principles, 
                  creating solutions that stand the test of time.
                </motion.p>
              </div>

              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="group flex items-center gap-4 cursor-pointer"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <div className="w-10 h-10 border border-zinc-800 rounded-sm flex items-center justify-center group-hover:border-zinc-600 transition-colors duration-500">
                      <item.icon className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors duration-500" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-wider font-light mb-1">
                        {item.label}
                      </p>
                      <p className="text-zinc-300 font-light tracking-wide group-hover:text-white transition-colors duration-500">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Navigation */}
            <motion.div 
              className="lg:col-span-3 space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-white text-sm uppercase tracking-[0.2em] font-light mb-8">
                  Navigation
                </h3>
                
                <nav className="space-y-4">
                  {importantLinks.map((link, index) => (
                    <motion.div 
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.5 + index * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      viewport={{ once: true }}
                    >
                      <motion.a 
                        href={link.path} 
                        className="text-zinc-400 hover:text-white font-light text-base tracking-wide transition-colors duration-500 block py-1 group relative"
                        style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                        whileHover={{ x: 6 }}
                        onMouseEnter={(e) => e.stopPropagation()}
                        onMouseLeave={(e) => e.stopPropagation()}
                        onClick={(e) => {
                          e.stopPropagation();
                          // Add your navigation logic here if needed
                          console.log(`Navigating to ${link.path}`);
                        }}
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      >
                        {link.name}
                        <motion.div 
                          className="absolute bottom-0 left-0 h-px bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                          style={{ width: '100%' }}
                        />
                      </motion.a>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>

            {/* Social & CTA */}
            <motion.div 
              className="lg:col-span-4 space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-white text-sm uppercase tracking-[0.2em] font-light mb-8">
                  Connect
                </h3>
                
                <div className="flex gap-4">
                  {socialIcons.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href="#"
                      className="w-12 h-12 border border-zinc-800 hover:border-zinc-600 rounded-sm flex items-center justify-center group transition-all duration-500"
                      style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                      title={social.name}
                      onMouseEnter={(e) => e.stopPropagation()}
                      onMouseLeave={(e) => e.stopPropagation()}
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log(`Opening ${social.name}`);
                      }}
                      whileHover={{ 
                        y: -2,
                        transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                      }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { 
                          duration: 0.6, 
                          delay: 0.7 + index * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }
                      }}
                      viewport={{ once: true }}
                    >
                      <social.icon className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors duration-500" />
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div 
                className="border border-zinc-800 p-8 space-y-4"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                <h4 className="text-white text-lg font-light tracking-wide">
                  Start Your Project
                </h4>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  Ready to bring your vision to life? Let's discuss how we can help you achieve your goals.
                </p>
                <motion.a 
                  href="/contact"
                  className="inline-flex items-center gap-3 text-white text-sm font-light tracking-wider uppercase hover:gap-4 transition-all duration-500 mt-6 group"
                  style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                  onMouseEnter={(e) => e.stopPropagation()}
                  onMouseLeave={(e) => e.stopPropagation()}
                  onClick={(e) => {
                    e.stopPropagation();
                    goContact()
                  }}
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  Get in Touch
                  <ArrowUp className="w-4 h-4 rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-900">
          <div className="max-w-7xl mx-auto px-8 py-8">
            <motion.div 
              className="flex flex-col sm:flex-row justify-between items-center gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <div className="text-center sm:text-left">
                <p className="text-zinc-500 text-sm font-light tracking-wide">
                  © {new Date().getFullYear()} InstaWebs. All rights reserved.
                </p>
                <div className="flex gap-8 text-xs text-zinc-600 mt-2">
                  <motion.a 
                    href="#" 
                    className="hover:text-zinc-400 transition-colors duration-500"
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.3 }}
                  >
                    Privacy Policy
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="hover:text-zinc-400 transition-colors duration-500"
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.3 }}
                  >
                    Terms of Service
                  </motion.a>
                </div>
              </div>

              <motion.button
                // onClick={scrollToTop}
                className="w-12 h-12 border border-zinc-800 hover:border-zinc-600 rounded-sm flex items-center justify-center group transition-all duration-500"
                style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                title="Back to top"
                onMouseEnter={(e) => e.stopPropagation()}
                onMouseLeave={(e) => e.stopPropagation()}
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToTop();
                }}
                whileHover={{ 
                  y: -3,
                  transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <ArrowUp className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors duration-500" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
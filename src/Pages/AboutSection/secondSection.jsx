import React from "react";
import { motion } from "framer-motion";
import useGoToContactPage  from "../Contact/contactFn"

export default function AboutCompanySection() {
  const goContact = useGoToContactPage();
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated Mesh Gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(120, 200, 255, 0.2) 0%, transparent 50%)
            `
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Particle Field */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Geometric Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,400 Q400,200 800,400 T1600,400"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,600 Q600,300 1200,600 T2400,600"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, delay: 0.5, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center min-h-screen">
        
        {/* LEFT: Text Section - Now Full Width */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="w-full max-w-4xl mx-auto text-center order-1 lg:order-1"
        >
          {/* Floating Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center mb-8"
          >
            <motion.div
              className="w-12 h-px bg-gradient-to-r from-transparent via-white to-transparent mr-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <span className="text-sm font-light tracking-widest text-gray-300 uppercase">
              Software Excellence
            </span>
            <motion.div
              className="w-12 h-px bg-gradient-to-r from-white via-transparent to-transparent ml-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            />
          </motion.div>

          {/* Main Heading */}
        <motion.div className="mb-8">
  <motion.h2
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
    className="text-7xl md:text-8xl lg:text-9xl font-thin tracking-tight leading-none text-white"
  >
    Insta{" "}
    <motion.span
      className="text-gray-400 relative inline-block"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.6 }}
    >
      webs
      <motion.div
        className="absolute -bottom-2 left-0 h-px bg-white"
        initial={{ width: 0 }}
        whileInView={{ width: "60%" }}
        transition={{ duration: 1.5, delay: 1 }}
      />
    </motion.span>
  </motion.h2>
</motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mb-12 max-w-3xl mx-auto"
          >
            <p className="text-xl font-light text-gray-300 leading-relaxed">
              We are a leading software development company dedicated to crafting 
              <span className="text-white font-normal"> innovative solutions</span> that transform businesses. 
              Our team of visionary developers leverages cutting-edge technologies to deliver 
              <span className="text-white font-normal"> exceptional software products</span> that exceed expectations.
            </p>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 max-w-2xl mx-auto"
          >
            {[
              { number: "500+", label: "Projects" },
              { number: "50+", label: "Experts" },
              { number: "99%", label: "Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className="text-4xl font-thin text-white mb-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.button
              className="group relative px-8 py-4 bg-transparent border border-white/30 text-white font-light tracking-wider uppercase text-sm overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={goContact}
            >
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
                
              />
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Discover More
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent" />
    </section>
  );
}
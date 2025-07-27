import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as THREE from "three";
import q from "../../../assets/11.png"
import w from "../../../assets/12.png"
import e from "../../../assets/13.png"

import r from "../../../assets/14.png"

import t from "../../../assets/15.png"

import y from "../../../assets/16.png"
import useGoToContactPage from "../../Contact/contactFn";


const industries = [
  { 
    name: "Medical Stores", 
    desc: "Revolutionary healthcare platforms powered by AI diagnostics and seamless patient care systems", 
    color: "#64FFDA",
    image: q
  },
  { 
    name: "Jewelry Stores", 
    desc: "Exquisite digital showcases with AR try-on experiences and luxury brand storytelling", 
    color: "#FF6B9D",
    image: w
  },
  { 
    name: "Real Estate", 
    desc: "Immersive property experiences with virtual tours and intelligent matching algorithms", 
    color: "#4ECDC4",
    image: e
  },
  { 
    name: "E-commerce", 
    desc: "Next-generation commerce platforms with personalized shopping journeys", 
    color: "#45B7D1",
    image: r
  },
  { 
    name: "Restaurants", 
    desc: "Sophisticated dining platforms with smart reservations and culinary storytelling", 
    color: "#F9CA24",
    image: t
  },
  { 
    name: "Retail Shops", 
    desc: "Intelligent retail ecosystems with integrated inventory and customer insights", 
    color: "#6C5CE7",
    image: y
  },
];

// Elegant floating orbs
function FloatingOrbs() {
  const orbs = useRef();
  
  useFrame((state) => {
    if (orbs.current) {
      orbs.current.rotation.y = state.clock.elapsedTime * 0.02;
      
      // Update individual orb positions
      orbs.current.children.forEach((child, i) => {
        child.position.y = Math.sin(state.clock.elapsedTime * 0.3 + i) * 2;
      });
    }
  });

  return (
    <group ref={orbs}>
      {[...Array(20)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i / 20) * Math.PI * 2) * 8,
            0,
            Math.sin((i / 20) * Math.PI * 2) * 6
          ]}
        >
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#64FFDA" transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  );
}

export default function WebDevServices() {
  const goContact = useGoToContactPage();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="relative bg-black text-white py-20 overflow-hidden">
      {/* Subtle 3D Background */}
      <div className="absolute inset-0 opacity-20">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <FloatingOrbs />
        </Canvas>
      </div>

      {/* Elegant gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Refined Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-wide">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Crafting Digital Excellence
            </span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-6" />
          <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Where innovation meets elegance. We create premium digital experiences 
            that define the future of your industry.
          </p>
        </motion.div>

        {/* Premium Industry Showcase */}
        <div className="space-y-24">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.9, 
                delay: i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className={`flex items-center gap-16 ${
                i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              } group`}
            >
              {/* Image Section */}
              <div className="flex-1 relative">
                <div className="relative overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.name}
                    className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-105"
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)'
                    }}
                  />
                  
                  {/* Sophisticated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Elegant accent line */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${industry.color}, transparent)`
                    }}
                  />
                </div>

                {/* Floating number indicator */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <span className="text-white font-light text-sm">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-3xl font-light mb-4 text-white tracking-wide">
                    {industry.name}
                  </h3>
                  <div 
                    className="w-16 h-px mb-6 transition-all duration-500 group-hover:w-24"
                    style={{ backgroundColor: industry.color }}
                  />
                  <p className="text-gray-300 text-base leading-relaxed font-light">
                    {industry.desc}
                  </p>
                </div>

                {/* Elegant CTA */}
                <motion.button
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3 text-white font-light tracking-wide group-hover:text-cyan-400 transition-colors duration-300"
                >
                  <span>Explore Solutions</span>
                  <div className="w-8 h-px bg-current" />
                  <div className="w-2 h-2 border-t border-r border-current transform rotate-45" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-24"
        >
          <div className="inline-flex items-center gap-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-cyan-400" />
            <button onClick={goContact} className="relative px-8 py-3 text-white font-light tracking-widest border border-white/30 hover:border-cyan-400 transition-all duration-300 group overflow-hidden">
              <span className="relative z-10">START YOUR PROJECT</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
        </motion.div>
      </div>

      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl" />
    </section>
  );
}
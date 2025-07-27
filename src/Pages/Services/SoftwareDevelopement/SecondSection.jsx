import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import erpImage from "../../../assets/erpsecond.png"

const erpFeatures = [
  "Real-time financial & inventory tracking",
  "Multi-branch & multi-currency support", 
  "AI-powered analytics & reporting",
  "Seamless integration with CRM, POS & DMS",
  "Role-based access & advanced security",
  "Cloud-based and scalable architecture",
];

// Placeholder images - replace with your actual image paths
const erpImages = [
  erpImage,
  './erpfourth.png', 
  './erpthird.png',
  './firstErp.webp'
];

export default function ERPFeatures() {
  return (
    <section className="relative py-12 bg-black text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                <span className="text-sm font-medium text-cyan-400 tracking-wider uppercase">
                  Enterprise Solutions
                </span>
              </motion.div>
              
              <h2 className="text-5xl md:text-6xl font-light leading-tight">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                  Advanced ERP
                </span>
                <br />
                <span className="text-white/90">Solutions</span>
              </h2>
              
              <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                Empower your business with intelligent, scalable solutions that seamlessly integrate 
                finance, operations, inventory, and human resources.
              </p>
            </div>

            <div className="space-y-6">
              {erpFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.4 + (i * 0.1),
                    ease: "easeOut"
                  }}
                  className="group flex items-center gap-4 hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="relative">
                    <CheckCircle className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" size={24} />
                    <div className="absolute inset-0 bg-cyan-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 blur-sm"></div>
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-lg">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {erpImages.map((imgSrc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.2 + (i * 0.1),
                    ease: "easeOut"
                  }}
                  className="relative group overflow-hidden"
                >
                  <div className="aspect-square relative">
                    <img
                      src={imgSrc}
                      alt={`ERP Solution ${i + 1}`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      style={{
                        clipPath: i % 2 === 0 
                          ? "polygon(0 0, 100% 0, 85% 100%, 0% 100%)"
                          : "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)"
                      }}
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 border border-cyan-400/0 group-hover:border-cyan-400/30 transition-colors duration-500"
                         style={{
                           clipPath: i % 2 === 0 
                             ? "polygon(0 0, 100% 0, 85% 100%, 0% 100%)"
                             : "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)"
                         }}>
                    </div>
                  </div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                    <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping animation-delay-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Connecting lines between images */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
              <motion.path
                d="M 25 25 Q 50 40 75 25 Q 60 50 75 75 Q 50 60 25 75 Q 40 50 25 25"
                stroke="url(#gradient)"
                strokeWidth="0.2"
                fill="none"
                strokeDasharray="2 4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 1 }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
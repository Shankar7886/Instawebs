import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, ShoppingBag, FileText, Users, CreditCard, GraduationCap, Box, Layers } from "lucide-react";

const systems = [
  { name: "CRM", icon: Users, desc: "Manage leads, customers & sales pipelines.", category: "Customer Relations" },
  { name: "ERP", icon: Briefcase, desc: "Integrate finance, operations & HR.", category: "Enterprise Resource" },
  { name: "POS", icon: ShoppingBag, desc: "Retail billing & inventory solutions.", category: "Point of Sale" },
  { name: "DMS", icon: FileText, desc: "Document storage & version control.", category: "Document Management" },
  { name: "HRMS", icon: Users, desc: "Payroll, recruitment & employee management.", category: "Human Resources" },
  { name: "FinTech Apps", icon: CreditCard, desc: "Banking, wallet & payment solutions.", category: "Financial Technology" },
  { name: "LMS", icon: GraduationCap, desc: "E-learning & training platforms.", category: "Learning Management" },
  { name: "Inventory", icon: Box, desc: "Track & manage stock levels.", category: "Stock Management" },
  { name: "SaaS Platforms", icon: Layers, desc: "Custom cloud-based business apps.", category: "Software as a Service" },
];

export default function ExpertiseSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-black text-white py-32 relative overflow-hidden">
      {/* Ambient background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-extralight mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Expertise
            </span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-400 text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Crafting enterprise-grade software solutions with precision and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {systems.map((sys, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.1,
                ease: "easeOut"
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group cursor-pointer relative"
            >
              {/* Connecting line effect */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ 
                  scaleX: hoveredIndex === i ? 1 : 0,
                  opacity: hoveredIndex === i ? 1 : 0 
                }}
                transition={{ duration: 0.3 }}
                className="absolute -top-8 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent origin-left"
              />

              <div className="flex items-start space-x-6">
                <motion.div
                  animate={{ 
                    scale: hoveredIndex === i ? 1.2 : 1,
                    rotate: hoveredIndex === i ? 5 : 0
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex-shrink-0"
                >
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center backdrop-blur-sm border border-cyan-500/30">
                      <sys.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <motion.div
                      animate={{ 
                        scale: hoveredIndex === i ? 1 : 0,
                        opacity: hoveredIndex === i ? 0.6 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 w-16 h-16 rounded-full bg-cyan-400 blur-xl"
                    />
                  </div>
                </motion.div>

                <div className="flex-1 pt-2">
                  <motion.h3
                    animate={{ 
                      x: hoveredIndex === i ? 8 : 0,
                      color: hoveredIndex === i ? "#22d3ee" : "#ffffff"
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl font-light mb-2 tracking-wide"
                  >
                    {sys.name}
                  </motion.h3>
                  
                  <motion.p
                    animate={{ opacity: hoveredIndex === i ? 0.6 : 0.4 }}
                    transition={{ duration: 0.3 }}
                    className="text-xs font-medium text-cyan-400 mb-3 uppercase tracking-wider"
                  >
                    {sys.category}
                  </motion.p>
                  
                  <motion.p
                    animate={{ 
                      x: hoveredIndex === i ? 8 : 0,
                      opacity: hoveredIndex === i ? 1 : 0.7
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-300 leading-relaxed font-light"
                  >
                    {sys.desc}
                  </motion.p>

                  {/* Expand indicator */}
                  <motion.div
                    animate={{ 
                      opacity: hoveredIndex === i ? 1 : 0,
                      x: hoveredIndex === i ? 8 : 0
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="mt-4 flex items-center text-cyan-400 text-sm font-light"
                  >
                    <span>Explore capabilities</span>
                    <motion.div
                      animate={{ x: hoveredIndex === i ? 4 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-2 w-4 h-0.5 bg-cyan-400"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Subtle background glow on hover */}
              <motion.div
                animate={{ 
                  opacity: hoveredIndex === i ? 0.1 : 0,
                  scale: hoveredIndex === i ? 1 : 0.8
                }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 -inset-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl -z-10"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-24"
        >
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"></div>
        </motion.div>
      </div>
    </section>
  );
}
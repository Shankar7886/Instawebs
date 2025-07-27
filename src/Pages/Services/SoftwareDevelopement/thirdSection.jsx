import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import dms1 from "../../../assets/dms1.png";
import dms2 from '../../../assets/dms2.png'

const dmsFeatures = [
  "Centralized document storage & retrieval",
  "Version control and audit trails",
  "Role-based access & permissions",
  "AI-powered search & tagging",
  "Secure cloud-based file management",
  "Integration with ERP, CRM, and email tools",
];

const dmsImages = [dms1, dms2, './firstErp.webp', './erpfourth.png'];


export default function DMSFeatures() {
  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-700/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
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
                <span className="text-sm font-medium text-purple-400 tracking-wider uppercase">
                  Document Management
                </span>
              </motion.div>
              
              <h2 className="text-5xl md:text-6xl font-light leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                  Advanced DMS
                </span>
                <br />
                <span className="text-white/90">Solutions</span>
              </h2>
              
              <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                Manage, organize, and secure your business documents with 
                a cloud-based platform that offers collaboration, search, 
                and compliance-friendly storage.
              </p>
            </div>

            <div className="space-y-6">
              {dmsFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="group flex items-center gap-4 hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="relative">
                    <CheckCircle className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300" size={24} />
                    <div className="absolute inset-0 bg-purple-400/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 blur-sm"></div>
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
              {dmsImages.map((imgSrc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="relative group overflow-hidden"
                >
                  <div className="aspect-square relative">
                    <img
                      src={imgSrc}
                      alt={`DMS Solution ${i + 1}`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      style={{
                        clipPath:
                          i % 2 === 0
                            ? "polygon(0 0, 100% 0, 85% 100%, 0% 100%)"
                            : "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
                      }}
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Glow Effect */}
                    <div
                      className="absolute inset-0 border border-purple-400/0 group-hover:border-purple-400/30 transition-colors duration-500"
                      style={{
                        clipPath:
                          i % 2 === 0
                            ? "polygon(0 0, 100% 0, 85% 100%, 0% 100%)"
                            : "polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)",
                      }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

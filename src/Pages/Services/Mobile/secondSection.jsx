import React, { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { ShoppingBag, Utensils, CreditCard, Users, Home, Briefcase } from "lucide-react";
import * as THREE from "three";

// Minimal 3D Particle System
function ParticleField() {
  const pointsRef = useRef();
  const particleCount = 100;

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#ffffff" opacity={0.6} transparent />
    </points>
  );
}

// Subtle 3D Background
function MinimalScene() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }} style={{ background: 'transparent' }}>
      <Environment preset="night" />
      <ambientLight intensity={0.1} />
      <ParticleField />
    </Canvas>
  );
}

const appTypes = [
  { 
    icon: ShoppingBag, 
    title: "E-Commerce", 
    desc: "Enterprise-grade retail platforms with advanced analytics, inventory management, and seamless payment integration.",
    category: "Retail",
    tech: ["React Native", "Node.js", "PostgreSQL"]
  },
  { 
    icon: Utensils, 
    title: "Food & Delivery", 
    desc: "Scalable logistics platforms with real-time tracking, route optimization, and multi-vendor management systems.",
    category: "Logistics",
    tech: ["Flutter", "Python", "Redis"]
  },
  { 
    icon: CreditCard, 
    title: "Financial Services", 
    desc: "Secure fintech solutions with blockchain integration, compliance frameworks, and advanced risk management.",
    category: "Finance",
    tech: ["React", "Go", "MongoDB"]
  },
  { 
    icon: Users, 
    title: "Social Platforms", 
    desc: "High-performance social networks with real-time messaging, content management, and scalable architecture.",
    category: "Social",
    tech: ["Vue.js", "Java", "Elasticsearch"]
  },
  { 
    icon: Home, 
    title: "Real Estate", 
    desc: "Comprehensive property management systems with CRM integration, document automation, and market analytics.",
    category: "PropTech",
    tech: ["Angular", "C#", "SQL Server"]
  },
  { 
    icon: Briefcase, 
    title: "Enterprise Solutions", 
    desc: "Mission-critical business applications with ERP integration, workflow automation, and enterprise security.",
    category: "Enterprise",
    tech: ["React", "Python", "Oracle"]
  },
];

export default function AppTypesSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative bg-black text-white py-32 overflow-hidden">
      {/* Minimal Background */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
        <div className="absolute inset-0 opacity-20">
          <MinimalScene />
        </div>
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="mb-8"
          >
            <span className="text-gray-500 text-sm font-mono tracking-wider uppercase">
              Our Expertise
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-light mb-8 tracking-tight"
          >
            <span className="text-white">Application</span>
            <br />
            <span className="text-gray-400">Development</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            We deliver enterprise-grade applications across industries, 
            combining technical excellence with strategic business insight 
            to create solutions that scale.
          </motion.p>
        </div>

        {/* App Types Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {appTypes.map((app, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.1,
                ease: "easeOut"
              }}
              className="group relative"
            >
              <div className="relative h-full p-8 border border-gray-900 bg-gray-950/50 backdrop-blur-sm transition-all duration-500 hover:border-gray-800 hover:bg-gray-950/70">
                {/* Subtle hover glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/0 to-white/0 group-hover:from-white/5 group-hover:via-white/2 group-hover:to-white/0 transition-all duration-700" />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 border border-gray-800 bg-gray-900/50 group-hover:border-gray-700 transition-colors duration-300">
                        <app.icon className="w-6 h-6 text-gray-300" />
                      </div>
                      <div>
                        <h3 className="text-xl font-light text-white mb-1">
                          {app.title}
                        </h3>
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                          {app.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-8 text-sm">
                    {app.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-gray-600 uppercase tracking-wider">
                      Technology Stack
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {app.tech.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 text-xs font-mono bg-gray-900/80 border border-gray-800 text-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Subtle bottom line */}
                  <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center space-x-8 text-sm font-mono text-gray-600">
            <span>Enterprise Grade</span>
            <div className="w-px h-4 bg-gray-800" />
            <span>Scalable Architecture</span>
            <div className="w-px h-4 bg-gray-800" />
            <span>24/7 Support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
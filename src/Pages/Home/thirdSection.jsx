import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowUpRight, BookOpen, Sparkles } from "lucide-react";

const processSteps = [
  {
    title: "Discovery & Planning",
    subtitle:
      "Strategic analysis and comprehensive planning to align technology solutions with your business objectives.",
    number: "01",
    color: "#A78BFA", // lighter purple
    accent: "#C4B5FD",
  },
  {
    title: "Creative & UX Design",
    subtitle:
      "Sophisticated design systems that elevate your brand while delivering exceptional user experiences.",
    number: "02",
    color: "#F472B6", // pink
    accent: "#F9A8D4",
  },
  {
    title: "Development & Execution",
    subtitle:
      "Cutting-edge development using modern frameworks, ensuring scalability and peak performance.",
    number: "03",
    color: "#22D3EE", // cyan
    accent: "#67E8F9",
  },
  {
    title: "Testing & Optimization",
    subtitle:
      "Rigorous quality assurance and performance optimization for flawless user experiences.",
    number: "04",
    color: "#34D399", // green
    accent: "#6EE7B7",
  },
  {
    title: "Launch & Support",
    subtitle:
      "Seamless deployment with ongoing support and optimization to ensure sustained excellence.",
    number: "05",
    color: "#FBBF24", // amber
    accent: "#FCD34D",
  },
  {
    title: "Continuous Improvement",
    subtitle:
      "Ongoing evaluation and enhancement to keep your solutions ahead of the curve.",
    number: "06",
    color: "#F87171", // red
    accent: "#FCA5A5",
  },
];

const TITLES = [
  "Streamlined Process",
  "Seamless Delivery",
  "Effortless Workflow",
  "Optimized Solutions",
  "Smooth Execution",
  "Continuous Excellence",
];

const sequence = TITLES.flatMap((title) => [title, 2000]);

function ProcessStep({ step, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {index < processSteps.length - 1 && (
        <div className="absolute left-16 top-32 w-0.5 h-24 bg-gradient-to-b from-gray-600 to-gray-800 z-0" />
      )}

      <div
        className="flex items-start space-x-8 py-12 px-8 hover:bg-white/5 transition-all duration-500 cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative z-10">
          <motion.div
            className="w-16 h-16 rounded-full border-2 flex items-center justify-center bg-black border-opacity-60 shadow-lg"
            style={{
              borderColor: step.color,
              boxShadow: isHovered
                ? `0 8px 32px ${step.color}60`
                : `0 4px 16px ${step.color}30`,
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <span
              className="text-2xl font-light"
              style={{ color: step.color }}
            >
              {step.number}
            </span>
          </motion.div>

          <motion.div
            className="absolute -top-2 -right-2"
            animate={
              isHovered
                ? { scale: [1, 1.2, 1], rotate: [0, 180, 360] }
                : {}
            }
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={16} style={{ color: step.accent }} />
          </motion.div>
        </div>

        <div className="flex-1">
          <motion.h3
            className="text-3xl font-light mb-4"
            style={{
              color: isHovered ? step.color : "#F3F4F6",
              textShadow: isHovered
                ? `0 0 16px ${step.color}40`
                : "none",
            }}
            transition={{ duration: 0.3 }}
          >
            {step.title}
          </motion.h3>

          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            {step.subtitle}
          </p>

          <motion.div
            className="w-16 h-0.5 mt-6 rounded-full"
            style={{ backgroundColor: step.color }}
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1 + 0.5,
            }}
          />
        </div>

        <motion.div
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ x: 4 }}
        >
          <ArrowUpRight size={24} style={{ color: step.color }} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function LuxuryDarkProcess() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-20 px-4">
      {/* Gradient glow blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-800 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-pink-800 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-800 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            className="inline-flex items-center mb-6 text-gray-400 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BookOpen size={24} className="mr-3" />
            <span className="text-sm font-medium tracking-[0.3em] uppercase">
              Our Luxury Process
            </span>
          </motion.div>

          <motion.h2
            className="text-6xl md:text-7xl font-extralight mb-8 tracking-tight bg-clip-text text-transparent leading-tight"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #A78BFA, #F472B6, #22D3EE, #34D399, #FBBF24, #F87171)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <TypeAnimation
              sequence={sequence}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: "inline-block" }}
              speed={50}
            />
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience our meticulously crafted workflow designed to transform your vision into exceptional digital experiences with unparalleled attention to detail.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {processSteps.map((step, idx) => (
            <ProcessStep key={idx} step={step} index={idx} />
          ))}
        </div>

        {/* Footer accent */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto" />
          <p className="text-gray-500 mt-6 text-sm tracking-wide">
            CRAFTED WITH PRECISION • DELIVERED WITH EXCELLENCE
          </p>
        </motion.div>
      </div>
    </section>
  );
}

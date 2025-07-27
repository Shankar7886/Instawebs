"use client";
import { motion } from "framer-motion";
import { 
  Lightbulb, 
  Smartphone, 
  Palette, 
  Building2, 
  Link, 
  Cloud, 
  Settings, 
  TestTube,
  MapPin,
  TrendingUp
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Technology Consulting",
    description: "Strategic mobile solutions aligned with your business objectives",
    icon: Lightbulb,
    status: "Planning"
  },
  {
    step: "02", 
    title: "Custom Development",
    description: "Tailored applications with innovative architecture",
    icon: Smartphone,
    status: "Development"
  },
  {
    step: "03",
    title: "UI/UX Design", 
    description: "Intuitive interfaces with modern design principles",
    icon: Palette,
    status: "Design"
  },
  {
    step: "04",
    title: "Enterprise Solutions",
    description: "Scalable applications with enterprise-grade security",
    icon: Building2,
    status: "Enterprise"
  },
  {
    step: "05",
    title: "System Integration",
    description: "Seamless connectivity across all platforms",
    icon: Link,
    status: "Integration"
  },
  {
    step: "06",
    title: "Cloud Infrastructure",
    description: "Leveraging cloud for scalability and reliability",
    icon: Cloud,
    status: "Cloud"
  },
  {
    step: "07",
    title: "Ongoing Support", 
    description: "Continuous optimization and monitoring",
    icon: Settings,
    status: "Support"
  },
  {
    step: "08",
    title: "Quality Assurance",
    description: "Comprehensive testing for flawless delivery",
    icon: TestTube,
    status: "Testing"
  },
];

export default function MobileAppProcessSection() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Atmospheric Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(251, 146, 60, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 60% 40%, rgba(139, 92, 246, 0.06) 0%, transparent 50%)
          `
        }}
      >
        {/* Glow effects - responsive sizes */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-4 md:left-20 w-40 md:w-80 h-20 md:h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-32 right-4 md:right-32 w-48 md:w-96 h-24 md:h-48 bg-purple-500/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-2 md:left-10 w-36 md:w-72 h-18 md:h-36 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-4 md:right-20 w-32 md:w-64 h-16 md:h-32 bg-cyan-500/8 rounded-full blur-2xl"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        
        {/* Left Sidebar - Responsive */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-80 p-4 md:p-8"
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-4 md:p-8 text-white h-full border border-white/10">
            
            {/* Header */}
            <div className="mb-6 md:mb-8">
              <h1 className="text-xl md:text-2xl font-light mb-2 text-white">MobileWise</h1>
              <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
                <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                <span>Delhi, India (Thursday, June 19)</span>
              </div>
            </div>

            {/* Main Stats */}
            <div className="mb-6 md:mb-8">
              <div className="text-4xl md:text-6xl font-extralight mb-2 text-white">150</div>
              <div className="text-xs md:text-sm text-gray-400 mb-4">Projects Completed</div>
              
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-green-400" />
                  <span className="text-xs md:text-sm text-white">98.5%</span>
                </div>
                <div className="text-xs md:text-sm text-gray-400">Success Rate</div>
              </div>

              <div className="bg-white/10 rounded-xl p-3 md:p-4 mb-4 md:mb-6 border border-white/5">
                <div className="text-orange-400 text-xs md:text-sm mb-1">Active</div>
                <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                  <div className="bg-orange-400 h-2 rounded-full w-3/4"></div>
                </div>
                <div className="text-xs text-gray-400">12 Projects in Development</div>
              </div>

              <button className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors">
                See More Details →
              </button>
            </div>

            {/* Mini World Map Placeholder */}
            <div className="bg-white/5 rounded-2xl p-3 md:p-4 mb-4 md:mb-6 border border-white/5">
              <div className="text-xs md:text-sm mb-3 text-gray-300">Select Region</div>
              <div className="bg-white/10 rounded-xl h-24 md:h-32 flex items-center justify-center border border-white/5">
                <div className="text-xs text-gray-500">Global Coverage</div>
              </div>
              <div className="text-xs mt-2 text-gray-400">Delhi, India</div>
            </div>
          </div>
        </motion.div>

        {/* Main Content Area */}
        <div className="flex-1 p-4 md:p-8">
          
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 md:mb-12"
          >
            <div className="mb-6 md:mb-8">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-extralight text-white mb-4 leading-tight">
                Complete
                <br />
                <span className="text-gray-300">Mobile Development</span>
              </h2>
              <p className="text-base md:text-lg text-gray-400 max-w-lg">
                With advanced technology and expert team, 
                we provide reliable solutions for any business 
                around the world.
              </p>
            </div>
          </motion.div>

          {/* Recently Searched - Process Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 md:mb-12"
          >
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h3 className="text-gray-500 text-sm">Development Process</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
              {processSteps.slice(0, 4).map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 md:p-4 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-2 md:gap-3 mb-2">
                    <step.icon className="w-4 h-4 md:w-5 md:h-5 text-gray-300 group-hover:text-white transition-colors" />
                    <span className="text-base md:text-lg font-light text-white">{step.step}</span>
                  </div>
                  <div className="text-xs md:text-sm text-gray-200 font-medium mb-1">{step.title.split(' ')[0]}</div>
                  <div className="text-xs text-gray-400">{step.status}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Weekly Process Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 md:p-8 border border-white/20">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-6 mb-6 md:mb-8">
                {['Planning', 'Design', 'Development', 'Testing', 'Integration', 'Launch'].map((phase, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xs md:text-sm text-gray-300 font-medium mb-2">{phase}</div>
                  </div>
                ))}
              </div>
              
              {/* Curved Timeline Visual */}
              <div className="relative h-16 md:h-24 mb-6 md:mb-8">
                <svg className="w-full h-full" viewBox="0 0 800 100">
                  <defs>
                    <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor: "rgb(59, 130, 246)", stopOpacity: 0.6}} />
                      <stop offset="50%" style={{stopColor: "rgb(139, 92, 246)", stopOpacity: 0.6}} />
                      <stop offset="100%" style={{stopColor: "rgb(6, 182, 212)", stopOpacity: 0.6}} />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 50 50 Q 200 20 400 50 T 750 50"
                    stroke="url(#timelineGradient)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle cx="50" cy="50" r="4" fill="rgb(59, 130, 246)" className="drop-shadow-lg" />
                  <circle cx="200" cy="35" r="4" fill="rgb(16, 185, 129)" className="drop-shadow-lg" />
                  <circle cx="350" cy="45" r="4" fill="rgb(245, 158, 11)" className="drop-shadow-lg" />
                  <circle cx="500" cy="55" r="4" fill="rgb(239, 68, 68)" className="drop-shadow-lg" />
                  <circle cx="650" cy="45" r="4" fill="rgb(139, 92, 246)" className="drop-shadow-lg" />
                  <circle cx="750" cy="50" r="4" fill="rgb(6, 182, 212)" className="drop-shadow-lg" />
                </svg>
              </div>
              
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-6 text-center">
                {['2-3 wks', '3-4 wks', '8-12 wks', '2-3 wks', '1-2 wks', '1 wk'].map((duration, index) => (
                  <div key={index} className="text-lg md:text-2xl font-extralight text-gray-200">
                    {duration}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
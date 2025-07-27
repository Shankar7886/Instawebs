import React, { useRef, useState } from "react";
import { Code, Smartphone, Palette, ArrowRight, Sparkles } from "lucide-react";
import  useGoToContactPage from "../Contact/contactFn"
const services = [
  {
    title: "Web Development",
    desc: "We build fast, scalable, and secure web solutions using modern technologies and frameworks.",
    icon: Code,
    color: "#22D3EE",
    gradient: "from-cyan-400 to-blue-500",
    features: ["React & Next.js", "Full-Stack Solutions", "Performance Optimized"],
  },
  {
    title: "Mobile Apps",
    desc: "High-performing mobile applications for iOS & Android with seamless user experiences.",
    icon: Smartphone,
    color: "#FBBF24",
    gradient: "from-amber-400 to-orange-500",
    features: ["Cross-Platform", "Native Performance", "App Store Ready"],
  },
  {
    title: "UI/UX Design",
    desc: "Stunning, user-friendly interfaces designed for engagement and exceptional experiences.",
    icon: Palette,
    color: "#A78BFA",
    gradient: "from-purple-400 to-pink-500",
    features: ["User Research", "Prototype Design", "Design Systems"],
  },
];

const FloatingParticle = ({ delay = 0 }) => (
  <div
    className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
    }}
  />
);

// Simple typing animation component
const TypeAnimation = ({ words, className }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  React.useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, words]);

  return <span className={className}>{displayText}</span>;
};

export default function ServicesShowcase() {
  const goContact = useGoToContactPage();
  const containerRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-black py-8 sm:py-12 lg:py-20 px-3 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs - Reduced size and blur for mobile */}
        <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 lg:w-80 h-32 sm:h-48 lg:h-80 bg-gradient-radial from-purple-800/20 to-transparent rounded-full blur-2xl sm:blur-3xl animate-pulse" />
        
        <div className="absolute bottom-1/4 right-1/3 w-32 sm:w-48 lg:w-80 h-32 sm:h-48 lg:h-80 bg-gradient-radial from-cyan-700/20 to-transparent rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Reduced particles for mobile performance */}
        {Array.from({ length: window.innerWidth < 768 ? 6 : 12 }).map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.5} />
        ))}

        {/* Grid Pattern - Less dense on mobile */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: window.innerWidth < 768 ? '30px 30px' : '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4 sm:mb-6">
            <Sparkles size={14} className="text-cyan-400 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm text-gray-300">Our Services</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 mb-3 sm:mb-4 lg:mb-6 leading-tight">
            We Build{" "}
            <TypeAnimation
              words={['Digital Experiences', 'Modern Solutions', 'Your Vision']}
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400"
            />
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            From innovative web platforms to high-performing mobile apps and
            elegant UI/UX designs – we craft solutions that empower your business
            in the digital world.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <div
                key={i}
                className="relative group"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${i * 0.2}s both`
                }}
              >
                <div
                  className="relative p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-xl overflow-hidden h-full transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Card Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.gradient} transition-opacity duration-300 blur-xl ${
                      hoveredCard === i ? 'opacity-10' : 'opacity-0'
                    }`}
                  />

                  {/* Animated Border */}
                  <div
                    className={`absolute inset-0 rounded-xl sm:rounded-2xl transition-all duration-500 ${
                      hoveredCard === i ? 'animate-spin' : ''
                    }`}
                    style={{
                      background: `conic-gradient(from 0deg, transparent, ${service.color}40, transparent)`,
                      padding: '1px',
                      animationDuration: '2s',
                    }}
                  >
                    <div className="w-full h-full bg-black/80 rounded-xl sm:rounded-2xl" />
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mx-auto rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 relative overflow-hidden transition-transform duration-300 hover:scale-110"
                      style={{
                        backgroundColor: `${service.color}15`,
                        border: `1px solid ${service.color}40`,
                      }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r transition-opacity duration-300 ${
                          hoveredCard === i ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{
                          backgroundImage: `linear-gradient(45deg, ${service.color}20, transparent)`
                        }}
                      />
                      <Icon 
                        size={window.innerWidth < 640 ? 20 : window.innerWidth < 1024 ? 24 : 32} 
                        className="relative z-10" 
                        style={{ color: service.color }} 
                      />
                    </div>

                    {/* Content */}
                    <h3
                      className="text-lg sm:text-xl lg:text-2xl font-light mb-2 sm:mb-3 text-center"
                      style={{ color: service.color }}
                    >
                      {service.title}
                    </h3>

                    <p className="text-gray-300 text-xs sm:text-sm lg:text-base text-center mb-4 sm:mb-6 leading-relaxed px-1">
                      {service.desc}
                    </p>

                    {/* Features */}
                    <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs sm:text-sm text-gray-400"
                        >
                          <div 
                            className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: service.color }}
                          />
                          <span className="leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <button onClick={goContact} className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 text-sm sm:text-base hover:scale-105">
            Start Your Project Today
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }

        @media (max-width: 640px) {
          .backdrop-blur-xl {
            backdrop-filter: blur(8px);
          }
        }
      `}</style>
    </section>
  );
}
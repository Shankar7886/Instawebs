import React, { useState, useEffect, useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";
import * as THREE from "three";
import { RefreshCw, Plus, AtSign, ArrowRight } from "lucide-react";
import companyLogo from "../../assets/logowithnobg.png"
import WhiteLogoIcon from "../../assets/logoIcon";
import  useGoToContactPage from "../Contact/contactFn"


// Mock logo component since we can't import the actual image
const CompanyLogo = () => (
 <div className="flex items-center">
    <img
      src={companyLogo}
      alt="Company Logo"
      className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
    />
  </div>
);
// 3D Background Components
function FloatingParticles({ particleCount = 100 }) {
  const particlesRef = useRef(null);

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50;

      // Darker color variants for black theme
      const variant = Math.random();
      if (variant < 0.4) {
        col[i * 3] = 0.3 + Math.random() * 0.2;
        col[i * 3 + 1] = 0.25 + Math.random() * 0.15;
        col[i * 3 + 2] = 0.4 + Math.random() * 0.2;
      } else if (variant < 0.7) {
        col[i * 3] = 0.35 + Math.random() * 0.15;
        col[i * 3 + 1] = 0.3 + Math.random() * 0.2;
        col[i * 3 + 2] = 0.45 + Math.random() * 0.15;
      } else {
        col[i * 3] = 0.4 + Math.random() * 0.1;
        col[i * 3 + 1] = 0.4 + Math.random() * 0.1;
        col[i * 3 + 2] = 0.5 + Math.random() * 0.1;
      }
    }

    return { positions: pos, colors: col };
  }, [particleCount]);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
      particlesRef.current.rotation.z =
        Math.cos(state.clock.elapsedTime * 0.03) * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="position" args={[positions, 3]} />
        <bufferAttribute attach="color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function AdvancedTechScene() {
  const sphereRef = useRef(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.08;
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.12;
      sphereRef.current.rotation.z =
        Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} color="#1a1a2e" />
      <directionalLight
        position={[15, 15, 10]}
        intensity={0.4}
        color="#16213e"
      />
      <pointLight position={[0, 0, 15]} intensity={0.6} color="#0f3460" />
      <pointLight position={[-15, -15, -10]} intensity={0.5} color="#533483" />
      <pointLight position={[10, -10, 5]} intensity={0.4} color="#e94560" />

      <mesh ref={sphereRef} position={[0, 0, -5]}>
        <icosahedronGeometry args={[2.5, 2]} />
        <meshPhysicalMaterial
          color="#533483"
          metalness={0.95}
          roughness={0.05}
          transparent
          opacity={0.3}
          wireframe
          envMapIntensity={1.5}
        />
      </mesh>

      <mesh position={[8, 4, -8]} rotation={[0.5, 0.3, 0]}>
        <octahedronGeometry args={[1, 1]} />
        <meshPhysicalMaterial
          color="#0f3460"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.25}
          wireframe
        />
      </mesh>

      <mesh position={[-6, -3, -10]} rotation={[0.8, 0.2, 0.5]}>
        <tetrahedronGeometry args={[1.5, 0]} />
        <meshPhysicalMaterial
          color="#e94560"
          metalness={0.85}
          roughness={0.15}
          transparent
          opacity={0.3}
          wireframe
        />
      </mesh>

      <FloatingParticles particleCount={120} />
    </>
  );
}

// Code Editor Component
const CodeSnippet = () => (
  <pre className="font-mono text-xs sm:text-sm text-gray-300 whitespace-pre-wrap">
    <code>
      <span className="text-gray-500">
        document.addEventListener(
        <span className="text-amber-300">"DOMContentLoaded"</span>, () =&gt;{" "}
        {"{"}
      </span>
      <br />
      <span className="pl-4">
        <span className="text-purple-400">let</span> count ={" "}
        <span className="text-teal-300">0</span>;
      </span>
      <br />
      <span className="pl-4">
        <span className="text-purple-400">const</span> button = document.
        <span className="text-cyan-300">createElement</span>(
        <span className="text-amber-300">"button"</span>);
      </span>
      <br />
      <span className="pl-4">
        button.
        <span className="text-cyan-300">textContent</span> ={" "}
        <span className="text-amber-300">
          `Click me: ${"{"}count{"}"}`
        </span>
        ;
      </span>
      <br />
      <br />
      <span className="pl-4">
        button.
        <span className="text-cyan-300">addEventListener</span>(
        <span className="text-amber-300">"click"</span>, () =&gt; {"{"}
      </span>
      <br />
      <span className="pl-8">
        count<span className="text-purple-400">++</span>;
      </span>
      <br />
      <span className="pl-8">
        button.
        <span className="text-cyan-300">textContent</span> ={" "}
        <span className="text-amber-300">
          `Click me: ${"{"}count{"}"}`
        </span>
        ;
      </span>
      <br />
      <span className="pl-4">{"}"});</span>
      <br />
      <br />
      <span className="pl-4">
        document.body.
        <span className="text-cyan-300">appendChild</span>(button);
      </span>
      <br />
      <span>{"});"}</span>
    </code>
  </pre>
);

const CodeEditor = ({ isMobile }) => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div className="relative flex justify-center items-center w-full" ref={ref}>
      {/* Lens Flare / Top Glow */}
      <motion.div
        className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px]"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(217, 119, 6, 0.4), transparent 60%)",
          top: "-100%",
          zIndex: "1000",
          display: !isMobile ? "flex" : "none",
        }}
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Main Code Editor with Gradient Border */}
      <motion.div
        className="relative w-full max-w-sm sm:max-w-lg lg:max-w-2xl rounded-xl sm:rounded-2xl p-px z-10 
                   bg-gradient-to-b from-white/10 to-white/0"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <div className="relative w-full h-full bg-black/50 backdrop-blur-xl rounded-xl sm:rounded-2xl overflow-hidden">
          {/* Browser Header */}
          <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-black/20 border-b border-white/10">
            <div className="flex space-x-1.5 sm:space-x-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 text-gray-400">
              <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4" />
              <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
              <AtSign className="w-3 h-3 sm:w-4 sm:h-4" />
            </div>
          </div>

          {/* Code Content */}
          <div className="p-3 sm:p-4 h-full overflow-auto text-gray-200">
            <CodeSnippet />
          </div>
        </div>
      </motion.div>

      {/* CSS Panel with Gradient Border */}
      <motion.div
        className="absolute -bottom-12 sm:-bottom-16 lg:-bottom-24 -right-4 sm:-right-6 lg:-right-8 
                   w-60 sm:w-72 lg:w-80 h-auto rounded-lg sm:rounded-xl p-px z-20
                   bg-gradient-to-b from-white/10 to-white/0"
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <div className="bg-black/60 backdrop-blur-xl rounded-lg sm:rounded-xl overflow-hidden">
          {/* Tab Header */}
          <div className="flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-black/20 border-b border-white/10">
            <div className="bg-gray-700 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded text-xs font-medium mr-2 sm:mr-3">
              Body
            </div>
            <div className="text-gray-400 text-xs space-x-2 sm:space-x-3 font-mono">
              <span className="font-bold">B</span>
              <span className="italic">I</span>
              <span className="underline">U</span>
              <span>+ /</span>
            </div>
          </div>

          {/* CSS Content */}
          <div className="p-2 sm:p-3 font-mono text-xs text-gray-400 leading-relaxed">
            <span className="text-purple-400">code</span>
            <span className="text-white"> {"{"}</span>
            <br />
            <span className="ml-3 sm:ml-4 text-cyan-400">font-family</span>
            <span className="text-white">: </span>
            <span className="text-amber-300">'Fira Code', monospace</span>
            <span className="text-white">;</span>
            <br />
            <span className="ml-3 sm:ml-4 text-cyan-400">font-size</span>
            <span className="text-white">: </span>
            <span className="text-amber-300">14px</span>
            <span className="text-white">;</span>
            <br />
            <span className="ml-3 sm:ml-4 text-cyan-400">background-color</span>
            <span className="text-white">: </span>
            <span className="text-amber-300">#f5f5f5</span>
            <span className="text-white">;</span>
            <br />
            <span className="text-white">{"}"}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Main Component
const ScriptixLanding = () => {
  const goContact = useGoToContactPage();
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div className="min-h-screen  relative overflow-hidden">
      {/* 3D Background Canvas */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <Suspense fallback={null}>
            <AdvancedTechScene />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={false}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Header with Logo - Fixed positioning */}
      <div className="relative z-50">
        {/* Mobile Header - Logo centered with original top margin */}
        <div className="md:hidden flex justify-center pt-10">
         
          <WhiteLogoIcon height={"80px"} width={"80px"}/>
        </div>

        {/* Desktop Header - Logo positioned closer to top-left */}
        <div className="hidden md:block absolute top-6 left-6 ">
          <WhiteLogoIcon height={"80px"} width={"80px"}/>
        </div>
      </div>

      {/* Main Content - Reduced padding and better centered */}
      <div
        className="relative z-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16"
        ref={heroRef}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[70vh] sm:min-h-[80vh] md:min-h-screen pt-2 md:pt-24 lg:pt-16">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center space-x-2 text-orange-400 text-sm mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="w-4 h-4 bg-orange-400 rounded-sm"></div>
                <span>Empowering Global Startup Growth</span>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                className="space-y-2 sm:space-y-4"
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <h1 className="font-medium leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-normal" style={{ fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
                  <div className="text-white mb-1 sm:mb-2">FUTURE-DRIVEN</div>
                  <div className="text-white mb-1 sm:mb-2">SOFTWARE</div>
                  <div className="flex items-center justify-center lg:justify-start flex-wrap">
                    <span className="text-purple-500 mr-1 sm:mr-2 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">{`{`}</span>
                    <span className="text-white">
                      <TypeAnimation
                        sequence={[
                          "DEVELOPMENT",
                          2000,
                          "SOLUTIONS",
                          2000,
                          "INNOVATION",
                          2000,
                          "PLATFORMS",
                          2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        cursor={false}
                      />
                    </span>
                    <span className="text-purple-500 ml-1 sm:ml-2 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">{`}`}</span>
                  </div>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-base sm:text-lg text-gray-400 max-w-lg leading-relaxed mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
              >
                We craft high-quality digital solutions that help businesses grow,
                scale, and innovate in a fast-changing world
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                  <button onClick={goContact} className="group bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto">
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Tilt>

                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                  {/* <button className="px-6 sm:px-8 py-3 sm:py-4 border border-gray-600 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-white">
                    See Our Projects
                  </button> */}
                </Tilt>
              </motion.div>
            </div>

            {/* Right Content - Code Editor */}
            <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
              <CodeEditor isMobile={isMobile} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScriptixLanding;
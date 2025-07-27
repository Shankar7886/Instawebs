import React, { useRef, useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Sphere } from "@react-three/drei";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import { Layers, FileText, ShoppingCart, Code, ArrowRight, Mouse } from "lucide-react";
import * as THREE from "three";
import WhiteLogoIcon from "../../../assets/logoIcon";
import useGoToContactPage from "../../Contact/contactFn";



// Elegant particle field component
function ParticleField() {
  const ref = useRef();
  const [sphere] = useState(() => new THREE.SphereGeometry(1, 32, 32));
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ff6b6b"
        size={0.002}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

// Flowing wave geometry
function FlowingWaves() {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -3]} scale={[4, 4, 1]}>
      <planeGeometry args={[2, 2, 32, 32]} />
      <meshStandardMaterial
        color="#ff6b6b"
        transparent
        opacity={0.03}
        wireframe
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// Elegant ring orbits
function OrbitRings() {
  const group = useRef();
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.1;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={group}>
      {[...Array(3)].map((_, i) => (
        <mesh key={i} rotation={[0, 0, (i * Math.PI) / 3]} scale={1 + i * 0.5}>
          <torusGeometry args={[2 + i, 0.02, 16, 100]} />
          <meshStandardMaterial
            color="#ff6b6b"
            transparent
            opacity={0.1 - i * 0.02}
            emissive="#ff6b6b"
            emissiveIntensity={0.05}
          />
        </mesh>
      ))}
    </group>
  );
}

// Main 3D Scene
function ElegantScene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} color="#ff6b6b" intensity={0.3} />
      <pointLight position={[-10, -10, -5]} color="#ffffff" intensity={0.1} />
      
      <ParticleField />
      <FlowingWaves />
      <OrbitRings />
    </>
  );
}

export default function SoftwareHeroSection() {
  const goContact = useGoToContactPage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const services = [
    { icon: Layers, label: "ERP Solutions", tech: "Enterprise Resource Planning" },
    { icon: FileText, label: "DMS Platforms", tech: "Document Management Systems" },
    { icon: ShoppingCart, label: "POS Systems", tech: "Point of Sale Solutions" },
    { icon: Code, label: "Custom Development", tech: "Tailored Business Applications" },
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Elegant Three.js Background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60 }}
          gl={{ alpha: true, antialias: true }}
        >
          <ElegantScene />
        </Canvas>
      </div>

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/80 via-transparent to-black/60" />
      <div className="absolute inset-0 z-10 bg-gradient-radial from-transparent via-transparent to-black/40" />

      {/* Interactive cursor glow */}
      <motion.div
        className="fixed w-32 h-32 bg-red-500/5 rounded-full pointer-events-none z-20 mix-blend-screen blur-xl"
        animate={{
          x: mousePosition.x * 100,
          y: mousePosition.y * 100,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
          left: '50%',
          top: '50%',
        }}
      />

   <div className="fixed top-0 left-0 right-0 z-50">
        {/* Mobile Header - Logo centered */}
       

        {/* Desktop Header - Logo positioned top-right */}
        <div className="hidden md:block absolute top-6 right-6">
          <WhiteLogoIcon height={"80px"} width={"80px"}/>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 z-50">
         <div className="md:hidden flex justify-center pt-6">
          <WhiteLogoIcon height={"80px"} width={"80px"}/>
        </div>
      </div>
      

      {/* Main Content */}
      <motion.div 
        style={{ y }}
        className="relative z-30 min-h-screen flex flex-col justify-center px-6 mt-20"
      >
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-20">
            
            {/* Status indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 px-4 py-2 border border-red-900/20 rounded-full mb-8 backdrop-blur-sm"
            >
              <div className="relative">
                {/* <div className="w-2 h-2 bg-red-400 rounded-full" />
                <div className="absolute inset-0 w-2 h-2 bg-red-400 rounded-full animate-ping" /> */}
              </div>
              {/* <span className="text-sm text-red-300 font-light tracking-wider">ENTERPRISE SOLUTIONS</span> */}
            </motion.div>

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-6xl lg:text-8xl font-thin leading-tight tracking-tight">
                <span className="text-white">Elevate Your</span>
                <br />
                <TypeAnimation
                  sequence={[
                    'Business',
                    3000,
                    'Operations',
                    3000,
                    'Workflow',
                    3000,
                    'Enterprise',
                    3000,
                  ]}
                  wrapper="span"
                  speed={30}
                  className="bg-gradient-to-r from-red-300 via-red-400 to-red-500 bg-clip-text text-transparent font-light"
                  repeat={Infinity}
                />
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light tracking-wide mb-12"
            >
              We craft sophisticated software solutions that transform enterprises, 
              streamline complex operations, and unlock unprecedented growth potential through innovative technology.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            >
              <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3}>
                <motion.button
                onClick={goContact}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-12 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-light tracking-wider relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.4 }}
                  />
                  <span className="relative z-10 flex items-center gap-3 group-hover:text-black transition-colors duration-300">
                    START PROJECT
                    <ArrowRight size={18} />
                  </span>
                </motion.button>
              </Tilt>

              {/* <motion.button
                whileHover={{ 
                  borderColor: "#ef4444",
                  color: "#ef4444",
                  backgroundColor: "rgba(239, 68, 68, 0.03)"
                }}
                className="px-12 py-4 border border-gray-700 text-gray-300 font-light tracking-wider transition-all duration-300"
              >
                EXPLORE WORK
              </motion.button> */}
            </motion.div>
          </div>

          {/* Services Grid */}
          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Tilt key={index} tiltMaxAngleX={5} tiltMaxAngleY={5}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group text-center p-8 backdrop-blur-sm bg-gradient-to-b from-white/5 to-transparent border border-gray-800/50 hover:border-red-900/30 transition-all duration-500"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-red-900/20 to-red-800/10 rounded-full flex items-center justify-center group-hover:from-red-800/30 group-hover:to-red-700/20 transition-all duration-300"
                    >
                      <Icon size={28} className="text-red-400 group-hover:text-red-300" />
                    </motion.div>
                    <h3 className="text-lg font-light text-white mb-2 tracking-wide">
                      {service.label}
                    </h3>
                    <p className="text-sm text-gray-400 font-light tracking-wide leading-relaxed">
                      {service.tech}
                    </p>
                  </motion.div>
                </Tilt>
              );
            })}
          </motion.div> */}
        </div>
      </motion.div>

      {/* Elegant scroll indicator */}
     
    </div>
  );
}
import React, { useState, useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { Points, PointMaterial, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import * as THREE from "three";
import WhiteLogoIcon from "../../../assets/logoIcon";
import useGoToContactPage from "../../Contact/contactFn";

// Create animated wave geometry
function AnimatedWaves() {
  const meshRef = useRef();
  const materialRef = useRef();

  // Create a plane geometry for the wave effect
  const geometry = new THREE.PlaneGeometry(20, 20, 100, 100);
  const positions = geometry.attributes.position;

  useFrame((state) => {
    if (meshRef.current && materialRef.current) {
      const time = state.clock.getElapsedTime();

      // Animate vertices to create wave effect
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const z =
          Math.sin(x * 0.5 + time * 2) * Math.cos(y * 0.5 + time * 1.5) * 0.8;
        positions.setZ(i, z);
      }
      positions.needsUpdate = true;

      // Animate material opacity and wireframe
      materialRef.current.opacity = 0.6 + Math.sin(time * 0.5) * 0.2;
      meshRef.current.rotation.z = time * 0.1;
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      position={[0, 0, -5]}
      rotation={[-Math.PI / 4, 0, 0]}
    >
      <meshBasicMaterial
        ref={materialRef}
        color="#ffffff"
        wireframe
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

// Floating geometric particles
function FloatingParticles({ count = 500 }) {
  const meshRef = useRef();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  // Initialize positions and colors
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 50;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30;

    colors[i * 3] = 1; // R
    colors[i * 3 + 1] = 1; // G
    colors[i * 3 + 2] = 1; // B
  }

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.y = time * 0.05;
      meshRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.3}
        transparent
        opacity={0.4}
        sizeAttenuation
        vertexColors
      />
    </points>
  );
}

// Animated rotating rings
function RotatingRings() {
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = time * 0.3;
      ring1Ref.current.rotation.y = time * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -time * 0.4;
      ring2Ref.current.rotation.z = time * 0.3;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = time * 0.5;
      ring3Ref.current.rotation.z = -time * 0.2;
    }
  });

  return (
    <group position={[5, 0, -3]}>
      <mesh ref={ring1Ref}>
        <torusGeometry args={[3, 0.05, 8, 50]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
      </mesh>
      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.5, 0.03, 8, 50]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.4} />
      </mesh>
      <mesh ref={ring3Ref}>
        <torusGeometry args={[2, 0.02, 8, 50]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

// Main 3D Scene
function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={0.3} />
      <AnimatedWaves />
      <FloatingParticles />
      <RotatingRings />
    </>
  );
}

export default function PremiumWebDevHero() {
  const goContact = useGoToContactPage();
  const [isMobile, setMobile] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    const checkMobile = () => {
      setMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-black text-white min-h-screen flex items-center overflow-hidden"
    >
      {/* Three.js Background */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 75 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </Canvas>
      </div>

      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Mobile Header - Logo centered */}

        {/* Desktop Header - Logo positioned top-right */}
        <div className="hidden md:block absolute top-6 right-6">
          <WhiteLogoIcon height={"80px"} width={"80px"} />
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 z-50">
        <div className="md:hidden flex justify-center pt-6">
          <WhiteLogoIcon height={"80px"} width={"80px"} />
        </div>
      </div>
      {/* Content */}
      <div
        className="relative z-10 w-full max-w-6xl mx-auto px-6 "
        style={{ marginTop:isMobile? "29%" :"20px"}}
      >
        <div className="max-w-4xl">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight mb-8"
          >
            <span className="text-gray-300">Web Development</span>
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl text-gray-400 font-light mb-8 h-16"
          >
            <TypeAnimation
              sequence={[
                "Modern. Fast. Scalable.",
                3000,
                "Beautiful. Functional. Reliable.",
                3000,
                "Innovative. Secure. Professional.",
                3000,
              ]}
              wrapper="div"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl"
          >
            We craft exceptional web experiences that combine cutting-edge
            technology with thoughtful design. From concept to deployment, we
            deliver solutions that drive real business results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <motion.button
            onClick={goContact}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-white text-black rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gray-100"
            >
              <span className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/20 rounded-lg font-semibold text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
            >
              View Our Work
            </motion.button> */}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-3 gap-8 pt-16 mt-16 border-t border-white/10"
          >
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "99%", label: "Success Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <motion.div
                  className="text-3xl md:text-4xl font-light text-white mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect, useMemo } from "react";
import * as THREE from "three";
import ScriptixLanding from "./FirstSection";
import TechCarousel from "./SecondSection";
import CompanyLogo from "../../assets/title.png"
import LuxuryLightProcess from "./thirdSection";
import ServicesShowcase from "./workSection";
import LuxuryPartnerSection from "./FourthSection";

// --- FloatingParticles and AdvancedTechScene components remain the same ---
// (Your original code for these components goes here)

function FloatingParticles({ particleCount = 100 }) {
  const particlesRef = useRef(null);

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50;

      const intensity = 0.7 + Math.random() * 0.3;
      col[i * 3] = intensity;
      col[i * 3 + 1] = intensity * 0.75;
      col[i * 3 + 2] = 0;
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
        size={0.2}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function AdvancedTechScene() {
  const groupRef = useRef(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = 0;
      groupRef.current.rotation.y = 0;
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.8} color="#ffbf00" />
      <directionalLight position={[15, 15, 10]} intensity={1.2} color="#ffbf00" />
      <pointLight position={[0, 0, 15]} intensity={1.5} color="#ffbf00" />
      <pointLight position={[-15, -15, -10]} intensity={1.0} color="#ff8c00" />
      <pointLight position={[10, -10, 5]} intensity={0.8} color="#ffa500" />

      <group ref={groupRef}>
        <mesh position={[0, 0, -5]}>
          <icosahedronGeometry args={[2.5, 2]} />
          <meshPhysicalMaterial
            color="#ffbf00"
            metalness={0.7}
            roughness={0.2}
            transparent
            opacity={0.7}
            wireframe
            envMapIntensity={1.5}
            emissive="#ff8c00"
            emissiveIntensity={0.3}
          />
        </mesh>

        <mesh position={[8, 4, -8]} rotation={[0.5, 0.3, 0]}>
          <octahedronGeometry args={[1, 1]} />
          <meshPhysicalMaterial
            color="#ffa500"
            metalness={0.6}
            roughness={0.3}
            transparent
            opacity={0.6}
            wireframe
            emissive="#ffa500"
            emissiveIntensity={0.2}
          />
        </mesh>

        <mesh position={[-6, -3, -10]} rotation={[0.8, 0.2, 0.5]}>
          <tetrahedronGeometry args={[1.5, 0]} />
          <meshPhysicalMaterial
            color="#ffa500"
            metalness={0.5}
            roughness={0.4}
            transparent
            opacity={0.6}
            wireframe
            emissive="#ffa500"
            emissiveIntensity={0.25}
          />
        </mesh>
      </group>

      <FloatingParticles particleCount={120} />
    </>
  );
}

export default function EnhancedProfessionalAboutUs() {
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

  const LensFlare = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-radial from-purple-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-radial from-pink-400/30 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/2 w-24 h-24 bg-gradient-radial from-cyan-400/25 to-transparent rounded-full blur-xl animate-pulse delay-2000"></div>
      <div
        className="absolute top-2/3 right-1/5 w-16 h-16 bg-white/10 rotate-12 animate-spin-slow"
        style={{
          clipPath:
            "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
        }}
      ></div>
      <div
        className="absolute top-1/5 right-2/5 w-12 h-12 bg-purple-400/20 rotate-45 animate-spin-slow delay-500"
        style={{
          clipPath:
            "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
        }}
      ></div>
    </div>
  );

  return (
    <div className="bg-black text-white">
      {/* Logo Component */}
    

      {/* Section 1: Landing Page with 3D Background */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Container */}
        <div className="absolute inset-0 z-0">
          <Canvas
            camera={{ position: [0, 0, 10], fov: 60 }}
            gl={{ alpha: true, antialias: true }}
            style={{ background: "transparent" }}
          >
            <Suspense fallback={null}>
              <AdvancedTechScene />
              {!isMobile && (
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  autoRotate={false}
                  autoRotateSpeed={0.2}
                />
              )}
            </Suspense>
          </Canvas>
          <LensFlare />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 h-full">
          <ScriptixLanding />
        </div>
      </div>

      
      <div className="relative mt-10" >
        <ServicesShowcase/>
        <TechCarousel />
        <LuxuryLightProcess/>
        <LuxuryPartnerSection/>
      </div>
    </div>
  );
}

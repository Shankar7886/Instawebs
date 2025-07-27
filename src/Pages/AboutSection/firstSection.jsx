import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import WhiteLogoIcon from "../../assets/logoIcon"

// Dynamic Network Graph
function NetworkGraph() {
  const linesRef = useRef();
  const pointsRef = useRef();

  const { nodes, connections } = useMemo(() => {
    const nodeCount = 50;
    const nodes = [];
    const connections = [];

    // Generate nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10
        ],
        id: i
      });
    }

    // Generate connections between nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = Math.sqrt(
          Math.pow(nodes[i].position[0] - nodes[j].position[0], 2) +
          Math.pow(nodes[i].position[1] - nodes[j].position[1], 2) +
          Math.pow(nodes[i].position[2] - nodes[j].position[2], 2)
        );
        
        if (distance < 5 && Math.random() > 0.7) {
          connections.push([nodes[i], nodes[j], distance]);
        }
      }
    }

    return { nodes, connections };
  }, []);

  useFrame((state) => {
    if (linesRef.current && pointsRef.current) {
      linesRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      pointsRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  // Create line geometry
  const lineGeometry = useMemo(() => {
    const points = [];
    connections.forEach(([nodeA, nodeB]) => {
      points.push(...nodeA.position);
      points.push(...nodeB.position);
    });
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    return geometry;
  }, [connections]);

  // Create points geometry
  const pointsGeometry = useMemo(() => {
    const positions = new Float32Array(nodes.length * 3);
    nodes.forEach((node, i) => {
      positions[i * 3] = node.position[0];
      positions[i * 3 + 1] = node.position[1];
      positions[i * 3 + 2] = node.position[2];
    });
    return positions;
  }, [nodes]);

  return (
    <group>
      {/* Connection Lines */}
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial color="#ffffff" transparent opacity={0.1} />
      </lineSegments>
      
      {/* Network Nodes */}
      <Points ref={pointsRef} positions={pointsGeometry} stride={3}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.02}
          sizeAttenuation={true}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

// Floating Data Visualization
function DataVisualization() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={meshRef} position={[0, 0, -8]}>
      {/* Wireframe Torus for elegant geometric shape */}
      <mesh>
        <torusGeometry args={[3, 0.5, 8, 32]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.08} />
      </mesh>
      
      {/* Inner rotating ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2, 0.2, 6, 24]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.05} />
      </mesh>
    </group>
  );
}

export default function AboutHeroSection() {
  return (
    <>
       <div className="fixed top-0 left-0 right-0 z-50">
        

       
        <div className="hidden md:block absolute top-6 right-6">
          <WhiteLogoIcon height={"80px"} width={"80px"}/>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 z-50">
         <div className="md:hidden flex justify-center pt-6">
          <WhiteLogoIcon height={"80px"} width={"80px"}/>
        </div>
      </div>
        <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      
     
   
      
      {/* Dynamic 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.3} />
          <NetworkGraph />
          <DataVisualization />
        </Canvas>
      </div>

      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
      
      {/* Dynamic Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      {/* Animated Code Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{
              top: `${10 + i * 12}%`,
              left: '-100%',
              width: '200%',
            }}
            animate={{
              x: ['0%', '100%'],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 px-8">
        
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="space-y-8"
        >
          
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-6xl md:text-8xl font-light leading-tight pt-10"
          >
            <span className="block text-white/90">We Craft</span>
            <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent font-extralight pb-8">
              Digital Excellence
            </span>
          </motion.h1>

          {/* Elegant Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <p className="text-xl md:text-2xl font-light text-white/70 leading-relaxed">
              Transforming visions into sophisticated digital experiences through 
              precision engineering and innovative design.
            </p>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-white/50">
              <span>Web Applications</span>
              <div className="w-1 h-1 bg-white/30 rounded-full"></div>
              <span>Software Solutions</span>
              <div className="w-1 h-1 bg-white/30 rounded-full"></div>
              <span>Digital Strategy</span>
            </div>
          </motion.div>

          {/* Minimal CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="pt-8"
          >
            <motion.button
              whileHover={{ 
                scale: 1.02,
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-12 py-4 border border-white/30 rounded-full backdrop-blur-sm transition-all duration-500 hover:border-white/50"
            >
              <span className="text-lg font-light text-white/90 tracking-wide">
                Scroll to learn
              </span>
              <motion.div
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white/60">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </motion.button>
          </motion.div>

        </motion.div>

       

      </div>
    </section>
    </>
  
  );
}
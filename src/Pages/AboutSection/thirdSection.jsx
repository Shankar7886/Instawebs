import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Shankar Yadav",
    role: "Founder & Lead Developer",
    initials: "SY",
    description: "Visionary leader driving innovation",
    details: [
      "Business Development",
      "Team Leadership",
      "Frontend Development",
      "API Integration",
    ],
  },
  {
    name: "Azad",
    role: "Full Stack Developer",
    initials: "AZ",
    description: "Building robust digital solutions",
    details: [
      "Frontend Development",
      "Backend Architecture",
      "Database Design",
      "API Integration",
    ],
  },

  {
    name: "Santosh ",
    role: "Sales Manager",
    initials: "SH",
    description: "Coordinating seamless delivery",
    details: [
      "Project Planning",
      "Team Coordination",
      "Quality Assurance",
      "Client Communication",
    ],
  },
  {
    name: "Priya Singh",
    role: "Lead UI/UX Designer",
    initials: "PS",
    description: "Creating beautiful user experiences",
    details: [
      "User Interface Design",
      "User Experience Research",
      "Prototyping",
      "Design Systems",
    ],
  },
];

const TypingAnimation = ({ text, delay = 0, shouldStart = false }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  // Reset when text changes or shouldStart changes
  useEffect(() => {
    setDisplayText("");
    setCurrentIndex(0);
    setIsTyping(false);

    if (shouldStart) {
      const timer = setTimeout(() => {
        setIsTyping(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [text, delay, shouldStart]);

  // Typing logic
  useEffect(() => {
    if (!isTyping) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50 + Math.random() * 30);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, isTyping]);

  return (
    <span className="font-mono">
      {displayText}
      {isTyping && currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="text-cyan-400"
        >
          |
        </motion.span>
      )}
    </span>
  );
};

const CodeBlock = ({ member, index }) => {
  const [showSkills, setShowSkills] = useState(false);
  const [skillAnimations, setSkillAnimations] = useState([]);

  useEffect(() => {
    // Start role typing first
    const roleTimer = setTimeout(() => {
      // After role is done, start skills
      const skillsTimer = setTimeout(() => {
        setShowSkills(true);
        // Stagger skill animations
        const animations = member.details.map((_, skillIndex) => {
          setTimeout(() => {
            setSkillAnimations((prev) => [...prev, skillIndex]);
          }, skillIndex * 300);
        });
      }, 1000); // Wait for role to finish

      return () => clearTimeout(skillsTimer);
    }, index * 500 + 800);

    return () => clearTimeout(roleTimer);
  }, [member.details, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="text-left"
    >
      <div className="font-mono text-sm text-gray-500 mb-2">
        <span className="text-purple-400">const</span>{" "}
        <span className="text-cyan-400">team{index + 1}</span>{" "}
        <span className="text-white">=</span>{" "}
        <span className="text-yellow-400">{"{"}</span>
      </div>

      <div className="ml-4 space-y-1">
        {/* Name */}
        <div className="font-mono text-sm">
          <span className="text-red-400">name</span>
          <span className="text-white">:</span>{" "}
          <span className="text-green-400">"{member.name}"</span>
          <span className="text-white">,</span>
        </div>

        {/* Role */}
        <div className="font-mono text-sm">
          <span className="text-red-400">role</span>
          <span className="text-white">:</span>{" "}
          <span className="text-green-400">"</span>
          <TypingAnimation text={member.role} delay={0} shouldStart={true} />
          <span className="text-green-400">"</span>
          <span className="text-white">,</span>
        </div>

        {/* Skills */}
        <div className="font-mono text-sm">
          <span className="text-red-400">skills</span>
          <span className="text-white">: [</span>
        </div>

        {showSkills && (
          <div className="ml-4 space-y-1">
            {member.details.map((detail, detailIndex) => (
              <div key={detailIndex} className="font-mono text-sm">
                <span className="text-green-400">"</span>
                <TypingAnimation
                  text={detail}
                  delay={0}
                  shouldStart={skillAnimations.includes(detailIndex)}
                />
                <span className="text-green-400">"</span>
                {detailIndex < member.details.length - 1 && (
                  <span className="text-white">,</span>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="font-mono text-sm">
          <span className="text-white">]</span>
        </div>
      </div>

      <div className="font-mono text-sm text-yellow-400">{"}"};</div>

      {/* Terminal Cursor */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 500 + 4000 }}
        className="flex items-center mt-2 font-mono text-sm text-gray-500"
      >
        <span className="text-green-400">$</span>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="ml-1 text-cyan-400"
        >
          _
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default function TeamSection() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="font-mono text-sm text-gray-500 mb-4">
            <span className="text-purple-400">// </span>
            Meet our development team
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Our <span style={{ color: "grey" }}>{"<Team />"}</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Passionate developers and creative minds working together to build
            extraordinary digital experiences that transform businesses.
          </motion.p>
        </motion.div>

        {/* Team Code Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative">
              {/* Terminal Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-2 mb-4"
              >
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="font-mono text-xs text-gray-500 ml-2">
                  team-member-{index + 1}.js
                </span>
              </motion.div>

              {/* Code Block */}
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 relative overflow-hidden">
                <CodeBlock member={member} index={index} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gray-900 border border-gray-800 rounded-lg p-4">
            <div className="font-mono text-sm text-gray-500">
              <span className="text-green-400">console.log</span>
              <span className="text-white">(</span>
              <span className="text-yellow-400">"</span>
              <TypingAnimation
                text="Ready to build something amazing together!"
                delay={2000}
                shouldStart={true}
              />
              <span className="text-yellow-400">"</span>
              <span className="text-white">);</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

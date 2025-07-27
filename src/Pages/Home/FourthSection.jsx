import { motion } from "framer-motion";
import { Star, Users, Award, Clock, Crown } from "lucide-react";
import video1 from "../../assets/8426049-uhd_3840_2160_25fps.mp4";
import useGoToContactPage from "../Contact/contactFn";

const reasons = [
  {
    icon: Star,
    title: "Elite Development",
    description: "World-class engineers craft sophisticated solutions with precision.",
    color: "#FACC15", // Gold
  },
  {
    icon: Users,
    title: "Partnership Excellence",
    description: "Lasting relationships built on trust and mutual success.",
    color: "#A78BFA", // Purple
  },
  {
    icon: Award,
    title: "Uncompromising Quality",
    description: "Rigorous testing ensures flawless performance.",
    color: "#22D3EE", // Cyan
  },
  {
    icon: Clock,
    title: "Precision Delivery",
    description: "Exceptional results delivered exactly when promised.",
    color: "#34D399", // Emerald
  },
];

export default function LuxuryPartnerSection() {
  const goContact = useGoToContactPage();
  return (
    <section className="relative w-full bg-black py-20 overflow-hidden">
      {/* Luxury Glow Blobs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-purple-800 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-cyan-700 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-gray-300 text-xs"
            whileHover={{ scale: 1.02 }}
          >
            <Crown className="w-3 h-3 text-yellow-400" />
            <span className="font-medium tracking-widest uppercase">
              Premium Partnership
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-extralight mb-3 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400">
            Why Choose
            <span className="block">Instawebs</span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto font-light">
            Where cutting-edge technology meets unparalleled expertise
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(255,255,255,0.1)] border border-white/10">
              <div className="aspect-video relative">
                <video
                  className="w-full h-full object-cover"
                  src={video1}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>
          </motion.div>

          {/* Reasons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((item, index) => (
                <motion.div
                  key={index}
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: `${item.color}22`,
                        border: `1px solid ${item.color}55`,
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <item.icon
                        className="w-5 h-5"
                        style={{ color: item.color }}
                      />
                    </motion.div>
                    <div className="text-xl font-light text-gray-300">
                      0{index + 1}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3
                      className="text-lg font-light"
                      style={{ color: item.color }}
                    >
                      {item.title}
                    </h3>

                    <motion.div
                      className="h-px rounded-full"
                      style={{
                        background: `linear-gradient(to right, ${item.color}, transparent)`,
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: "50%" }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />

                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-full font-light tracking-wide shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={goContact}
          >
            <span>Start Your Journey</span>
            <div className="w-2 h-2 bg-white rounded-full" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

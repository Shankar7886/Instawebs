import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { 
  Smartphone, 
  ArrowRight,
  Play,
  Apple,
  PlayCircle,
  Star
} from "lucide-react";
import mobilehero from "../../../assets/mobilehero.png";
import WhiteLogoIcon from "../../../assets/logoIcon";
import useGoToContactPage from "../../Contact/contactFn";

export default function MobileHero() {
  const goContact = useGoToContactPage();
  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px]"></div>
      </div>
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
      

      <div className="relative max-w-7xl mx-auto px-6 mt-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative max-w-lg mx-auto">
              <img 
                src={mobilehero}
                alt="Mobile App Development"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-pink-500/30"
              >
                <PlayCircle className="w-6 h-6 text-pink-400" />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/30"
              >
                <Apple className="w-6 h-6 text-purple-400" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-flex items-center gap-3 bg-gray-900/60 px-4 py-2 rounded-full border border-gray-700"
            >
              <Smartphone className="text-pink-400 w-5 h-5" />
              <span className="text-sm font-medium text-pink-400 tracking-wide">
                Mobile App Development
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-5xl md:text-6xl font-light leading-tight"
              >
                <span className="text-white">Build Amazing</span>
                <br />
                <TypeAnimation
                  sequence={[
                    'iOS Apps',
                    2000,
                    'Android Apps',
                    2000,
                    'Mobile Solutions',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
                  repeat={Infinity}
                />
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-xl text-gray-300 leading-relaxed max-w-lg"
              >
                Transform your ideas into powerful mobile applications that users love. 
                We create stunning, high-performance apps for iOS and Android.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
              onClick={goContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 text-lg rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-pink-500/30 transition-all duration-300 flex items-center justify-center gap-3"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              
            </motion.div>

            {/* Stats */}
        
          </motion.div>
        </div>
      </div>
    </section>
  );
}
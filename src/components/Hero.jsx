import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { JavaCanvas } from "./canvas";
import Typewriter from "typewriter-effect";

import { logo } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>


        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full gap-10 z-10">
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">Ameen</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I do
              <Typewriter
                options={{
                  strings: ["API Dev & Deployment", "Web Development", "AI Chatbot Integration (Coming Soon)"],
                  autoStart: true,
                  loop: true,
                  loopCount: Infinity,
                  deleteSpeed: "natural",
                  pauseFor: 1000,
                }}
              />
            </p>
          </div>

          <div className="hidden lg:block relative w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60 rounded-full overflow-hidden border-[#915EFF]/20 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] flex-shrink-0 group">
            <img
              src={logo}
              alt="Ameen"
              className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      <JavaCanvas />

      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;

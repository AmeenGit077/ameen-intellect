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
          <div className="flex flex-col items-start">
            {/* Figma Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide mb-4 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400"></span>
              Available for senior opportunities
            </div>

            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 text-transparent bg-clip-text">Ameen</span>
            </h1>
            <div className={`${styles.heroSubText} mt-2 text-white-100 flex flex-row items-center gap-2 flex-wrap`}>
              <span>I do</span>
              <span className="text-[#06b6d4] font-semibold">
                <Typewriter
                  options={{
                    strings: ["API Dev & Deployment", "Web Development", "AI Chatbot Integration"],
                    autoStart: true,
                    loop: true,
                    loopCount: Infinity,
                    deleteSpeed: "natural",
                    pauseFor: 1000,
                  }}
                />
              </span>
            </div>

            {/* Figma CTA Buttons */}
            <div className="flex flex-row items-center gap-4 mt-8">
              <a
                href="#about"
                className="figma-btn-gradient px-6 py-3 rounded-xl font-bold text-white text-[15px] shadow-lg shadow-purple-500/25 hover:scale-105 transition-all text-center"
              >
                View My Work
              </a>
              <a
                href="/contact"
                className="bg-[#12121A]/80 backdrop-blur-lg border border-white/10 hover:border-purple-500/40 text-white px-6 py-3 rounded-xl font-semibold text-[15px] hover:scale-105 transition-all text-center"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="hidden lg:block relative w-32 h-32 sm:w-48 sm:h-48 lg:w-60 lg:h-60 rounded-full overflow-hidden border-2 border-[#8b5cf6]/30 shadow-2xl shadow-purple-500/20 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] flex-shrink-0 group">
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

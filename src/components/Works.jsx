import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring")}>
      <Tilt
        options={{
          max: 30,
          scale: 1.02,
          speed: 450,
        }}
        className="bg-[#12121A]/85 backdrop-blur-xl p-6 rounded-2xl sm:w-[380px] w-full border border-white/10 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        <div className="relative w-full h-[220px] rounded-xl overflow-hidden bg-[#0D0925]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12121A] via-transparent to-transparent opacity-60" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="w-10 h-10 rounded-full bg-[#12121A]/90 border border-white/20 flex justify-center items-center cursor-pointer shadow-lg hover:scale-110 hover:border-cyan-400 transition-all"
              title="View Source Code on GitHub"
            >
              <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <span className="text-xs font-semibold text-[#06b6d4] tracking-wider uppercase">Featured Architecture</span>
          <h3 className="text-white font-bold text-[22px] tracking-tight mt-1">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed line-clamp-3">{description}</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2 pt-2 border-t border-white/5">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-[#dfd9ff]/85 hover:border-purple-500/30 transition-colors"
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Work</p>
        <h2 className={`${styles.sectionHeadText}`}>Featured Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through examples
          of my work. Each project is briefly described with git hub link to code
          repositories in it.
        </motion.p>
      </div>
      <div className="mt-20 grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),360px))] justify-center gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");

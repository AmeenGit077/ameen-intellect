import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    className="xs:w-[260px] w-full"
    variants={fadeIn('right', 'spring', index * 0.15, 0.5)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.1 }}
  >
    <Tilt
      options={{
        max: 35,
        scale: 1.02,
        speed: 450,
        gyroscope: false,
      }}
      className="bg-[#12121A]/80 backdrop-blur-xl rounded-2xl py-6 px-8 min-h-[260px] flex justify-between items-center flex-col border border-white/10 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <div className="w-16 h-16 rounded-2xl bg-[#1D1836]/90 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
        <img src={icon} alt={title} className="w-10 h-10 object-contain" loading="lazy" />
      </div>

      <div className="text-center my-2">
        <h3 className="text-white text-[19px] font-bold tracking-tight">{title}</h3>
        <span className="text-[12px] text-[#06b6d4] font-medium tracking-wide block mt-1">Expertise: Advanced</span>
      </div>

      <div className="w-full h-1 rounded-full bg-white/5 overflow-hidden">
        <div className="h-full w-4/5 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] rounded-full group-hover:w-full transition-all duration-500"></div>
      </div>
    </Tilt>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview &amp; Philosophy</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Senior Software Developer with <span className="text-white font-semibold">9+ years</span> of
        hands-on experience architecting and delivering scalable enterprise solutions. Expert in
        <span className="text-white font-semibold"> Java, Spring Boot, Microservices</span>,
        and <span className="text-white font-semibold">Full-Stack Development</span> with React.
        Proven track record of building high-performance APIs, real-time systems, and data-driven
        platforms across <span className="text-white font-semibold">Telecom, AdTech, Healthcare,
          and IoT</span> domains. Passionate about clean code, system optimization, and transforming
        complex requirements into elegant technical solutions.
      </motion.p>

      {/* Figma Stats Grid */}
      <motion.div
        variants={fadeIn('up', 'spring', 0.2, 0.75)}
        className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl"
      >
        <div className="bg-[#12121A]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-purple-500/40 transition-all">
          <h4 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">9+</h4>
          <p className="text-secondary text-xs sm:text-sm font-medium mt-1">Years Experience</p>
        </div>
        <div className="bg-[#12121A]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-cyan-500/40 transition-all">
          <h4 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-400 to-teal-300 text-transparent bg-clip-text">40+</h4>
          <p className="text-secondary text-xs sm:text-sm font-medium mt-1">Projects Delivered</p>
        </div>
      </motion.div>

      <div className="mt-14 sm:mt-16 flex flex-wrap gap-6 sm:gap-7 justify-center sm:justify-start">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;

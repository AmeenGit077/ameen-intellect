import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    className="xs:w-[250px] w-full"
    variants={fadeIn('right', 'spring', index * 0.2, 0.5)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.1 }}
  >
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
        gyroscope: false,
      }}
      className="bg-tertiary/20 backdrop-blur-lg rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border border-white/10 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <img src={icon} alt="web-development" className="w-16 h-16 object-contain" loading="lazy" />

      <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
    </Tilt>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Senior Software Developer with <span className="text-white font-semibold">8+ years</span> of
        hands-on experience architecting and delivering scalable enterprise solutions. Expert in
        <span className="text-white font-semibold"> Java, Spring Boot, Microservices</span>,
        and <span className="text-white font-semibold">Full-Stack Development</span> with React.
        Proven track record of building high-performance APIs, real-time systems, and data-driven
        platforms across <span className="text-white font-semibold">Telecom, AdTech, Healthcare,
          and IoT</span> domains. Passionate about clean code, system optimization, and transforming
        complex requirements into elegant technical solutions.
      </motion.p>

      <div className="mt-10 sm:mt-20 flex flex-wrap gap-6 sm:gap-10 justify-center sm:justify-start">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;

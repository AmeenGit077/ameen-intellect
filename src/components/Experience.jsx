import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "rgba(18, 18, 26, 0.85)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.08)",
      borderRadius: "16px",
      color: "#fff",
      boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.6)",
    }}
    contentArrowStyle={{ borderRight: "7px solid rgba(18, 18, 26, 0.85)" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg, boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" }}
    iconOnClick={() => window.open(experience.company_link, "_blank")}
    icon={
      <div className="flex justify-center items-center w-full h-full cursor-pointer">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain transition-transform duration-300 hover:scale-125"
        />
      </div>
    }
  >
    <div>
      <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-2">
        FULL-TIME ROLE
      </span>
      <h3 className="text-white text-[22px] font-bold tracking-tight">{experience.title}</h3>
      <p className="text-[#06b6d4] text-[15px] font-semibold mt-1" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2.5">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-[#dfd9ff]/90 text-[14px] pl-1 tracking-wide leading-relaxed font-normal"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>
        Timeline of Craft
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Work Experience.</h2>
    </motion.div>

    <div className="mt-8 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export default Experience;

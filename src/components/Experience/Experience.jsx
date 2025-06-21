import React from "react";
import "./Experience.css";
import { FaGraduationCap } from "react-icons/fa6";
import { TbBrandToyota } from "react-icons/tb";
import { GiAchievement } from "react-icons/gi";
import { CgWorkAlt } from "react-icons/cg";
import { motion } from "framer-motion";

const experienceData = [
  {
    id: 1,
    title: "Mechatronics Engineering Graduation",
    company: "Necmettin Erbakan University",
    icon: <FaGraduationCap size={32} />,
    date: "Sept 2018 - July 2022",
    description: [
      "Graduated from Necmettin Erbakan University with a focus on control systems, automation, and robotics.",
      "Final Year Project: Balance Robot using STMF103 microcontroller.",
      "Worked on complex robotics systems with hardware and software integration.",
    ],
  },
  {
    id: 2,
    title: "Engineer Intern",
    company: "Toyota",
    icon: <TbBrandToyota size={32} />,
    date: "June 2020 – Aug 2020",
    description: [
      "Completed a 30-day internship focused on automotive systems and engineering.",
      "Used SolidWorks, AutoCAD, and Siemens NX for vehicle component design.",
      "Collaborated with engineers to troubleshoot and improve designs.",
    ],
  },
  {
    id: 3,
    title: "Ctrl+ Future Bootcamp",
    company: "Koç Holding and Microsoft",
    icon: <GiAchievement size={32} />,
    date: "Jul 2023 – Sep 2023",
    description: [
      "Learned front-end development with React.js and JavaScript.",
      "Gained hands-on experience in Node.js for API integrations.",
      "Worked on real-world projects and team-based coding challenges.",
    ],
  },
  {
    id: 4,
    title: "Software Developer Intern",
    company: "Yapı Kredi Technology ",
    icon: <CgWorkAlt size={32} />,
    date: "NOV 2023 – Oct 2024",
    description: [
      "Developed and maintained user interfaces using React.js.",
      "Collaborated with backend teams for API integration.",
      "Optimized UI/UX components and improved rendering performance.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="timeline">
        {experienceData.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div className="timeline-item" key={item.id}>
              <div className="timeline-icon">{item.icon}</div>
              <motion.div
                className={`timeline-content ${isLeft ? "left" : "right"}`}
                initial={{ x: isLeft ? -200 : 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, type: "spring" }}
              >
                <h3>{item.title}</h3>
                <h4>{item.company}</h4>
                <p className="timeline-date">{item.date}</p>
                <ul>
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;

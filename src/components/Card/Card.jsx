import React from "react";
import "./Card.css";
import { motion } from "framer-motion";
import StarBackground from "../../Starbackground";

const skillGroups = [
  {
    title: "Programming",
    items: [
      "JavaScript",
      "Python",
      "C",
      "C++",
      "C#",
      "Node.js",
      "React.js",
      "Vue.js",
    ],
  },
  {
    title: "Frontend",
    items: ["HTML", "CSS", "Bootstrap", "Tailwind"],
  },
  {
    title: "Tools",
    items: ["VS Code", "Figma", "Git & Github", "SolidWorks", "ROS"],
  },
];

export default function Card() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-card-wrapper">
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            className="skill-card"
            whileHover={{
              rotateY: 15,
              rotateX: -5,
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 },
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="stars-bg">
              <StarBackground />
            </div>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

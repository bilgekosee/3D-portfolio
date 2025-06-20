import React from "react";
import "./Project.css";
import { BsGithub } from "react-icons/bs";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const ProjectItem = [
  {
    id: "1",
    projectTitle: "Japanese Learn",
    githubLink: "https://github.com/bilgekosee/japanese-app?tab=readme-ov-file",
    img: "./japanese.png",
    projectContent:
      "A creative learning tool designed to make mastering Japanese alphabets enjoyable. With pixel-art illustrations and audio pronunciations, users can learn while interacting with visual and auditory cues.",
    tags: ["react", "pixel-art"],
  },
  {
    id: "2",
    projectTitle: "Vocabulary Card",
    githubLink:
      "https://github.com/bilgekosee/vocabulary-card-api?tab=readme-ov-file",
    img: "./vocabulary.png",
    projectContent:
      "A customizable flashcard app designed to make English vocabulary learning more effective and engaging.",
    tags: ["react", "mongodb", "node"],
  },
  {
    id: "3",
    projectTitle: "Music Player",
    githubLink: "https://github.com/bilgekosee/music-player?tab=readme-ov-file",
    img: "./music.png",
    projectContent:
      "A clean and functional music player built with React. It allows users to play, pause, and skip tracks.",
    tags: ["react", "css", "api"],
  },
  {
    id: "4",
    projectTitle: "Flight Clone",
    githubLink:
      "https://github.com/bilgekosee/case-google-flight?tab=readme-ov-file",
    img: "./flight.png",
    projectContent:
      "A clone of the Google Flights interface built with React. Allows selecting dates, destinations, and more.",
    tags: ["react", "css", "api"],
  },
  {
    id: "5",
    projectTitle: "Pomodoro",
    githubLink: "https://github.com/bilgekosee/pomodoro",
    img: "./pomodoro.png",
    projectContent:
      "A productivity app based on the Pomodoro technique with task and timer features.",
    tags: ["react", "tailwind"],
  },
  {
    id: "6",
    projectTitle: "E-Plants",
    githubLink: "https://github.com/bilgekosee/e-plants",
    img: "./plants.png",
    projectContent:
      "A clean and modern UI design for a plant-themed e-commerce website.",
    tags: ["react", "css"],
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="project-container">
        <div className="project-title">
          <span>Projects</span>
        </div>
        <div className="project-wrapper">
          {ProjectItem.map((item, index) => (
            <Tilt
              key={item.id}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.05}
              transitionSpeed={1000}
            >
              <motion.div
                className="project-card-container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="card-img">
                  <a
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-icon"
                  >
                    <BsGithub className="github-icons" />
                  </a>
                  <img src={item.img} alt={item.projectTitle} />
                </div>
                <div className="card-content-wrapper">
                  <div className="card-title">{item.projectTitle}</div>
                  <div className="card-content">{item.projectContent}</div>
                  <div className="card-tags">
                    {item.tags.map((tag, i) => (
                      <span key={i} className={`tag tag-${tag.toLowerCase()}`}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

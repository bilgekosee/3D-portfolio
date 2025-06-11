import React, { useEffect, useState } from "react";
import "./About.css";
import Lottie from "lottie-react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [animationData, setAnimationData] = useState(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  useEffect(() => {
    fetch("/3d-lottiegif.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Lottie yükleme hatası:", error));
  }, []);
  return (
    <section id="about" ref={ref}>
      <div className={`about-container ${inView ? "animate" : ""}`}>
        <Lottie
          animationData={animationData}
          loop={true}
          className="lottie-gif animate-left"
        />
        <div className="content-wrapper animate-right">
          <div className="about-title">Hi, I'm Bilge</div>
          <div className="unvan">Frontend Developer</div>
          <div className="about-content">
            <p>
              Hi, I'm Bilge, a frontend developer passionate about building
              modern, user-friendly web applications. I specialize in React.js,
              JavaScript, and CSS, and I’m actively expanding my skills in
              Node.js to grow as a full-stack developer. In my most recent role
              at Yapı Kredi Technology, I developed and maintained complex user
              interfaces, collaborated with backend teams for seamless API
              integration, and focused on improving UI performance and
              scalability. I also gained practical experience in applying best
              practices through code reviews and teamwork. I’ve completed a
              comprehensive bootcamp where I worked on real-world projects using
              React and Node.js, and I continue to build side projects to
              sharpen my frontend and backend skills. I’m comfortable working
              with version control (Git), component-based architecture, and
              modern development tools. I'm driven by clean code, intuitive
              design, and meaningful user experiences. This portfolio showcases
              what I've built and what I’m capable of let’s create something
              great together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

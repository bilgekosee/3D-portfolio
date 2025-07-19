import "./Contact.css";
import EarthModel from "../../Earthmodel";
import { motion } from "framer-motion";
import { Suspense } from "react";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-container">
        <motion.div
          className="info-container"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            delay: 0.2,
            type: "tween",
          }}
          viewport={{ once: true }}
        >
          <input type="text" placeholder="What's your name?" />
          <input type="text" placeholder="What's your email?" />
          <textarea
            rows="10"
            cols="50"
            placeholder="What's your message?"
          ></textarea>
        </motion.div>

        <motion.div
          className="earth"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            delay: 0.4,
            type: "tween",
          }}
          viewport={{ once: true }}
        >
          <Suspense fallback={null}>
            <EarthModel />
          </Suspense>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;

import "./Contact.css";
import EarthModel from "../../Earthmodel";
import { motion } from "framer-motion";
import { Suspense, useState } from "react";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  const { ref: earthRef, inView: earthInView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form gönderiliyor");

    try {
      const res = await fetch("http://localhost:5001/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Email sent successfully");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send email");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("⚠️ Something went wrong");
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-container">
        <motion.form
          ref={formRef}
          className="info-container"
          onSubmit={handleSubmit}
          initial={{ x: -200, opacity: 0 }}
          animate={formInView ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            delay: 0.2,
            type: "tween",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="What's your name?"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="email"
            placeholder="What's your email?"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            rows="10"
            cols="50"
            name="message"
            placeholder="What's your message?"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send</button>
        </motion.form>

        <motion.div
          ref={earthRef}
          className="earth"
          initial={{ x: 200, opacity: 0 }}
          animate={earthInView ? { x: 0, opacity: 1 } : { x: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            delay: 0.4,
            type: "tween",
          }}
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

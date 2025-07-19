import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaCode, FaBrain, FaRocket } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const features = [
    {
      icon: <FaCode />,
      title: "Full-Stack Development",
      description: "Proficient in MERN stack with modern web technologies"
    },
    {
      icon: <FaBrain />,
      title: "Machine Learning",
      description: "Expertise in AI/ML with TensorFlow and scikit-learn"
    },
    {
      icon: <FaGraduationCap />,
      title: "Research Enthusiast",
      description: "Passionate about innovative tech and algorithms"
    },
    {
      icon: <FaRocket />,
      title: "Cloud Technologies",
      description: "Experience with AWS and modern deployment practices"
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Passionate Developer & Innovator</h3>
            <p>
              I'm a second-year Computer Science Engineering student at Manipal University, Jaipur, 
              with a deep passion for creating innovative solutions that make a difference. My journey 
              in technology started with curiosity and has evolved into a commitment to excellence in 
              software development and data science.
            </p>
            <p>
              I specialize in full-stack development using the MERN stack, machine learning with Python, 
              and cloud technologies. My projects range from network monitoring tools to AI-powered 
              healthcare applications, showcasing my ability to tackle complex problems with creative solutions.
            </p>
            <p>
              When I'm not coding, you'll find me exploring the latest in AI research, contributing to 
              open-source projects, or mentoring fellow developers. I believe in continuous learning and 
              pushing the boundaries of what's possible with technology.
            </p>
          </motion.div>

          <motion.div
            className="about-features"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="features-grid">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 
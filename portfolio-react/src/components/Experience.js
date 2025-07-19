import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaCode, FaBrain } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const timelineData = [
    {
      year: "2023 - 2027",
      title: "B.Tech Computer Science Engineering",
      subtitle: "Data Science Specialization",
      description: "Pursuing B.Tech in Computer Science with specialization in Data Science. Learning advanced concepts in machine learning, data analysis, and software development.",
      icon: <FaGraduationCap />,
      color: "#6366f1",
      achievements: [
        "Specializing in Data Science and Analytics",
        "Active member of coding clubs and tech communities",
        "Participated in hackathons and coding competitions"
      ]
    },
    {
      year: "June - July 2024",
      title: "Junior Data Analyst Intern",
      subtitle: "American Tower",
      description: "Analyzed large datasets to extract meaningful insights and support business decisions. Worked with data visualization tools and statistical analysis techniques.",
      icon: <FaBrain />,
      color: "#8b5cf6",
      achievements: [
        "Performed data analysis and visualization",
        "Generated insights for business decisions",
        "Worked with large datasets and analytics tools"
      ]
    },
    {
      year: "June - August 2025",
      title: "Full Stack Web Developer Intern",
      subtitle: "Sky Productivity Pvt Ltd",
      description: "Working on full-stack web development projects using modern technologies. Developing scalable web applications and contributing to the company's digital transformation initiatives.",
      icon: <FaCode />,
      color: "#06b6d4",
      achievements: [
        "Developing full-stack web applications",
        "Working with modern web technologies",
        "Contributing to team projects and code reviews"
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2
          className="section-title"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experience & Journey
        </motion.h2>

        <div className="timeline-container">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-content">
                <motion.div
                  className="timeline-icon"
                  style={{ backgroundColor: item.color }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {item.icon}
                </motion.div>
                
                <div className="timeline-info">
                  <div className="timeline-year">{item.year}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <h4 className="timeline-subtitle">{item.subtitle}</h4>
                  <p className="timeline-description">{item.description}</p>
                  
                  <div className="timeline-achievements">
                    <h5>Achievements:</h5>
                    <ul>
                      {item.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ 
                            duration: 0.4, 
                            delay: index * 0.2 + achievementIndex * 0.1 + 0.3 
                          }}
                        >
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="experience-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="summary-stats">
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Technologies Mastered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaNodeJs, FaPython, FaDatabase, 
  FaAws, FaGitAlt, FaDocker, FaFigma,
  FaJs, FaHtml5, FaCss3Alt, FaBootstrap,
  FaNetworkWired, FaBrain, FaCode
} from 'react-icons/fa';
import { 
  SiTensorflow, SiMongodb, SiMysql, SiTailwindcss, 
  SiOpencv, SiScikitlearn, SiPandas, SiNumpy,
  SiExpress, SiTypescript, SiNextdotjs
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: <FaPython />, percentage: 95, color: "#3776AB" },
        { name: "JavaScript", icon: <FaJs />, percentage: 90, color: "#F7DF1E" },
        { name: "TypeScript", icon: <SiTypescript />, percentage: 75, color: "#3178C6" },
        { name: "HTML5", icon: <FaHtml5 />, percentage: 95, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3Alt />, percentage: 90, color: "#1572B6" }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: <FaReact />, percentage: 90, color: "#61DAFB" },
        { name: "Next.js", icon: <SiNextdotjs />, percentage: 80, color: "#000000" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, percentage: 85, color: "#06B6D4" },
        { name: "Bootstrap", icon: <FaBootstrap />, percentage: 80, color: "#7952B3" },
        { name: "Responsive Design", icon: <FaHtml5 />, percentage: 90, color: "#1572B6" }
      ]
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, percentage: 85, color: "#339933" },
        { name: "Express.js", icon: <SiExpress />, percentage: 80, color: "#000000" },
        { name: "MongoDB", icon: <SiMongodb />, percentage: 85, color: "#47A248" },
        { name: "MySQL", icon: <SiMysql />, percentage: 80, color: "#4479A1" },
        { name: "RESTful APIs", icon: <FaDatabase />, percentage: 85, color: "#336791" },
        { name: "JWT Authentication", icon: <FaDatabase />, percentage: 75, color: "#336791" }
      ]
    },
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow />, percentage: 85, color: "#FF6F00" },
        { name: "OpenCV", icon: <SiOpencv />, percentage: 80, color: "#5C3EE8" },
        { name: "scikit-learn", icon: <SiScikitlearn />, percentage: 85, color: "#F7931E" },
        { name: "Pandas", icon: <SiPandas />, percentage: 90, color: "#130654" },
        { name: "NumPy", icon: <SiNumpy />, percentage: 90, color: "#4DABCF" },
        { name: "Computer Vision", icon: <FaBrain />, percentage: 80, color: "#FF6F00" },
        { name: "Deep Learning", icon: <FaBrain />, percentage: 85, color: "#FF6F00" }
      ]
    },
    {
      title: "Network & Security",
      skills: [
        { name: "Network Analysis", icon: <FaNetworkWired />, percentage: 85, color: "#00FF00" },
        { name: "Packet Capture", icon: <FaNetworkWired />, percentage: 80, color: "#00FF00" },
        { name: "Security Assessment", icon: <FaNetworkWired />, percentage: 75, color: "#00FF00" },
        { name: "Protocol Analysis", icon: <FaNetworkWired />, percentage: 80, color: "#00FF00" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", icon: <FaGitAlt />, percentage: 95, color: "#F05032" },
        { name: "AWS", icon: <FaAws />, percentage: 75, color: "#FF9900" },
        { name: "Docker", icon: <FaDocker />, percentage: 70, color: "#2496ED" },
        { name: "Figma", icon: <FaFigma />, percentage: 80, color: "#F24E1E" },
        { name: "VS Code", icon: <FaCode />, percentage: 95, color: "#007ACC" },
        { name: "Shell Scripting", icon: <FaCode />, percentage: 80, color: "#4EAA25" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="skill-header">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <div className="skill-info">
                        <h4>{skill.name}</h4>
                        <span className="skill-percentage">{skill.percentage}%</span>
                      </div>
                    </div>
                    <div className="progress-bar">
                      <motion.div
                        className="progress-fill"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.percentage}%` } : {}}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="summary-card">
            <h3>Technical Proficiency</h3>
            <p>
              With expertise spanning full-stack development, machine learning, computer vision, and network security, 
              I bring a comprehensive skill set to every project. My focus on modern technologies and 
              best practices ensures scalable, maintainable solutions across diverse domains.
            </p>
            <div className="tech-highlights">
              <span className="tech-tag">MERN Stack</span>
              <span className="tech-tag">Python ML/AI</span>
              <span className="tech-tag">Computer Vision</span>
              <span className="tech-tag">Network Security</span>
              <span className="tech-tag">Cloud Computing</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 
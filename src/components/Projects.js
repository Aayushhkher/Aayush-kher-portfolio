import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaGithub, FaExternalLinkAlt, FaNetworkWired, 
  FaBrain, FaUserClock, FaPython, 
  FaReact, FaNodeJs, FaDatabase 
} from 'react-icons/fa';
import { SiTensorflow, SiMongodb } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const projects = [
    {
      title: "NetScan",
      description: "A powerful Python-based tool for real-time network traffic monitoring and analysis. Features include packet capture, protocol distribution analysis, and safety assessment for network traffic.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&crop=center",
      technologies: ["Python", "Network Analysis", "Security"],
      icons: [<FaPython />, <FaNetworkWired />, <FaDatabase />],
      github: "https://github.com/Aayushhkher/NetScan",
      live: null,
      category: "Network Security",
      color: "#6366f1"
    },
    {
      title: "Parkinson's Disease Detection",
      description: "A sophisticated machine learning model leveraging PCA, SHAP, and LIME to enhance Parkinson's disease diagnosis by improving interpretability and accuracy. Features include real-time performance metrics and comprehensive model explanations.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&crop=center",
      technologies: ["Python", "TensorFlow", "Machine Learning"],
      icons: [<FaPython />, <SiTensorflow />, <FaBrain />],
      github: "https://github.com/Aayushhkher/parkinsons-diagnosis",
      live: null,
      category: "Healthcare AI",
      color: "#8b5cf6"
    },
    {
      title: "Face and Age Recognition System",
      description: "A sophisticated deep learning model that accurately predicts age from facial images using convolutional neural networks. Features include real-time age estimation, batch processing capabilities, and comprehensive performance metrics.",
      image: "/face-recognition.jpg",
      technologies: ["Python", "Deep Learning", "Computer Vision"],
      icons: [<FaPython />, <SiTensorflow />, <FaUserClock />],
      github: "https://github.com/Aayushhkher/face-and-age-recognition-system",
      live: null,
      category: "Computer Vision",
      color: "#06b6d4"
    },
    {
      title: "ServiceHub Pro",
      description: "A comprehensive web application for booking plumbing services. Features include user authentication, service scheduling, real-time booking management, and admin dashboard for service providers. Built with modern web technologies for seamless user experience.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center",
      technologies: ["React", "Node.js", "MongoDB"],
      icons: [<FaReact />, <FaNodeJs />, <SiMongodb />],
      github: "https://github.com/Aayushhkher/plumber-booking-system",
      live: null,
      category: "Web Application",
      color: "#10b981"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-category" style={{ backgroundColor: project.color }}>
                    {project.category}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  <div className="tech-icons">
                    {project.icons.map((icon, iconIndex) => (
                      <span key={iconIndex} className="tech-icon">
                        {icon}
                      </span>
                    ))}
                  </div>
                  <div className="tech-tags">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                    <span>View Code</span>
                  </motion.a>
                  
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="projects-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="summary-content">
            <h3>More Projects</h3>
            <p>
              These are just a few highlights from my portfolio. I'm constantly working on new projects 
              and contributing to open-source initiatives. Each project demonstrates my commitment to 
              creating innovative, scalable solutions that solve real-world problems.
            </p>
            <motion.a
              href="https://github.com/Aayushhkher"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
              View All Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 
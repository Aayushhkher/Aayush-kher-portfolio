import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Aayushhkher',
      icon: <FaGithub />
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/aayush-kher-8aa354231',
      icon: <FaLinkedin />
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/aayushhkher',
      icon: <FaTwitter />
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Aayush Kher</h3>
            <p>
              Full-stack developer and AI enthusiast passionate about creating 
              innovative solutions that make a difference.
            </p>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4>Technologies</h4>
            <ul>
              <li>React & Node.js</li>
              <li>Python & TensorFlow</li>
              <li>Machine Learning</li>
              <li>Cloud Computing</li>
              <li>DevOps</li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4>Connect</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="email">kheraayush190@gmail.com</p>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="footer-line"></div>
          <div className="footer-info">
            <p>
              © {currentYear} Aayush Kher. Made with{' '}
              <FaHeart className="heart-icon" /> and React
            </p>
            <p className="footer-quote">
              "Innovation distinguishes between a leader and a follower." - Steve Jobs
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 
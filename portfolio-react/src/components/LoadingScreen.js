import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading-container">
        <motion.div 
          className="loading-logo"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaRocket className="rocket-icon" />
        </motion.div>
        
        <motion.h1 
          className="loading-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Aayush Kher
        </motion.h1>
        
        <motion.p 
          className="loading-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Software Developer & Data Science Enthusiast
        </motion.p>
        
        <div className="loading-animation">
          <motion.div 
            className="loading-dot"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              delay: 0
            }}
          />
          <motion.div 
            className="loading-dot"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              delay: 0.2
            }}
          />
          <motion.div 
            className="loading-dot"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              delay: 0.4
            }}
          />
        </div>
        
        <motion.div 
          className="loading-icons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          >
            <FaCode />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            <FaLaptopCode />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            <FaRocket />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaRocket, FaBrain, FaGlobe, FaChartLine, FaUsers, FaCrosshairs, FaBolt } from 'react-icons/fa';
import './Startup.css';

const Startup = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const services = [
    {
      icon: <FaBrain />,
      title: "AI Bots & Automation",
      description: "Intelligent chatbots and workflow automation solutions that streamline your business processes.",
      features: ["24/7 Customer Support", "Process Automation", "Smart Workflows", "Multi-language Support"]
    },
    {
      icon: <FaChartLine />,
      title: "Custom Dashboards",
      description: "Beautiful, interactive data visualizations and analytics dashboards tailored to your needs.",
      features: ["Real-time Analytics", "Interactive Charts", "Custom KPIs", "Mobile Responsive"]
    },
    {
      icon: <FaGlobe />,
      title: "Full-stack Websites",
      description: "Modern, responsive websites and e-commerce platforms built with cutting-edge technology.",
      features: ["SEO Optimized", "Fast Loading", "E-commerce Ready", "Cloud Hosted"]
    },
    {
      icon: <FaBrain />,
      title: "ML Models on Demand",
      description: "Custom machine learning models and AI solutions designed for your specific use cases.",
      features: ["Predictive Analytics", "NLP Processing", "Computer Vision", "Auto-scaling"]
    }
  ];

  const values = [
    { emoji: "💎", title: "Quality", subtitle: "Premium Standards" },
    { emoji: "💰", title: "Accessibility", subtitle: "Affordable for All" },
    { emoji: "🚀", title: "Innovation", subtitle: "Cutting-Edge Tech" },
    { emoji: "🤝", title: "Community", subtitle: "Supporting Growth" }
  ];

  return (
    <section id="startup" className="startup">
      <div className="container">
        <motion.h2
          className="section-title"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Startup Founder
        </motion.h2>

        {/* Header Section */}
        <motion.div 
          className="startup-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="startup-badge">
            <FaRocket className="badge-icon" />
            <span>Startup Founder</span>
          </div>
          <h3 className="startup-title">
            <span className="text-gradient">FORTEVA.TECH</span>
          </h3>
          <p className="startup-tagline">Redefining Intelligence. Delivering Tech.</p>
          <p className="startup-description">
            Premium AI/Tech startup offering AI bots, custom dashboards, full-stack websites, and machine learning models on demand.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="startup-content">
          <motion.div 
            className="startup-story"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4>Our Story</h4>
            <p>
              Founded in July 2025, FORTEVA.TECH was born from a simple yet powerful vision: to bridge the gap between enterprise-grade technology and everyday users. We believe that cutting-edge tools shouldn't be reserved only for those with deep pockets.
            </p>
            <p>
              Our team of passionate developers and designers work tirelessly to create solutions that rival the most expensive enterprise tools, but at a fraction of the cost. We're committed to making technology work for everyone.
            </p>

            <div className="mission-vision-grid">
              <div className="mission-card">
                <div className="mission-icon">
                  <FaCrosshairs />
                </div>
                <h5>Our Vision</h5>
                <p>To provide high-end, expensive tech tools to everyone at an affordable price for all.</p>
              </div>

              <div className="mission-card">
                <div className="mission-icon">
                  <FaBolt />
                </div>
                <h5>Our Mission</h5>
                <p>Democratizing technology by creating premium solutions that are accessible, affordable, and powerful for businesses of all sizes.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="startup-info"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="info-card">
              <div className="info-header">
                <div className="info-icon">
                  <FaRocket />
                </div>
                <div>
                  <h5>Founded</h5>
                  <span className="info-subtitle">July 2025</span>
                </div>
              </div>
              <p>A fresh start with a bold vision to transform how businesses access technology.</p>
            </div>

            <div className="info-card">
              <div className="info-header">
                <div className="info-icon">
                  <FaUsers />
                </div>
                <div>
                  <h5>What We Do</h5>
                  <span className="info-subtitle">Technology Democratization</span>
                </div>
              </div>
              <div className="info-features">
                <div className="info-feature">
                  <div className="feature-dot"></div>
                  <span>AI-Powered Solutions</span>
                </div>
                <div className="info-feature">
                  <div className="feature-dot"></div>
                  <span>Custom Development</span>
                </div>
                <div className="info-feature">
                  <div className="feature-dot"></div>
                  <span>Affordable Pricing</span>
                </div>
                <div className="info-feature">
                  <div className="feature-dot"></div>
                  <span>Enterprise Quality</span>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h5>Our Values</h5>
              <div className="values-grid">
                {values.map((value, index) => (
                  <div key={index} className="value-item">
                    <div className="value-emoji">{value.emoji}</div>
                    <div className="value-title">{value.title}</div>
                    <div className="value-subtitle">{value.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services */}
        <motion.div 
          className="startup-services"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h4>What We Offer</h4>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                <h5>{service.title}</h5>
                <p>{service.description}</p>
                <div className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="service-feature">
                      <div className="feature-dot"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="startup-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="cta-card">
            <h4>Ready to Transform Your Business?</h4>
            <p>
              Join the revolution of democratized technology. Get premium AI solutions at affordable prices.
            </p>
            <div className="cta-buttons">
              <a 
                href="https://forteva.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FaRocket />
                Visit FORTEVA.TECH
              </a>
              <a 
                href="mailto:kheraayush190@gmail.com" 
                className="btn btn-secondary"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Startup; 
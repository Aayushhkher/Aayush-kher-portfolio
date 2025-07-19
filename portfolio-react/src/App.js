import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Startup from './components/Startup';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="App" data-theme={theme}>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Startup />
          <Experience />
          <Projects />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;

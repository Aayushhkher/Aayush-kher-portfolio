// Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1500);
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to light
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.className = 'fas fa-sun';
    } else {
        themeIcon.className = 'fas fa-moon';
    }
}

// Particle Background
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size between 2px and 6px
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 6}s`;
        particle.style.animationDuration = `${Math.random() * 3 + 3}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles when page loads
document.addEventListener('DOMContentLoaded', createParticles);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Dark mode navbar adjustment
function updateNavbarTheme() {
    const theme = html.getAttribute('data-theme');
    if (theme === 'dark') {
        navbar.style.background = 'rgba(17, 24, 39, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
}

// Update navbar theme when theme changes
themeToggle.addEventListener('click', updateNavbarTheme);

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Skill Progress Animation
function animateSkillBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const percentage = progressBar.getAttribute('data-percentage');
                progressBar.style.width = `${percentage}%`;
                progressBar.classList.add('animate');
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => observer.observe(bar));
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// Initialize skill animations
document.addEventListener('DOMContentLoaded', () => {
    animateSkillBars();
});

// Project Language Distribution Charts
document.addEventListener('DOMContentLoaded', function() {
    // NetScan Chart
    const netScanCtx = document.getElementById('netScanChart').getContext('2d');
    new Chart(netScanCtx, {
        type: 'pie',
        data: {
            labels: ['Python', 'Shell', 'PowerShell'],
            datasets: [{
                data: [71.1, 19.1, 8.8],
                backgroundColor: [
                    'rgba(59, 130, 246, 0.8)',  // Blue
                    'rgba(34, 197, 94, 0.8)',   // Green
                    'rgba(59, 130, 246, 0.6)'   // Light Blue
                ],
                borderColor: [
                    'rgba(59, 130, 246, 1)',
                    'rgba(34, 197, 94, 1)',
                    'rgba(59, 130, 246, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        font: {
                            size: 12
                        }
                    }
                }
            }
        }
    });

    // Parkinson's Disease Detection Chart
    const parkinsonsCtx = document.getElementById('parkinsonsChart').getContext('2d');
    new Chart(parkinsonsCtx, {
        type: 'pie',
        data: {
            labels: ['Python', 'TypeScript', 'HTML'],
            datasets: [{
                data: [54.4, 28.5, 9.2],
                backgroundColor: [
                    'rgba(59, 130, 246, 0.8)',  // Blue
                    'rgba(34, 197, 94, 0.8)',   // Green
                    'rgba(59, 130, 246, 0.6)'   // Light Blue
                ],
                borderColor: [
                    'rgba(59, 130, 246, 1)',
                    'rgba(34, 197, 94, 1)',
                    'rgba(59, 130, 246, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        font: {
                            size: 12
                        }
                    }
                }
            }
        }
    });

    // Face and Age Recognition System Chart
    const ageRecognitionCtx = document.getElementById('ageRecognitionChart').getContext('2d');
    new Chart(ageRecognitionCtx, {
        type: 'pie',
        data: {
            labels: ['Python', 'TensorFlow', 'OpenCV'],
            datasets: [{
                data: [65, 25, 10],
                backgroundColor: [
                    'rgba(59, 130, 246, 0.8)',  // Blue
                    'rgba(34, 197, 94, 0.8)',   // Green
                    'rgba(59, 130, 246, 0.6)'   // Light Blue
                ],
                borderColor: [
                    'rgba(59, 130, 246, 1)',
                    'rgba(34, 197, 94, 1)',
                    'rgba(59, 130, 246, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        font: {
                            size: 12
                        }
                    }
                }
            }
        }
    });

    // Plumber Booking System Chart
    const plumberBookingCtx = document.getElementById('plumberBookingChart').getContext('2d');
    new Chart(plumberBookingCtx, {
        type: 'pie',
        data: {
            labels: ['JavaScript', 'HTML/CSS', 'Node.js', 'Database'],
            datasets: [{
                data: [45, 25, 20, 10],
                backgroundColor: [
                    'rgba(59, 130, 246, 0.8)',  // Blue
                    'rgba(34, 197, 94, 0.8)',   // Green
                    'rgba(59, 130, 246, 0.6)',  // Light Blue
                    'rgba(34, 197, 94, 0.6)'    // Light Green
                ],
                borderColor: [
                    'rgba(59, 130, 246, 1)',
                    'rgba(34, 197, 94, 1)',
                    'rgba(59, 130, 246, 1)',
                    'rgba(34, 197, 94, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        font: {
                            size: 12
                        }
                    }
                }
            }
        }
    });
});

// Enhanced Project Card Interactions
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
    
    // Add click effect
    card.addEventListener('click', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
        setTimeout(() => {
            this.style.transform = 'translateY(0) scale(1)';
        }, 150);
    });
});

// Typing Effect for Hero Section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const tagline = document.querySelector('.tagline');
    const originalText = tagline.textContent;
    typeWriter(tagline, originalText, 50);
});

// Chatbot functionality
const chatWidget = document.getElementById('chatWidget');
const chatToggle = document.getElementById('chatToggle');
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendMessage = document.getElementById('sendMessage');

// Toggle chat widget
chatToggle.addEventListener('click', () => {
    chatWidget.classList.toggle('collapsed');
});

// Send message on button click or enter key
sendMessage.addEventListener('click', handleUserMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserMessage();
    }
});

function handleUserMessage() {
    const message = userInput.value.trim();
    if (message === '') return;

    // Add user message to chat
    addMessage(message, 'user');
    userInput.value = '';

    // Simulate bot response
    setTimeout(() => {
        const botResponse = getBotResponse(message);
        addMessage(botResponse, 'bot');
    }, 1000);
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = text;
    
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('skill') || lowerMessage.includes('experience')) {
        return "Aayush is proficient in MERN stack, Python for ML/AI, and has experience with cloud technologies like AWS. He's particularly strong in React, Node.js, and data science tools like TensorFlow and scikit-learn.";
    } else if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
        return "Aayush has built several impressive projects including NetScan (network monitoring), Parkinson's Disease Detection using ML, Face and Age Recognition System, and a Plumber Booking System. All projects showcase his full-stack development and AI/ML skills.";
    } else if (lowerMessage.includes('education') || lowerMessage.includes('background')) {
        return "Aayush is a second-year CSE student at Manipal University, Jaipur. He's passionate about data science and software development, with a focus on research and innovative tech solutions.";
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('reach')) {
        return "You can reach Aayush at kheraayush190@gmail.com or connect with him on LinkedIn and GitHub. He's always open to discussing new opportunities and collaborations!";
    } else {
        return "I'd be happy to help you learn more about Aayush! You can ask me about his skills, projects, education, or how to contact him. What would you like to know?";
    }
}

// Smooth reveal animations for elements
const revealElements = document.querySelectorAll('.skill-category, .project-card, .timeline-item');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease-out';
    revealObserver.observe(element);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const particles = document.getElementById('particles');
    
    if (hero && particles) {
        const rate = scrolled * -0.5;
        particles.style.transform = `translateY(${rate}px)`;
    }
});

// Floating Action Button
const fab = document.getElementById('fab');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        fab.classList.add('visible');
    } else {
        fab.classList.remove('visible');
    }
});

fab.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add some interactive elements
document.addEventListener('DOMContentLoaded', () => {
    // Add pulse animation to social links
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach((link, index) => {
        link.style.animationDelay = `${index * 0.1}s`;
        link.classList.add('pulse');
    });
    
    // Add hover effects to skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        category.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}); 
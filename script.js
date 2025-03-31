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

    // Get bot response
    const response = getBotResponse(message.toLowerCase());
    setTimeout(() => {
        addMessage(response, 'bot');
    }, 500);
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
    // Bot knowledge base about Aayush
    const responses = {
        'hello': "Hi there! 😊 I'm happy to help you learn more about Aayush. What would you like to know?",
        'hi': "Hello! 👋 Great to meet you! I'm here to tell you all about Aayush's journey and achievements.",
        'who': "🎓 Aayush is a talented second-year CSE student at Vellore Institute of Technology. He's passionate about Data Science and Software Development, always pushing the boundaries of what's possible with code!",
        'education': "📚 Aayush is pursuing Computer Science Engineering at Vellore Institute of Technology, where he's developing his expertise in cutting-edge technologies.",
        'skills': "💻 Aayush is a full-stack developer with expertise in:\n• Frontend: React, Next.js, Tailwind\n• Backend: Node.js, Python\n• Data Science: TensorFlow, scikit-learn\n• Tools: AWS, Git, Adobe Creative Suite",
        'projects': "🚀 Let me tell you about Aayush's exciting projects:\n\n1. NetScan: A sophisticated network traffic analyzer\n2. Parkinson's Disease Detection: An AI-powered diagnostic tool\n\nWhich one would you like to know more about?",
        'contact': "📫 You can reach Aayush at kheraayush190@gmail.com\n\nAlso connect with him on:\n• GitHub: @Aayushhkher\n• LinkedIn: aayush-kher-8aa354231",
        'experience': "💡 Aayush specializes in MERN stack development and machine learning. He's passionate about creating data-driven solutions and has hands-on experience with real-world projects.",
        'interests': "🔍 Aayush is fascinated by:\n• Data Science & AI\n• Machine Learning\n• Full-stack Development\n• Innovative Tech Solutions",
        'background': "🌟 Aayush is a Computer Science student with a strong foundation in both frontend and backend development. He combines technical expertise with creative problem-solving skills.",
        'default': "I'd be happy to tell you about Aayush! You can ask me about his:\n• Skills & Projects\n• Education & Experience\n• Background & Interests\n\nWhat would you like to know?"
    };

    // Check for keywords in the message
    for (const [key, response] of Object.entries(responses)) {
        if (message.includes(key)) {
            return response;
        }
    }

    return responses.default;
}

// Initialize chat widget as collapsed on mobile
if (window.innerWidth <= 768) {
    chatWidget.classList.add('collapsed');
} 
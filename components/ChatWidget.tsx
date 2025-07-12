import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, X, MessageCircle } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// Knowledge base about the portfolio owner
const PORTFOLIO_DATA = {
  personal: {
    name: "Portfolio Owner",
    role: "Full Stack Developer",
    location: "United States",
    experience: "5+ years",
    education: "Bachelor's in Computer Science",
    languages: ["English", "Spanish"],
    interests: ["Web Development", "AI/ML", "Open Source", "Gaming", "Travel"]
  },
  skills: {
    frontend: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Vue.js", "Angular"],
    backend: ["Node.js", "Python", "Java", "C#", ".NET", "Express.js", "Django", "Spring Boot"],
    database: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
    cloud: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD"],
    tools: ["Git", "VS Code", "Postman", "Figma", "Adobe Creative Suite"],
    ai: ["TensorFlow", "PyTorch", "OpenAI API", "LangChain", "Machine Learning"]
  },
  experience: [
    {
      company: "Tech Solutions Inc.",
      role: "Senior Full Stack Developer",
      duration: "2022 - Present",
      highlights: ["Led development of 3 major web applications", "Mentored 5 junior developers", "Improved system performance by 40%"]
    },
    {
      company: "Digital Innovations",
      role: "Full Stack Developer",
      duration: "2020 - 2022",
      highlights: ["Built scalable microservices architecture", "Implemented CI/CD pipelines", "Reduced deployment time by 60%"]
    },
    {
      company: "StartUp Ventures",
      role: "Frontend Developer",
      duration: "2019 - 2020",
      highlights: ["Developed responsive web applications", "Optimized frontend performance", "Collaborated with UX/UI designers"]
    }
  ],
  projects: [
    {
      name: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      features: ["User authentication", "Product catalog", "Shopping cart", "Payment processing", "Admin dashboard"]
    },
    {
      name: "AI Chat Application",
      description: "Intelligent chatbot with natural language processing",
      tech: ["Python", "TensorFlow", "React", "FastAPI"],
      features: ["NLP processing", "Context awareness", "Multi-language support", "Analytics dashboard"]
    },
    {
      name: "Portfolio Website",
      description: "Modern, responsive portfolio with dark mode and animations",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: ["Responsive design", "Dark mode toggle", "Smooth animations", "Contact form", "Project showcase"]
    },
    {
      name: "Task Management App",
      description: "Collaborative task management with real-time updates",
      tech: ["Vue.js", "Node.js", "Socket.io", "PostgreSQL"],
      features: ["Real-time collaboration", "Task assignments", "Progress tracking", "File sharing"]
    }
  ],
  certifications: [
    { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
    { name: "Google Cloud Professional Developer", issuer: "Google", year: "2022" },
    { name: "Microsoft Certified: Azure Developer Associate", issuer: "Microsoft", year: "2022" },
    { name: "Certified Scrum Master (CSM)", issuer: "Scrum Alliance", year: "2021" },
    { name: "MongoDB Certified Developer", issuer: "MongoDB", year: "2021" }
  ],
  achievements: [
    "Led development team of 8 developers",
    "Delivered 15+ production applications",
    "Achieved 99.9% uptime for critical systems",
    "Reduced application load time by 50%",
    "Implemented automated testing with 90% coverage"
  ]
};

// Response patterns for different types of questions
const RESPONSE_PATTERNS = {
  greeting: [
    "Hello! I'm your AI assistant. I can help you learn about my portfolio, skills, experience, and projects. What would you like to know?",
    "Hi there! I'm here to tell you about my professional background, technical skills, and projects. How can I assist you today?",
    "Welcome! I'm your portfolio assistant. I can share details about my experience, skills, projects, and achievements. What interests you?"
  ],
  skills: [
    `I have expertise in multiple areas:\n\n**Frontend:** ${PORTFOLIO_DATA.skills.frontend.join(", ")}\n**Backend:** ${PORTFOLIO_DATA.skills.backend.join(", ")}\n**Databases:** ${PORTFOLIO_DATA.skills.database.join(", ")}\n**Cloud & DevOps:** ${PORTFOLIO_DATA.skills.cloud.join(", ")}\n**AI/ML:** ${PORTFOLIO_DATA.skills.ai.join(", ")}`,
    `My technical skills span across the full stack:\n\n**Frontend Development:** ${PORTFOLIO_DATA.skills.frontend.slice(0, 5).join(", ")}\n**Backend Development:** ${PORTFOLIO_DATA.skills.backend.slice(0, 5).join(", ")}\n**Database Management:** ${PORTFOLIO_DATA.skills.database.join(", ")}\n**Cloud Platforms:** ${PORTFOLIO_DATA.skills.cloud.slice(0, 4).join(", ")}`,
    `I specialize in modern web technologies:\n\n**JavaScript Ecosystem:** React, TypeScript, Node.js\n**Cloud & DevOps:** AWS, Docker, CI/CD\n**Databases:** MongoDB, PostgreSQL, Redis\n**AI/ML:** TensorFlow, OpenAI API, LangChain`
  ],
  experience: [
    `Here's my professional journey:\n\n**${PORTFOLIO_DATA.experience[0].role}** at ${PORTFOLIO_DATA.experience[0].company} (${PORTFOLIO_DATA.experience[0].duration})\n- ${PORTFOLIO_DATA.experience[0].highlights.join("\n- ")}\n\n**${PORTFOLIO_DATA.experience[1].role}** at ${PORTFOLIO_DATA.experience[1].company} (${PORTFOLIO_DATA.experience[1].duration})\n- ${PORTFOLIO_DATA.experience[1].highlights.join("\n- ")}`,
    `My experience includes:\n\n**Senior Full Stack Developer** (2022-Present)\n- Led development of major web applications\n- Mentored junior developers\n- Improved system performance by 40%\n\n**Full Stack Developer** (2020-2022)\n- Built scalable microservices\n- Implemented CI/CD pipelines\n- Reduced deployment time by 60%`
  ],
  projects: [
    `Here are some of my key projects:\n\n**1. E-Commerce Platform**\nTech: React, Node.js, MongoDB, Stripe\nFeatures: User auth, product catalog, payment processing\n\n**2. AI Chat Application**\nTech: Python, TensorFlow, React, FastAPI\nFeatures: NLP processing, multi-language support\n\n**3. Portfolio Website**\nTech: React, TypeScript, Tailwind CSS\nFeatures: Responsive design, dark mode, animations`,
    `My notable projects include:\n\n**E-Commerce Platform** - Full-stack solution with payment integration\n**AI Chat Application** - Intelligent chatbot with NLP\n**Task Management App** - Collaborative tool with real-time updates\n**Portfolio Website** - Modern, responsive design with animations`
  ],
  certifications: [
    `I hold several professional certifications:\n\n**${PORTFOLIO_DATA.certifications[0].name}** (${PORTFOLIO_DATA.certifications[0].year})\n**${PORTFOLIO_DATA.certifications[1].name}** (${PORTFOLIO_DATA.certifications[1].year})\n**${PORTFOLIO_DATA.certifications[2].name}** (${PORTFOLIO_DATA.certifications[2].year})\n**${PORTFOLIO_DATA.certifications[3].name}** (${PORTFOLIO_DATA.certifications[3].year})`,
    `My certifications include:\n\n- AWS Certified Solutions Architect (2023)\n- Google Cloud Professional Developer (2022)\n- Microsoft Azure Developer Associate (2022)\n- Certified Scrum Master (2021)\n- MongoDB Certified Developer (2021)`
  ],
  achievements: [
    `Some of my key achievements:\n\n- Led development team of 8 developers\n- Delivered 15+ production applications\n- Achieved 99.9% uptime for critical systems\n- Reduced application load time by 50%\n- Implemented automated testing with 90% coverage`,
    `My professional achievements include:\n\n• Successfully led teams and delivered multiple production applications\n• Optimized system performance and achieved high uptime\n• Implemented comprehensive testing strategies\n• Mentored junior developers and improved team productivity`
  ]
};

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: RESPONSE_PATTERNS.greeting[Math.floor(Math.random() * RESPONSE_PATTERNS.greeting.length)],
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Intelligent response generation based on user input
  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Greeting patterns
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return RESPONSE_PATTERNS.greeting[Math.floor(Math.random() * RESPONSE_PATTERNS.greeting.length)];
    }
    
    // Skills related
    if (message.includes('skill') || message.includes('technology') || message.includes('tech') || 
        message.includes('programming') || message.includes('language') || message.includes('framework')) {
      return RESPONSE_PATTERNS.skills[Math.floor(Math.random() * RESPONSE_PATTERNS.skills.length)];
    }
    
    // Experience related
    if (message.includes('experience') || message.includes('work') || message.includes('job') || 
        message.includes('career') || message.includes('background') || message.includes('history')) {
      return RESPONSE_PATTERNS.experience[Math.floor(Math.random() * RESPONSE_PATTERNS.experience.length)];
    }
    
    // Projects related
    if (message.includes('project') || message.includes('portfolio') || message.includes('work') || 
        message.includes('application') || message.includes('app') || message.includes('website')) {
      return RESPONSE_PATTERNS.projects[Math.floor(Math.random() * RESPONSE_PATTERNS.projects.length)];
    }
    
    // Certifications related
    if (message.includes('certification') || message.includes('certificate') || message.includes('aws') || 
        message.includes('google') || message.includes('microsoft') || message.includes('azure')) {
      return RESPONSE_PATTERNS.certifications[Math.floor(Math.random() * RESPONSE_PATTERNS.certifications.length)];
    }
    
    // Achievements related
    if (message.includes('achievement') || message.includes('accomplishment') || message.includes('success') || 
        message.includes('leadership') || message.includes('team') || message.includes('performance')) {
      return RESPONSE_PATTERNS.achievements[Math.floor(Math.random() * RESPONSE_PATTERNS.achievements.length)];
    }
    
    // Contact related
    if (message.includes('contact') || message.includes('email') || message.includes('hire') || 
        message.includes('available') || message.includes('freelance')) {
      return "I'm available for new opportunities! You can reach me through the contact form on this website, or connect with me on LinkedIn. I'm always open to discussing interesting projects and collaborations.";
    }
    
    // About me
    if (message.includes('about') || message.includes('who') || message.includes('background')) {
      return `I'm a ${PORTFOLIO_DATA.personal.role} with ${PORTFOLIO_DATA.personal.experience} of experience in web development. I specialize in building scalable applications using modern technologies like React, Node.js, and cloud platforms. I'm passionate about creating efficient, user-friendly solutions and staying up-to-date with the latest industry trends.`;
    }
    
    // Default responses
    const defaultResponses = [
      "I'd be happy to tell you more about my skills, experience, or projects. What specific area interests you?",
      "I can share details about my technical skills, work experience, projects, or certifications. What would you like to know?",
      "Feel free to ask me about my development skills, professional experience, portfolio projects, or achievements. How can I help?",
      "I'm here to answer questions about my background, skills, projects, or career achievements. What would you like to learn about?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Generate intelligent response
    setTimeout(() => {
      const botResponse = generateResponse(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
        aria-label="Open chat"
        title="Chat with AI Assistant"
      >
        {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
        )}
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transform transition-all duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={16} />
                </div>
                <div>
                  <h3 className="font-semibold">AI Assistant</h3>
                  <p className="text-xs text-blue-100">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="h-80 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-gray-900">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`flex items-start space-x-2 max-w-xs ${
                    message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    message.sender === 'user' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                  }`}>
                    {message.sender === 'user' ? <User size={12} /> : <Bot size={12} />}
                  </div>
                  <div
                    className={`px-3 py-2 rounded-2xl text-sm ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' 
                        ? 'text-blue-100' 
                        : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                    <Bot size={12} className="text-gray-700 dark:text-gray-300" />
                  </div>
                  <div className="px-3 py-2 rounded-2xl bg-white dark:bg-gray-700 shadow-sm">
                    <div className="flex items-center space-x-2">
                      <Loader2 size={12} className="animate-spin text-gray-500 dark:text-gray-400" />
                      <span className="text-xs text-gray-500 dark:text-gray-400">Typing...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex space-x-2">
              <div className="flex-1 relative">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about my skills, experience, projects..."
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
                  rows={1}
                  style={{ minHeight: '40px', maxHeight: '80px' }}
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="px-3 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 dark:disabled:bg-gray-600 text-white rounded-xl transition-colors duration-200 flex items-center justify-center"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">
              Try: "Tell me about your skills" or "What projects have you worked on?"
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget; 
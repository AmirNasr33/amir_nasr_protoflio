import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certifications from './components/Certifications';
import DarkModeButton from './components/DarkModeButton';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-black">
        <Header />
        <DarkModeButton />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div id="portfolio-content">
                    <Hero />
                    <About />
                    <Skills />
                    <Experience />
                    <Projects />
                    <Contact />
                  </div>
                  {/* Hidden print-optimized PDF content */}
                  <div id="pdf-content" style={{ display: 'none' }}>
                    <h1>Amir Nasr - Portfolio</h1>
                    <h2>About Me</h2>
                    <p>Full Stack Developer & IT and Networking. I create beautiful, functional, and user-centered digital experiences. With a passion for clean code and innovative design, I bring ideas to life through modern web technologies.</p>
                    <h2>Skills</h2>
                    <ul>
                      <li>Frontend: React, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Next.js, Vue.js, Angular</li>
                      <li>Backend: Node.js, Python, Java, C#, .NET, Express.js, Django, Spring Boot</li>
                      <li>Database: MongoDB, PostgreSQL, MySQL, Redis, Firebase</li>
                      <li>Cloud: AWS, Azure, Google Cloud, Docker, Kubernetes, CI/CD</li>
                      <li>AI/ML: TensorFlow, PyTorch, OpenAI API, LangChain, Machine Learning</li>
                    </ul>
                    <h2>Experience</h2>
                    <ul>
                      <li><b>Senior Full Stack Developer</b> at Tech Solutions Inc. (2022 - Present): Led development of 3 major web applications, mentored 5 junior developers, improved system performance by 40%.</li>
                      <li><b>Full Stack Developer</b> at Digital Innovations (2020 - 2022): Built scalable microservices architecture, implemented CI/CD pipelines, reduced deployment time by 60%.</li>
                      <li><b>Frontend Developer</b> at StartUp Ventures (2019 - 2020): Developed responsive web applications, optimized frontend performance, collaborated with UX/UI designers.</li>
                    </ul>
                    <h2>Projects</h2>
                    <ul>
                      <li><b>E-Commerce Platform:</b> Full-stack e-commerce solution with payment integration (React, Node.js, MongoDB, Stripe).</li>
                      <li><b>AI Chat Application:</b> Intelligent chatbot with natural language processing (Python, TensorFlow, React, FastAPI).</li>
                      <li><b>Portfolio Website:</b> Modern, responsive portfolio with dark mode and animations (React, TypeScript, Tailwind CSS, Framer Motion).</li>
                      <li><b>Task Management App:</b> Collaborative task management with real-time updates (Vue.js, Node.js, Socket.io, PostgreSQL).</li>
                    </ul>
                    <h2>Certifications</h2>
                    <ul>
                      <li>AWS Certified Solutions Architect (2023)</li>
                      <li>Google Cloud Professional Developer (2022)</li>
                      <li>Microsoft Certified: Azure Developer Associate (2022)</li>
                      <li>Certified Scrum Master (2021)</li>
                      <li>MongoDB Certified Developer (2021)</li>
                    </ul>
                    <h2>Contact</h2>
                    <ul>
                      <li>Email: ameer.nasr70@gmail.com</li>
                      <li>Phone: 01033229090</li>
                      <li>Location: Egypt, Benha</li>
                      <li>LinkedIn: https://www.linkedin.com/in/amir-nasr-fahmy-b20000200/</li>
                      <li>GitHub: https://github.com/AmirNasr33</li>
                    </ul>
                  </div>
                </>
              }
            />
            <Route path="/certifications" element={<Certifications />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 
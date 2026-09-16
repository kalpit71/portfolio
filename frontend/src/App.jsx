import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('Sending...');
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData);
      setSubmitStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(''), 5000);
    } catch (error) {
      setSubmitStatus('Error sending message. Please try again.');
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">Kalpit Yadav</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Kalpit Yadav</h1>
          <h2 className="hero-subtitle">Full-Stack Engineer & Backend Specialist</h2>
          <p className="hero-description">
            B.Tech Computer Science (AI & ML) student specializing in production-grade backend systems 
            with TypeScript, Node.js and Java. Building reliable, high-throughput distributed systems.
          </p>
          <div className="hero-links">
            <a href="mailto:kalpityadav9@gmail.com" className="btn btn-primary">Email Me</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
          <div className="social-links">
            <a href="https://linkedin.com/in/kalpit-yadav-378676343" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/kalpit71" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="tel:+919140253271">+91 9140253271</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <div className="section-content">
          <p>
            I'm a B.Tech Computer Science (AI & ML) student and full-stack engineer specializing in 
            production-grade backend systems with TypeScript, Node.js and Java. I shipped a distributed 
            email-scheduling platform on BullMQ, Redis, PostgreSQL/Prisma and Elasticsearch featuring 
            crash-safe delayed job queues, atomic Redis rate limiting, idempotent delivery and OAuth 2.0 auth, 
            containerised with Docker Compose. I'm seeking a Software Engineer / Backend Engineer role 
            building reliable, high-throughput systems.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Languages</h3>
            <ul>
              <li>TypeScript</li>
              <li>JavaScript (ES6+)</li>
              <li>Java</li>
              <li>Python</li>
              <li>SQL</li>
              <li>C</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Backend & Distributed Systems</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Spring Boot</li>
              <li>REST APIs</li>
              <li>BullMQ</li>
              <li>Redis</li>
              <li>Message Queues</li>
              <li>Background Workers</li>
              <li>Job Scheduling</li>
              <li>Rate Limiting</li>
              <li>Idempotency</li>
              <li>Concurrency Control</li>
              <li>WebSockets (Socket.IO)</li>
              <li>SMTP / Nodemailer</li>
              <li>OAuth 2.0 (Google, Slack)</li>
              <li>JWT</li>
              <li>Passport.js</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>React.js</li>
              <li>Next.js 14 (App Router)</li>
              <li>Redux Toolkit</li>
              <li>React Router DOM</li>
              <li>Tailwind CSS</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Responsive UI</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Databases & Search</h3>
            <ul>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>Prisma ORM</li>
              <li>Mongoose</li>
              <li>Redis</li>
              <li>Elasticsearch 8</li>
              <li>Schema Design</li>
              <li>Indexing</li>
              <li>Query Optimisation</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>DevOps & Tools</h3>
            <ul>
              <li>Docker</li>
              <li>Docker Compose</li>
              <li>Git & GitHub</li>
              <li>Linux</li>
              <li>CI/CD Pipelines</li>
              <li>Postman</li>
              <li>Bull Board</li>
              <li>VS Code</li>
              <li>npm</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Machine Learning</h3>
            <ul>
              <li>TensorFlow</li>
              <li>Keras</li>
              <li>LSTM / Time-series Modelling</li>
              <li>Pandas</li>
              <li>NumPy</li>
              <li>Matplotlib</li>
              <li>Seaborn</li>
              <li>Jupyter</li>
              <li>Streamlit</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Core CS</h3>
            <ul>
              <li>Data Structures & Algorithms</li>
              <li>Object-Oriented Programming</li>
              <li>DBMS</li>
              <li>Operating Systems</li>
              <li>System Design</li>
              <li>Computer Networks</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>ReachInbox — Distributed Email Scheduling Platform</h3>
            <p className="project-date">02/2026 | Internship Assignment</p>
            <p className="project-tech">
              TypeScript, Node.js, Express.js, BullMQ, Redis, PostgreSQL, Prisma, Elasticsearch, Next.js 14, Docker, OAuth 2.0
            </p>
            <ul className="project-details">
              <li>Engineered an end-to-end email scheduling service (2,400+ lines of TypeScript across 12 REST endpoints) that queues campaigns as Redis-persisted BullMQ delayed jobs instead of cron polling, processed by a decoupled worker process for horizontal scalability.</li>
              <li>Guaranteed zero duplicate sends and zero job loss across API/worker restarts by keying each BullMQ job with the email UUID and gating delivery on a PostgreSQL status check, making the send path fully idempotent.</li>
              <li>Designed a two-tier hourly rate limiter (200 global / 50 per-sender) on an atomic Redis Lua script to eliminate race conditions across concurrent workers; throttled jobs reschedule to the next hour window rather than drop, sustaining bursts of 1,000+ simultaneously scheduled emails at tunable worker concurrency (5 parallel jobs) with a 2-second minimum send gap.</li>
              <li>Modelled 4 relational entities in PostgreSQL with Prisma ORM using composite indexes on (userId, status) and scheduledAt plus cascade deletes; enforced per-user tenant isolation via Google OAuth 2.0 and JWT middleware.</li>
              <li>Indexed every send into Elasticsearch 8 for full-text subject/body search with graceful DB fallback, and integrated Slack OAuth alerts (deduplicated once per hour per sender) to notify users on rate-limit breaches.</li>
              <li>Containerised PostgreSQL, Redis and Elasticsearch with Docker Compose for one-command setup, exposed a Bull Board dashboard for queue observability, and built a Next.js 14 + Tailwind UI with 14 reusable components and CSV lead ingestion.</li>
            </ul>
            <div className="project-links">
              <a href="https://github.com/kalpit71/ReachInbox.git" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://reach-inbox-geskgw8k8-kalpit72.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>

          <div className="project-card">
            <h3>NextHire — Full-Stack Job Portal</h3>
            <p className="project-date">09/2025 – 01/2026</p>
            <p className="project-tech">
              React.js, Redux Toolkit, Node.js, Express.js, MongoDB, REST APIs, JWT, Git
            </p>
            <ul className="project-details">
              <li>Architected a role-based job portal with 2 distinct dashboards (student & recruiter) over 3+ MongoDB collections, applying OOP-driven schema design for efficient CRUD and query handling.</li>
              <li>Built REST APIs with JSON payloads and enforced JWT authentication through middleware protecting 5+ secured routes, following service-oriented design practices.</li>
              <li>Developed 20+ reusable React components with Redux Toolkit state management across 5+ dynamic pages, maintaining Git-based version control, code reviews and documentation.</li>
            </ul>
            <div className="project-links">
              <a href="https://github.com/kalpit71/NextHire.git" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://next-hire-umber.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>

          <div className="project-card">
            <h3>Stock Predictor — Time-Series Market Analysis App</h3>
            <p className="project-date">09/2023 – 12/2023</p>
            <p className="project-tech">
              Python, Keras, LSTM, Pandas, NumPy, Matplotlib, yfinance, Streamlit, SQL
            </p>
            <ul className="project-details">
              <li>Trained an LSTM time-series model on ~80% of 10+ years of historical price data (2012–2022) using a 100-day sliding window, normalised via MinMaxScaler.</li>
              <li>Shipped a Streamlit app serving real-time predictions with MA50/MA100/MA200 overlays and predicted-vs-actual charts.</li>
            </ul>
            <div className="project-links">
              <a href="https://github.com/kalpit71/LSTM_Stock_Prediction.git" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://lstm-stock-prediction-pxk3.onrender.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <h2 className="section-title">Education</h2>
        <div className="education-item">
          <h3>B.Tech, Computer Science (AI & ML)</h3>
          <p className="education-school">Pranveer Singh Institute of Technology, Kanpur</p>
          <p className="education-year">2023 – 2027 | Aggregate: 78.19%</p>
          <p className="education-coursework">Coursework: DSA, DBMS, Operating Systems, Computer Networks, OOP, Machine Learning</p>
        </div>
        <div className="education-item">
          <h3>Intermediate (Class XII)</h3>
          <p className="education-school">Guru Har Rai Academy</p>
          <p className="education-year">2022 | 92.5%</p>
        </div>
        <div className="education-item">
          <h3>High School (Class X)</h3>
          <p className="education-school">Guru Har Rai Academy</p>
          <p className="education-year">2020 | 92.3%</p>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section">
        <h2 className="section-title">Achievements & Certifications</h2>
        <div className="achievements-list">
          <div className="achievement-item">
            <h3>Global Rank 13,734</h3>
            <p>TCS CodeVita Season 13, a global competitive programming contest with 100,000+ participants.</p>
          </div>
          <div className="achievement-item">
            <h3>Winner — PSIT TechExpo 2025, 2024 and 2023</h3>
            <p>Rs 40,000 total, three consecutive years</p>
          </div>
          <div className="achievement-item">
            <h3>Runner-Up — Smart PSIT Hackathon 2025</h3>
            <p>Hardware & software track</p>
          </div>
          <div className="achievement-item">
            <h3>Certifications</h3>
            <ul>
              <li>Generative AI Applications — LinkedIn Learning</li>
              <li>ReactJS and JavaScript — Infosys Springboard</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            <div className="contact-details">
              <p><strong>Email:</strong> kalpityadav9@gmail.com</p>
              <p><strong>Phone:</strong> +91 9140253271</p>
              <p><strong>Location:</strong> Kanpur, India</p>
              <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/kalpit-yadav-378676343" target="_blank" rel="noopener noreferrer">linkedin.com/in/kalpit-yadav-378676343</a></p>
              <p><strong>GitHub:</strong> <a href="https://github.com/kalpit71" target="_blank" rel="noopener noreferrer">github.com/kalpit71</a></p>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              />
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
            {submitStatus && <p className="submit-status">{submitStatus}</p>}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Kalpit Yadav. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://linkedin.com/in/kalpit-yadav-378676343" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/kalpit71" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:kalpityadav9@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
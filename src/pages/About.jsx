// src/pages/About.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const About = () => {
  const sections = [
    {
      question: 'Tell me about yourself',
      answer: (
        <>
          <p className="mb-4">
            I’m Karthiga, an entry-level <strong>Full Stack Developer</strong> deeply passionate about crafting responsive, user-friendly web applications. My technical foundation includes HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), and React. I specialize in building dynamic projects using the <strong>MERN stack (MongoDB, Express.js, React, Node.js)</strong>, with additional experience in Java and MySQL.
          </p>
          <p className="mb-4">
            I’ve built and deployed multiple real-world applications that focus on UI clarity, reusable components, and mobile-first design.
          </p>
          <p className="mb-4">
            You can view some of my most exciting work in the{' '}
            <Link
              to="/projects"
              className="text-yellow-400 underline hover:text-yellow-300 transition"
            >
              Projects section
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      question: 'What are your technical skills?',
      answer: (
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-300">
          <li>HTML5 / CSS3</li>
          <li>Tailwind CSS</li>
          <li>JavaScript (ES6+)</li>
          <li>React & Vite</li>
          <li>Responsive Design</li>
          <li>Node.js & Express.js</li>
          <li>MongoDB</li>
          <li>MySQL (Basic)</li>
          <li>REST APIs</li>
          <li>Git & GitHub</li>
          <li>GitHub Pages / Vercel</li>
          <li>Prompt Engineering</li>
        </ul>
      ),
    },
    {
      question: 'What certifications do you hold?',
      answer: (
        <ul className="list-disc list-inside text-sm space-y-1 text-gray-300">
          <li>MongoDB Node.js Developer – SmartBridge (2024)</li>
          <li>Full Stack Java Developer – Retech Solutions</li>
          <li>Web Development Fundamentals – EMC Academy</li>
          <li>OCI Foundations Associate – Oracle (2025)</li>
        </ul>
      ),
    },
    {
      question: 'What is your educational background?',
      answer: `B.E. in Computer Science Engineering (2022–2025) from Dhanalakshmi Srinivasan College of Engineering and Technology (Anna University) with a CGPA of 8.14.`,
    },
    {
      question: 'What roles are you looking for?',
      answer: `I’m actively seeking Full Stack Developer roles as my primary focus. I’m also open to Frontend or React Developer roles where I can continue learning and contributing to production-ready applications in collaborative environments.`,
    },
    {
      question: 'Why should we connect?',
      answer: `I’m ready to contribute fresh ideas, clean code, and enthusiasm to real-world projects. If you’re looking for a developer who’s curious, fast-learning, and passionate about modern tech — let’s connect and build something great.`,
    },
  ];

  return (
    <section className="p-10 min-h-screen bg-[#1f1f1f] text-white">
      <h2 className="text-3xl font-bold text-yellow-400 mb-10 text-center">About Me</h2>

      <div className="space-y-10 max-w-4xl mx-auto">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-[#2a2a2a] rounded-xl shadow-md p-6 transition hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold text-yellow-400 mb-3">{section.question}</h3>
            <div className="text-sm leading-relaxed text-gray-300">{section.answer}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;

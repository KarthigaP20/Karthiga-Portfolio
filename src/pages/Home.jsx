// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-[90vh] flex items-center justify-center text-center px-6 bg-[#1f1f1f] text-white"
    >
      <div className="bg-[#2a2a2a] p-8 sm:p-12 rounded-xl shadow-lg max-w-3xl w-full">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-4"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I’m Karthiga
        </motion.h1>

        <TypeAnimation
          sequence={[
            'Full Stack Web Developer',
            1500,
            'MERN Stack Developer',
            1500,
            'Frontend Enthusiast',
            1500,
            'Creative UI/UX Implementer',
            1500,
            'Responsive Design Specialist',
            1500,
            'JavaScript Developer',
            1500,
            'React & Tailwind CSS Expert',
            1500,
            'MongoDB Explorer',
            1500,
            'API Integrator',
            1500,
            'Tech Learner & Builder',
            1500,
          ]}
          wrapper="span"
          speed={50}
          className="text-lg sm:text-xl font-medium text-gray-300 mb-6 block"
          repeat={Infinity}
        />

        <p className="text-base sm:text-lg max-w-xl mx-auto mb-6 text-gray-400">
          I build interactive and scalable web apps using the latest tech stack like React, Tailwind CSS, MongoDB, and Node.js. Passionate about clean UI, great UX, and impactful code.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/Karthiga_ResuMe.pdf"
            download="Karthiga_Resume.pdf"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded transition"
          >
            Download Resume
          </a>

          <Link
            to="/contact"
            className="border border-yellow-500 text-yellow-400 hover:bg-[#2a2a2a] px-6 py-2 rounded transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;

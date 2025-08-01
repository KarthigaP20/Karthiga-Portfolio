import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import About from './About';
import Skills from './Skills';
import Projects from '../components/Projects';
import Resume from './Resume';
import Contact from './Contact';

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-start text-center px-6 py-10 bg-[#1f1f1f] text-white"
    >
      <div className="bg-[#2a2a2a] p-8 sm:p-10 md:p-12 rounded-xl shadow-lg max-w-3xl w-full lg:mt-16 md:mt-4 sm:mt-4">
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
          I'm a passionate Full Stack Developer focused on building responsive and clean web applications. As a fresher, I've built several hands-on projects using technologies like React, Tailwind CSS, MongoDB, and Node.js.
        </p>

        {/* ✅ Desktop only: About + Contact buttons */}
        <div className="hidden lg:flex flex-wrap gap-4 justify-center">
          <Link
            to="/about"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded transition"
          >
            About Me
          </Link>
          <Link
            to="/contact"
            className="border border-yellow-500 text-yellow-400 hover:bg-[#2a2a2a] px-6 py-2 rounded transition"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* ✅ Show all sections in mobile/tablet */}
      <div className="w-full mt-2 space-y-2 lg:hidden">
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </motion.section>
  );
};

export default Home;

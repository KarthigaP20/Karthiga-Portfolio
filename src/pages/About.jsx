import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProfileImg from '../assets/profile.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-10 min-h-screen bg-[#1f1f1f] text-white flex justify-center items-center"
    >
      <div className="max-w-4xl w-full text-center">

        <h2 className="text-3xl font-bold text-yellow-400 mb-6">About Me</h2>

        <img
          src={ProfileImg}
          alt="Karthiga"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-yellow-400 object-cover"
        />

        <p className="text-lg italic text-gray-300 mb-10">
          “Curious coder with a passion for clean UI, user experience, and modern web technologies.”
        </p>

        {/* Technical Skills */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-[#2a2a2a] rounded-xl shadow-md p-6 mb-8 text-center"
        >
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Technical Skills</h3>
          <p className="text-sm leading-relaxed text-gray-300 mb-4">
            I’ve worked with modern frontend and backend tools like React, Tailwind CSS, Node.js, MongoDB, and Express.js.
            My focus is on building clean, scalable, and responsive web apps.
          </p>
          <p className="text-xs text-yellow-400 inline-block mr-1">Wanna know what I'm good at?</p>
          <Link
            to="/skills"
            className="text-xs text-yellow-400 hover:underline transition duration-300 inline-flex items-center"
          >
            Explore My Skills <ArrowRight className="ml-2" size={16} />
          </Link>
        </motion.div>

        {/* Education */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-[#2a2a2a] rounded-xl shadow-md p-6 mb-8 text-center"
        >
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Education</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            <strong>B.E. in Computer Science Engineering</strong> <br />
            Dhanalakshmi Srinivasan College of Engineering and Technology <br />
            Anna University (2021–2025)
            <br />CGPA: <strong>8.14</strong>
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-[#2a2a2a] rounded-xl shadow-md p-6 mb-8 text-center"
        >
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Projects</h3>
          <p className="text-sm leading-relaxed text-gray-300 mb-4">
        I’ve been exploring and building full-stack projects focused on clean UI, mobile responsiveness, and performance optimization.  
  From portfolios to functional web apps, every project reflects my learning journey and growing passion for development.
          </p>
          <p className="text-xs text-yellow-400 inline-block mr-1">Curious to see what I’ve built?</p>
          <Link
            to="/projects"
            className="text-xs text-yellow-400 hover:underline transition duration-300 inline-flex items-center"
          >
            Explore My Projects <ArrowRight className="ml-2" size={16} />
          </Link>
        </motion.div>

        {/* Looking For */}
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-[#2a2a2a] rounded-xl shadow-md p-6 text-center"
        >
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Looking For</h3>
          <p className="text-sm leading-relaxed text-gray-300">
<p className="text-gray-300 leading-relaxed max-w-xl mx-auto text-center">
  I’m actively seeking opportunities as a Full Stack Web Developer, where I can grow, contribute to impactful products, and collaborate with tech-forward teams.
</p>

          </p>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default About;

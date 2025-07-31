import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProfileImg from '../assets/profile.jpg'; // Update if file name differs

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
      className="p-10 min-h-screen bg-[#1f1f1f] text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
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
          className="bg-[#2a2a2a] rounded-xl shadow-md p-6 mb-8"
        >
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Technical Skills</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            I’ve worked with modern frontend and backend tools like React, Tailwind CSS, Node.js, MongoDB, and Express.js.
            My focus is on building clean, scalable, and responsive web apps.
            <br />
            For a visual overview{' '}
            <Link
              to="/skills"
              className="text-yellow-400 underline hover:text-yellow-300 transition"
            >
              <br /><br />
              Explore My Skills section
            </Link>
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-[#2a2a2a] rounded-xl shadow-md p-6 mb-8"
        >
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Education</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            <strong>B.E. in Computer Science Engineering</strong> <br />
            Dhanalakshmi Srinivasan College of Engineering and Technology <br />
            Anna University (2022–2025) | CGPA: <strong>8.14</strong>
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-[#2a2a2a] rounded-xl shadow-md p-6 mb-8"
        >
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Projects</h3>
          <p className="text-sm leading-relaxed text-gray-300 mb-4">
            I’ve built real-time applications focused on clean UI, mobile responsiveness, and performance optimization.
            From portfolio websites to full-stack web apps, each project reflects my growth and passion.
          </p>
          <Link
            to="/projects"
            className="inline-block text-yellow-400 underline hover:text-yellow-300 text-sm transition"
          >
            Explore My Projects
          </Link>
        </motion.div>

        {/* Looking for */}
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-[#2a2a2a] rounded-xl shadow-md p-6"
        >
          <h3 className="text-lg font-semibold text-yellow-400 mb-3">Looking For</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            I’m actively seeking Full Stack or Frontend Developer roles where I can grow, contribute to real-world products, and collaborate with tech-forward teams.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;

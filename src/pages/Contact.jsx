import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-[90vh] flex items-center justify-center px-4 bg-[#1f1f1f] text-white"
    >
      <div className="text-center max-w-2xl bg-[#2a2a2a] p-10 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">Let’s Work Together</h2>

        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          I'm actively looking for Full Stack or Frontend Developer roles where I can apply my skills in React, Tailwind CSS, and the MERN stack.
          If you're a recruiter, hiring manager, or looking for a passionate developer to collaborate with — I’d love to connect!
        </p>

        <div className="space-y-6 text-sm text-gray-200">
          <div className="flex justify-center items-center gap-3">
            <FaEnvelope className="text-yellow-400 text-xl" />
            <a
              href="mailto:karthigaparthiban17@gmail.com"
              className="hover:underline hover:text-yellow-400 transition"
            >
              karthigaparthiban17@gmail.com
            </a>
          </div>

          <div className="flex justify-center items-center gap-3">
            <FaLinkedin className="text-yellow-400 text-xl" />
            <a
              href="https://www.linkedin.com/in/karthiga21/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-yellow-400 transition"
            >
              linkedin.com/in/karthiga21
            </a>
          </div>

          <div className="flex justify-center items-center gap-3">
            <FaGithub className="text-yellow-400 text-xl" />
            <a
              href="https://github.com/KarthigaP20"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-yellow-400 transition"
            >
              github.com/KarthigaP20
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

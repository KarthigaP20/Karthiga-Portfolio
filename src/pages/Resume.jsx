import { FaFileDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#1f1f1f] text-white flex items-center justify-center px-4"
    >
      <div className="max-w-4xl bg-[#2a2a2a] p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">Resume</h2>
        <p className="text-gray-300 mb-8">
          Want to see what I’ve built, solved, and shipped? Get my resume and explore my journey in tech!
        </p>

        <a
          href="/KarthigaP_ResuME.pdf"
          download
          className="inline-flex items-center gap-3 bg-yellow-500 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-600 transition shadow-md"
        >
          <FaFileDownload className="text-lg" />
          Download Resume
        </a>
      </div>
    </motion.section>
  );
};

export default Resume;

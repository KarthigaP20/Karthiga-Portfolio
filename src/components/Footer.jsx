// src/components/Footer.jsx
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-center py-6 text-sm text-gray-300 shadow-[0_-4px_10px_rgba(0,0,0,0.5)]">
      <div className="flex justify-center gap-6 text-xl mb-2">
        <a
          href="https://github.com/KarthigaP20"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/karthiga21/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition"
        >
          <FaLinkedin />
        </a>
      </div>
      <p className="text-gray-400">© 2025 Karthiga • Built with React & Tailwind CSS</p>
    </footer>
  );
};

export default Footer;

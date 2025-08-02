import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-center py-8 text-gray-300 shadow-[0_-4px_10px_rgba(0,0,0,0.5)]">
      <div className="flex justify-center gap-6 text-lg sm:text-xl mb-4">
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

        <a
          href="mailto:karthigaparthiban17@gmail.com"
          className="hover:text-yellow-400 transition"
        >
          <FaEnvelope />
        </a>
      </div>

      <p className="text-xs sm:text-sm md:text-base lg:text-[1rem] text-gray-400 px-4">
        © 2025 Karthiga — Built with <span className="text-white">React</span>,{' '}
        <span className="text-white">Tailwind CSS</span> &{' '}
        <span className="text-white">JavaScript</span>
      </p>
    </footer>
  );
};

export default Footer;

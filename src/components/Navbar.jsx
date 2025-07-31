// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-yellow-400 font-semibold'
      : 'text-gray-200 transition';

  return (
    <nav className="bg-[#1f1f1f] shadow-md sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        <h1 className="text-xl font-bold text-yellow-400">Karthiga</h1>

        <ul className="hidden lg:flex gap-6 text-sm font-medium">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/skills" className={navLinkClass}>Skills</NavLink>
          <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
          <NavLink to="/resume" className={navLinkClass}>Resume</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </ul>

        <div className="flex items-center gap-4 lg:gap-6">
          <button
            onClick={toggleMenu}
            className="text-2xl text-yellow-400 lg:hidden"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {menuOpen && (
          <div
            onClick={closeMenu}
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
          ></div>
        )}

        <div
          className={`fixed top-0 right-0 h-full w-64 bg-[#2a2a2a] z-50 transform transition-transform duration-300 ease-in-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          } shadow-lg px-6 py-8 flex flex-col gap-6 text-sm font-medium text-gray-200`}
        >
          <NavLink to="/" onClick={closeMenu} className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu} className={navLinkClass}>About</NavLink>
          <NavLink to="/skills" onClick={closeMenu} className={navLinkClass}>Skills</NavLink>
          <NavLink to="/projects" onClick={closeMenu} className={navLinkClass}>Projects</NavLink>
          <NavLink to="/resume" onClick={closeMenu} className={navLinkClass}>Resume</NavLink>
          <NavLink to="/contact" onClick={closeMenu} className={navLinkClass}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// src/pages/Projects.jsx
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

import apple from '../assets/projects/apple.png';
import movie from '../assets/projects/movie.png';
import netflix from '../assets/projects/netflix.png';
import weather from '../assets/projects/weather.png';
import taskmanager from '../assets/projects/taskmanager.png';
import tripadvisor from '../assets/projects/tripadvisor.png';
import greenden from '../assets/projects/greenden.png';
import textarea from '../assets/projects/textarea.png';
import registerform from '../assets/projects/registerform.jpg';
import nostra from '../assets/projects/nostra.png';
import simpleportfolio from '../assets/projects/simpleportfolio.png';
import udemyclone from '../assets/projects/udemyclone.png';

const projects = [
  {
    title: 'Movie App – TMDB Browser',
    description: 'Search, explore and save movies using TMDB API.',
    tech: ['React', 'Tailwind CSS', 'API'],
    image: movie,
    demo: 'https://movie-app-sigma-ten-14.vercel.app/',
    code: 'https://github.com/KarthigaP20/Movie-App',
  },
  {
    title: 'Netflix Clone',
    description: 'Full-stack clone with login/signup UI.',
    tech: ['React', 'Express', 'Tailwind'],
    image: netflix,
    demo: 'https://netflixclone-orcin-nine.vercel.app',
    code: 'https://github.com/KarthigaP20/Netflix-Clone',
  },
  {
    title: 'Weather App',
    description: 'Weather forecast with real-time API integration.',
    tech: ['React', 'API', 'CSS'],
    image: weather,
    demo: 'https://weather-app-gamma-jade-76.vercel.app/',
    code: 'https://github.com/KarthigaP20/Weather-App',
  },
  {
    title: 'TripAdvisor Clone',
    description: 'Static homepage UI replica using HTML & CSS.',
    tech: ['HTML', 'CSS'],
    image: tripadvisor,
    demo: 'https://karthigap20.github.io/TripAdvisor-clone/',
    code: 'https://github.com/KarthigaP20/TripAdvisor-clone',
  },
  {
    title: 'Task Manager',
    description: 'Simple task manager with CRUD and local storage.',
    tech: ['React', 'Vite', 'Tailwind'],
    image: taskmanager,
    demo: 'https://taskmanager-karthiga.vercel.app/',
    code: 'https://github.com/KarthigaP20/Task-Manager',
  },
  {
    title: 'Apple Clone Website',
    description: 'A pixel-perfect Apple homepage clone using React and Tailwind.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    image: apple,
    demo: 'https://karthigap20.github.io/Apple-clone/',
    code: 'https://github.com/KarthigaP20/Apple-clone',
  },
  {
    title: 'Greenden - Plant Store',
    description: 'Tailwind CSS plant ecommerce homepage.',
    tech: ['HTML', 'Tailwind CSS'],
    image: greenden,
    demo: 'https://karthigap20.github.io/Greenden-TailwindCSS/',
    code: 'https://github.com/KarthigaP20/Greenden-TailwindCSS',
  },
  {
    title: 'Register Form',
    description: 'Registration form with real-time validation.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: registerform,
    demo: 'https://karthigap20.github.io/Register-form/',
    code: 'https://github.com/KarthigaP20/Register-form',
  },
  {
    title: 'Textarea Counter',
    description: 'Live character counter with validation alert.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: textarea,
    demo: 'https://karthigap20.github.io/TextCharacter-Counter/',
    code: 'https://github.com/KarthigaP20/TextCharacter-Counter',
  },
  {
    title: 'NOSTRA - Fashion UI',
    description: 'Stylish homepage with slider and layout design.',
    tech: ['HTML', 'CSS', 'JS'],
    image: nostra,
    demo: 'https://karthigap20.github.io/Nostra-Js/',
    code: 'https://github.com/KarthigaP20/Nostra-Js',
  },
  {
    title: 'Udemy Clone',
    description: 'Udemy homepage UI clone using only HTML and CSS.',
    tech: ['HTML', 'CSS'],
    image: udemyclone,
    demo: 'https://karthigap20.github.io/Udemy-Clone-Project/',
    code: 'https://github.com/KarthigaP20/Udemy-Clone-Project',
  },
  {
    title: 'Simple Portfolio',
    description: 'Basic personal portfolio with HTML and CSS.',
    tech: ['HTML', 'CSS'],
    image: simpleportfolio,
    demo: 'https://karthigap20.github.io/simple-portfolio-website/',
    code: 'https://github.com/KarthigaP20/simple-portfolio-website',
  },
];

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-6 py-12 min-h-screen bg-[#1f1f1f] text-white"
    >
      <h2 className="text-3xl font-bold text-center text-yellow-400 mb-10">Projects Showcase</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;

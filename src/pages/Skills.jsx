// src/pages/Skills.jsx
import { motion } from 'framer-motion';

const skills = [
  {
    name: 'HTML5',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
    level: 'Expert',
  },
  {
    name: 'CSS3',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
    level: 'Expert',
  },
  {
    name: 'Tailwind CSS',
    logo: 'https://tailwindcss.com/favicons/apple-touch-icon.png',
    level: 'Expert',
  },
  {
    name: 'JavaScript (ES6+)',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    level: 'Expert',
  },
  {
    name: 'React.js',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
    level: 'Expert',
  },
  {
    name: 'Redux',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
    level: 'Expert',
  },
  {
    name: 'Vite',
    logo: 'https://vitejs.dev/logo.svg',
    level: 'Expert',
  },
  {
    name: 'Node.js',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg',
    level: 'Intermediate',
  },
  {
    name: 'Express.js',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg',
    level: 'Intermediate',
  },
  {
    name: 'MongoDB',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg',
    level: 'Intermediate',
  },
    {
    name: 'Java',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
    level: 'Basic',
  },

  {
    name: 'MySQL',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg',
    level: 'Basic',
  },
  {
    name: 'Git',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg',
    level: 'Intermediate',
  },
  {
    name: 'GitHub',
    logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg',
    level: 'Intermediate',
  },
  {
    name: 'REST API',
    logo: 'https://www.vectorlogo.zone/logos/json/json-icon.svg',
    level: 'Intermediate',
  },
    {
    name: 'Postman',
    logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
    level: 'Intermediate',
  },
];

const Skills = () => (
  <motion.section
    className="min-h-screen px-6 py-12 bg-[#1f1f1f] text-white"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-3xl font-bold text-yellow-400 mb-10 text-center">My Skills</h2>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="bg-[#2a2a2a] p-6 rounded-lg shadow-md text-center"
        >
          <img
            src={skill.logo}
            alt={skill.name}
            className="w-16 h-16 mx-auto mb-4"
            onError={(e) => (e.target.style.display = 'none')}
          />
          <h3 className="text-lg font-semibold text-yellow-300 mb-2">{skill.name}</h3>
          <span
            className={`inline-block px-3 py-1 text-xs rounded-full ${
              skill.level === 'Expert'
                ? 'bg-green-600 text-white'
                : skill.level === 'Intermediate'
                ? 'bg-yellow-500 text-white'
                : 'bg-red-500 text-white'
            }`}
          >
            {skill.level}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Skills;

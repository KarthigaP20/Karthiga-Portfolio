// src/pages/Skills.jsx
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5', level: 'Advanced' },
  { name: 'CSS3 / Tailwind CSS', level: 'Advanced' },
  { name: 'JavaScript (ES6+)', level: 'Intermediate' },
  { name: 'React & Vite', level: 'Intermediate' },
  { name: 'Node.js & Express.js', level: 'Intermediate' },
  { name: 'MongoDB', level: 'Intermediate' },
  { name: 'MySQL', level: 'Basic' },
  { name: 'Git & GitHub', level: 'Intermediate' },
  { name: 'REST APIs', level: 'Intermediate' },
];

const Skills = () => {
  return (
    <motion.section
      className="min-h-[80vh] px-6 py-12 bg-[#1f1f1f] text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-yellow-400 mb-10 text-center">My Skills</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-[#2a2a2a] p-6 rounded-lg shadow-md text-center"
          >
            <h3 className="text-xl font-semibold mb-2 text-yellow-300">{skill.name}</h3>
            <p className="text-sm text-gray-400">{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;

// src/components/ProjectCard.jsx
const ProjectCard = ({ title, description, tech, image, demo, code }) => {
  return (
    <div className="bg-[#2a2a2a] text-white shadow-xl rounded-lg overflow-hidden transform hover:scale-[1.03] transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-yellow-400 mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 text-xs mb-4">
          {tech.map((item, i) => (
            <span
              key={i}
              className="bg-yellow-800/20 text-yellow-300 px-2 py-1 rounded-md"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-4 text-sm">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 hover:underline"
          >
            Live Demo
          </a>
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 hover:underline"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, description, image, githubLink, demoLink }) => {
  return (
    <div className="bg-white border border-blue-400 rounded-lg shadow-lg p-4 flex flex-col transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-44 object-cover rounded-md mb-4"
      />

      {/* Project Title & Description */}
      <h3 className="text-xl font-bold text-blue-700 mb-2">{title}</h3>
      <p className="text-gray-700 flex-grow">{description}</p>

      {/* Action Buttons */}
      <div className="mt-4 flex items-center justify-between">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-4 py-2 bg-black text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-4 py-2 bg-black text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
        >
          <FaExternalLinkAlt /> Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from "react";
import {
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
} from "react-icons/si";

/**
 * A responsive Skills section with a light blue-to-white gradient background.
 * Uses Tailwind CSS for styling. Adjust the icons/skills as needed.
 */
const Skills = () => {
  const skills = [
    { name: "C++", icon: <SiCplusplus size={50} /> },
    { name: "HTML", icon: <SiHtml5 size={50} /> },
    { name: "CSS", icon: <SiCss3 size={50} /> },
    { name: "Tailwind", icon: <SiTailwindcss size={50} /> },
    { name: "JavaScript", icon: <SiJavascript size={50} /> },
    { name: "React", icon: <SiReact size={50} /> },
    { name: "Node.js", icon: <SiNodedotjs size={50} /> },
    { name: "Express", icon: <SiExpress size={50} /> },
    { name: "MongoDB", icon: <SiMongodb size={50} /> },
    { name: "Git", icon: <SiGit size={50} /> },
  ];

  return (
    <section className=" py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-700">
          Professional <span className="text-black">Skillset</span>
        </h2>
      </div>
      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border border-blue-500 border-solid rounded-md flex items-center justify-center h-24 w-32 bg-white hover:bg-blue-100 transition-colors duration-300 shadow-sm"
          >
            <div className="flex flex-col items-center">
              <div className="text-blue-700 mb-1">{skill.icon}</div>
              <span className="text-lg font-semibold text-blue-700">
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import {
    // SiVisualstudiocode,
    SiPostman,
    SiVercel
} from "react-icons/si";

/**
 * A responsive Skills section with a light blue-to-white gradient background.
 * Uses Tailwind CSS for styling. Adjust the icons/skills as needed.
 */
const Tools = () => {
  const Tools = [
    // { name: "VsCode", icon: <SiVisualstudiocode size={50} /> },
    { name: "Postman", icon: <SiPostman size={50} /> },
    { name: "Vercel", icon: <SiVercel size={50} /> },
  ];

  return (
    <section className=" py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-700">
          Tools <span className="text-black">I Use</span>
        </h2>
      </div>
      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {Tools.map((Tool, index) => (
          <div
            key={index}
            className="border border-blue-500 border-solid rounded-md flex items-center justify-center h-24 w-32 bg-white hover:bg-blue-100 transition-colors duration-300 shadow-sm"
          >
            <div className="flex flex-col items-center">
              <div className="text-blue-700 mb-1">{Tool.icon}</div>
              <span className="text-lg font-semibold text-blue-700">
                {Tool.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tools;

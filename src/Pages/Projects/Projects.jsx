import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./ProjectConsts";

const Projects = () => {
    return (
      <section className="py-16 px-4 bg-slate-100 min-h-screen">
        <div className="mt-12 max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-8 text-center">
          My Recent <span className="text-black">Projects</span>
        </h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                liveLink={project.liveLink}
                repoLink={project.repoLink}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
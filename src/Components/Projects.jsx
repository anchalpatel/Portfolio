import { projects } from "../Constants/ProjectData";
import ProjectCard from "./ProjectCard";


function Projects() {
  return (
    <section id="projects" className="pt-6 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">

        <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-bold mb-8">
          Featured{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
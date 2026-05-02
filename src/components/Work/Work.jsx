import { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="pt-4 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 mx-auto mt-4 bg-purple-500"></div>
        <p className="mt-4 text-lg font-semibold text-gray-400">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="overflow-hidden transition-transform duration-300 bg-gray-900 border border-white shadow-2xl cursor-pointer backdrop-blur-md rounded-2xl hover:shadow-purple-500/50 hover:-translate-y-2"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-48 rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-2xl font-bold text-white">
                {project.title}
              </h3>
              <p className="pt-4 mb-4 text-gray-500 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-lg overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-2 right-2 z-10">
              <button
                onClick={handleCloseModal}
                className="w-8 h-8 flex items-center justify-center text-2xl font-bold text-white bg-black/50 hover:bg-purple-600 rounded-full transition-colors"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-bold text-white text-2xl">
                  {selectedProject.title}
                </h3>
                <p className="mb-4 text-sm text-gray-400">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 py-2 text-sm font-semibold text-center text-gray-400 bg-gray-800 hover:bg-purple-800 rounded-lg transition-colors"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 py-2 text-sm font-semibold text-center text-white bg-purple-600 hover:bg-purple-800 rounded-lg transition-colors"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;

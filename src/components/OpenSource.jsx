import { FaGithub } from "react-icons/fa";

const OpenSource = () => {
  const projects = [
    {
      title: "DeepFake Detection",
      subtitle: "ANAL Summer Internship Project",
      description:
        "Advanced deep learning model for detecting manipulated media using computer vision and neural networks. Summer Internship research project.",
      tags: ["ANAL Airpipe"],
      link: "https://github.com/",
    },
    {
      title: "NodeBot",
      subtitle: "Intelligent Python Automation Bot",
      category: "Python Automation",
      description:
        "Smart automation bot built with Python for task scheduling, data processing, and intelligent workflow automation.",
      link: "https://github.com/",
    },
    {
      title: "EduTools",
      subtitle: "Educational Web Platform",
      category: "HTML/CSS Education",
      description:
        "Collection of educational tools and utilities for students and teachers. Interactive learning resources and study aids.",
      link: "https://github.com/",
    },
    {
      title: "DialogFlow Chatbot",
      subtitle: "Conversational AI Assistant",
      category: "DialogFlow",
      description:
        "Intelligent chatbot using Google's DialogFlow ES for natural language processing and automated customer support.",
      link: "https://github.com/",
    },
  ];

  return (
    <section id="opensource" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Open Source & <span className="text-blue-600">Innovation Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our contributions to AI, automation, and educational technology
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gradient Border Animation */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{project.subtitle}</p>

                <div className="flex flex-wrap mb-4">
                  {project.category && (
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mr-2">
                      {project.category}
                    </span>
                  )}
                  {project.tags &&
                    project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mr-2"
                      >
                        {tag}
                      </span>
                    ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* GitHub Link Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors group"
                >
                  <FaGithub className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                  <span>View on GitHub</span>
                  <svg
                    className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;

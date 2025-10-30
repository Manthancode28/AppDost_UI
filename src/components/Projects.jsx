import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const Projects = () => {
  const projects = [
    {
      category: "AI-Powered Educational Platform",
      title: "BEU Mate - Bihar Engineering",
      description:
        "An AI-powered study companion for B.Tech students offering personalized learning, career guidance, and placement preparation...",
      technologies: ["React Native", "Node.js", "AI/ML"],
      links: ["Play Store", "Website"],
      featured: true,
      image:
        "https://images.unsplash.com/photo-1603791452906-9c3e7c310b86?auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "Educational Platform",
      title: "Devskillquest",
      description:
        "An interactive learning platform designed for aspiring developers to master coding skills through hands-on projects, code challenges...",
      technologies: ["Next.js", "TypeScript", "PostgreSQL"],
      links: ["Website", "Website"],
      featured: false,
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    },
    {
      category: "Wedding Platform",
      title: "The Weddings Chapter",
      description:
        "A premium wedding planning platform connecting couples with top vendors, venues, and services. Features vendor management...",
      technologies: ["PHP", "Laravel", "MySQL"],
      links: ["Website", "Website"],
      featured: false,
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real solutions for real businesses — explore our successful
            projects
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image Banner */}
              <div className="h-48 relative overflow-hidden group">
                <img
                src={index === 0 ? image1 : index === 1 ? image2 : image3}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />


                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                )}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.links.map((link, idx) => (
                    <button
                      key={idx}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center hover:cursor-pointer"
                    >
                      {link}
                      <svg
                        className="w-4 h-4 ml-1"
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
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

       {/* View All Button */}
      <div className="text-center">
        <button className="group relative inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold text-blue-600 border-2 border-blue-600 rounded-full transition-all duration-300 overflow-hidden hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:shadow-lg">
          <span className="relative z-10">View All Projects</span>
          <svg
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>

          {/* Animated Gradient Background */}
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-600 to-blue-800 transition-opacity duration-300 rounded-full"></span>
        </button>
      </div>

      </div>
    </section>
  );
};

export default Projects;

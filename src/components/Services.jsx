import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Android App Development",
      description:
        "Custom Android applications built with the latest technologies to bring your ideas to life.",
      features: [
        "Native & Hybrid Apps",
        "Play Store Deployment",
        "Maintenance & Support",
      ],
      icon: "📱",
      color: "from-pink-500 to-orange-500",
    },
    {
      title: "Web Development",
      description:
        "Responsive and scalable web applications tailored to your business needs.",
      features: [
        "Responsive Design",
        "E-commerce Solutions",
        "Progressive Web Apps",
      ],
      icon: "🌐",
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive user interfaces that enhance user experience and engagement.",
      features: ["User Research", "Wireframing", "Brand Identity"],
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "CRM Software",
      description:
        "Comprehensive CRM solutions to manage customer relationships and boost productivity.",
      features: [
        "Custom Development",
        "Integration Services",
        "Training & Support",
      ],
      icon: "💼",
      color: "from-yellow-500 to-amber-500",
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services for modern businesses.",
      features: ["AWS, Azure, GCP", "Migration Services", "Performance Tuning"],
      icon: "☁️",
      color: "from-teal-500 to-green-500",
    },
    {
      title: "Cybersecurity",
      description:
        "Protect your business with robust security solutions and best practices.",
      features: ["Security Audits", "Penetration Testing", "Compliance"],
      icon: "🔒",
      color: "from-indigo-500 to-blue-600",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Decorative background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_60%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We provide end-to-end digital solutions — from design to deployment — 
            helping businesses grow in the modern tech era.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative p-[2px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 h-full flex flex-col justify-between shadow-lg">
                {/* Icon */}
                <div
                  className={`text-5xl mb-5 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                >
                  {service.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mt-auto">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >
                      <svg
                        className="w-5 h-5 text-blue-500 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import { motion } from "framer-motion";

const Process = () => {
  const steps = [
    {
      number: "1",
      title: "Discovery & Planning",
      description:
        "We deep dive into your requirements, understand your business goals, analyze competitors, and create a comprehensive project roadmap with clear milestones.",
    },
    {
      number: "2",
      title: "Design & Prototype",
      description:
        "Our design team crafts intuitive wireframes, stunning UI mockups, and interactive prototypes that bring your vision to life before development begins.",
    },
    {
      number: "3",
      title: "Development & Testing",
      description:
        "Our developers write clean, scalable code while QA experts perform rigorous testing to ensure flawless performance across all devices and platforms.",
    },
    {
      number: "4",
      title: "Deployment & Support",
      description:
        "We manage the complete deployment and provide continuous maintenance, updates, and 24/7 support to keep your application running smoothly.",
    },
  ];

  return (
    <section
      id="process"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Decorative Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          >
            Our Development <span className="text-blue-600">Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            A proven methodology that ensures quality, efficiency, and client satisfaction
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 hover:-translate-y-3 border border-transparent hover:border-blue-200 group"
            >
              <div className="flex flex-col items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition duration-300">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition duration-300">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">{step.description}</p>

              {/* Decorative connector line for large screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-[-40px] w-20 h-[2px] bg-gradient-to-r from-blue-400 to-indigo-400"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

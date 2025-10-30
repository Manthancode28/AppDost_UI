import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-indigo-100 min-h-screen flex items-center py-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold shadow-sm"
            >
              🚀 Complete IT Solution Provider Since 2025
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                Transform Your Ideas Into{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
                  Digital Reality
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl"
            >
              Your trusted partner for comprehensive IT solutions. From mobile
              apps to enterprise systems, we bring innovation and excellence to
              every project with our expert team of developers.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollToSection("services")}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
              >
                Explore Our Services →
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-white hover:bg-gray-50 text-blue-700 border border-blue-600 font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
              >
                Get Free Consultation
              </button>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
            >
              {[
                { value: "100%", label: "Client Satisfaction" },
                { value: "Secure & Scalable", label: "Solutions" },
                { value: "24/7", label: "Support" },
                { value: "Tech Projects", label: "+10 Projects" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-white/60 rounded-lg backdrop-blur-sm shadow-md hover:shadow-lg transition-all"
                >
                 <div className="text-xl font-bold text-blue-600 break-words leading-snug">
                    {stat.value}
                    </div>
                    <div className="text-gray-600 text-sm mt-1 break-words text-center leading-tight">
                    {stat.label}
                    </div>

                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { value: "10+", label: "WEB PROJECTS" },
              { value: "4+", label: "ANDROID APPS" },
              { value: "1", label: "CRM PROJECT" },
              { value: "2025", label: "FOUNDED YEAR" },
            ].map((card, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.08,
                  rotate: 1,
                }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-4xl font-bold text-blue-600 mb-3">
                  {card.value}
                </div>
                <div className="text-gray-700 font-semibold text-lg">
                  {card.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors duration-300 mx-auto group"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center group-hover:border-blue-600 transition-colors duration-300">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 group-hover:bg-blue-600 transition-colors duration-300 animate-bounce"></div>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

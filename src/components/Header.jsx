import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="ml-3 text-xl font-bold text-gray-900">AppDost</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">Services</a>
            <a href="#process" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">Process</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">Projects</a>
            <a href="#opensource" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">Open Source</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
              Get Free Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gray-700 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-700 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-700 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 px-4 sm:px-6 lg:px-8">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300">Services</a>
              <a href="#process" className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300">Process</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300">Projects</a>
              <a href="#opensource" className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300">Open Source</a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 w-full mt-4">
                Get Free Consultation
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
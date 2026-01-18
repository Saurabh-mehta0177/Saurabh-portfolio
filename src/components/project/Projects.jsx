
import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiExternalLink, FiGithub, FiStar, FiCode } from 'react-icons/fi';
import { Rocket, Zap, Layers, Globe, Sparkles, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import ecommerce from "../../assets/ecommerce.jpg";
import portpoliosau from "../../assets/portpoliosau.webp";
import sauscm from "../../assets/sauscm.jpg";

const projects = [
  {
    id: 1,
    title: 'NayaBazaar E-Commerce',
    desc: 'A full-featured e-commerce platform built with Spring Boot and modern frontend technologies. Features include user authentication, product management, shopping cart, and payment integration.',
    technologies: ['Spring Boot', 'Tailwind CSS', 'Lombok', 'MySQL', 'Spring Security', 'JWT', 'REST API'],
    github: 'https://github.com/Saurabh-mehta0177/NayaBazaar',
    demo: 'https://github.com/Saurabh-mehta0177/NayaBazaar',
    image: ecommerce,
    category: 'Full Stack',
    status: 'Live',
    color: 'from-blue-500 to-purple-500'
  },
  {
    id: 2,
    title: 'Smart Contact Manager',
    desc: 'A contact management system for organizing and managing personal/business contacts efficiently. Features include contact categorization, search, and secure user authentication.',
    technologies: ['Spring Boot', 'Tailwind CSS', 'Lombok', 'MySQL', 'Spring Security', 'Thymeleaf'],
    github: 'https://github.com/saurabh-mehta0177/smart-contact-manager-test-',
    demo: 'https://github.com/Saurabh-mehta0177/smart-contact-manager-test-',
    image: sauscm,
    category: 'Web Application',
    status: 'Live',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    title: 'Developer Portfolio',
    desc: 'A modern, responsive portfolio website showcasing skills, projects, and experience. Built with React and featuring smooth animations and interactive elements.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Google Fonts', 'Responsive Design'],
    github: 'https://github.com/example/portfolio',
    demo: 'https://demo.com/portfolio',
    image: portpoliosau,
    category: 'Portfolio',
    status: 'Live',
    color: 'from-red-500 to-pink-500'
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);


  const projectsPerPage = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [perPage, setPerPage] = useState(projectsPerPage());

  useEffect(() => {
    const handleResize = () => {
      setPerPage(projectsPerPage());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + perPage >= projects.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - perPage : prevIndex - 1
    );
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + perPage);

  return (
    <section
      id="projects"
      data-aos="fade-up"
      data-aos-delay="250"
      className="w-full py-24 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-200 via-blue-50/20 to-purple-50/20 dark:from-gray-900 dark:via-gray-800/20 dark:to-gray-900 z-0"></div>
      <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-r from-blue-300/20 to-purple-300/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-red-300/20 to-pink-300/20 dark:from-red-500/10 dark:to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Rocket className="w-12 h-12 text-red-500 dark:text-red-400 animate-bounce" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 dark:from-red-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <Zap className="w-12 h-12 text-yellow-500 dark:text-yellow-400 animate-bounce delay-300" />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-4">
            Real-world applications showcasing my technical expertise and problem-solving skills
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-gray-300/50 dark:border-gray-700/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-pink-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-gray-800 dark:text-gray-200">{projects.length}</span>
                <span className="text-gray-600 dark:text-gray-400">Projects</span>
              </div>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-gray-300/50 dark:border-gray-700/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-gray-800 dark:text-gray-200">3</span>
                <span className="text-gray-600 dark:text-gray-400">Categories</span>
              </div>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-gray-300/50 dark:border-gray-700/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-gray-800 dark:text-gray-200">100%</span>
                <span className="text-gray-600 dark:text-gray-400">Live</span>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 hidden lg:block"
          >
            <div className="w-14 h-14 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-2 border-gray-300/50 dark:border-gray-700/50 flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 hover:text-white group transition-all duration-300">
              <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-200 group-hover:text-white" />
            </div>
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 hidden lg:block"
          >
            <div className="w-14 h-14 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-2 border-gray-300/50 dark:border-gray-700/50 flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 hover:text-white group transition-all duration-300">
              <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-200 group-hover:text-white" />
            </div>
          </button>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="group relative"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Card */}
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl overflow-hidden border-2 border-gray-300/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] h-full">
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm text-white text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>
                    {/* Status Indicator */}
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-white font-medium">{project.status}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Title and Icon */}
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-blue-600 dark:group-hover:from-red-400 dark:group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                      </h3>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                        <Layers className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {project.desc}
                    </p>

                    {/* Technologies */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-3">
                        <FiCode className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Technologies Used</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1.5 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 border border-gray-300/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 dark:hover:from-red-900/20 dark:hover:to-blue-900/20 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-300/50 dark:border-gray-700/50">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 border border-gray-300/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 hover:text-white transition-all duration-300"
                      >
                        <FiGithub className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                        <span className="font-medium">Code</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-red-500 to-blue-500 text-white hover:from-red-600 hover:to-blue-600 transition-all duration-300"
                      >
                        <span className="font-medium">Live Demo</span>
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>

                  {/* Gradient Border Bottom */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-full w-0 group-hover:w-full transition-all duration-700"></div>
                </div>

                {/* Floating Element */}
                {hoveredProject === project.id && (
                  <div className={`absolute -z-10 w-40 h-40 bg-gradient-to-r ${project.color} rounded-full blur-2xl opacity-20 -top-10 -right-10 transition-opacity duration-700`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mt-8 lg:hidden">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 hover:text-white transition-all duration-300 shadow-lg"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(projects.length / perPage) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx * perPage)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === idx * perPage 
                    ? 'bg-gradient-to-r from-red-500 to-blue-500 w-8' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              ></button>
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 hover:text-white transition-all duration-300 shadow-lg"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Project Highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Sparkles />, title: 'Modern Stack', desc: 'Built with latest technologies' },
            { icon: <Globe />, title: 'Responsive Design', desc: 'Works on all devices' },
            { icon: <Layers />, title: 'Clean Architecture', desc: 'Well-structured codebase' },
          ].map((highlight, idx) => (
            <div
              key={idx}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-300/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {highlight.icon}
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {highlight.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {highlight.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-red-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 border border-gray-300/50 dark:border-gray-700/50 backdrop-blur-sm">
            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
              More projects available on GitHub
            </span>
            <a
              href="https://github.com/Saurabh-mehta0177"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-blue-500 text-white text-sm font-medium hover:from-red-600 hover:to-blue-600 transition-all duration-300"
            >
              Visit GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
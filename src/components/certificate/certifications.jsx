import React from 'react';
import { ExternalLink, Award, Calendar, Building } from 'lucide-react';
import amdox from "../../assets/certificate/amdox.jpg";
import codec from "../../assets/certificate/codec.jpg";
import infosys from "../../assets/certificate/infosys.png";
import jpmorgan from "../../assets/certificate/jpmorgan.png";
import reliancefoundation from "../../assets/certificate/reliancefoundation.png";

const certifications = [
  {
  id: 1,
  name: 'Java Developer Intern',
  issuer: 'Amdox',
  date: '13 Jan 2026',
  img: amdox,
  description: 'Java Full Stack development.',
  link: 'https://drive.google.com/file/d/19-2f4odL3dpK-4eI7sdq8BQWlYTZ6v7N/view?usp=sharing',
  category: 'Full Stack',
  color: 'from-orange-400 to-yellow-500'
},
  {
    id: 2,
    name: 'Java backend development',
    issuer: 'amdox',
    date: '13 jan 2026',
    img: amdox,
    description: 'Traning Certificate Java web applications using Spring Boot.',
    link: 'https://drive.google.com/file/d/1yCmLlF1Ncf95Ayk8TsMiWiQT-tYFQn-3/view?usp=sharing',
    category: 'Backend',
    color: 'from-green-400 to-emerald-500'
  },
  {
    id: 3,
    name: 'java development Intern',
    issuer: 'codec technology',
    date: '9 mar 2025 - 7 june 2025',
    img: codec,
    description: 'Covers back-end web development technologies.',
    link: 'https://drive.google.com/file/d/130TBPZO2r6qeuUi7XOevTGaGrLWkT70o/view?usp=sharing',
    category: 'Backend development',
    color: 'from-blue-400 to-cyan-500'
  },
   {
    id: 4,
    name: 'Data Structures and Algorithms using Java',
    issuer: 'Infosys',
    date: '29 may 2025',
    img: infosys,
    description: 'Data Structures and Algorithms using Java',
    link: 'https://drive.google.com/file/d/1mQM8gFV5ZL0DlTMXT8UuyS9Za93_9w6Q/view?usp=sharing',
    category: 'DSA',
    color: 'from-blue-400 to-cyan-500'
  },
   {
    id: 5,
    name: 'Software Engineering Job Simulation',
    issuer: 'jpmorgan',
    date: '8 feb 2025',
    img: jpmorgan,
    description: 'Project Setup Kafka IntegrationH2 IntegrationREST API IntegrationREST API Controller',
    link: 'https://drive.google.com/file/d/1lwn06jqL43A6Jplggr4GKAeOV638JPH-/view?usp=sharing',
    category: 'Software Engineering',
    color: 'from-blue-400 to-cyan-500'
  },
   {
    id: 6,
    name: 'Front-end Web Development',
    issuer: 'reliancefoundation',
    date: '6 feb 2025',
    img: reliancefoundation,
    description: 'Front-end Web Development using HTML,CSS,Java-Script',
    link: 'https://drive.google.com/file/d/1b2DedHf-W3zucXczeTFDttuvW3jn4_nx/view?usp=sharing',
    category: 'Front-end Web Development',
    color: 'from-blue-400 to-cyan-500'
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      data-aos="fade-up"
      data-aos-delay="250"
      className="w-full py-24 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-100 via-green-50/40 to-blue-200 dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900 z-0"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-red-300/20 to-pink-300/20 dark:from-red-500/10 dark:to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-blue-300/20 to-purple-300/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Award className="w-12 h-12 text-yellow-500 dark:text-yellow-400 animate-bounce" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 dark:from-red-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              Professional Certifications
            </h2>
            <Award className="w-12 h-12 text-yellow-500 dark:text-yellow-400 animate-bounce delay-300" />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            Validated expertise through industry-recognized certifications
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-gray-300/50 dark:border-gray-700/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-gray-800 dark:text-gray-200">{certifications.length}+</span>
                <span className="text-gray-600 dark:text-gray-400">Certifications</span>
              </div>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-gray-300/50 dark:border-gray-700/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-gray-800 dark:text-gray-200">3</span>
                <span className="text-gray-600 dark:text-gray-400">Categories</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              data-aos="fade-up"
              data-aos-delay={300 + index * 100}
              className="group relative"
            >
              {/* Card */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 border-2 border-transparent group-hover:border-gray-300 dark:group-hover:border-gray-600 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden"
              >
                {/* Gradient Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
                
                {/* Header with Logo */}
                <div className="flex items-start justify-between mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={cert.img}
                        alt={cert.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Award className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <span className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${cert.color} text-white text-xs font-semibold`}>
                    {cert.category}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-blue-600 dark:group-hover:from-red-400 dark:group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                  {cert.name}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {cert.description}
                </p>

                {/* Metadata */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Building className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{cert.issuer}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Issued: {cert.date}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 border border-gray-300/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 text-sm font-medium group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-blue-500 group-hover:text-white transition-all duration-300">
                    View Certificate
                    <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-full w-0 group-hover:w-full transition-all duration-700"></div>
              </a>

              {/* Floating Element */}
              <div className={`absolute -z-10 w-40 h-40 bg-gradient-to-r ${cert.color} rounded-full blur-2xl opacity-0 group-hover:opacity-20 -top-10 -right-10 transition-opacity duration-700`}></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50">
            <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Currently pursuing more certifications in Cloud & Full-Stack Development
            </span>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Certification Progress</span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">75%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 transition-all duration-1000"
                style={{ width: '75%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
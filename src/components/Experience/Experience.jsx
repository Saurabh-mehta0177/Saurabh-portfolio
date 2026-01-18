import React from 'react';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaBuilding, FaExternalLinkAlt } from 'react-icons/fa';
import { Rocket, TrendingUp, BookOpen, Target } from 'lucide-react';

const experience = [
  {
    id: '1',
    role: 'Java Developer Student',
    company: 'College Student',
    period: '2024 - Present',
    desc: 'Developing web applications using Spring Boot, REST APIs, and microservices architecture. Building scalable backend solutions with Java technologies.',
    icon: <FaBriefcase />,
    type: 'Work',
    category: 'Backend Development',
    color: 'from-blue-500 to-cyan-500',
    skills: ['Spring Boot', 'Java', 'REST APIs', 'Microservices']
  },
  {
    id: '2',
    role: 'Database Administrator',
    company: 'College Student',
    period: '2023 - Present',
    desc: 'Managing database systems, optimizing queries, ensuring data integrity and security. Experience with MySQL, Oracle DB, and database design principles.',
    icon: <FaBriefcase />,
    type: 'Work',
    category: 'Database Management',
    color: 'from-green-500 to-emerald-500',
    skills: ['MySQL', 'Oracle DB', 'SQL', 'Database Design']
  },
  {
    id: '3',
    role: 'AWS Cloud Practitioner',
    company: 'Fresher',
    period: '2024 - Present',
    desc: 'Working with AWS cloud services including EC2, S3, Lambda, and RDS. Building and deploying scalable cloud infrastructure and solutions.',
    icon: <FaBriefcase />,
    type: 'Work',
    category: 'Cloud Computing',
    color: 'from-orange-500 to-yellow-500',
    skills: ['AWS', 'Cloud Computing', 'EC2', 'S3']
  },
  {
  id: '4',
  role: 'DevOps Engineer',
  company: 'Fresher',
  period: '2025 - Present',
  desc: 'Working with DevOps tools and practices including CI/CD pipelines, Docker, Kubernetes, and cloud automation. Focused on improving deployment efficiency, scalability, and system reliability.',
  icon: <FaBriefcase  />,
  type: 'Work',
  category: 'DevOps',
  color: 'from-blue-500 to-cyan-500',
  skills: ['DevOps', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'Linux']
},

  {
    id: '5',
    role: 'B.Tech Computer Science Engineering',
    company: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya (R.G.P.V), Bhopal',
    period: '2022 - 2026',
    desc: 'Pursuing Bachelor of Technology in Computer Science. Focus on Data Structures, Algorithms, Web Development, Database Management, and Software Engineering.',
    icon: <FaGraduationCap />,
    type: 'Education',
    category: 'Computer Science Engineering',
    color: 'from-purple-500 to-pink-500',
    skills: ['Data Structures', 'Algorithms', 'Web Development', 'Software Engineering']
  }
];

const Experience = () => {
  return (
    <section
      id="experience"
      data-aos="fade-up"
      data-aos-delay="250"
      className="w-full py-24 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-100 via-blue-50/20 to-pink-200 dark:from-gray-900 dark:via-gray-800/20 dark:to-gray-900 z-0"></div>
      <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-r from-red-300/20 to-pink-300/20 dark:from-red-500/10 dark:to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-blue-300/20 to-purple-300/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Rocket className="w-12 h-12 text-red-500 dark:text-red-400 animate-bounce" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 dark:from-red-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              Professional Journey
            </h2>
            <TrendingUp className="w-12 h-12 text-blue-500 dark:text-blue-400 animate-bounce delay-300" />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            My career progression and educational background in technology
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-gray-300/50 dark:border-gray-700/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-gray-800 dark:text-gray-200">3</span>
                <span className="text-gray-600 dark:text-gray-400">Work Experiences</span>
              </div>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-gray-300/50 dark:border-gray-700/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-gray-800 dark:text-gray-200">1</span>
                <span className="text-gray-600 dark:text-gray-400">Education</span>
              </div>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-gray-300/50 dark:border-gray-700/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-gray-800 dark:text-gray-200">4</span>
                <span className="text-gray-600 dark:text-gray-400">Tech Domains</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-red-300 via-purple-300 to-blue-300 dark:from-red-500/50 dark:via-purple-500/50 dark:to-blue-500/50"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-0">
            {experience.map((item, idx) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                className={`relative group ${
                  idx % 2 === 0 
                    ? 'lg:pr-1/2 lg:pl-8 lg:text-right' 
                    : 'lg:pl-1/2 lg:pr-8'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 lg:left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color} border-4 border-white dark:border-gray-900 shadow-lg group-hover:scale-150 transition-all duration-300`}></div>
                </div>

                {/* Content Card */}
                <div className={`
                  ml-8 lg:ml-0 relative 
                  ${idx % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}
                  transform transition-all duration-500 
                  hover:scale-[1.02] hover:-translate-y-2
                `}>
                  {/* Card */}
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 border-2 border-gray-300/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl overflow-hidden">
                    {/* Gradient Background Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
                    
                    {/* Header */}
                    <div className={`flex items-start justify-between mb-6 ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                          <div className="text-white text-2xl">
                            {item.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-blue-600 dark:group-hover:from-red-400 dark:group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                            {item.role}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <FaBuilding className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                            <span className="text-gray-600 dark:text-gray-300 font-medium">{item.company}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Type Badge */}
                      <span className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-semibold`}>
                        {item.type}
                      </span>
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-2 mb-6">
                      <FaCalendarAlt className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{item.period}</span>
                      <span className="mx-2">•</span>
                      <span className="text-gray-600 dark:text-gray-400">{item.category}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">KEY TECHNOLOGIES</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIdx) => (
                          <span
                            key={skillIdx}
                            className="px-3 py-1.5 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 border border-gray-300/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 dark:hover:from-red-900/20 dark:hover:to-blue-900/20 transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Border Animation */}
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-full w-0 group-hover:w-full transition-all duration-700"></div>
                  </div>

                  {/* Floating Element */}
                  <div className={`absolute -z-10 w-32 h-32 bg-gradient-to-r ${item.color} rounded-full blur-2xl opacity-0 group-hover:opacity-20 -top-8 ${
                    idx % 2 === 0 ? 'lg:-left-8' : 'lg:-right-8'
                  } transition-opacity duration-700`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Path Visualization */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">Career Path</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From academic foundations to professional expertise
            </p>
          </div>

          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-300/50 dark:border-gray-700/50">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { year: '2022', title: 'B.Tech Begins', desc: 'Started Computer Science Engineering' },
                { year: '2023', title: 'Core Learning', desc: 'Mastered Java, Databases, AWS' },
                { year: '2024', title: 'Certifications', desc: 'AWS, Spring Boot, Full Stack' },
                { year: '2025+', title: 'Career Growth', desc: 'Seeking Professional Opportunities' },
              ].map((step, idx) => (
                <div key={idx} className="relative group">
                  <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 border border-gray-300/50 dark:border-gray-700/50 hover:border-red-300 dark:hover:border-red-500 transition-all duration-300">
                    <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-blue-600 dark:from-red-400 dark:to-blue-400 bg-clip-text text-transparent">
                      {step.year}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mt-2">{step.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{step.desc}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-1/2 right-0 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600 dark:to-transparent group-hover:from-red-500 group-hover:to-blue-500 transition-all duration-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-red-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 border border-gray-300/50 dark:border-gray-700/50 backdrop-blur-sm">
            <Target className="w-6 h-6 text-red-500 dark:text-red-400" />
            <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
              Open to internship and full-time opportunities in Software Development
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
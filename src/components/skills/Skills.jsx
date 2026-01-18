
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

import awsIcon from "../../assets/aws.png";
import c from "../../assets/c.png";
import java from "../../assets/java.png";
import Cpp from "../../assets/Cpp.png";
import spring from "../../assets/spring.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import react from "../../assets/react.png";
import mysql from "../../assets/mysql.png";
import oracle from "../../assets/oracle.png";
import docker from "../../assets/docker.png";
import microservices from "../../assets/microservices.png";
import argocd from "../../assets/argocd.png";
import git from "../../assets/git.png";
import github from "../../assets/github.png";
import gitlab from "../../assets/gitlab.png";
import jenkins from "../../assets/jenkins.jpg";
import kubernetes from "../../assets/kubernetes.png";
import python from "../../assets/python.png";
import tailwindcss from "../../assets/tailwindcss.png";
import javascript from "../../assets/javascript.png";

const skills = [
  {
    img: java,
    name: "Java",
    desc: "Strong experience in Java with solid understanding of OOP concepts, data structures, and building scalable enterprise applications.",
    level: 90
  },

  {
    img: python,
    name: "Python",
    desc: "Good knowledge of Python for scripting, automation, and problem solving with clean and efficient code practices.",
    level: 85
  },

  {
    img: c,
    name: "C",
    desc: "Strong foundation in C programming with experience in system-level programming and efficient memory management.",
    level: 85
  },

  {
    img: Cpp,
    name: "C++",
    desc: "Hands-on experience with C++ for competitive programming, data structures, and performance-oriented applications.",
    level: 80
  },

  {
    img: spring,
    name: "Spring Boot",
    desc: "Experience in developing RESTful APIs and microservices using Spring Boot with clean architecture principles.",
    level: 85
  },

  {
    img: awsIcon,
    name: "AWS",
    desc: "Practical experience with AWS cloud services such as EC2, S3, IAM, and Lambda for deploying scalable applications.",
    level: 75
  },

  {
    img: html,
    name: "HTML5",
    desc: "Expertise in writing semantic and accessible HTML5 code for SEO-friendly and responsive web pages.",
    level: 95
  },

  {
    img: css,
    name: "CSS3",
    desc: "Advanced CSS skills including Flexbox, Grid, animations, and responsive design for modern web interfaces.",
    level: 90
  },

  {
    img: tailwindcss,
    name: "Tailwind CSS",
    desc: "Experience with Tailwind CSS for building clean, responsive, and custom UI designs efficiently.",
    level: 88
  },

  {
    img: react,
    name: "React",
    desc: "Skilled in building dynamic and interactive user interfaces using React, hooks, and component-based architecture.",
    level: 85
  },

  {
    img: javascript,
    name: "JavaScript",
    desc: "Strong understanding of modern JavaScript (ES6+), asynchronous programming, and DOM manipulation.",
    level: 68
  },

  {
    img: mysql,
    name: "MySQL",
    desc: "Experience in database design, writing optimized SQL queries, and managing relational databases.",
    level: 82
  },

  {
    img: oracle,
    name: "Oracle DB",
    desc: "Working knowledge of Oracle Database with experience in PL/SQL and enterprise-level data handling.",
    level: 78
  },

  {
    img: microservices,
    name: "Microservices",
    desc: "Understanding of microservices architecture, service communication, and deployment best practices.",
    level: 75
  },

  {
    img: docker,
    name: "Docker",
    desc: "Hands-on experience with Docker for containerizing applications and using Docker Compose for multi-container setups.",
    level: 72
  },

  {
    img: kubernetes,
    name: "Kubernetes",
    desc: "Basic understanding of Kubernetes concepts including pods, services, and container orchestration.",
    level: 75
  },

  {
    img: git,
    name: "Git",
    desc: "Proficient in Git for version control, branch management, and collaborative development workflows.",
    level: 75
  },

  {
    img: github,
    name: "GitHub",
    desc: "Experience using GitHub for repository management, pull requests, and team collaboration.",
    level: 75
  },

  {
    img: gitlab,
    name: "GitLab",
    desc: "Familiar with GitLab repositories and CI/CD pipelines for automated builds and deployments.",
    level: 75
  },

  {
    img: jenkins,
    name: "Jenkins",
    desc: "Basic experience with Jenkins for continuous integration and automated build pipelines.",
    level: 75
  },

  {
    img: argocd,
    name: "Argo CD",
    desc: "Understanding of GitOps principles and using Argo CD for continuous delivery in Kubernetes environments.",
    level: 75
  }
]


const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
  setCurrentIndex((prev) => (prev === 0 ? Math.ceil(skills.length / 2) - 1 : prev - 1));
};

const handleNext = () => {
  setCurrentIndex((prev) => (prev >= Math.ceil(skills.length / 2) - 1 ? 0 : prev + 1));
};
    return (
        <section 
            id='skills' 
            data-aos='fade-up' 
            data-aos-delay='250' 
            className='w-full py-20 relative overflow-hidden'
        >
            {/* Background Elements */}
  <div className="absolute inset-0 bg-gradient-to-br 
from-blue-50/50 via-sky-100 to-purple-50/50 
dark:from-gray-900 dark:via-gray-800/95 dark:to-gray-700 z-0"></div>  

<div className="absolute top-20 left-10 w-72 h-72 
bg-gradient-to-r from-red-300/20 to-pink-300/20 
dark:from-red-400/2 dark:to-pink-400/2 
rounded-full blur-3xl animate-pulse"></div>
<div className="absolute bottom-20 right-10 w-96 h-96 
bg-gradient-to-r from-blue-300/20 to-purple-300/20 
dark:from-blue-400/2 dark:to-purple-400/2 
rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                {/* Header Section */}
                <div className='text-center mb-16 relative'>
                    <div className="inline-flex items-center justify-center mb-4">
                        <Sparkles className="w-8 h-8 text-yellow-500 mr-3 animate-pulse" />
                        <h2 className='text-5xl font-bold bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 dark:from-red-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent inline-block'>
                            TECHNICAL SKILLSET
                        </h2>
                        <Sparkles className="w-8 h-8 text-yellow-500 ml-3 animate-pulse delay-500" />
                    </div>
                    <p className='mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
                        Technologies and tools I've mastered through hands-on experience and continuous learning
                    </p>
                    
                    {/* Progress Bar for Skills Level */}
                    <div className="mt-8 max-w-2xl mx-auto bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full p-1 border border-gray-200/50 dark:border-gray-700/50">
                        <div className="flex items-center justify-between px-6 py-2">
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Skill Level Overview</span>
                            <div className="flex items-center gap-2">
                                {[20, 40, 60, 80, 100].map((level) => (
                                    <div key={level} className="flex flex-col items-center">
                                        <div className={`w-1 h-4 rounded-full ${level <= 80 ? 'bg-green-400' : 'bg-blue-400'}`}></div>
                                        <span className="text-xs text-gray-500">{level}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Grid - Desktop */}
                <div className='hidden lg:grid grid-cols-2 xl:grid-cols-3 gap-8'>
                    {skills.map((skill, index) => (
                        <div 
                            key={index}
                            className={`relative group transition-all duration-500 ${hoveredSkill === index ? 'z-20' : 'z-10'}`}
                            onMouseEnter={() => setHoveredSkill(index)}
                            onMouseLeave={() => setHoveredSkill(null)}
                        >
                            {/* Skill Card */}
                            <div className={`
                                bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg 
                                rounded-3xl p-6 border-2 
                                transition-all duration-500 transform
                                ${hoveredSkill === index 
                                    ? 'border-red-300 dark:border-red-400 shadow-2xl scale-105' 
                                    : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600 shadow-lg'
                                }
                                overflow-hidden
                            `}>
                                {/* Gradient Background Effect */}
                                <div className={`
                                    absolute inset-0 bg-gradient-to-br 
                                    ${hoveredSkill === index 
                                        ? 'from-red-500/5 via-purple-500/5 to-blue-500/5' 
                                        : 'from-transparent'
                                    }
                                    transition-opacity duration-500
                                `}></div>

                                {/* Skill Header */}
                                <div className="flex items-center gap-4 mb-6 relative">
                                    <div className={`
                                        w-16 h-16 rounded-2xl flex items-center justify-center
                                        bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800
                                        border border-gray-200/50 dark:border-gray-700/50
                                        group-hover:from-red-50 group-hover:to-pink-50 
                                        dark:group-hover:from-red-900/20 dark:group-hover:to-pink-900/20
                                        transition-all duration-300
                                        ${hoveredSkill === index ? 'rotate-12' : ''}
                                    `}>
                                        <img 
                                            src={skill.img} 
                                            alt={`${skill.name} Icon`} 
                                            className='w-10 h-10 object-contain'
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center">
                                            <h3 className='text-xl font-bold text-gray-800 dark:text-gray-200'>
                                                {skill.name}
                                            </h3>
                                            <span className="text-sm font-semibold bg-gradient-to-r from-red-500 to-blue-500 dark:from-red-400 dark:to-blue-400 bg-clip-text text-transparent">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        
                                        {/* Progress Bar */}
                                        <div className="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                            <div 
                                                className={`h-full rounded-full bg-gradient-to-r from-red-500 to-blue-500 transition-all duration-1000 ease-out`}
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Skill Description */}
                                <p className='text-gray-600 dark:text-gray-300 leading-relaxed relative z-10'>
                                    {skill.desc}
                                </p>

                                {/* Hover Indicator */}
                                {hoveredSkill === index && (
                                    <div className="absolute -right-3 -top-3 w-6 h-6 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex items-center justify-center">
                                        <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                                    </div>
                                )}
                            </div>

                            {/* Floating Elements */}
                            <div className={`
                                absolute -z-10 w-32 h-32 rounded-full blur-xl
                                transition-all duration-700
                                ${hoveredSkill === index 
                                    ? 'opacity-100 -top-8 -right-8 bg-gradient-to-r from-red-400/30 to-blue-400/30' 
                                    : 'opacity-0'
                                }
                            `}></div>
                        </div>
                    ))}
                </div>

                {/* Skills Carousel - Mobile & Tablet */}

<div className='lg:hidden relative'>
  <div className='overflow-hidden'>
    <div 
      className='flex flex-wrap transition-transform duration-500 ease-out'
      style={{ transform: `translateX(-${currentIndex * 50}%)` }}
    >
      {skills.map((skill, index) => (
        <div key={index} className='w-1/2 px-2 mb-4'>
          <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-6 border-2 border-gray-200/50 dark:border-gray-700/50 shadow-lg'>
            {/* Skill Card Content */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center border border-gray-200/50 dark:border-gray-700/50">
                <img src={skill.img} alt={`${skill.name} Icon`} className='w-8 h-8 object-contain'/>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className='text-lg font-bold text-gray-800 dark:text-gray-200'>
                    {skill.name}
                  </h3>
                  <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-red-500 to-blue-500" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            </div>
            <p className='text-gray-600 dark:text-gray-300 text-sm'>{skill.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  {/* Carousel Controls */}
  <div className="flex justify-center items-center gap-4 mt-8">
    <button
      onClick={handlePrev}
      className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 hover:text-white transition-all duration-300 shadow-lg"
    >
      <ChevronLeft size={20} />
    </button>
    <button
      onClick={handleNext}
      className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50 hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 hover:text-white transition-all duration-300 shadow-lg"
    >
      <ChevronRight size={20} />
    </button>
  </div>
</div>
                {/* Skill Categories */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { name: 'Backend', count: 6, color: 'from-red-500 to-pink-500' },
                        { name: 'Frontend', count: 5, color: 'from-blue-500 to-cyan-500' },
                        { name: 'Databases', count: 2, color: 'from-green-500 to-emerald-500' },
                        { name: 'DevOps', count: 8, color: 'from-purple-500 to-violet-500' },
                    ].map((category, idx) => (
                        <div 
                            key={idx}
                            className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                <span className="text-white font-bold text-lg">{category.count}</span>
                            </div>
                            <h4 className="font-semibold text-gray-800 dark:text-gray-200">{category.name}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Technologies</p>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 border border-gray-300/50 dark:border-gray-700/50 backdrop-blur-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                            Continuously learning new technologies
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
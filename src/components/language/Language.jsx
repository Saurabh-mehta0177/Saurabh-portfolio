
import React from 'react';
import { Globe, MessageCircle, Volume2, Users, Target, Award } from 'lucide-react';

const languages = [
  { 
    name: 'Hindi', 
    level: 'Native', 
    proficiency: 95,
    color: 'from-green-500 to-emerald-600',
    icon: '🇮🇳',
    description: 'Native speaker with excellent comprehension and communication skills'
  },
  { 
    name: 'English', 
    level: 'Professional', 
    proficiency: 85,
    color: 'from-blue-500 to-cyan-600',
    icon: '🇺🇸',
    description: 'Professional proficiency in technical and conversational contexts'
  },
  { 
    name: 'Bhojpuri', 
    level: 'Native', 
    proficiency: 70,
    color: 'from-orange-500 to-yellow-500',
    icon: '🎵',
    description: 'Native speaker with cultural fluency and conversational expertise'
  },
];

const communicationSkills = [
  { skill: 'Technical Communication', level: 88 },
  { skill: 'Team Collaboration', level: 92 },
  { skill: 'Documentation', level: 85 },
  { skill: 'Presentation', level: 80 },
];

const Language = () => {
  return (
    <section
      id="languages"
      data-aos="fade-up"
      data-aos-delay="250"
      className="w-full py-24 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-200 via-blue-50/20 to-purple-100 dark:from-gray-900 dark:via-gray-800/20 dark:to-gray-900 z-0"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-green-300/20 to-emerald-300/20 dark:from-green-500/10 dark:to-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-300/20 to-purple-300/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Globe className="w-12 h-12 text-blue-500 dark:text-blue-400 animate-spin-slow" />
          
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 dark:from-red-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent text-center sm:text-left break-words">
  Language & Communication
</h2>

            <MessageCircle className="w-12 h-12 text-green-500 dark:text-green-400 animate-bounce delay-300" />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-4">
            Multilingual communicator with strong proficiency in technical and interpersonal communication
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-gray-300/50 dark:border-gray-700/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-gray-800 dark:text-gray-200">3</span>
                <span className="text-gray-600 dark:text-gray-400">Languages</span>
              </div>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-gray-300/50 dark:border-gray-700/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-gray-800 dark:text-gray-200">90%</span>
                <span className="text-gray-600 dark:text-gray-400">Avg. Proficiency</span>
              </div>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-gray-300/50 dark:border-gray-700/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-gray-800 dark:text-gray-200">2</span>
                <span className="text-gray-600 dark:text-gray-400">Native Languages</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Languages Section */}
          <div>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <Volume2 className="w-8 h-8 text-red-500 dark:text-red-400" />
                <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                  Language Proficiency
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Strong communication skills in multiple languages enable effective collaboration in diverse teams.
                I continuously work on improving language skills to adapt to professional and academic environments.
              </p>
            </div>

            <div className="space-y-8">
              {languages.map((lang, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-6 border-2 border-gray-300/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden">
                    {/* Gradient Background Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${lang.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
                    
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${lang.color} flex items-center justify-center text-3xl shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                          {lang.icon}
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-blue-600 dark:group-hover:from-red-400 dark:group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                            {lang.name}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">{lang.description}</p>
                        </div>
                      </div>
                      <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-300 text-sm font-semibold">
                        {lang.level}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Proficiency Level</span>
                        <span className="text-lg font-bold bg-gradient-to-r from-red-600 to-blue-600 dark:from-red-400 dark:to-blue-400 bg-clip-text text-transparent">
                          {lang.proficiency}%
                        </span>
                      </div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full bg-gradient-to-r ${lang.color} transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-blue-500/20`}
                          style={{ width: `${lang.proficiency}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Bottom Border Animation */}
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-full w-0 group-hover:w-full transition-all duration-700"></div>
                  </div>

                  {/* Floating Element */}
                  <div className={`absolute -z-10 w-32 h-32 bg-gradient-to-r ${lang.color} rounded-full blur-2xl opacity-0 group-hover:opacity-20 -top-8 -right-8 transition-opacity duration-700`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Communication Skills Section */}
          <div>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-blue-500 dark:text-blue-400" />
                <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                  Communication Skills
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Effective communication is key to successful collaboration. I excel in conveying technical concepts 
                clearly and adapting communication style to diverse audiences and contexts.
              </p>
            </div>

            <div className="space-y-6">
              {communicationSkills.map((skill, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100 + 300}
                  className="group"
                >
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-5 border-2 border-gray-300/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {skill.skill}
                      </h4>
                      <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-cyan-500/20"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits Card */}
            <div 
              data-aos="fade-up"
              data-aos-delay="600"
              className="mt-12 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-3xl p-8 border border-green-200/50 dark:border-green-700/50"
            >
              <div className="flex items-start gap-4">
                <Award className="w-12 h-12 text-green-600 dark:text-green-400 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                    Communication Advantages
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Clear technical concept explanation
                    </li>
                    <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Effective team collaboration
                    </li>
                    <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Cross-cultural adaptability
                    </li>
                    <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Professional documentation skills
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Language Usage */}
            <div 
              data-aos="fade-up"
              data-aos-delay="700"
              className="mt-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-3xl p-6 border border-purple-200/50 dark:border-purple-700/50"
            >
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  Language Usage Context
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-pink-500 mx-auto flex items-center justify-center text-white font-bold text-lg">
                      H
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300 mt-2">Native</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto flex items-center justify-center text-white font-bold text-lg">
                      E
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300 mt-2">Professional</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mx-auto flex items-center justify-center text-white font-bold text-lg">
                      B
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-300 mt-2">Cultural</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300/50 dark:border-gray-700/50">
            <Target className="w-6 h-6 text-red-500 dark:text-red-400" />
            <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
              Continuously improving communication skills for better team collaboration and project success
            </span>
          </div>
        </div>
      </div>

      {/* Add custom animations to global CSS or tailwind config */}
      <style >{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Language;
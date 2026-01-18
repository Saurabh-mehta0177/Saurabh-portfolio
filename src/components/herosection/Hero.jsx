
import React from "react";
import facebook from "../../assets/facebook.jpeg";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import whatsapp from "../../assets/whatsapp.png";
import twitter from "../../assets/twitter.png";
import saurabh1 from "../../assets/saurabh1.png";

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[660px] lg:min-h-[750px] bg-gradient-to-br from-red-300 via-blue-50/30 to-red-100 dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900 flex flex-col">
      {/* Animated Gradient Background Elements */}

       <div className="absolute w-[800px] h-[800px] -right-40 -top-40 
bg-gradient-to-r 
from-red-400/20 via-purple-400/20 to-blue-400/20 
dark:from-red-400/2 dark:via-purple-400/2 dark:to-blue-400/2 
rounded-full blur-3xl animate-pulse-slow"></div>
<div className="absolute w-[600px] h-[600px] -left-20 top-1/3 
bg-gradient-to-r 
from-blue-400/15 to-green-400/15 
dark:from-blue-400/2 dark:to-green-400/2 
rounded-full blur-3xl animate-pulse-slow delay-1000"></div>

      {/* Main Floating Gradient Orb */}
      <div
        className="absolute w-[400px] md:w-[500px] h-[700px] right-20 md:right-40
        bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full transform rotate-12 
        top-8 shadow-[0_0_120px_rgba(255,100,100,0.5)] z-0 dark:shadow-[0_0_120px_rgba(255,100,100,0.3)]
        animate-float"
        aria-hidden="true"
      ></div>

      <section
        data-aos="fade-up"
        data-aos-delay="250"
        className="body-font relative z-10"
      >
        <div className="container mx-auto flex px-5 py-24 md:py-32 md:flex-row flex-col items-center">
          <div className="relative lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col 
            md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            
            {/* Social Media Icons with Gradient Background */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-wrap justify-center gap-4 mb-8 md:mb-10" 
              aria-label="Social media links">
              {[
                { href: "https://www.linkedin.com/in/saurabh-mehta-06321b263?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVsiWjeieQ%2FiudvFgijAUcw%3D%3D", icon: linkedin, label: "linkedin", bg: "from-blue-600 to-blue-700" },
                { href: "https://twitter.com/SaurabhKum65740", icon: twitter, label: "twitter", bg: "from-sky-400 to-sky-500" },
                { href: "https://www.instagram.com/saurabh_mehta8084", icon: instagram, label: "instagram", bg: "from-pink-500 via-purple-500 to-orange-400" },
                { href: "https://wa.me/qr/JFBAGWUWFXTQD1", icon: whatsapp, label: "whatsapp", bg: "from-green-500 to-emerald-600" },
                { href: "https://www.facebook.com/profile.php?id=100058209082802", icon: facebook, label: "facebook", bg: "from-blue-700 to-blue-800" },
                { href: "https://github.com/saurabh-mehta0177", icon: github, label: "github", bg: "from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${social.bg} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md group-hover:blur-lg`}></div>
                  <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm flex items-center justify-center border border-gray-200/50 dark:border-gray-700/50 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <img 
                      src={social.icon} 
                      alt={social.label} 
                      className={`w-8 h-8 md:w-9 md:h-9 ${social.label === 'facebook' ? 'rounded-lg' : 'rounded-full'}`} 
                    />
                  </div>
                </a>
              ))}
            </div>

            {/* Main Heading with Gradient */}
            <h1 className="title-font sm:text-7xl text-5xl mb-4 font-bold">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
                Hi! I'm{" "}
              </span>
              <span className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 dark:from-red-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient">
                Saurabh Mehta
              </span>
            </h1>

            {/* Subheading */}
            <h2 className="sm:text-4xl text-2xl mb-6 font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
             “Java Developer | Full-Stack Developer | DevOps Enthusiast”
            </h2>

            {/* Description */}
            <div className="relative mb-10 max-w-2xl">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/5 via-purple-500/5 to-blue-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <p className="relative text-lg leading-relaxed text-gray-700 dark:text-gray-300 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
               I am a Computer Science Engineering student passionate about Full-Stack Development and DevOps practices.
Over the past two years, I have been building user-centric, scalable projects, gaining hands-on experience with technologies such as Java, Spring Boot, React, AWS, Docker, and CI/CD pipelines.
I thrive in collaborative environments, enjoy tackling new challenges, and continuously strive to deliver impactful solutions.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                //href="/Saurabhresume.pdf"
                href="/saurabh-portfolio/Saurabhresume.pdf"
                download="Saurabhresume.pdf"
                className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-full transition-all duration-300 group-hover:scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                <span className="relative text-white font-semibold text-lg flex items-center gap-2">
                  Download CV
                  <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </span>
              </a>

              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-full border-2 border-gradient-to-r from-blue-500 to-purple-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <span className="relative font-semibold text-lg bg-gradient-to-r from-red-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300">
                  Contact Me
                </span>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-duration="800"
            className="relative z-20 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-12 md:mt-0"
          >
            <div className="relative">
              {/* Outer Gradient Ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full animate-spin-slow opacity-50 blur-md"></div>
              {/* Inner Gradient Ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 rounded-full opacity-70"></div>
              
              <img
                src={saurabh1}
                alt="Saurabh Mehta - Java Developer"
                className="relative object-cover object-center rounded-full w-80 h-80 md:w-96 md:h-96
                border-8 border-white/90 dark:border-gray-900/90 shadow-2xl
                hover:scale-105 transition-transform duration-500"
                width={400}
                height={400}
                loading="eager"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-xl opacity-70 animate-bounce-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-400 rounded-full blur-xl opacity-70 animate-bounce-slow delay-500"></div>
            </div>

            {/* Decorative Text */}
            <div className="mt-10 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-gray-800/50 dark:to-gray-700/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Open to Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-red-500 dark:text-red-400 animate-bounce">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-red-500 to-blue-500 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </div>

      {/* Add custom animations to global CSS or tailwind config */}
      <style >{`
        @keyframes float {
          0%, 100% { transform: rotate(12deg) translateY(0px); }
          50% { transform: rotate(12deg) translateY(-20px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
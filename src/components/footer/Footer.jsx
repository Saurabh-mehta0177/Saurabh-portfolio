
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaRocket } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Sparkles, Code, Coffee, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const socialLinks = [
        { icon: <FaGithub />, label: 'GitHub', link: 'https://github.com/saurabh-mehta0177', color: 'from-gray-800 to-gray-900' },
        { icon: <FaLinkedin />, label: 'LinkedIn', link: 'https://www.linkedin.com/in/saurabh-mehta-06321b263', color: 'from-blue-700 to-blue-800' },
        { icon: <FaTwitter />, label: 'Twitter', link: 'https://twitter.com/SaurabhKum65740', color: 'from-sky-400 to-sky-500' },
        { icon: <FaEnvelope />, label: 'Email', link: 'mailto:saurabhmehta0050@gmail.com', color: 'from-red-500 to-pink-500' },
    ];

    const footerLinks = [
        { name: 'Skills', href: '#skills', emoji: '🛠️' },
        { name: 'Projects', href: '#projects', emoji: '💡' },
        { name: 'Contact', href: '#contact', emoji: '📞' },
        { name: 'Experience', href: '#experience', emoji: '🚀' },
        { name: 'Certifications', href: '#certifications', emoji: '🏆' },
    ];

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className='relative bg-gradient-to-b from-pink-100 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900 pt-20 pb-8 overflow-hidden'>
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500"></div>
            <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-red-300/10 to-pink-300/10 dark:from-red-500/5 dark:to-pink-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-blue-300/10 to-purple-300/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className='container mx-auto px-4 relative z-10'>
                {/* Main Footer Content */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'>
                    {/* Brand Section */}
                    <div className='space-y-6'>
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className='inline-flex items-center gap-3'
                        >
                            <div className='w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-blue-500 flex items-center justify-center'>
                                <Code className='w-6 h-6 text-white' />
                            </div>
                            <h3 className='text-2xl font-bold bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 dark:from-red-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent'>
                                Saurabh Mehta
                            </h3>
                        </motion.div>
                        <p className='text-gray-600 dark:text-gray-300'>
                            Passionate Java Developer & Full-Stack Student creating impactful solutions through code.
                        </p>
                        <div className='flex items-center gap-2 text-gray-500 dark:text-gray-600'>
                            <Coffee className='w-4 h-4' />
                            <span className='text-sm'>Made with passion and ☕</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className='text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6'>Quick Links</h4>
                        <ul className='space-y-4'>
                            {footerLinks.map((link, idx) => (
                                <motion.li
                                    key={idx}
                                    whileHover={{ x: 5 }}
                                    className='group'
                                >
                                    <a 
                                        href={link.href} 
                                        className='flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300'
                                    >
                                        <span className='text-lg'>{link.emoji}</span>
                                        <span className='group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors'>
                                            {link.name}
                                        </span>
                                        <FiArrowUp className='w-3 h-3 rotate-45 opacity-0 group-hover:opacity-100 transition-all duration-300' />
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect Section */}
                    <div>
                        <h4 className='text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6'>Let's Connect</h4>
                        <div className='space-y-4'>
                            <p className='text-gray-600 dark:text-gray-300 text-sm'>
                                Feel free to reach out for collaborations, opportunities, or just a friendly chat!
                            </p>
                            <div className='flex gap-4'>
                                {socialLinks.map((social, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={social.link}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${social.color} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className='h-px bg-gradient-to-r from-transparent via-gray-300/50 to-transparent dark:via-gray-700/50 my-8'></div>

                {/* Bottom Bar */}
                <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
                    {/* Copyright */}
                    <div className='flex items-center gap-2'>
                        <Sparkles className='w-4 h-4 text-yellow-500' />
                        <p className='text-gray-600 dark:text-gray-300 text-sm'>
                            &copy; {currentYear} Saurabh Mehta. All rights reserved.
                        </p>
                        <FaHeart className='w-3 h-3 text-red-500 animate-pulse' />
                    </div>

                    {/* Navigation Emojis */}
                    <div className='hidden md:flex items-center gap-4'>
                        {['🚀', '💻', '🎯', '🌟', '💡', '❤️'].map((emoji, idx) => (
                            <motion.span
                                key={idx}
                                initial={{ y: 0 }}
                                animate={{ y: [0, -5, 0] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: idx * 0.2
                                }}
                                className='text-lg'
                            >
                                {emoji}
                            </motion.span>
                        ))}
                    </div>

                    {/* Back to Top Button */}
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-300/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 hover:text-white transition-all duration-300'
                    >
                        <FiArrowUp className='w-4 h-4' />
                        <span className='text-sm font-medium'>Back to Top</span>
                    </motion.button>
                </div>

                {/* Made By Section */}
                <div className='mt-8 pt-6 border-t border-gray-300/30 dark:border-gray-700/30 text-center'>
                    <div className='inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 dark:from-gray-800 dark:to-gray-900'>
                        <Mail className='w-4 h-4 text-gray-500 dark:text-gray-400' />
                        <p className='text-sm text-gray-600 dark:text-gray-400'>
                            Crafted with passion by{' '}
                            <span className='font-semibold text-gray-800 dark:text-gray-200'>
                                Saurabh Mehta
                            </span>
                        </p>
                    </div>
                    <p className='text-xs text-gray-500 dark:text-gray-500 mt-4'>
                        Built with React, Tailwind CSS, and Framer Motion
                    </p>
                </div>

                {/* Floating Elements */}
                <div className="absolute -bottom-4 left-1/4 w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-8 right-1/3 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce delay-500"></div>
            </div>

            {/* Add custom animations to global CSS or tailwind config */}
            <style >{`
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-bounce {
                    animation: bounce 2s ease-in-out infinite;
                }
            `}</style>
        </footer>
    );
};

export default Footer;

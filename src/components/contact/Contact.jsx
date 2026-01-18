
import React, { useRef, useState } from 'react';
import { FiMessageSquare, FiMail, FiUser, FiPhone, FiSend } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, Mail, Phone, MapPin, CheckCircle, XCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

 const [notification, setNotification] = useState({
  type: null,
  message: ''
});


  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, title: 'Email', value: 'saurabhmehta0050@gmail.com', link: 'mailto:saurabhmehta0050@gmail.com' },
    { icon: <Phone className="w-5 h-5" />, title: 'Phone', value: '+91 8084641043', link: 'tel:+918084641043' },
    { icon: <MapPin className="w-5 h-5" />, title: 'Location', value: 'Bhopal, Madhya Pradesh, India' },
  ];

  const sendEmail = (e) => {
  e.preventDefault();
  setIsLoading(true);
  setNotification({ type: null, message: '' });

  emailjs.sendForm(
    'service_to6zkq4',
    'template_t6mmbqp',
    form.current,
    { publicKey: 'mi1GiZ3D-tOa3odct' }
  )
  .then(
    (result) => {
      setNotification({
        type: 'success',
        message: "Message sent successfully! I'll get back to you soon."
      });
      form.current?.reset();
      setIsLoading(false);
      setTimeout(() => setNotification({ type: null, message: '' }), 5000);
    },
    (error) => {
      setNotification({
        type: 'error',
        message: 'Failed to send message. Please try again or contact me directly.'
      });
      setIsLoading(false);
    }
  );
};



  return (
    <section
      data-aos="fade-up"
      data-aos-delay="250"
      id="contact"
      className="relative py-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-200 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900 z-0"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-red-300/20 to-pink-300/20 dark:from-red-500/10 dark:to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-blue-300/20 to-purple-300/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Send className="w-12 h-12 text-red-500 dark:text-red-400 animate-bounce" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 dark:from-red-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <Mail className="w-12 h-12 text-blue-500 dark:text-blue-400 animate-bounce delay-300" />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm always open to discussing new opportunities, collaborations, or just having a friendly chat about technology and innovation.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={idx}
                  href={info.link}
                  target={info.link ? '_blank' : undefined}
                  rel={info.link ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className={`block group ${info.link ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 border-2 border-gray-300/50 dark:border-gray-700/50 hover:border-red-300 dark:hover:border-red-500 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-blue-500 flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                          {info.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-green-200/50 dark:border-green-700/50">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  Current Availability
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Open to full-time opportunities, internships, and freelance projects in software development.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Typically replies within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl p-8 border-2 border-gray-300/50 dark:border-gray-700/50 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                Send me a message
              </h3>

              <AnimatePresence>
                {notification.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`mb-6 p-4 rounded-2xl border ${
                      notification.type === 'success'
                        ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                        : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {notification.type === 'success' ? (
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                      )}
                      <p className={
                        notification.type === 'success'
                          ? 'text-green-700 dark:text-green-300'
                          : 'text-red-700 dark:text-red-300'
                      }>
                        {notification.message}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-6"
              >
                {/* Name Field */}
                <motion.div
                  initial={false}
                  whileFocus={{ scale: 1.01 }}
                  className="group"
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FiUser className="text-gray-400 dark:text-gray-500 group-focus-within:text-red-500 transition-colors" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="from_name"
                      placeholder="Enter your name"
                      className="w-full pl-12 pr-4 py-3 bg-white/50 dark:bg-gray-900/50 border-2 border-gray-300/50 dark:border-gray-700/50 rounded-xl text-gray-800 dark:text-gray-100 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
                      required
                    />
                  </div>
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={false}
                  whileFocus={{ scale: 1.01 }}
                  className="group"
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FiMail className="text-gray-400 dark:text-gray-500 group-focus-within:text-red-500 transition-colors" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="reply_to"
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-3 bg-white/50 dark:bg-gray-900/50 border-2 border-gray-300/50 dark:border-gray-700/50 rounded-xl text-gray-800 dark:text-gray-100 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
                      required
                    />
                  </div>
                </motion.div>

                {/* Phone Field (Optional) */}
                <motion.div
                  initial={false}
                  whileFocus={{ scale: 1.01 }}
                  className="group"
                >
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number <span className="text-gray-400 text-xs">(Optional)</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FiPhone className="text-gray-400 dark:text-gray-500 group-focus-within:text-red-500 transition-colors" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      className="w-full pl-12 pr-4 py-3 bg-white/50 dark:bg-gray-900/50 border-2 border-gray-300/50 dark:border-gray-700/50 rounded-xl text-gray-800 dark:text-gray-100 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300"
                    />
                  </div>
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={false}
                  whileFocus={{ scale: 1.01 }}
                  className="group"
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-4">
                      <FiMessageSquare className="text-gray-400 dark:text-gray-500 group-focus-within:text-red-500 transition-colors" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                      className="w-full pl-12 pr-4 py-3 bg-white/50 dark:bg-gray-900/50 border-2 border-gray-300/50 dark:border-gray-700/50 rounded-xl text-gray-800 dark:text-gray-100 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 resize-none"
                      required
                    />
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full py-4 px-6 rounded-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 transition-all duration-300 group-hover:scale-105"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                  <div className="relative flex items-center justify-center gap-3">
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 text-white animate-spin" />
                        <span className="text-white font-semibold">Sending...</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                        <span className="text-white font-semibold">Send Message</span>
                      </>
                    )}
                  </div>
                </motion.button>
              </form>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-6 text-center">
                Your information is secure and will only be used to respond to your inquiry.
              </p>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8">
            Connect with me on social platforms
          </h3>
          <div className="flex justify-center gap-6">
            {[
              { name: 'LinkedIn', icon: '💼', link: 'https://linkedin.com/in/saurabh-mehta' },
              { name: 'GitHub', icon: '🐙', link: 'https://github.com/Saurabh-mehta0177' },
              { name: 'Twitter', icon: '🐦', link: 'https://twitter.com/SaurabhKum65740' },
              { name: 'Instagram', icon: '📷', link: 'https://instagram.com/saurabh_mehta8084' },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-2 border-gray-300/50 dark:border-gray-700/50 flex items-center justify-center text-2xl shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 hover:text-white transition-all duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
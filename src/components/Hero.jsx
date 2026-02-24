import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Suthipong-Poenpunya', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/suthipong-phernpanya-8142843b3/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJ%2FXoGUdXSmm2PrJOn7Jp9w%3D%3D', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:suthipong7754@gmail.com', label: 'Email' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Hello, I'm</span>
              <br />
              <span className="text-gray-900 dark:text-white">Suthipong Poenpunya</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Developer & Educational Technologist
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              I create innovative educational technology solutions that bridge the gap between 
              development and learning. Passionate about building tools that enhance educational experiences 
              and make technology accessible for all learners.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold border border-gray-300 dark:border-gray-600 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a
            href="#about"
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

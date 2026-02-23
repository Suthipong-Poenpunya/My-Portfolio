import { motion } from 'framer-motion'
import { Code, Database, Palette, Globe } from 'lucide-react'

export default function About() {
  const skills = [
    {
      icon: Code,
      title: 'Educational Technology',
      description: 'Learning Management Systems, E-learning Platforms, Educational Apps',
    },
    {
      icon: Database,
      title: 'Web Development',
      description: 'React, Node.js, Python, Database Design',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered Design, Accessibility, Educational Interface Design',
    },
    {
      icon: Globe,
      title: 'Digital Learning',
      description: 'Online Course Development, Educational Content Creation',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm a passionate developer with a love for creating elegant solutions to complex problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              My Story
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              As a Developer and Educational Technologist with a unique dual background, I bring together 
              the worlds of computer science and educational technology. My journey has been driven by a 
              passion for creating innovative solutions that enhance learning experiences through technology.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I hold dual bachelor's degrees in Educational Technology from Chulalongkorn University and 
              Computer Science from Ramkhamhaeng University, giving me a comprehensive understanding of 
              both pedagogical principles and technical implementation. This unique combination allows me 
              to design and build educational technology tools that are both effective and user-friendly.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              My work focuses on bridging the gap between education and technology, creating applications 
              and platforms that make learning more accessible, engaging, and effective for diverse audiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-6 rounded-xl">
              <h4 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2</h4>
              <p className="text-gray-700 dark:text-gray-300">Bachelor's Degrees</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 p-6 rounded-xl">
              <h4 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">EdTech</h4>
              <p className="text-gray-700 dark:text-gray-300">Specialization</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 p-6 rounded-xl">
              <h4 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">CS</h4>
              <p className="text-gray-700 dark:text-gray-300">Background</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 p-6 rounded-xl">
              <h4 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">Innovation</h4>
              <p className="text-gray-700 dark:text-gray-300">Focus</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Skills & Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <skill.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {skill.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

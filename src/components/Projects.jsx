import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'E-Management School System',
      description: 'A School Management System that helps schools manage their students, teachers, and courses.',
      tech: ['React', 'Node.js', 'Vite', 'Gemini AI (API)', 'OCR'],
      image: 'https://i.ibb.co/4gWHqbTg/2569-02-25-00-45-34.png',
      liveUrl: 'https://suthipong-poenpunya.github.io/buranakan-panya-demo/',
      githubUrl: 'https://github.com/suthipong-poenpunya/buranakan-panya-demo',
    },
    {
      title: 'KNK-Listener: Complaint Report System for Student',
      description: 'Complaint Report System for Student in Faculty of Education, Chulalongkorn University, Supported by USCE.CU',
      tech: ['HTML', 'CSS', 'Apps Script', 'AppSheets', 'Google Sheet', 'Google Form'],
      image: 'https://i.ibb.co/dJXVd6PB/2569-02-25-09-56-27.png',
      liveUrl: 'https://suthipong-poenpunya.github.io/knk-listener/',
      githubUrl: 'https://github.com/Suthipong-Poenpunya/knk-listener',
    },
    {
      title: 'Weather Dashboard (SOON)',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed meteorological data.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'OpenWeather API'],
      image: 'https://images.unsplash.com/photo-1592210454359-90444f8d8137?w=800&h=400&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Social Media Analytics (SOON)',
      description: 'Comprehensive analytics dashboard for social media management with data visualization and reporting features.',
      tech: ['Next.js', 'Python', 'Redis', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'AI Chat Assistant (SOON)',
      description: 'Intelligent chatbot powered by machine learning for customer support and automated responses.',
      tech: ['Python', 'TensorFlow', 'React', 'FastAPI'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Portfolio Website (SOON)',
      description: 'Modern portfolio website with smooth animations, dark mode, and optimized performance.',
      tech: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop',
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 flex space-x-3">
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-900" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      aria-label="View source code"
                    >
                      <Github className="w-4 h-4 text-gray-900" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Have a project in mind? Let's talk
          </a>
        </motion.div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import Lightbox from './Lightbox.jsx'

const easePremium = [0.22, 1, 0.36, 1]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easePremium } },
}

export default function ProjectPage({ title, subtitle, techs, screens, screenshots, github, live }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: easePremium }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors duration-300 text-sm font-medium group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </motion.div>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: easePremium, delay: 0.1 }}
        className="relative py-20 sm:py-28 px-4 overflow-hidden"
      >
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-accent-secondary/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.p variants={childVariants} className="text-accent font-mono text-sm mb-3 uppercase tracking-wider">
              Case Study
            </motion.p>

            <motion.h1 variants={childVariants} className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
              {title}
            </motion.h1>

            <motion.p variants={childVariants} className="text-secondary text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </motion.p>

            <motion.div variants={childVariants} className="flex flex-wrap items-center justify-center gap-3 mt-8">
              {techs.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 glass rounded-full text-xs sm:text-sm text-accent font-mono border border-accent/10 font-medium"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div variants={childVariants} className="mt-10 flex items-center justify-center gap-4">
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-text font-semibold rounded-xl overflow-hidden transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-[1.02]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-accent-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  View Live
                  <ExternalLink size={16} />
                </span>
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-3.5 border border-accent/30 text-text font-semibold rounded-xl hover:bg-accent/10 hover:border-accent/60 transition-all duration-300 hover:scale-[1.02]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                Source Code
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <section className="relative px-4 pb-28">
        <div className="max-w-6xl mx-auto">
          {screens.map((screen, i) => (
            <motion.div
              key={screen.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: easePremium }}
              className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-24 lg:mb-32 last:mb-0"
            >
              <motion.div
                className={`w-full lg:w-2/5 shrink-0 order-1 ${
                  screen.align === 'left' ? 'lg:order-2' : 'lg:order-1'
                }`}
                initial={{ opacity: 0, x: screen.align === 'left' ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.15 + 0.2, ease: easePremium }}
              >
                <motion.button
                  onClick={() => setLightboxIndex(i)}
                  className="group relative w-full focus:outline-none"
                  aria-label={`Open ${screen.title} screenshot`}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-accent-secondary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative glass rounded-2xl overflow-hidden border border-accent/10 group-hover:border-accent/30 transition-all duration-500 shadow-xl shadow-black/30 group-hover:shadow-2xl group-hover:shadow-accent/10">
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                    <img
                      src={screen.img}
                      alt={screen.title}
                      loading={i === 0 ? 'eager' : 'lazy'}
                      className="w-full max-h-[650px] object-contain block group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none z-20">
                      <span className="px-4 py-2 glass rounded-full text-xs text-text font-medium backdrop-blur-md">
                        Click to expand
                      </span>
                    </div>
                  </div>
                </motion.button>
              </motion.div>

              <motion.div
                className={`w-full lg:w-3/5 order-2 ${
                  screen.align === 'left' ? 'lg:order-1' : 'lg:order-2'
                }`}
                initial={{ opacity: 0, x: screen.align === 'left' ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.15 + 0.1, ease: easePremium }}
              >
                <span className="text-accent font-mono text-xs uppercase tracking-wider mb-4 block">
                  Screen {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight">{screen.title}</h2>
                <p className="text-secondary text-base sm:text-lg leading-relaxed max-w-xl">
                  {screen.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="relative border-t border-accent/5 bg-[#070B14]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors duration-300 text-sm font-medium group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>
            <p className="text-secondary text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} Ahmed.dev.
            </p>
          </div>
        </div>
      </footer>

      {lightboxIndex !== null && (
        <Lightbox
          images={screenshots}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  )
}

import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import expenseApp from '../assets/images/expense-app.png'
import qattaApp from '../assets/images/Qatta-app.png'
import dafterApp from '../assets/images/AL-Dafter-app.png'
import { useLanguage } from '../context/useLanguage.js'

const easePremium = [0.22, 1, 0.36, 1]

const projectsData = [
  {
    img: expenseApp,
    tech: ['Flutter', 'Firebase'],
    github: 'https://github.com/ahmedbawzir12-png',
    live: '#',
  },
  {
    img: qattaApp,
    tech: ['Flutter', 'Firebase'],
    github: 'https://github.com/ahmedbawzir12-png',
    live: '#',
  },
  {
    img: dafterApp,
    tech: ['Flutter', 'Firebase'],
    github: 'https://github.com/ahmedbawzir12-png',
    live: '#',
  },
]

function PhoneMockup({ img, title }) {
  return (
    <div className="phone-mockup">
      <div className="phone-screen">
        <img
          src={img}
          alt={`${title} screenshot`}
          loading="lazy"
          className="phone-image"
        />
      </div>
    </div>
  )
}

export default function Projects() {
  const { t } = useLanguage()
  const projectTexts = t('projects.list')

  return (
    <section id="projects" className="relative py-20 sm:py-28 px-4 overflow-hidden" aria-labelledby="projects-heading">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: easePremium }}
          className="text-center mb-16"
        >
          <p className="text-accent font-mono text-sm mb-2 uppercase tracking-wider">{t('projects.label')}</p>
          <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold">
            {t('projects.heading')} <span className="gradient-text">{t('projects.headingAccent')}</span>
          </h2>
          <p className="text-secondary text-base sm:text-lg max-w-2xl mx-auto mt-4">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projectsData.map((project, i) => {
            const texts = projectTexts[i] || {}
            return (
              <motion.div
                key={texts.title || i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: easePremium }}
                className="group"
              >
                <div className="glass-card rounded-2xl p-5 sm:p-6 hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5 h-full flex flex-col">
                  <div className="relative mb-5">
                    <div className="absolute inset-0 bg-accent/10 rounded-[48px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90 group-hover:scale-110" aria-hidden="true" />

                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                      className="relative"
                    >
                      {i === 0 ? (
                        <Link to="/projects/expense-tracker" aria-label={`View ${texts.title} case study`} className="block">
                          <PhoneMockup img={project.img} title={texts.title || ''} />
                        </Link>
                      ) : i === 1 ? (
                        <Link to="/projects/qatta" aria-label={`View ${texts.title} case study`} className="block">
                          <PhoneMockup img={project.img} title={texts.title || ''} />
                        </Link>
                      ) : (
                        <Link to="/projects/al-dafter" aria-label={`View ${texts.title} case study`} className="block">
                          <PhoneMockup img={project.img} title={texts.title || ''} />
                        </Link>
                      )}
                    </motion.div>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                    {i === 0 ? (
                      <Link to="/projects/expense-tracker" className="hover:text-accent transition-colors">{texts.title}</Link>
                    ) : i === 1 ? (
                      <Link to="/projects/qatta" className="hover:text-accent transition-colors">{texts.title}</Link>
                    ) : (
                      <Link to="/projects/al-dafter" className="hover:text-accent transition-colors">{texts.title}</Link>
                    )}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed mb-4 flex-1">
                    {texts.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-mono border border-accent/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-accent/5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300 text-xs sm:text-sm group/btn"
                      aria-label={`View ${texts.title} source code on GitHub`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:scale-110 transition-transform"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                      <span>{t('projects.github')}</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-lg text-accent hover:bg-accent/20 transition-all duration-300 text-xs sm:text-sm group/btn"
                      aria-label={`View ${texts.title} live preview`}
                    >
                      <ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform" />
                      <span>{t('projects.livePreview')}</span>
                    </a>
                    {i === 0 && (
                      <Link
                        to="/projects/expense-tracker"
                        className="flex items-center gap-2 px-4 py-2 bg-accent text-text rounded-lg hover:bg-accent-secondary transition-all duration-300 text-xs sm:text-sm group/btn font-medium"
                        aria-label={`View ${texts.title} case study`}
                      >
                        <span>View Case Study</span>
                        <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    )}
                    {i === 1 && (
                      <Link
                        to="/projects/qatta"
                        className="flex items-center gap-2 px-4 py-2 bg-accent text-text rounded-lg hover:bg-accent-secondary transition-all duration-300 text-xs sm:text-sm group/btn font-medium"
                        aria-label={`View ${texts.title} case study`}
                      >
                        <span>View Case Study</span>
                        <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    )}
                    {i === 2 && (
                      <Link
                        to="/projects/al-dafter"
                        className="flex items-center gap-2 px-4 py-2 bg-accent text-text rounded-lg hover:bg-accent-secondary transition-all duration-300 text-xs sm:text-sm group/btn font-medium"
                        aria-label={`View ${texts.title} case study`}
                      >
                        <span>View Case Study</span>
                        <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ChevronUp, Star, GitFork } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Process from './sections/Process'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Loader from './components/Loader'
import WaterProject from './pages/WaterProject.jsx'
import QattaProject from './pages/QattaProject.jsx'
import MasrofyProject from './pages/MasrofyProject.jsx'
import ALDaftProject from './pages/ALDaftProject.jsx'
import KhadmatyProject from './pages/KhadmatyProject.jsx'
import { useLanguage } from './context/useLanguage.js'

const easePremium = [0.22, 1, 0.36, 1]

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easePremium } },
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          const docHeight = document.documentElement.scrollHeight - window.innerHeight
          setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-accent/10" role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}>
      <motion.div
        className="h-full bg-gradient-to-r from-accent to-accent-secondary"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3, ease: easePremium }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 glass rounded-xl text-accent hover:text-text hover:bg-accent/30 transition-all duration-300 shadow-lg shadow-accent/10 border border-accent/20"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

function GitHubSection() {
  const { t } = useLanguage()
  const repos = t('github.repos')

  return (
    <section className="relative py-20 sm:py-28 px-4 overflow-hidden" aria-labelledby="github-heading">
      <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <p className="text-accent font-mono text-sm mb-2 uppercase tracking-wider">{t('github.label')}</p>
          <h2 id="github-heading" className="text-3xl sm:text-4xl font-bold">
            {t('github.heading')} <span className="gradient-text">{t('github.headingAccent')}</span>
          </h2>
          <p className="text-secondary text-base sm:text-lg max-w-2xl mx-auto mt-4">
            {t('github.subtitle')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, i) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: easePremium }}
              className="glass-card rounded-xl p-6 group hover:border-accent/30 transition-all duration-500 cursor-default"
            >
              <div className="flex items-center gap-2 mb-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent shrink-0"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                <h3 className="text-sm font-semibold group-hover:text-accent transition-colors">{repo.name}</h3>
              </div>
              <p className="text-secondary text-xs leading-relaxed mb-4 line-clamp-2">{repo.desc}</p>
              <div className="flex items-center justify-between text-secondary text-xs">
                <span className="px-2 py-0.5 rounded bg-accent/10 text-accent font-mono">Dart</span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star size={12} /> {[24, 18, 15, 12][i] || 15}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} /> {[8, 5, 4, 3][i] || 4}
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-accent/5">
                <a
                  href="https://github.com/ahmedbawzir12-png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent hover:text-accent-secondary transition-colors flex items-center gap-1"
                  aria-label={`View ${repo.name} on GitHub`}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg> {t('github.viewRepo')}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="relative border-t border-accent/5 bg-bg" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="#home" className="text-lg font-bold tracking-tight" aria-label="Go to top">
            <span className="text-accent">Ahmed</span>
            <span className="text-text">.dev</span>
          </a>

          <p className="text-secondary text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Ahmed.dev. {t('footer.tagline')}
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/ahmedbawzir12-png"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-secondary hover:text-accent transition-colors duration-300"
              aria-label="GitHub profile"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            </a>
            <a
              href="https://www.linkedin.com/in/%D8%A7%D8%AD%D9%85%D8%AF-%D8%B3%D8%B9%D9%8A%D8%AF-%D8%A8%D8%A7%D9%88%D8%B2%D9%8A%D8%B1-66949b39a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-secondary hover:text-accent transition-colors duration-300"
              aria-label="LinkedIn profile"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="mailto:ahmedbawzyr73@gmail.com"
              className="p-2 text-secondary hover:text-accent transition-colors duration-300"
              aria-label="Send email"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function HomePage() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader isLoading={loading} />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Process />
        <Skills />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-bg">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/water-project-management-system" element={<WaterProject />} />
        <Route path="/projects/khadmaty" element={<KhadmatyProject />} />
        <Route path="/projects/masrofy" element={<MasrofyProject />} />
        <Route path="/projects/qatta" element={<QattaProject />} />
        <Route path="/projects/al-dafter" element={<ALDaftProject />} />
      </Routes>
    </div>
  )
}

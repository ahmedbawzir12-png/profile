import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowDown, ArrowRight, Sparkles, Code, Cpu, Layout } from 'lucide-react'
import profileImg from '../assets/images/profile.png'
import { useLanguage } from '../context/useLanguage.js'

const techBadges = [
  { icon: Code, label: 'Flutter', color: 'text-blue-400' },
  { icon: Cpu, label: 'AI/ML', color: 'text-purple-400' },
  { icon: Layout, label: 'UI/UX', color: 'text-pink-400' },
]

const easePremium = [0.22, 1, 0.36, 1]

function useTypingAnimation(words, typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!words.length) return
    const currentWord = words[wordIndex] || ''
    let timeout

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, pauseTime)
    } else if (isDeleting && text === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
      }, deletingSpeed)
    } else {
      timeout = setTimeout(
        () => {
          setText(
            isDeleting
              ? currentWord.substring(0, text.length - 1)
              : currentWord.substring(0, text.length + 1)
          )
        },
        isDeleting ? deletingSpeed : typingSpeed
      )
    }

    return () => clearTimeout(timeout)
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime])

  return text
}

function Particles({ count = 20 }) {
  const particles = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    const particleCount = isMobile ? Math.min(count, 8) : count
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: `${((i * 137.5 + 50) % 100)}%`,
      size: (i % 3) + 1,
      delay: (i * 0.7) % 8,
      duration: 6 + (i % 6),
      xOffset: i % 2 === 0 ? 50 : -50,
    }))
  }, [count])

  const height = typeof window !== 'undefined' ? window.innerHeight : 800

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent/30"
          style={{
            left: p.left,
            bottom: '-10px',
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -(height + 100)],
            x: [0, p.xOffset],
            opacity: [0, 0.8, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  const { t, lang } = useLanguage()
  const roles = t('hero.roles')
  const typedText = useTypingAnimation(Array.isArray(roles) ? roles : [])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const isMobile = useRef(false)

  const handleMouseMove = useCallback((e) => {
    if (!isMobile.current) {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
  }, [])

  useEffect(() => {
    isMobile.current = window.innerWidth < 768
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden"
      aria-label="Hero section"
    >
      <div
        className="mouse-glow"
        style={{ left: mousePos.x, top: mousePos.y }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-secondary/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
      </div>

      <Particles />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easePremium }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-accent font-mono text-xs sm:text-sm mb-6 tracking-wider uppercase border border-accent/20">
              <Sparkles size={14} className="text-accent" />
              {t('hero.available')}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: easePremium }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
          >
            {t('hero.hi')}{' '}
            <span className="gradient-text">Ahmed</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: easePremium }}
            className="flex items-center justify-center lg:justify-start gap-2 text-xl sm:text-2xl md:text-3xl font-semibold mb-6 h-10"
            aria-live="polite"
            aria-label={`I am a ${typedText}`}
          >
            {lang === 'en' && (
              <span className="text-secondary">{t('hero.prefix')}</span>
            )}
            <span className="text-text">{typedText}</span>
            <span className="w-[3px] h-7 bg-accent animate-pulse" aria-hidden="true" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: easePremium }}
            className="text-secondary text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: easePremium }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-text font-semibold rounded-xl overflow-hidden transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-[1.02]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2">
                {t('hero.cta')}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform rtl:rotate-180" />
              </span>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 border border-accent/30 text-text font-semibold rounded-xl hover:bg-accent/10 hover:border-accent/60 transition-all duration-300 hover:scale-[1.02]"
            >
              {t('hero.contactBtn')}
              <Mail size={18} className="group-hover:rotate-6 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: easePremium }}
            className="flex items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="https://github.com/ahmedbawzir12-png"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300 text-sm group"
              aria-label="GitHub profile"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/%D8%A7%D8%AD%D9%85%D8%AF-%D8%B3%D8%B9%D9%8A%D8%AF-%D8%A8%D8%A7%D9%88%D8%B2%D9%8A%D8%B1-66949b39a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300 text-sm group"
              aria-label="LinkedIn profile"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="mailto:ahmedbawzyr73@gmail.com"
              className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300 text-sm group"
              aria-label="Send email"
            >
              <Mail size={18} className="group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Email</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: easePremium }}
            className="flex items-center justify-center lg:hidden gap-3 mt-8"
          >
            {techBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-1.5 px-3 py-1.5 glass rounded-full text-xs border border-accent/10"
              >
                <badge.icon size={12} className={badge.color} />
                <span className="text-secondary">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easePremium }}
          className="order-first lg:order-last flex items-center justify-center relative my-4 lg:my-0"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] xl:w-[360px] xl:h-[360px]"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-accent-secondary to-accent animate-border-rotate p-[2px]">
              <div className="w-full h-full rounded-full bg-bg" />
            </div>

            <div className="absolute inset-0 rounded-full bg-accent/30 blur-[50px] sm:blur-[70px] animate-pulse" aria-hidden="true" />
            <div className="absolute inset-[10%] rounded-full bg-accent-secondary/20 blur-[35px] sm:blur-[50px] animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true" />

            <div className="absolute inset-[4px] rounded-full overflow-hidden border-2 border-accent/20 shadow-2xl shadow-accent/20">
              <img
                src={profileImg}
                alt="Ahmed - Flutter Developer"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 px-2.5 py-1 sm:px-3 sm:py-1.5 glass rounded-full border border-accent/20 shadow-lg flex items-center gap-1.5"
            >
              <Code size={12} className="text-blue-400" />
              <span className="text-[10px] sm:text-xs text-text font-medium">Flutter</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-1 -left-1 sm:-left-3 px-2.5 py-1 sm:px-3 sm:py-1.5 glass rounded-full border border-accent/20 shadow-lg flex items-center gap-1.5"
            >
              <Cpu size={12} className="text-purple-400" />
              <span className="text-[10px] sm:text-xs text-text font-medium">AI</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-1/2 -right-2 sm:-right-4 px-2.5 py-1 sm:px-3 sm:py-1.5 glass rounded-full border border-accent/20 shadow-lg flex items-center gap-1.5"
            >
              <Layout size={12} className="text-pink-400" />
              <span className="text-[10px] sm:text-xs text-text font-medium">UI/UX</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-secondary font-mono tracking-wider">{t('hero.scroll')}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} className="text-accent" />
        </motion.div>
      </motion.div>
    </section>
  )
}

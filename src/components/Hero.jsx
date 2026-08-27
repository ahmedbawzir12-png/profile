import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowDown, ArrowRight, Sparkles, Code, Cpu, Layout, Layers, Flame } from 'lucide-react'
import profileImg from '../assets/images/profile.png'
import { useLanguage } from '../context/useLanguage.js'

const easePremium = [0.22, 1, 0.36, 1]

function useTypingAnimation(words, typingSpeed = 70, deletingSpeed = 35, pauseTime = 2200) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!words || !words.length) return
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

function FloatingParticles({ count = 16 }) {
  const particles = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    const particleCount = isMobile ? Math.min(count, 6) : count
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: `${((i * 137.5 + 40) % 100)}%`,
      size: (i % 3) + 2,
      delay: (i * 0.6) % 7,
      duration: 7 + (i % 5),
      xOffset: i % 2 === 0 ? 40 : -40,
    }))
  }, [count])

  const height = typeof window !== 'undefined' ? window.innerHeight : 800

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent/35 blur-[1px]"
          style={{
            left: p.left,
            bottom: '-10px',
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -(height + 100)],
            x: [0, p.xOffset],
            opacity: [0, 0.8, 0.5, 0],
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
      className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-16 overflow-hidden bg-tech-grid"
      aria-label="Hero section"
    >
      {/* Interactive Cursor Light Track */}
      <div
        className="mouse-glow"
        style={{ left: mousePos.x, top: mousePos.y }}
        aria-hidden="true"
      />

      {/* Multi-Layered Ambient Aurora Spheres */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 -left-20 w-[550px] h-[550px] bg-accent/15 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-accent-secondary/15 rounded-full blur-[130px]"
        />
        <div className="absolute bottom-10 left-1/3 -translate-x-1/2 w-[650px] h-[650px] bg-accent/10 rounded-full blur-[160px]" />
      </div>

      <FloatingParticles />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Typography & Hero Copy */}
        <div className="lg:col-span-7 text-center lg:text-left">
          {/* Live Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easePremium }}
            className="inline-block"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-accent/25 shadow-lg text-accent font-mono text-xs sm:text-sm mb-6 tracking-wide backdrop-blur-xl group hover:border-accent/40 transition-colors">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              </span>
              <span className="text-text/90 font-medium">{t('hero.available')}</span>
              <Sparkles size={14} className="text-accent group-hover:rotate-12 transition-transform ml-0.5" />
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: easePremium }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-5 tracking-tight"
          >
            {t('hero.hi')}{' '}
            <span className="gradient-text drop-shadow-sm">Ahmed</span>
          </motion.h1>

          {/* Dynamic Typing Subhead */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: easePremium }}
            className="flex items-center justify-center lg:justify-start gap-2.5 text-xl sm:text-2xl md:text-3xl font-bold mb-6 h-12"
            aria-live="polite"
          >
            {lang === 'en' && (
              <span className="text-secondary font-medium">{t('hero.prefix')}</span>
            )}
            <span className="text-text bg-gradient-to-r from-text via-text/90 to-accent/90 bg-clip-text text-transparent">
              {typedText}
            </span>
            <span className="w-[3px] h-7 bg-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(234,88,12,0.8)]" aria-hidden="true" />
          </motion.div>

          {/* Subtitle Bio */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: easePremium }}
            className="text-secondary text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed font-normal"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: easePremium }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 bg-accent text-text font-semibold rounded-2xl overflow-hidden transition-all duration-300 shadow-xl shadow-accent/25 hover:shadow-accent/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent-secondary via-accent to-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift" />
              <span className="relative flex items-center gap-2.5 text-sm sm:text-base">
                {t('hero.cta')}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform rtl:rotate-180" />
              </span>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 glass border border-accent/25 text-text font-semibold rounded-2xl hover:bg-accent/15 hover:border-accent/50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base"
            >
              {t('hero.contactBtn')}
              <Mail size={18} className="group-hover:rotate-12 transition-transform text-accent" />
            </a>
          </motion.div>

          {/* Social Media Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: easePremium }}
            className="flex items-center justify-center lg:justify-start gap-3"
          >
            <a
              href="https://github.com/ahmedbawzir12-png"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 glass rounded-xl text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300 text-xs font-semibold group shadow-sm"
              aria-label="GitHub profile"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/%D8%A7%D8%AD%D9%85%D8%AF-%D8%B3%D8%B9%D9%8A%D8%AF-%D8%A8%D8%A7%D9%88%D8%B2%D9%8A%D8%B1-66949b39a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 glass rounded-xl text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300 text-xs font-semibold group shadow-sm"
              aria-label="LinkedIn profile"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:ahmedbawzyr73@gmail.com"
              className="flex items-center gap-2 px-4 py-2 glass rounded-xl text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300 text-xs font-semibold group shadow-sm"
              aria-label="Send email"
            >
              <Mail size={16} className="group-hover:scale-110 transition-transform" />
              <span>Email</span>
            </a>
          </motion.div>
        </div>

        {/* Right 3D Orbital Glass Avatar Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: easePremium }}
          className="lg:col-span-5 flex items-center justify-center relative my-6 lg:my-0 order-first lg:order-last"
        >
          <div className="relative w-[240px] h-[240px] sm:w-[310px] sm:h-[310px] xl:w-[380px] xl:h-[380px] flex items-center justify-center">
            {/* Outer Glow Halo Ring */}
            <div className="absolute inset-[-15px] rounded-full bg-accent/25 blur-[50px] sm:blur-[70px] animate-pulse" aria-hidden="true" />
            <div className="absolute inset-[-5px] rounded-full bg-accent-secondary/20 blur-[30px] animate-pulse" style={{ animationDelay: '1.2s' }} aria-hidden="true" />

            {/* Rotating Gradient Border Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-accent-secondary to-accent animate-border-rotate p-[2px]">
              <div className="w-full h-full rounded-full bg-bg" />
            </div>

            {/* Main Glass Profile Container */}
            <div className="absolute inset-[6px] rounded-full overflow-hidden border-2 border-accent/30 shadow-2xl shadow-accent/25 group">
              <img
                src={profileImg}
                alt="Ahmed - Flutter Developer & AI Specialist"
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                loading="eager"
              />
            </div>

            {/* Floating Orbital Badge 1: Flutter (Top Right) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 right-0 sm:-top-2 sm:-right-4 px-3 py-1.5 glass rounded-2xl border border-blue-500/30 shadow-xl flex items-center gap-2 backdrop-blur-xl bg-bg/85 z-20"
            >
              <div className="p-1 rounded-lg bg-blue-500/15 text-blue-400">
                <Code size={13} />
              </div>
              <span className="text-[11px] sm:text-xs text-text font-bold">Flutter</span>
            </motion.div>

            {/* Floating Orbital Badge 2: Clean Arch (Top Left) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              className="absolute top-0 left-0 sm:-top-2 sm:-left-4 px-3 py-1.5 glass rounded-2xl border border-amber-500/30 shadow-xl flex items-center gap-2 backdrop-blur-xl bg-bg/85 z-20"
            >
              <div className="p-1 rounded-lg bg-amber-500/15 text-amber-400">
                <Layers size={13} />
              </div>
              <span className="text-[11px] sm:text-xs text-text font-bold">Clean Arch</span>
            </motion.div>

            {/* Floating Orbital Badge 3: AI Automation (Bottom Left) */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.1, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              className="absolute bottom-0 left-0 sm:-bottom-2 sm:-left-4 px-3 py-1.5 glass rounded-2xl border border-orange-500/30 shadow-xl flex items-center gap-2 backdrop-blur-xl bg-bg/85 z-20"
            >
              <div className="p-1 rounded-lg bg-orange-500/15 text-orange-400">
                <Cpu size={13} />
              </div>
              <span className="text-[11px] sm:text-xs text-text font-bold">AI Workflow</span>
            </motion.div>

            {/* Floating Orbital Badge 4: UI/UX (Bottom Right) */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
              className="absolute bottom-0 right-0 sm:-bottom-2 sm:-right-4 px-3 py-1.5 glass rounded-2xl border border-pink-500/30 shadow-xl flex items-center gap-2 backdrop-blur-xl bg-bg/85 z-20"
            >
              <div className="p-1 rounded-lg bg-pink-500/15 text-pink-400">
                <Layout size={13} />
              </div>
              <span className="text-[11px] sm:text-xs text-text font-bold">UI/UX</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[11px] text-secondary font-mono tracking-widest uppercase opacity-80">{t('hero.scroll')}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-accent" />
        </motion.div>
      </motion.div>
    </section>
  )
}

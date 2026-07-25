import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'
import { useLanguage } from '../context/useLanguage.js'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeSwitcher from './ThemeSwitcher'

const easePremium = [0.22, 1, 0.36, 1]

export default function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.contact'), href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = links.map((l) => document.querySelector(l.href))
      const scrollPos = window.scrollY + 200
      sections.forEach((sec) => {
        if (sec) {
          const top = sec.offsetTop
          const height = sec.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(`#${sec.id}`)
          }
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [links])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 pointer-events-none">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: easePremium }}
        className={`pointer-events-auto max-w-5xl mx-auto rounded-full transition-all duration-500 glass border ${
          scrolled
            ? 'border-accent/25 shadow-2xl shadow-black/50 bg-bg/85 backdrop-blur-2xl py-2 px-4 sm:px-6'
            : 'border-accent/15 bg-bg/60 backdrop-blur-xl py-2.5 px-4 sm:px-6'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between">
          {/* Logo & Theme Switcher */}
          <div className="flex items-center gap-3">
            <a
              href="#home"
              className="text-lg sm:text-xl font-extrabold tracking-tight group flex items-center gap-1.5"
              aria-label="Home"
            >
              <div className="w-7 h-7 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center group-hover:bg-accent/25 transition-colors">
                <Sparkles size={14} className="text-accent group-hover:rotate-12 transition-transform" />
              </div>
              <span>
                <span className="text-accent group-hover:text-accent-secondary transition-colors duration-300">Ahmed</span>
                <span className="text-text">.dev</span>
              </span>
            </a>
            <ThemeSwitcher />
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 bg-accent/5 p-1 rounded-full border border-accent/10">
            {links.map((link) => {
              const isActive = activeSection === link.href
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveSection(link.href)}
                  className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 ${
                    isActive
                      ? 'text-text shadow-sm'
                      : 'text-secondary hover:text-text hover:bg-accent/10'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-accent/20 border border-accent/30 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              )
            })}
          </div>

          {/* Controls & Mobile Hamburger */}
          <div className="flex items-center gap-2.5">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 glass rounded-full text-text hover:text-accent border border-accent/15 transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Popover Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.3, ease: easePremium }}
            className="pointer-events-auto md:hidden mt-3 max-w-md mx-auto p-4 glass rounded-3xl border border-accent/20 shadow-2xl shadow-black/60 backdrop-blur-2xl"
            role="menu"
          >
            <div className="flex items-center justify-between px-3 py-2 border-b border-accent/10 mb-2">
              <p className="text-xs font-mono text-secondary uppercase tracking-wider">
                {t('nav.home') ? 'القائمة' : 'Navigation'}
              </p>
              <LanguageSwitcher />
            </div>
            <div className="space-y-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.href)
                    setMobileOpen(false)
                  }}
                  className={`block text-xs font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 ${
                    activeSection === link.href
                      ? 'bg-accent/20 text-accent border border-accent/30 font-bold'
                      : 'text-secondary hover:text-text hover:bg-accent/10'
                  }`}
                  role="menuitem"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

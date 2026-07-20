import { motion } from 'framer-motion'
import { useLanguage } from '../context/useLanguage.js'

export default function LanguageSwitcher() {
  const { lang, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass text-xs font-mono font-medium tracking-wider text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300 border border-accent/10 group"
      aria-label={`Switch language to ${lang === 'en' ? 'Arabic' : 'English'}`}
    >
      <motion.span
        key={lang}
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-1.5"
      >
        <GlobeIcon />
        <span className="hidden sm:inline">
          {lang === 'en' ? (
            <>
              EN <span className="text-accent/50 mx-0.5">|</span>{' '}
              <span className="text-secondary/60">عربي</span>
            </>
          ) : (
            <>
              <span className="text-secondary/60">EN</span>{' '}
              <span className="text-accent/50 mx-0.5">|</span> عربي
            </>
          )}
        </span>
        <span className="sm:hidden">{lang === 'en' ? 'EN' : 'عربي'}</span>
      </motion.span>
    </button>
  )
}

function GlobeIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

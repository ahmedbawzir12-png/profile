import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Leaf, Check, ChevronDown } from 'lucide-react'
import { useTheme } from '../context/useTheme.js'
import { useLanguage } from '../context/useLanguage.js'

const easePremium = [0.22, 1, 0.36, 1]

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const { lang } = useLanguage()
  const isRtl = lang === 'ar'
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  const themeOptions = [
    {
      id: 'dark',
      label: isRtl ? 'داكن (افتراضي)' : 'Dark (Default)',
      desc: isRtl ? 'داكن فاخر ومريح (Obsidian)' : 'Deep Obsidian Slate aesthetic',
      icon: Moon,
      color: 'text-[#4274D9]',
    },
    {
      id: 'light',
      label: isRtl ? 'فاتح' : 'Light',
      desc: isRtl ? 'أبيض احترافي وأنيق' : 'Clean professional white',
      icon: Sun,
      color: 'text-amber-400',
    },
    {
      id: 'khadmaty',
      label: isRtl ? 'خدماتي أخضر' : 'Khadmaty Green',
      desc: isRtl ? 'أخضر مريح بهوية خدماتي' : 'Calm Khadmaty green identity',
      icon: Leaf,
      color: 'text-emerald-400',
    },
  ]

  const activeOption = themeOptions.find((t) => t.id === theme) || themeOptions[0]
  const ActiveIcon = activeOption.icon

  // Close menu on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close on Escape key press
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="group flex items-center gap-1.5 px-2.5 py-1.5 rounded-full glass border border-accent/20 hover:border-accent/40 text-text hover:text-accent transition-all duration-300 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        aria-label="Switch theme"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <motion.div
          key={theme}
          initial={{ rotate: -30, scale: 0.8, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, ease: easePremium }}
          className="flex items-center justify-center"
        >
          <ActiveIcon size={15} className={`${activeOption.color} transition-colors`} />
        </motion.div>
        <ChevronDown
          size={12}
          className={`text-secondary transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : 'group-hover:text-text'}`}
        />
      </button>

      {/* Floating SaaS-inspired Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: -6 }}
            transition={{ duration: 0.35, ease: easePremium }}
            className={`absolute top-full mt-2 ${isRtl ? 'right-0 origin-top-right' : 'left-0 origin-top-left'} w-56 sm:w-64 p-1.5 glass rounded-2xl border border-accent/20 shadow-2xl shadow-black/40 backdrop-blur-2xl z-50 overflow-hidden`}
            role="menu"
            aria-orientation="vertical"
          >
            <div className="px-3 py-2 border-b border-accent/10 mb-1">
              <p className="text-[11px] font-mono uppercase tracking-wider text-secondary">
                {isRtl ? 'اختر المظهر' : 'Select Theme'}
              </p>
            </div>

            <div className="space-y-1">
              {themeOptions.map((opt) => {
                const Icon = opt.icon
                const isSelected = theme === opt.id
                return (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setTheme(opt.id)
                      setIsOpen(false)
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all duration-300 text-left ${
                      isSelected
                        ? 'bg-accent/15 text-text border border-accent/30 shadow-sm'
                        : 'text-secondary hover:text-text hover:bg-accent/10 border border-transparent'
                    }`}
                    role="menuitem"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`p-1.5 rounded-lg glass ${isSelected ? 'bg-accent/20' : ''}`}>
                        <Icon size={15} className={opt.color} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-text leading-tight">{opt.label}</p>
                        <p className="text-[10px] text-secondary mt-0.5 leading-tight">{opt.desc}</p>
                      </div>
                    </div>

                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className="text-accent ml-2 shrink-0"
                      >
                        <Check size={14} />
                      </motion.div>
                    )}
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Smartphone, Flame, Atom, Bot, Palette, Briefcase } from 'lucide-react'
import { useLanguage } from '../context/useLanguage.js'

const easePremium = [0.22, 1, 0.36, 1]

const icons = [Smartphone, Flame, Atom, Bot, Palette, Briefcase]

const skillMeta = [
  { from: '#3B82F6', to: '#06B6D4', cls: 'from-blue-500 to-cyan-400' },
  { from: '#EAB308', to: '#FB923C', cls: 'from-yellow-500 to-orange-400' },
  { from: '#38BDF8', to: '#3B82F6', cls: 'from-sky-400 to-blue-500' },
  { from: '#C8DFDB', to: '#9CBDB7', cls: 'from-[#C8DFDB] to-[#9CBDB7]' },
  { from: '#FB7185', to: '#F43F5E', cls: 'from-pink-400 to-rose-500' },
  { from: '#34D399', to: '#14B8A6', cls: 'from-emerald-400 to-teal-500' },
]

const levels = [95, 88, 75, 85, 90, 88]

function CircularProgress({ level, size = 100, strokeWidth = 6, from, to }) {
  const center = size / 2
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (level / 100) * circumference
  const [animatedOffset, setAnimatedOffset] = useState(circumference)
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setAnimatedOffset(offset), 300)
      return () => clearTimeout(timer)
    }
  }, [inView, offset])

  const id = `grad-${level}-${from.replace('#', '')}`

  return (
    <div ref={ref} className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90" aria-hidden="true">
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="rgba(200,223,219,0.15)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={`url(#${id})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={animatedOffset}
          className="transition-all duration-1000 ease-out"
        />
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute text-lg font-bold gradient-text">{level}%</span>
    </div>
  )
}

export default function Skills() {
  const { t } = useLanguage()
  const skillNames = t('skills.list')

  return (
    <section id="skills" className="relative py-20 sm:py-28 px-4 overflow-hidden" aria-labelledby="skills-heading">
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-accent-secondary/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: easePremium }}
          className="text-center mb-16"
        >
          <p className="text-accent font-mono text-sm mb-2 uppercase tracking-wider">{t('skills.label')}</p>
          <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold">
            {t('skills.heading')} <span className="gradient-text">{t('skills.headingAccent')}</span>
          </h2>
          <p className="text-secondary text-base sm:text-lg max-w-2xl mx-auto mt-4">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillNames.map((skill, i) => {
            const meta = skillMeta[i] || skillMeta[0]
            const Icon = icons[i] || icons[0]
            return (
              <motion.div
                key={skill.name || i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: easePremium }}
                className="glass-card rounded-xl p-6 sm:p-8 flex flex-col items-center text-center group hover:border-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="mb-5">
                  <CircularProgress level={levels[i] || 0} from={meta.from} to={meta.to} />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <Icon size={18} className="text-accent" />
                  <h3 className="text-base font-semibold">{skill.name}</h3>
                </div>

                <div className="w-full mt-4">
                  <div className="w-full h-2 rounded-full bg-accent/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${levels[i]}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 + 0.5, ease: 'easeOut' }}
                      className={`h-full rounded-full bg-gradient-to-r ${meta.cls}`}
                    />
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

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, Brain, Target, Rocket, Code, CheckCircle, Layers } from 'lucide-react'
import { useLanguage } from '../context/useLanguage.js'

const easePremium = [0.22, 1, 0.36, 1]

function StatCounter({ target, suffix, displayValue }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 1500
    const stepTime = 30
    const steps = duration / stepTime
    const increment = target / steps

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref} className="text-3xl sm:text-4xl font-extrabold gradient-text block mb-1">
      {displayValue || `${count}${suffix}`}
    </span>
  )
}

export default function About() {
  const { t, lang } = useLanguage()
  const isAr = lang === 'ar'

  const strengths = [
    {
      icon: Zap,
      title: t('about.strengths.0.title'),
      desc: t('about.strengths.0.desc'),
    },
    {
      icon: Brain,
      title: t('about.strengths.1.title'),
      desc: t('about.strengths.1.desc'),
    },
    {
      icon: Target,
      title: t('about.strengths.2.title'),
      desc: t('about.strengths.2.desc'),
    },
    {
      icon: Rocket,
      title: t('about.strengths.3.title'),
      desc: t('about.strengths.3.desc'),
    },
  ]

  const stats = [
    {
      target: 5,
      suffix: '+',
      displayValue: isAr ? '٥+' : null,
      label: t('about.stats.projects.label'),
      icon: Code,
    },
    {
      target: 1,
      suffix: '+',
      displayValue: isAr ? '١+' : null,
      label: t('about.stats.experience.label'),
      icon: CheckCircle,
    },
    {
      target: 4,
      suffix: '+',
      displayValue: isAr ? '٤+' : null,
      label: t('about.stats.technologies.label'),
      icon: Layers,
    },
  ]

  const philosophy = [
    {
      title: t('about.philosophy.0.title'),
      desc: t('about.philosophy.0.desc'),
    },
    {
      title: t('about.philosophy.1.title'),
      desc: t('about.philosophy.1.desc'),
    },
  ]

  return (
    <section id="about" className="relative py-20 sm:py-28 px-4 overflow-hidden" aria-labelledby="about-heading">
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/3 left-0 w-[300px] h-[300px] bg-accent-secondary/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: easePremium }}
          className="text-center mb-16"
        >
          <p className="text-accent font-mono text-sm mb-2 uppercase tracking-wider">{t('about.label')}</p>
          <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold">
            {t('about.heading')} <span className="gradient-text">{t('about.headingAccent')}</span>
          </h2>
          <p className="text-secondary text-base sm:text-lg max-w-2xl mx-auto mt-4">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: easePremium }}
              className="glass-card rounded-2xl p-6 text-center group hover:border-accent/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10 transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                <stat.icon size={20} className="text-accent" />
              </div>
              <StatCounter target={stat.target} suffix={stat.suffix} displayValue={stat.displayValue} />
              <span className="text-secondary text-sm font-medium block">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {philosophy.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: easePremium }}
              className="glass-card rounded-xl p-6 sm:p-8 hover:border-accent/30 transition-all duration-500"
            >
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {item.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {strengths.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: easePremium }}
              className="glass-card rounded-xl p-6 group hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-500"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <item.icon size={20} className="text-accent" />
              </div>
              <h3 className="text-base font-semibold mb-2">{item.title}</h3>
              <p className="text-secondary text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

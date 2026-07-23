import { motion } from 'framer-motion'
import {
  Smartphone,
  Lock,
  ShieldCheck,
  Database,
  Users,
  Layout,
  Cpu,
  Layers,
  FileText,
  BarChart3,
  Calculator,
  PieChart,
  ShieldAlert,
  HardDrive,
  ArrowRight,
  ArrowDown,
  Activity,
  Layers3,
} from 'lucide-react'
import { useLanguage } from '../context/useLanguage.js'

const easePremium = [0.22, 1, 0.36, 1]

// Map icon strings or objects to Lucide icon components
const iconMap = {
  Smartphone,
  Lock,
  ShieldCheck,
  Database,
  Users,
  Layout,
  Cpu,
  Layers,
  FileText,
  BarChart3,
  Calculator,
  PieChart,
  ShieldAlert,
  HardDrive,
  Activity,
  Layers3,
}

export default function ArchitectureFlow({ steps }) {
  const { lang } = useLanguage()
  const isAr = lang === 'ar'

  return (
    <section className="relative py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: easePremium }}
          className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-accent/20"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />

          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-accent font-mono text-xs uppercase tracking-widest block mb-2">
                {isAr ? 'الهندسة البرمجية' : 'Software Engineering Flow'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                {isAr ? 'معمارية النظام' : 'Application Architecture'}
              </h2>
              <p className="text-secondary text-sm sm:text-base mt-2">
                {isAr
                  ? 'رسم توضيحي يبيّن تدفق البيانات والمعالجة الهيكلية للتطبيق.'
                  : 'Structured data processing pipeline and system layered abstraction.'}
              </p>
            </div>

            {/* Architecture Flow Container */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-2 overflow-x-auto no-scrollbar py-4">
              {steps.map((step, idx) => {
                const IconComponent = typeof step.icon === 'string' ? iconMap[step.icon] || Cpu : step.icon
                const isLast = idx === steps.length - 1

                return (
                  <div key={idx} className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
                    {/* Architecture Node Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1, ease: easePremium }}
                      className="glass rounded-2xl p-5 border border-accent/15 hover:border-accent/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10 w-full lg:w-auto lg:min-w-[140px] text-center flex flex-col items-center justify-center relative cursor-default"
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3 text-accent group-hover:bg-accent group-hover:text-text group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                        <IconComponent size={22} />
                      </div>
                      <span className="text-xs font-mono text-accent/80 uppercase tracking-wider block mb-0.5">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-text group-hover:text-accent transition-colors leading-tight">
                        {step.title}
                      </h4>
                      {step.subtitle && (
                        <p className="text-[11px] text-secondary mt-1 leading-tight max-w-[120px]">
                          {step.subtitle}
                        </p>
                      )}
                    </motion.div>

                    {/* Connector arrow / line between nodes */}
                    {!isLast && (
                      <div className="my-2 lg:my-0 lg:mx-2 flex items-center justify-center text-accent/50 shrink-0">
                        {/* Mobile arrow down */}
                        <div className="lg:hidden p-1 rounded-full bg-accent/10 text-accent animate-bounce my-1">
                          <ArrowDown size={16} />
                        </div>
                        {/* Desktop arrow right (or left in RTL) */}
                        <div className="hidden lg:flex items-center gap-1 text-accent animate-pulse">
                          <div className="w-4 h-[2px] bg-gradient-to-r from-accent to-accent-secondary" />
                          <ArrowRight size={16} className={isAr ? 'rotate-180' : ''} />
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

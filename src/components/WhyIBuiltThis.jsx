import { motion } from 'framer-motion'
import { Sparkles, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '../context/useLanguage.js'

const easePremium = [0.22, 1, 0.36, 1]

export default function WhyIBuiltThis({ explanation, highlights }) {
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
          className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-accent/20 shadow-xl shadow-black/20"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-secondary/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 text-accent font-mono text-xs uppercase tracking-wider mb-4 border border-accent/20">
              <Sparkles size={14} />
              <span>{isAr ? 'الدافع والرؤية' : 'Product Purpose & Vision'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
              {isAr ? 'لماذا قمت بإنشاء هذا التطبيق' : 'Why I Built This'}
            </h2>

            <p className="text-secondary text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">
              {explanation}
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 border-t border-accent/15">
              {highlights.map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08, ease: easePremium }}
                  className="flex items-center gap-3 p-3.5 rounded-xl glass border border-accent/10 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 group"
                >
                  <div className="p-1.5 rounded-lg bg-accent/10 text-accent shrink-0 group-hover:bg-accent/20 group-hover:scale-110 transition-all">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-sm font-medium text-text/90 group-hover:text-accent transition-colors">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

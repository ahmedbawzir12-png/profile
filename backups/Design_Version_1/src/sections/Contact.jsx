import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, MapPin } from 'lucide-react'
import { useLanguage } from '../context/useLanguage.js'

const easePremium = [0.22, 1, 0.36, 1]

export default function Contact() {
  const { t } = useLanguage()
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [focused, setFocused] = useState(null)

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 bg-[#070B14] border rounded-lg text-text placeholder-secondary/50 focus:outline-none transition-all duration-300 text-sm ${
      focused === field
        ? 'border-accent shadow-[0_0_20px_rgba(124,58,237,0.12)]'
        : 'border-accent/10 hover:border-accent/30'
    }`

  return (
    <section id="contact" className="relative py-20 sm:py-28 px-4 overflow-hidden" aria-labelledby="contact-heading">
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent-secondary/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: easePremium }}
          className="text-center mb-12"
        >
          <p className="text-accent font-mono text-sm mb-2 uppercase tracking-wider">{t('contact.label')}</p>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold mb-4">
            {t('contact.heading')} <span className="gradient-text">{t('contact.headingAccent')}</span>
          </h2>
          <p className="text-secondary text-base sm:text-lg max-w-lg mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: easePremium }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass-card rounded-xl p-6 text-center group hover:border-accent/30 transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <Mail size={22} className="text-accent" />
              </div>
              <h3 className="text-sm font-semibold mb-1">{t('contact.email')}</h3>
              <a
                href="mailto:ahmedbawzyr73@gmail.com"
                className="text-secondary text-sm hover:text-accent transition-colors"
              >
                ahmedbawzyr73@gmail.com
              </a>
            </div>

            <div className="glass-card rounded-xl p-6 text-center group hover:border-accent/30 transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                <MapPin size={22} className="text-accent" />
              </div>
              <h3 className="text-sm font-semibold mb-1">{t('contact.location')}</h3>
              <p className="text-secondary text-sm">{t('contact.worldwide')}</p>
            </div>

            <div className="flex items-center justify-center gap-3">
              <a
                href="https://github.com/ahmedbawzir12-png"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-xl text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300 group"
                aria-label="GitHub profile"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              </a>
              <a
                href="https://www.linkedin.com/in/%D8%A7%D8%AD%D9%85%D8%AF-%D8%B3%D8%B9%D9%8A%D8%AF-%D8%A8%D8%A7%D9%88%D8%B2%D9%8A%D8%B1-66949b39a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-xl text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300 group"
                aria-label="LinkedIn profile"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a
                href="mailto:ahmedbawzyr73@gmail.com"
                className="p-3 glass rounded-xl text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300 group"
                aria-label="Send email"
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: easePremium }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-xl p-6 sm:p-8 space-y-6 relative group"
            >
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/5 via-transparent to-accent-secondary/5" />
              </div>

              <div className="relative z-10">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      placeholder={t('contact.form.namePlaceholder')}
                      className={inputClass('name')}
                      aria-required="true"
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      placeholder={t('contact.form.emailPlaceholder')}
                      className={inputClass('email')}
                      aria-required="true"
                    />
                  </div>
                </div>
                <div className="mt-4 relative">
                  <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    placeholder={t('contact.form.messagePlaceholder')}
                    className={`${inputClass('message')} resize-none`}
                    aria-required="true"
                  />
                </div>
                <button
                  type="submit"
                  className="group/btn relative mt-6 inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-text font-semibold rounded-xl overflow-hidden transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-[1.02] w-full sm:w-auto justify-center"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-accent-secondary to-accent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2">
                    {t('contact.form.send')}
                    <Send size={16} className="group-hover/btn:translate-x-1 transition-transform rtl:rotate-180" />
                  </span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

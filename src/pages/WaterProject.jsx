import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  Smartphone,
  Monitor,
  Database,
  RefreshCw,
  Zap,
  Users,
  Activity,
  Calculator,
  FileText,
  CreditCard,
  Wallet,
  TrendingDown,
  Printer,
  LayoutDashboard,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight,
  ExternalLink,
  Award,
  Server,
  Globe,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Lightbox from '../components/Lightbox.jsx'
import LanguageSwitcher from '../components/LanguageSwitcher.jsx'
import { useLanguage } from '../context/useLanguage.js'

// Import Mobile Screenshots
import mobileStatsImg from '../assets/images/Water Project Management System/شاشات الجوال/إحصائيات النظام.jpg'
import mobileCustomersImg from '../assets/images/Water Project Management System/شاشات الجوال/العملاء.jpg'
import mobileInvoicesImg from '../assets/images/Water Project Management System/شاشات الجوال/الفواتير.jpg'
import mobileExpensesImg from '../assets/images/Water Project Management System/شاشات الجوال/المصروفات.jpg'
import mobileCustomerDetailsImg from '../assets/images/Water Project Management System/شاشات الجوال/تفاصيل بيانات العميل.jpg'
import mobileInvoiceDetailsImg from '../assets/images/Water Project Management System/شاشات الجوال/تفاصيل الفاتوره.jpg'
import mobileExtraInvoiceImg from '../assets/images/Water Project Management System/شاشات الجوال/تفاصيل اضافيه للفاتوره.jpg'

// Import Desktop Screenshots
import desktopStatsImg from '../assets/images/Water Project Management System/شاشات الكمبيوتر/إحصائيات النظام.png'
import desktopReportsImg from '../assets/images/Water Project Management System/شاشات الكمبيوتر/إصدار التقارير.png'
import desktopCustomersImg from '../assets/images/Water Project Management System/شاشات الكمبيوتر/العملاء.png'
import desktopPdfInvoiceImg from '../assets/images/Water Project Management System/شاشات الكمبيوتر/الفاتوره بصيغة pdf.jpg'
import desktopInvoicesImg from '../assets/images/Water Project Management System/شاشات الكمبيوتر/الفواتير.png'
import desktopExpensesImg from '../assets/images/Water Project Management System/شاشات الكمبيوتر/المصروفات.png'
import desktopCustomerDetailsImg from '../assets/images/Water Project Management System/شاشات الكمبيوتر/تفاصيل بيانات العميل.png'
import desktopFinalReportImg from '../assets/images/Water Project Management System/شاشات الكمبيوتر/كشف التقرير النهائي.png'

const easePremium = [0.22, 1, 0.36, 1]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easePremium } },
}

// Mobile Screenshots Array
const mobileImages = [
  mobileStatsImg,
  mobileCustomersImg,
  mobileInvoicesImg,
  mobileExpensesImg,
  mobileCustomerDetailsImg,
  mobileInvoiceDetailsImg,
  mobileExtraInvoiceImg,
]

// Desktop Screenshots Array
const desktopImages = [
  desktopStatsImg,
  desktopReportsImg,
  desktopCustomersImg,
  desktopPdfInvoiceImg,
  desktopInvoicesImg,
  desktopExpensesImg,
  desktopCustomerDetailsImg,
  desktopFinalReportImg,
]

const featureIcons = [
  Users,
  Activity,
  Calculator,
  FileText,
  CreditCard,
  Wallet,
  TrendingDown,
  Printer,
  LayoutDashboard,
  ShieldCheck,
  RefreshCw,
]

export default function WaterProject() {
  const { t, lang } = useLanguage()
  const isRtl = lang === 'ar'
  const [activeTab, setActiveTab] = useState('mobile') // 'mobile' | 'desktop'
  const [lightboxState, setLightboxState] = useState({ isOpen: false, images: [], index: 0 })

  const featureList = t('waterProject.features.list') || []
  const mobileScreens = t('waterProject.screens.mobile') || []
  const desktopScreens = t('waterProject.screens.desktop') || []
  const processSteps = t('waterProject.process.steps') || []
  const techStackList = t('waterProject.techStack.list') || []
  const challengesList = t('waterProject.challenges.list') || []
  const whyHighlights = t('waterProject.whyIBuiltThis.highlights') || []

  const currentGalleryImages = activeTab === 'mobile' ? mobileImages : desktopImages

  const openLightbox = (images, index) => {
    setLightboxState({ isOpen: true, images, index })
  }

  return (
    <div className="min-h-screen bg-bg overflow-x-hidden">
      {/* Top Navigation Bar */}
      <div className="sticky top-0 z-50 bg-bg/90 backdrop-blur-xl border-b border-accent/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: easePremium }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors duration-300 text-sm font-medium group"
            >
              <ArrowLeft size={16} className={`group-hover:-translate-x-1 transition-transform ${isRtl ? 'rotate-180' : ''}`} />
              {t('projectPage.backToPortfolio')}
            </Link>
          </motion.div>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 px-4 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent-secondary/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 glass rounded-full text-xs sm:text-sm font-mono text-accent border border-accent/20 mb-4">
              <Sparkles size={14} className="text-accent animate-pulse" />
              <span>{t('waterProject.hero.label')}</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
              {t('waterProject.hero.title')} <span className="gradient-text">{t('waterProject.hero.titleAccent')}</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-secondary text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              {t('waterProject.hero.subtitle')}
            </motion.p>

            {/* Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-6">
              {(t('waterProject.hero.platforms') || []).map((badge) => (
                <span
                  key={badge}
                  className="px-3.5 py-1.5 glass rounded-full text-xs sm:text-sm text-text font-medium border border-accent/15 bg-accent/5 flex items-center gap-1.5"
                >
                  <CheckCircle2 size={13} className="text-accent shrink-0" />
                  {badge}
                </span>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#system-in-action"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-text font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-[1.02]"
              >
                <span>{t('waterProject.gallery.label')}</span>
                <ArrowRight size={16} className="rtl:rotate-180 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://github.com/ahmedbawzir12-png"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 border border-accent/30 text-text font-semibold rounded-xl hover:bg-accent/10 hover:border-accent/60 transition-all duration-300 hover:scale-[1.02]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                {t('projects.github')}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Real-World Impact Banner */}
      <section className="relative px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easePremium }}
            className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-accent/30 shadow-2xl bg-gradient-to-br from-accent/10 via-card to-accent-secondary/5"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="p-4 rounded-2xl bg-accent/15 text-accent shrink-0 border border-accent/20">
                <Award size={36} />
              </div>
              <div>
                <div className="inline-block px-3 py-1 rounded-md bg-accent/20 text-accent font-mono text-xs uppercase tracking-wider mb-2 font-semibold">
                  {t('waterProject.highlight.badge')}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-text mb-2">
                  {t('waterProject.highlight.title')}
                </h2>
                <p className="text-secondary text-sm sm:text-base leading-relaxed">
                  {t('waterProject.highlight.subtitle')}
                </p>
              </div>
            </div>

            {/* Highlights List */}
            {whyHighlights.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-accent/10">
                {whyHighlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-text leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-16 px-4 bg-bg/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easePremium }}
            className="text-center mb-12"
          >
            <p className="text-accent font-mono text-xs uppercase tracking-wider mb-2">{t('waterProject.features.label')}</p>
            <h2 className="text-2xl sm:text-4xl font-bold">
              {t('waterProject.features.title')} <span className="gradient-text">{t('waterProject.features.titleAccent')}</span>
            </h2>
            <p className="text-secondary text-sm sm:text-base max-w-2xl mx-auto mt-3">
              {t('waterProject.features.subtitle')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {featureList.map((feature, i) => {
              const IconComponent = featureIcons[i % featureIcons.length]
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: easePremium }}
                  className="glass-card rounded-xl p-5 sm:p-6 hover:border-accent/30 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 group-hover:bg-accent group-hover:text-text transition-all duration-300">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 text-text group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Offline-First Architecture Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easePremium }}
            className="text-center mb-14"
          >
            <span className="px-3 py-1 rounded-full bg-accent/10 text-accent font-mono text-xs uppercase tracking-wider border border-accent/20 inline-block mb-3">
              {t('waterProject.offline.label')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t('waterProject.offline.title')} <span className="gradient-text">{t('waterProject.offline.titleAccent')}</span>
            </h2>
            <p className="text-secondary text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              {t('waterProject.offline.description')}
            </p>
          </motion.div>

          {/* Animated Architecture Flow Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 relative">
            {(t('waterProject.offline.steps') || []).map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15, ease: easePremium }}
                className="glass-card rounded-2xl p-6 text-center relative border border-accent/20 flex flex-col items-center group hover:border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/15 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                  {idx === 0 && <Smartphone size={24} />}
                  {idx === 1 && <Database size={24} />}
                  {idx === 2 && <RefreshCw size={24} className="animate-spin-slow" />}
                  {idx === 3 && <Server size={24} />}
                </div>

                <div className="text-xs font-mono text-accent mb-1 uppercase tracking-wider">Step 0{idx + 1}</div>
                <h3 className="text-base font-bold text-text mb-1">{step.title}</h3>
                <p className="text-secondary text-xs">{step.subtitle}</p>

                {/* Connector line for Desktop */}
                {idx < 3 && (
                  <div className="hidden md:block absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 z-20 text-accent/50 rtl:rotate-180">
                    <ArrowRight size={20} className="animate-pulse" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Platform (Android + Windows) Section */}
      <section className="relative py-16 px-4 bg-bg/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easePremium }}
            className="text-center mb-12"
          >
            <p className="text-accent font-mono text-xs uppercase tracking-wider mb-2">{t('waterProject.platforms.label')}</p>
            <h2 className="text-2xl sm:text-4xl font-bold">
              {t('waterProject.platforms.title')} <span className="gradient-text">{t('waterProject.platforms.titleAccent')}</span>
            </h2>
            <p className="text-secondary text-sm sm:text-base max-w-2xl mx-auto mt-3">
              {t('waterProject.platforms.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mobile Card */}
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easePremium }}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-accent/20 flex flex-col justify-between hover:border-accent/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-accent">
                    <Smartphone size={26} />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent font-mono text-xs font-semibold">
                    {t('waterProject.platforms.androidBadge')}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-text mb-3">{t('waterProject.platforms.androidTitle')}</h3>
                <p className="text-secondary text-sm sm:text-base leading-relaxed mb-6">
                  {t('waterProject.platforms.androidDesc')}
                </p>
              </div>

              <div className="pt-4 border-t border-accent/10 flex items-center justify-between text-xs font-mono text-accent">
                <span>Field Mobility</span>
                <span>Offline Caching</span>
              </div>
            </motion.div>

            {/* Windows Desktop Card */}
            <motion.div
              initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easePremium }}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-accent/20 flex flex-col justify-between hover:border-accent/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center text-accent">
                    <Monitor size={26} />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent font-mono text-xs font-semibold">
                    {t('waterProject.platforms.windowsBadge')}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-text mb-3">{t('waterProject.platforms.windowsTitle')}</h3>
                <p className="text-secondary text-sm sm:text-base leading-relaxed mb-6">
                  {t('waterProject.platforms.windowsDesc')}
                </p>
              </div>

              <div className="pt-4 border-t border-accent/10 flex items-center justify-between text-xs font-mono text-accent">
                <span>Office Auditing</span>
                <span>PDF Print Engine</span>
              </div>
            </motion.div>
          </div>

          {/* Shared Sync Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 glass-card rounded-xl p-5 text-center border border-accent/20 bg-accent/5 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <RefreshCw size={20} className="text-accent shrink-0" />
            <div className="text-xs sm:text-sm text-text">
              <strong className="text-accent">{t('waterProject.platforms.sharedTitle')}:</strong> {t('waterProject.platforms.sharedDesc')}
            </div>
          </motion.div>
        </div>
      </section>

      {/* System In Action / Screenshots Gallery (PART 7 & 8) */}
      <section id="system-in-action" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easePremium }}
            className="text-center mb-10"
          >
            <p className="text-accent font-mono text-xs uppercase tracking-wider mb-2">{t('waterProject.gallery.label')}</p>
            <h2 className="text-2xl sm:text-4xl font-bold">
              {t('waterProject.gallery.title')} <span className="gradient-text">{t('waterProject.gallery.titleAccent')}</span>
            </h2>
            <p className="text-secondary text-sm sm:text-base max-w-2xl mx-auto mt-3">
              {t('waterProject.gallery.subtitle')}
            </p>

            {/* Segmented Control Switcher */}
            <div className="inline-flex p-1.5 glass rounded-2xl border border-accent/20 mt-8 gap-2">
              <button
                onClick={() => setActiveTab('mobile')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'mobile'
                    ? 'bg-accent text-text shadow-md shadow-accent/25'
                    : 'text-secondary hover:text-text'
                }`}
              >
                {t('waterProject.gallery.mobileTab')} ({mobileImages.length})
              </button>
              <button
                onClick={() => setActiveTab('desktop')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'desktop'
                    ? 'bg-accent text-text shadow-md shadow-accent/25'
                    : 'text-secondary hover:text-text'
                }`}
              >
                {t('waterProject.gallery.desktopTab')} ({desktopImages.length})
              </button>
            </div>
          </motion.div>

          {/* Screenshots Case Study List (Alternating Image & Text Layout) */}
          <div className="space-y-16 sm:space-y-24">
            <AnimatePresence mode="wait">
              {activeTab === 'mobile' ? (
                <motion.div
                  key="mobile-gallery"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-16 sm:space-y-24"
                >
                  {mobileScreens.map((screen, idx) => {
                    const img = mobileImages[idx] || mobileImages[0]
                    const isEven = idx % 2 === 0
                    return (
                      <motion.div
                        key={screen.title + idx}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.6, delay: idx * 0.05, ease: easePremium }}
                        className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14"
                      >
                        {/* Image Container */}
                        <div
                          className={`w-full lg:w-1/2 flex justify-center shrink-0 ${
                            isEven ? 'lg:order-1' : 'lg:order-2'
                          }`}
                        >
                          <button
                            onClick={() => openLightbox(mobileImages, idx)}
                            className="group relative max-w-[260px] sm:max-w-[280px] w-full focus:outline-none"
                            aria-label={`Expand ${screen.title}`}
                          >
                            <div className="absolute -inset-2 bg-gradient-to-r from-accent/20 via-accent-secondary/20 to-accent/20 rounded-[40px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="phone-mockup relative z-10 transition-transform duration-500 group-hover:scale-[1.02] shadow-2xl">
                              <div className="phone-screen">
                                <img
                                  src={img}
                                  alt={screen.title}
                                  loading={idx < 2 ? 'eager' : 'lazy'}
                                  className="phone-image object-cover w-full h-auto"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                                  <span className="px-4 py-2 glass rounded-full text-xs text-text font-semibold backdrop-blur-md border border-accent/30 shadow-xl">
                                    {t('waterProject.gallery.clickToExpand')}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </button>
                        </div>

                        {/* Text Content */}
                        <div
                          className={`w-full lg:w-1/2 ${
                            isEven ? 'lg:order-2' : 'lg:order-1'
                          }`}
                        >
                          <span className="text-accent font-mono text-xs uppercase tracking-wider mb-2 block font-semibold">
                            📱 Android Screen 0{idx + 1}
                          </span>
                          <h3 className="text-xl sm:text-3xl font-bold mb-4 text-text leading-tight">{screen.title}</h3>
                          <p className="text-secondary text-sm sm:text-base leading-relaxed max-w-xl">
                            {screen.desc}
                          </p>
                        </div>
                      </motion.div>
                    )
                  })}
                </motion.div>
              ) : (
                <motion.div
                  key="desktop-gallery"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-16 sm:space-y-24"
                >
                  {desktopScreens.map((screen, idx) => {
                    const img = desktopImages[idx] || desktopImages[0]
                    const isEven = idx % 2 === 0
                    return (
                      <motion.div
                        key={screen.title + idx}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.6, delay: idx * 0.05, ease: easePremium }}
                        className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14"
                      >
                        {/* Image Container (Desktop Frame) */}
                        <div
                          className={`w-full lg:w-7/12 shrink-0 ${
                            isEven ? 'lg:order-1' : 'lg:order-2'
                          }`}
                        >
                          <button
                            onClick={() => openLightbox(desktopImages, idx)}
                            className="group relative w-full focus:outline-none block"
                            aria-label={`Expand ${screen.title}`}
                          >
                            <div className="absolute -inset-2 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10 glass-card rounded-xl overflow-hidden border border-accent/20 group-hover:border-accent/50 transition-all duration-300 shadow-xl group-hover:scale-[1.01]">
                              {/* Desktop Header Bar */}
                              <div className="h-7 bg-card/90 border-b border-accent/10 px-3 flex items-center justify-between">
                                <div className="flex items-center gap-1.5">
                                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                                </div>
                                <div className="text-[10px] font-mono text-secondary truncate max-w-[200px]">
                                  Water Project Management — Windows Desktop
                                </div>
                                <div className="w-8" />
                              </div>

                              <img
                                src={img}
                                alt={screen.title}
                                loading={idx < 2 ? 'eager' : 'lazy'}
                                className="w-full h-auto object-cover max-h-[420px]"
                              />

                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 bg-bg/20 backdrop-blur-xs">
                                <span className="px-4 py-2 glass rounded-full text-xs text-text font-semibold border border-accent/30 shadow-xl">
                                  {t('waterProject.gallery.clickToExpand')}
                                </span>
                              </div>
                            </div>
                          </button>
                        </div>

                        {/* Text Content */}
                        <div
                          className={`w-full lg:w-5/12 ${
                            isEven ? 'lg:order-2' : 'lg:order-1'
                          }`}
                        >
                          <span className="text-accent font-mono text-xs uppercase tracking-wider mb-2 block font-semibold">
                            💻 Windows Screen 0{idx + 1}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-text leading-tight">{screen.title}</h3>
                          <p className="text-secondary text-sm sm:text-base leading-relaxed">
                            {screen.desc}
                          </p>
                        </div>
                      </motion.div>
                    )
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Process Timeline Section (PART 13) */}
      <section className="relative py-20 px-4 bg-bg/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easePremium }}
            className="text-center mb-14"
          >
            <p className="text-accent font-mono text-xs uppercase tracking-wider mb-2">{t('waterProject.process.label')}</p>
            <h2 className="text-2xl sm:text-4xl font-bold">
              {t('waterProject.process.title')} <span className="gradient-text">{t('waterProject.process.titleAccent')}</span>
            </h2>
            <p className="text-secondary text-sm sm:text-base max-w-2xl mx-auto mt-3">
              {t('waterProject.process.subtitle')}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.04, ease: easePremium }}
                className="glass-card rounded-xl p-5 border border-accent/15 hover:border-accent/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold font-mono text-accent group-hover:scale-110 transition-transform">
                    {step.number}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
                </div>
                <h3 className="text-base font-bold text-text mb-1.5 group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-secondary text-xs leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Stack Section (PART 12) */}
      <section className="relative py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easePremium }}
            className="text-center mb-12"
          >
            <p className="text-accent font-mono text-xs uppercase tracking-wider mb-2">{t('waterProject.techStack.label')}</p>
            <h2 className="text-2xl sm:text-4xl font-bold">
              {t('waterProject.techStack.title')} <span className="gradient-text">{t('waterProject.techStack.titleAccent')}</span>
            </h2>
            <p className="text-secondary text-sm sm:text-base max-w-2xl mx-auto mt-3">
              {t('waterProject.techStack.subtitle')}
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {techStackList.map((tech) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="glass rounded-xl px-4 py-2.5 border border-accent/20 hover:border-accent text-center transition-all group"
              >
                <div className="text-sm font-bold text-text group-hover:text-accent transition-colors font-mono">
                  {tech.name}
                </div>
                <div className="text-[10px] text-secondary">{tech.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Challenges Section (PART 15) */}
      <section className="relative py-16 px-4 bg-bg/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easePremium }}
            className="text-center mb-12"
          >
            <p className="text-accent font-mono text-xs uppercase tracking-wider mb-2">{t('waterProject.challenges.label')}</p>
            <h2 className="text-2xl sm:text-4xl font-bold">
              {t('waterProject.challenges.title')} <span className="gradient-text">{t('waterProject.challenges.titleAccent')}</span>
            </h2>
            <p className="text-secondary text-sm sm:text-base max-w-2xl mx-auto mt-3">
              {t('waterProject.challenges.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {challengesList.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: easePremium }}
                className="glass-card rounded-2xl p-6 border border-accent/20"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/15 text-accent flex items-center justify-center shrink-0">
                    <Cpu size={18} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-text">{item.title}</h3>
                </div>
                <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Result Section (PART 16) */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easePremium }}
            className="glass-card rounded-3xl p-8 sm:p-12 text-center border border-accent/30 shadow-2xl relative overflow-hidden bg-gradient-to-b from-accent/10 via-card to-card"
          >
            <span className="px-3.5 py-1 rounded-full bg-accent/20 text-accent font-mono text-xs uppercase tracking-wider mb-4 inline-block font-semibold">
              {t('waterProject.result.label')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-6">
              {t('waterProject.result.title')} <span className="gradient-text">{t('waterProject.result.titleAccent')}</span>
            </h2>
            <p className="text-secondary text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              {t('waterProject.result.text')}
            </p>

            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-text font-bold rounded-xl shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-[1.02] transition-all duration-300"
            >
              <ArrowLeft size={18} className={`rtl:rotate-180`} />
              <span>{t('projectPage.backToPortfolio')}</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-accent/5 bg-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors duration-300 text-sm font-medium group">
              <ArrowLeft size={16} className={`group-hover:-translate-x-1 transition-transform ${isRtl ? 'rotate-180' : ''}`} />
              {t('projectPage.backToPortfolio')}
            </Link>
            <p className="text-secondary text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} Ahmed.dev.
            </p>
          </div>
        </div>
      </footer>

      {/* Lightbox Component */}
      {lightboxState.isOpen && (
        <Lightbox
          images={lightboxState.images}
          currentIndex={lightboxState.index}
          onClose={() => setLightboxState({ ...lightboxState, isOpen: false })}
        />
      )}
    </div>
  )
}

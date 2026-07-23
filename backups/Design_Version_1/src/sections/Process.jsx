import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Compass,
  FileText,
  Palette,
  Code,
  CheckCircle2,
  Rocket,
  ChevronDown,
  Sparkles,
  Wrench,
  Lightbulb,
} from 'lucide-react'
import { useLanguage } from '../context/useLanguage.js'

const easePremium = [0.22, 1, 0.36, 1]

const processStepsEn = [
  {
    stepNumber: '01',
    title: 'Discovery',
    shortDesc: 'Understand business goals, target users, and project requirements before writing any code.',
    detailedDesc:
      'Thorough discovery sets project boundaries, defines target user personas, identifies technical constraints, and establishes clear success criteria before system architecture begins.',
    tools: ['Requirement Analysis', 'Research', 'Planning Notes', 'Documentation'],
    tip: 'Clear scoping prevents 80% of project rework later.',
    icon: Compass,
  },
  {
    stepNumber: '02',
    title: 'Planning',
    shortDesc: 'Design application architecture, database structure, navigation flow, and technical decisions.',
    detailedDesc:
      'Architecting application state management, relational/NoSQL schemas, data layer repositories, and modular package dependencies upfront guarantees maintainable software.',
    tools: ['Flow Diagrams', 'Database Design', 'Architecture Planning', 'Git'],
    tip: 'Structuring state management early ensures easy scaling.',
    icon: FileText,
  },
  {
    stepNumber: '03',
    title: 'UI / UX Design',
    shortDesc: 'Create intuitive interfaces focused on usability, accessibility, responsiveness, and visual consistency.',
    detailedDesc:
      'Crafting ergonomic user interfaces, custom design tokens, responsive breakpoints, and dark mode theme systems ensuring pixel-perfect screen presentation.',
    tools: ['Figma', 'Material Design', 'Design Systems', 'Responsive Layout'],
    tip: 'Design tokens maintain consistent spacing and typography.',
    icon: Palette,
  },
  {
    stepNumber: '04',
    title: 'Development',
    shortDesc: 'Build scalable Flutter applications using reusable components, Firebase integration, and clean architecture principles.',
    detailedDesc:
      'Writing clean, modular Dart code following Clean Architecture principles (Data, Domain, Presentation), integrating cloud backends, and implementing reactive state handling.',
    tools: ['Flutter', 'Firebase', 'Cloud Firestore', 'SQLite', 'REST APIs', 'GitHub'],
    tip: 'Clean Architecture separates UI, business logic, and data.',
    icon: Code,
  },
  {
    stepNumber: '05',
    title: 'Testing',
    shortDesc: 'Test functionality, fix bugs, improve performance, validate user experience, and optimize application stability.',
    detailedDesc:
      'Extensive testing of app state under network throttling, memory profiling, widget rebuild optimization, and verifying edge-case handling across screen sizes.',
    tools: ['Flutter DevTools', 'Debugging', 'Performance Profiling', 'Manual Testing'],
    tip: 'Profiling memory and rebuilds guarantees 60 FPS performance.',
    icon: CheckCircle2,
  },
  {
    stepNumber: '06',
    title: 'Deployment',
    shortDesc: 'Prepare production builds, publish applications, monitor performance, collect feedback, and continuously improve the product.',
    detailedDesc:
      'Configuring release obfuscation, building signed APK/IPA bundles, deploying web builds, tracking post-launch performance metrics, and pushing iterative updates.',
    tools: ['GitHub', 'Netlify', 'Firebase', 'Android', 'iOS'],
    tip: 'Automated release checks ensure smooth app store submission.',
    icon: Rocket,
  },
]

const processStepsAr = [
  {
    stepNumber: '٠١',
    title: 'الاستكشاف والتحليل',
    shortDesc: 'فهم أهداف العمل، والجمهور المستهدف، ومتطلبات المشروع قبل كتابة أي سطر كود.',
    detailedDesc:
      'يُحدد الاستكشاف الدقيق حدود المشروع، ويبني شخصيات المستخدمين، ويكتشف القيود التقنية، ويضع معايير النجاح قبل بدء معمارية النظام.',
    tools: ['تحليل المتطلبات', 'البحث والتطوير', 'ملاحظات التخطيط', 'التوثيق'],
    tip: 'التحديد الواضح للنطاق يمنع ٨٠٪ من إعادة العمل لاحقاً.',
    icon: Compass,
  },
  {
    stepNumber: '٠٢',
    title: 'التخطيط والهندسة',
    shortDesc: 'تصميم معمارية التطبيق، وهيكل قاعدة البيانات، وتدفق التنقل، والقرارات التقنية.',
    detailedDesc:
      'تصميم نظام إدارة الحالة، ومخططات قواعد البيانات، ومستودعات البيانات، وحزم البرمجيات يضمن تطبيقاُ سهلاً في الصيانة والتوسع.',
    tools: ['مخططات التدفق', 'تصميم قواعد البيانات', 'تخطيط المعمارية', 'Git'],
    tip: 'هيكلة إدارة الحالة مبكراً تضمن توسعاً سلسًا.',
    icon: FileText,
  },
  {
    stepNumber: '٠٣',
    title: 'تصميم الواجهات والـ UX',
    shortDesc: 'إنشاء واجهات ذكية تُركز على سهولة الاستخدام، وإمكانية الوصول، والاستجابة، والاتساق البصري.',
    detailedDesc:
      'بناء واجهات مستخدم مريحة، ونظام ألوان وخطوط موحد، وتصميم متجاوب مع دعم كامل للوضع الداكن لتجربة بصرية مبهرة.',
    tools: ['Figma', 'Material Design', 'أنظمة التصميم', 'التصميم المتجاوب'],
    tip: 'رموز التصميم تضمن اتساق المسافات والطباعة.',
    icon: Palette,
  },
  {
    stepNumber: '٠٤',
    title: 'التطوير والبرمجة',
    shortDesc: 'بناء تطبيقات Flutter قابلة للتوسع باستخدام مكونات قابلة لإعادة الاستخدام، وتكامل Firebase، وهندسة نظيفة.',
    detailedDesc:
      'كتابة كود Dart نظيف وموديلار يتبع مبادئ Clean Architecture (البيانات، المنطق، الواجهة)، مع ربط الخدمات السحابية وإدارة الحالة.',
    tools: ['Flutter', 'Firebase', 'Cloud Firestore', 'SQLite', 'REST APIs', 'GitHub'],
    tip: 'Clean Architecture تفصل الواجهة والمنطق والبيانات.',
    icon: Code,
  },
  {
    stepNumber: '٠٥',
    title: 'الاختبار وضمان الجودة',
    shortDesc: 'اختبار الوظائف، وإصلاح الأخطاء، وتحسين الأداء، والتحقق من تجربة المستخدم، وتحسين استقرار التطبيق.',
    detailedDesc:
      'فحص دقيق لحالة التطبيق تحت ظروف الشبكة المختلفة، وتحليل الذاكرة، وتحسين إعادة بناء الـ Widgets، واختبار الشاشات المتنوعة.',
    tools: ['Flutter DevTools', 'إصلاح الأخطاء', 'تحليل الأداء', 'الاختبار اليدوي'],
    tip: 'تحليل الذاكرة يُحقق أداءً سلسًا بسلاسة 60 إطاراً في الثانية.',
    icon: CheckCircle2,
  },
  {
    stepNumber: '٠٦',
    title: 'النشر والتحسين المستمر',
    shortDesc: 'إعداد نسخ الإنتاج، ونشر التطبيقات، ومراقبة الأداء، وجمع الملاحظات، وتحسين المنتج باستمرار.',
    detailedDesc:
      'تجهيز حزم APK/IPA الموقعة، ونشر النسخ، ومراقبة الأداء بعد الإطلاق، وإرسال التحديثات الدورية بنجاح.',
    tools: ['GitHub', 'Netlify', 'Firebase', 'Android', 'iOS'],
    tip: 'الفحوصات المؤتمتة تضمن رفيعاً سلسًا للمتاجر.',
    icon: Rocket,
  },
]

export default function Process() {
  const { lang } = useLanguage()
  const isAr = lang === 'ar'
  const steps = isAr ? processStepsAr : processStepsEn

  const [expandedStep, setExpandedStep] = useState(0)

  const toggleStep = (index) => {
    setExpandedStep((prev) => (prev === index ? null : index))
  }

  return (
    <section id="process" className="relative py-20 sm:py-28 px-4 overflow-hidden border-t border-accent/10" aria-labelledby="process-heading">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[160px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: easePremium }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-mono text-xs uppercase tracking-wider mb-3 border border-accent/20">
            <Sparkles size={14} />
            <span>{isAr ? 'منهجية العمل' : 'Engineering Workflow'}</span>
          </div>
          <h2 id="process-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            {isAr ? 'سير عمل' : 'My Development'}{' '}
            <span className="gradient-text">{isAr ? 'التطوير' : 'Process'}</span>
          </h2>
          <p className="text-secondary text-base sm:text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
            {isAr
              ? 'كل تطبيق ناجح يبدأ بسير عمل منظم. من فهم المشكلة إلى تسليم منتج مصقول، تركز كل خطوة على إنشاء برمجيات قابلة للتوسع وسهلة الصيانة وصديقة للمستخدم.'
              : 'Every successful application begins with a structured workflow. From understanding the problem to delivering a polished product, every step focuses on creating scalable, maintainable, and user-friendly software.'}
          </p>
        </motion.div>

        {/* Desktop Horizontal Step Track Bar */}
        <div className="hidden lg:grid grid-cols-6 gap-3 mb-10 relative">
          {/* Background Connecting Line */}
          <div className="absolute top-1/2 left-6 right-6 h-[2px] bg-accent/20 -translate-y-1/2 z-0" />

          {steps.map((step, idx) => {
            const isExpanded = expandedStep === idx
            const Icon = step.icon
            return (
              <button
                key={step.stepNumber}
                onClick={() => toggleStep(idx)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleStep(idx)}
                tabIndex={0}
                aria-expanded={isExpanded}
                aria-label={`Step ${step.stepNumber}: ${step.title}`}
                className={`relative z-10 flex flex-col items-center p-3 rounded-2xl transition-all duration-300 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isExpanded
                    ? 'bg-accent/15 border border-accent/40 shadow-lg shadow-accent/10 scale-[1.05]'
                    : 'glass hover:bg-accent/10 border border-accent/10 hover:border-accent/30'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 font-mono text-sm font-bold transition-all duration-300 ${
                    isExpanded
                      ? 'bg-accent text-text shadow-md shadow-accent/30'
                      : 'bg-accent/10 text-accent group-hover:bg-accent/20 group-hover:scale-110'
                  }`}
                >
                  <Icon size={18} />
                </div>

                <span className="text-[11px] font-mono text-accent/80 uppercase tracking-wider mb-0.5">
                  {step.stepNumber}
                </span>
                <span
                  className={`text-xs font-semibold text-center line-clamp-1 transition-colors ${
                    isExpanded ? 'text-accent' : 'text-text group-hover:text-accent'
                  }`}
                >
                  {step.title}
                </span>
              </button>
            )
          })}
        </div>

        {/* Interactive Steps Cards Grid / List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const isExpanded = expandedStep === idx
            const Icon = step.icon

            return (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: easePremium }}
                className="h-full flex flex-col"
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleStep(idx)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      toggleStep(idx)
                    }
                  }}
                  aria-expanded={isExpanded}
                  className={`relative glass-card rounded-2xl p-6 transition-all duration-500 cursor-pointer flex-1 flex flex-col justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isExpanded
                      ? 'bg-accent/10 border-accent/50 shadow-xl shadow-accent/15 glow-sm scale-[1.02]'
                      : 'hover:border-accent/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5'
                  }`}
                >
                  <div>
                    {/* Header bar of step card */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            isExpanded
                              ? 'bg-accent text-text shadow-lg shadow-accent/30 scale-110'
                              : 'bg-accent/10 text-accent group-hover:bg-accent/20 group-hover:scale-110'
                          }`}
                        >
                          <Icon size={22} />
                        </div>
                        <div>
                          <span className="text-xs font-mono text-accent tracking-wider uppercase block">
                            Step {step.stepNumber}
                          </span>
                          <h3
                            className={`text-lg font-bold transition-colors ${
                              isExpanded ? 'text-accent' : 'group-hover:text-accent'
                            }`}
                          >
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <div
                        className={`p-2 rounded-lg text-secondary transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 text-accent bg-accent/10' : 'group-hover:text-accent'
                        }`}
                      >
                        <ChevronDown size={18} />
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-secondary text-sm leading-relaxed mb-4">
                      {step.shortDesc}
                    </p>
                  </div>

                  {/* Expandable Details Container */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: easePremium }}
                        className="overflow-hidden pt-4 border-t border-accent/15 mt-2"
                      >
                        <p className="text-text/90 text-xs sm:text-sm leading-relaxed mb-4">
                          {step.detailedDesc}
                        </p>

                        {/* Suggested Tools Badges */}
                        <div className="mb-4">
                          <span className="text-[11px] font-mono text-accent uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                            <Wrench size={12} />
                            {isAr ? 'الأدوات المقترحة' : 'Suggested Tools'}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {step.tools.map((tool) => (
                              <span
                                key={tool}
                                className="text-[11px] px-2.5 py-1 rounded-md glass text-accent font-mono border border-accent/15 font-medium"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Workflow Tip Box */}
                        {step.tip && (
                          <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 flex items-start gap-2 text-xs text-text/90">
                            <Lightbulb size={16} className="text-amber-400 shrink-0 mt-0.5" />
                            <span>{step.tip}</span>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Click to expand indicator when collapsed */}
                  {!isExpanded && (
                    <div className="pt-3 border-t border-accent/5 flex items-center justify-between text-xs text-secondary group-hover:text-accent transition-colors">
                      <span className="font-mono text-[11px]">
                        {isAr ? 'انقر للتفاصيل' : 'Click to expand'}
                      </span>
                      <span className="text-accent font-bold">+</span>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

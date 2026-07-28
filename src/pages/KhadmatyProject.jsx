import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ExternalLink,
  Shield,
  Briefcase,
  Wrench,
  Users,
  CheckCircle2,
  Cpu,
  Database,
  Layers,
  Sparkles,
  Zap,
  Smartphone,
  MessageSquare,
  Lock,
  Compass,
  ChevronRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Lightbox from '../components/Lightbox.jsx'
import WhyIBuiltThis from '../components/WhyIBuiltThis.jsx'
import ArchitectureFlow from '../components/ArchitectureFlow.jsx'
import LanguageSwitcher from '../components/LanguageSwitcher.jsx'
import { useLanguage } from '../context/useLanguage.js'

const easePremium = [0.22, 1, 0.36, 1]

const khadmatyArchSteps = [
  { title: 'Flutter App', icon: 'Smartphone' },
  { title: 'Firebase Auth', icon: 'Lock' },
  { title: 'Role-Based Access', icon: 'ShieldCheck' },
  { title: 'Cloud Firestore', icon: 'Database' },
  { title: 'Admin / Broker / Provider / Customer', icon: 'Users' },
  { title: 'Responsive Flutter UI', icon: 'Layout' },
]

// Dynamically import all Khadmaty screenshots using Vite import.meta.glob
const imageModules = import.meta.glob(
  '../assets/images/Khadmaty/*/*.{png,jpg,jpeg,webp,JPG,PNG}',
  { eager: true, import: 'default' }
)

// Helper to format filenames into clean titles
function formatFilenameToTitle(filename) {
  let cleanName = filename.replace(/\.(png|jpg|jpeg|webp|JPG|PNG)$/gi, '')
  cleanName = cleanName.replace(/\.png|\.jpg|\.jpeg/gi, '')
  cleanName = cleanName.replace(/[\._\-\(\)]+/g, ' ').trim()
  cleanName = cleanName.replace(/\s+/g, ' ')
  return cleanName
    .split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ')
}

function getScreenTitleKey(role, filename) {
  const lower = filename.toLowerCase()

  if (role === 'admin') {
    if (lower.includes('interface') || lower.includes('monitoring')) return 'adminMonitoring'
    if (lower.includes('reports') || lower.includes('analytics')) return 'reportsAnalytics'
    if (lower.includes('statistic')) return 'systemStatistics'
    if (lower.includes('chating')) return 'chatManagement'
    if (lower.includes('orders management')) return 'ordersManagement'
    if (lower.includes('tating') || lower.includes('rating')) return 'ratingsManagement'
    if (lower.includes('users management')) return 'usersManagement'
  }

  if (role === 'broker') {
    if (lower.includes('home')) return 'brokerDashboard'
    if (lower.includes('task assignment') || lower.includes('assignment')) return 'providerTaskAssignment'
    if (lower.includes('selection')) return 'providerSelection'
    if (lower.includes('entry screen') || lower.includes('details entry')) return 'providerOrderDetailsEntry'
    if (lower.includes('orders details')) return 'brokerOrdersDetails'
    if (lower.includes('orders screen')) return 'brokerOrdersScreen'
  }

  if (role === 'provider') {
    if (lower.includes('sending a job offer') || lower.includes('sending')) return 'sendingJobOffer'
    if (lower.includes('status after offer acceptance') || lower.includes('acceptance')) return 'orderStatusAfterAcceptance'
    if (lower.includes('requests display') || lower.includes('requests')) return 'requestsDisplay'
    if (lower.includes('chating')) return 'providerChat'
    if (lower.includes('profile')) return 'providerProfile'
    if (lower.includes('order details')) return 'providerOrderDetails'
  }

  // Customer / Users
  if (lower.includes('home')) return 'customerHome'
  if (lower.includes('sub service')) return 'subService'
  if (lower.includes('create an order') || lower.includes('create order')) return 'createOrder'
  if (lower.includes('track order') || lower.includes('track')) return 'trackOrder'
  if (lower.includes('providers.png') || lower.includes('providers')) return 'providersDirectory'
  if (lower.includes('brovider card')) return 'providerCard'
  if (lower.includes('search by location')) return 'searchLocation'
  if (lower.includes('rating.png')) return 'ratingReview'
  if (lower.includes('users comments')) return 'userComments'
  if (lower.includes('accepte or reject')) return 'acceptRejectOrder'
  if (lower.includes('account as broker1')) return 'createAccountBrokerStep'
  if (lower.includes('account as broker')) return 'createAccountBroker'
  if (lower.includes('account as provuder') || lower.includes('provuder')) return 'createAccountProvider'
  if (lower.includes('login')) return 'login'

  return null
}

function getScreenTitle(role, filename, t) {
  const key = getScreenTitleKey(role, filename)
  if (key && typeof t === 'function') {
    const translated = t(`khadmaty.screenTitles.${key}`)
    if (translated && translated !== `khadmaty.screenTitles.${key}`) {
      return translated
    }
  }
  return formatFilenameToTitle(filename)
}

// English screen details
function generateScreenDetailsEn(role, filename, imgUrl, t) {
  const title = getScreenTitle(role, filename, t)
  const lower = filename.toLowerCase()
  let desc = ''
  let category = 'Operational Workflow'

  if (role === 'admin') {
    if (lower.includes('statistic') || lower.includes('analytics') || lower.includes('reports')) {
      category = 'Analytics & Insights'
      desc = 'Provides real-time system diagnostics, active user statistics, transaction metrics, and revenue charts. Administrators get immediate visibility into platform health, regional activity trends, and operational growth.'
    } else if (lower.includes('chating') || lower.includes('chat')) {
      category = 'Communication Management'
      desc = 'Enables administrators to monitor platform-wide conversations, review dispute logs, and support active communication between clients and service providers with strict compliance.'
    } else if (lower.includes('order')) {
      category = 'Order Monitoring'
      desc = 'Centralized dashboard for tracking all ongoing, completed, and pending service requests. Admin oversight allows swift intervention, order status updates, and dispatch auditing.'
    } else if (lower.includes('user')) {
      category = 'Account & Role Management'
      desc = 'Provides comprehensive user profile controls, provider verification status, account activation/suspension toggles, and role permission configurations across the platform.'
    } else {
      category = 'System Supervision'
      desc = 'Intuitive management panel allowing admins to inspect live platform events, audit system logs, configure service categories, and maintain overall ecosystem balance.'
    }
  } else if (role === 'broker') {
    if (lower.includes('assignment') || lower.includes('assign')) {
      category = 'Task Dispatching'
      desc = 'Intelligent broker screen for assigning verified service providers to incoming customer requests based on proximity, expertise, and current schedule availability.'
    } else if (lower.includes('selection') || lower.includes('select')) {
      category = 'Provider Matching'
      desc = 'Enables brokers to search, filter, and select optimal service providers for complex client requests, ensuring high fulfillment quality and rapid response times.'
    } else if (lower.includes('home')) {
      category = 'Broker Command Center'
      desc = 'The main operational hub for brokers displaying assigned service zones, pending dispatch queues, active task progress, and quick action shortcuts.'
    } else {
      category = 'Order Coordination'
      desc = 'Detailed view of active broker-assigned orders, tracking step-by-step progress from initial customer request to job offer acceptance and service completion.'
    }
  } else if (role === 'provider') {
    if (lower.includes('offer') || lower.includes('sending')) {
      category = 'Offer Submission'
      desc = 'Empowers service providers to submit custom job offers with flexible pricing, estimated completion times, and service terms tailored to specific client requests.'
    } else if (lower.includes('request') || lower.includes('display')) {
      category = 'Job Request Feed'
      desc = 'Live stream of nearby service requests matching the provider\'s trade category, allowing quick evaluation and bid submission with real-time push notifications.'
    } else if (lower.includes('chat')) {
      category = 'Direct Client Messaging'
      desc = 'In-app chat interface facilitating direct negotiation, image attachment sharing, and location clarification between service providers and clients.'
    } else if (lower.includes('profile')) {
      category = 'Provider Portfolio'
      desc = 'Showcases provider credentials, service history, customer ratings, completed job counts, and active working hours to build trust and increase job awards.'
    } else {
      category = 'Service Execution'
      desc = 'Comprehensive order management screen for tracking active job status, accepted bids, client location details, and payment completion confirmations.'
    }
  } else {
    if (lower.includes('home')) {
      category = 'Discovery Hub'
      desc = 'Vibrant home screen featuring top service categories, recommended providers, promotional offers, quick search, and active order tracking widgets.'
    } else if (lower.includes('create') || lower.includes('order')) {
      category = 'Service Request Creation'
      desc = 'Streamlined multi-step form for creating service requests, attaching media, specifying location coordinates, and setting expected budget boundaries.'
    } else if (lower.includes('track')) {
      category = 'Live Order Tracking'
      desc = 'Real-time status timeline allowing customers to monitor request confirmation, provider arrival, ongoing work progress, and completion stages.'
    } else if (lower.includes('provider') || lower.includes('brovider')) {
      category = 'Provider Directory'
      desc = 'Browse and compare verified service providers with transparent pricing, reviews, completed job counts, and direct contact options.'
    } else if (lower.includes('rating') || lower.includes('comment')) {
      category = 'Reviews & Feedback'
      desc = 'Transparent evaluation system enabling customers to rate provider performance, leave detailed reviews, and maintain high service quality across the platform.'
    } else if (lower.includes('login') || lower.includes('account')) {
      category = 'Authentication & Onboarding'
      desc = 'Secure multi-role sign-in and registration flow with phone OTP, email verification, and seamless role selection during onboarding.'
    } else {
      category = 'Customer Portal'
      desc = 'Intuitive interface designed for effortless navigation, service browsing, sub-category exploration, and transparent service management.'
    }
  }

  return { title, desc, category, img: imgUrl, filename }
}

// Arabic screen details — full professional Arabic with tech terms kept in English
function generateScreenDetailsAr(role, filename, imgUrl, t) {
  const title = getScreenTitle(role, filename, t)
  const lower = filename.toLowerCase()
  let desc = ''
  let category = 'سير العمل التشغيلي'

  if (role === 'admin') {
    if (lower.includes('statistic') || lower.includes('analytics') || lower.includes('reports')) {
      category = 'التحليلات والإحصاءات'
      desc = 'يوفر تشخيصات فورية للنظام وإحصاءات المستخدمين النشطين ومقاييس المعاملات ومخططات الإيرادات. يحصل المدراء على رؤية مباشرة لصحة المنصة واتجاهات النشاط الإقليمي ومعدلات النمو التشغيلي.'
    } else if (lower.includes('chating') || lower.includes('chat')) {
      category = 'إدارة التواصل'
      desc = 'يتيح للمدراء مراقبة المحادثات على مستوى المنصة ومراجعة سجلات النزاعات ودعم التواصل الفعّال بين العملاء ومزودي الخدمات مع ضمان الامتثال الكامل للمعايير.'
    } else if (lower.includes('order')) {
      category = 'مراقبة الطلبات'
      desc = 'لوحة تحكم مركزية لمتابعة جميع طلبات الخدمة الجارية والمكتملة والمعلّقة. تتيح الرقابة الإدارية التدخل السريع وتحديث حالات الطلبات وتدقيق عمليات الإرسال.'
    } else if (lower.includes('user')) {
      category = 'إدارة الحسابات والأدوار'
      desc = 'يوفر تحكمًا شاملًا في ملفات المستخدمين وحالة التحقق من المزودين وأزرار تفعيل أو تعليق الحسابات وإعدادات صلاحيات الأدوار عبر كامل المنصة.'
    } else {
      category = 'الإشراف على النظام'
      desc = 'لوحة إدارة بديهية تتيح للمدراء فحص أحداث المنصة الفورية وتدقيق سجلات النظام وضبط فئات الخدمات والحفاظ على توازن المنظومة الكاملة.'
    }
  } else if (role === 'broker') {
    if (lower.includes('assignment') || lower.includes('assign')) {
      category = 'إسناد المهام'
      desc = 'شاشة الوسيط الذكية لتعيين مزودي الخدمات الموثّقين على طلبات العملاء الواردة استنادًا إلى القرب الجغرافي والخبرة المهنية والجدول الزمني المتاح.'
    } else if (lower.includes('selection') || lower.includes('select')) {
      category = 'مطابقة المزودين'
      desc = 'يمكّن الوسطاء من البحث والتصفية واختيار أنسب مزودي الخدمات للطلبات المتعقدة، مما يضمن جودة تنفيذ عالية وأوقات استجابة قصيرة.'
    } else if (lower.includes('home')) {
      category = 'مركز قيادة الوسيط'
      desc = 'المركز التشغيلي الرئيسي للوسطاء الذي يعرض مناطق الخدمة المخصصة وقوائم الإرسال المعلّقة وتقدم المهام النشطة ومفاتيح الإجراءات السريعة.'
    } else {
      category = 'تنسيق الطلبات'
      desc = 'عرض تفصيلي للطلبات المسنّدة للوسيط يتتبع التقدم خطوة بخطوة من طلب العميل الأوّلي إلى قبول عرض العمل وإتمام الخدمة بنجاح.'
    }
  } else if (role === 'provider') {
    if (lower.includes('offer') || lower.includes('sending')) {
      category = 'تقديم العروض'
      desc = 'يمكّن مزودي الخدمات من تقديم عروض عمل مخصصة بتسعير مرن وأوقات إنجاز تقديرية وشروط خدمة مفصّلة تتناسب مع طلبات العملاء المحددة.'
    } else if (lower.includes('request') || lower.includes('display')) {
      category = 'تغذية طلبات العمل'
      desc = 'تدفق مباشر لطلبات الخدمة القريبة المطابقة لتخصص المزود، يتيح التقييم السريع وتقديم العروض مع تلقّي إشعارات فورية عبر Firebase.'
    } else if (lower.includes('chat')) {
      category = 'مراسلة العملاء مباشرة'
      desc = 'واجهة دردشة داخلية تسهّل التفاوض المباشر ومشاركة صور المشروع وتوضيح الموقع الجغرافي بين مزودي الخدمات والعملاء بكل سلاسة.'
    } else if (lower.includes('profile')) {
      category = 'ملف المزود الاحترافي'
      desc = 'يعرض بيانات اعتماد المزود وسجل خدماته السابقة وتقييمات العملاء وعدد الوظائف المنجزة وساعات العمل النشطة لبناء الثقة وزيادة فرص قبول الطلبات.'
    } else {
      category = 'تنفيذ الخدمة'
      desc = 'شاشة إدارة شاملة لمتابعة حالة الوظيفة النشطة والعروض المقبولة وتفاصيل موقع العميل وتأكيدات إتمام عمليات الدفع.'
    }
  } else {
    // Users (Customers)
    if (lower.includes('home')) {
      category = 'مركز الاكتشاف'
      desc = 'شاشة رئيسية نابضة تعرض أبرز فئات الخدمات والمزودين الموصى بهم والعروض الترويجية وخيار البحث السريع ومتابعة الطلبات النشطة من مكان واحد.'
    } else if (lower.includes('create') || lower.includes('order')) {
      category = 'إنشاء طلب الخدمة'
      desc = 'نموذج متعدد الخطوات مبسّط لإنشاء طلبات الخدمة وإرفاق الوسائط وتحديد إحداثيات الموقع وتحديد حدود الميزانية المتوقعة بدقة.'
    } else if (lower.includes('track')) {
      category = 'تتبع الطلب الآني'
      desc = 'خط زمني للحالة الفورية يتيح للعملاء متابعة تأكيد الطلب ووصول المزود وتقدم العمل الجاري ومراحل الإتمام خطوة بخطوة.'
    } else if (lower.includes('provider') || lower.includes('brovider')) {
      category = 'دليل مزودي الخدمات'
      desc = 'تصفّح ومقارنة مزودي الخدمات الموثّقين بأسعار شفافة ومراجعات حقيقية وعدد الوظائف المنجزة وخيارات تواصل مباشر.'
    } else if (lower.includes('rating') || lower.includes('comment')) {
      category = 'التقييمات والمراجعات'
      desc = 'نظام تقييم شفاف يمكّن العملاء من تقييم أداء المزود وترك مراجعات تفصيلية والمساهمة في الحفاظ على مستوى خدمة مرتفع عبر المنصة.'
    } else if (lower.includes('login') || lower.includes('account')) {
      category = 'Authentication والتسجيل'
      desc = 'تدفق تسجيل دخول وتسجيل آمن متعدد الأدوار يشمل رمز OTP الهاتفي والتحقق من البريد الإلكتروني واختيار الدور بسلاسة خلال الإعداد الأوّلي.'
    } else {
      category = 'بوابة العميل'
      desc = 'واجهة بديهية مصمّمة للتصفح السلس واستعراض الخدمات والتنقل بين الفئات الفرعية وإدارة الخدمات بمرونة وشفافية تامة.'
    }
  }

  return { title, desc, category, img: imgUrl, filename }
}

// Process glob imports into role-based image data (language-aware)
function processImages(lang, t) {
  const roleGroups = {
    admin: [],
    broker: [],
    provider: [],
    user: [],
  }

  const generator = lang === 'ar' ? generateScreenDetailsAr : generateScreenDetailsEn

  Object.entries(imageModules).forEach(([filepath, imgUrl]) => {
    const parts = filepath.split('/')
    const folder = parts[parts.length - 2].toLowerCase()
    const filename = parts[parts.length - 1]

    let role = 'user'
    if (folder.includes('admin')) role = 'admin'
    else if (folder.includes('boker') || folder.includes('broker')) role = 'broker'
    else if (folder.includes('provider')) role = 'provider'
    else if (folder.includes('user')) role = 'user'

    const item = generator(role, filename, imgUrl, t)
    roleGroups[role].push(item)
  })

  return roleGroups
}

const roleBaseConfigs = [
  {
    id: 'admin',
    icon: Shield,
    color: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'border-amber-500/30',
    accentColor: 'text-amber-400',
    bgBadge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  },
  {
    id: 'broker',
    icon: Briefcase,
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
    accentColor: 'text-cyan-400',
    bgBadge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  },
  {
    id: 'provider',
    icon: Wrench,
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30',
    accentColor: 'text-emerald-400',
    bgBadge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  },
  {
    id: 'user',
    icon: Users,
    color: 'from-purple-500/20 to-indigo-500/20',
    borderColor: 'border-purple-500/30',
    accentColor: 'text-purple-400',
    bgBadge: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  },
]

function AnimatedCounter({ end, suffix = '' }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 2000
    const stepTime = 30
    const steps = duration / stepTime
    const increment = end / steps

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [end])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function KhadmatyProject() {
  const { lang, t } = useLanguage()
  const isRtl = lang === 'ar'

  const roleImages = useMemo(() => processImages(lang, t), [lang, t])
  const [activeTab, setActiveTab] = useState('admin')
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [allScreenshotsList, setAllScreenshotsList] = useState([])

  // Build localized roleConfigs from translation keys
  const roleConfigs = useMemo(() => roleBaseConfigs.map((base) => ({
    ...base,
    title: t(`khadmaty.roles.${base.id}.title`),
    badge: t(`khadmaty.roles.${base.id}.badge`),
    intro: t(`khadmaty.roles.${base.id}.intro`),
    capabilities: t(`khadmaty.roles.${base.id}.capabilities`),
  })), [lang]) // eslint-disable-line react-hooks/exhaustive-deps

  // Compile flattened array of screenshots for Lightbox
  useEffect(() => {
    const list = []
    roleBaseConfigs.forEach((role) => {
      const screens = roleImages[role.id] || []
      screens.forEach((sc) => list.push(sc.img))
    })
    setAllScreenshotsList(list)
  }, [roleImages])

  // Scrollspy logic to highlight active role tab while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250
      roleBaseConfigs.forEach((role) => {
        const element = document.getElementById(`role-${role.id}`)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(role.id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToRole = (roleId) => {
    setActiveTab(roleId)
    const element = document.getElementById(`role-${roleId}`)
    if (element) {
      const yOffset = -90
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  // Find index in flattened list for Lightbox trigger
  const openLightboxForImage = (imgSrc) => {
    const idx = allScreenshotsList.indexOf(imgSrc)
    if (idx !== -1) {
      setLightboxIndex(idx)
    }
  }

  return (
    <div className="min-h-screen bg-bg text-text overflow-x-hidden">
      {/* Sticky Top Navigation Bar with Language Switcher */}
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

      {/* HERO SECTION */}
      <section className="relative py-16 sm:py-24 px-4 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-accent-secondary/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Header Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easePremium }}
              className="lg:col-span-7 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 glass rounded-full text-xs font-mono text-accent border border-accent/20 mb-6">
                <Sparkles size={14} className="animate-spin-slow" />
                <span>{t('khadmaty.heroBadge')}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-none">
                Khadmaty <span className="gradient-text">App</span>
              </h1>

              <p className="text-secondary text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                {t('khadmaty.subtitle')}
              </p>

              {/* Technology Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-10">
                {[
                  'Flutter',
                  'Firebase',
                  'Cloud Firestore',
                  'Authentication',
                  'Responsive Architecture',
                  'State Management',
                  'Clean Architecture',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 glass rounded-lg text-xs font-mono text-accent border border-accent/15 font-medium hover:border-accent/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="https://github.com/ahmedbawzir12-png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 bg-accent text-text font-semibold rounded-xl hover:bg-accent-secondary transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-[1.02] flex items-center gap-2 text-sm"
                >
                  <ExternalLink size={16} />
                  <span>{t('khadmaty.viewLiveRepo')}</span>
                </a>
                <a
                  href="#overview"
                  className="px-7 py-3.5 glass text-text font-semibold rounded-xl hover:bg-accent/10 border border-accent/25 transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 text-sm"
                >
                  <span>{t('khadmaty.exploreCaseStudy')}</span>
                  <ChevronRight size={16} className={isRtl ? 'rotate-180' : ''} />
                </a>
              </div>
            </motion.div>

            {/* Right Hero Image Preview Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: easePremium }}
              className="lg:col-span-5 flex justify-center relative"
            >
              <div className="relative group w-full max-w-[280px]">
                <div className="absolute -inset-4 bg-gradient-to-tr from-accent/30 via-accent-secondary/20 to-cyan-500/20 rounded-[48px] blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative"
                >
                  {roleImages.user && roleImages.user[0] && (
                    <button
                      onClick={() => openLightboxForImage(roleImages.user[0].img)}
                      className="phone-mockup cursor-pointer focus:outline-none block w-full"
                    >
                      <div className="phone-screen">
                        <img
                          src={roleImages.user[0].img}
                          alt="Khadmaty Hero Preview"
                          className="phone-image"
                        />
                      </div>
                    </button>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECT OVERVIEW SECTION */}
      <section id="overview" className="relative py-20 px-4 border-t border-accent/10 bg-bg/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-mono text-xs uppercase tracking-widest block mb-2">
              {t('khadmaty.overview.badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              {t('khadmaty.overview.title')} <span className="gradient-text">{t('khadmaty.overview.titleAccent')}</span>
            </h2>
            <p className="text-secondary text-base sm:text-lg max-w-2xl mx-auto mt-3">
              {t('khadmaty.overview.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="p-3 bg-red-500/10 text-red-400 rounded-xl w-fit mb-5 border border-red-500/20">
                  <Zap size={22} />
                </div>
                <h3 className="text-xl font-bold mb-3">{t('khadmaty.overview.problem.title')}</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {t('khadmaty.overview.problem.desc')}
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl w-fit mb-5 border border-emerald-500/20">
                  <CheckCircle2 size={22} />
                </div>
                <h3 className="text-xl font-bold mb-3">{t('khadmaty.overview.solution.title')}</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {t('khadmaty.overview.solution.desc')}
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="p-3 bg-accent/10 text-accent rounded-xl w-fit mb-5 border border-accent/20">
                  <Users size={22} />
                </div>
                <h3 className="text-xl font-bold mb-3">{t('khadmaty.overview.targetUsers.title')}</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {t('khadmaty.overview.targetUsers.desc')}
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl w-fit mb-5 border border-cyan-500/20">
                  <Layers size={22} />
                </div>
                <h3 className="text-xl font-bold mb-3">{t('khadmaty.overview.mainFeatures.title')}</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {t('khadmaty.overview.mainFeatures.desc')}
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl w-fit mb-5 border border-amber-500/20">
                  <Sparkles size={22} />
                </div>
                <h3 className="text-xl font-bold mb-3">{t('khadmaty.overview.businessValue.title')}</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {t('khadmaty.overview.businessValue.desc')}
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl w-fit mb-5 border border-purple-500/20">
                  <Cpu size={22} />
                </div>
                <h3 className="text-xl font-bold mb-3">{t('khadmaty.overview.cleanArch.title')}</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {t('khadmaty.overview.cleanArch.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY I BUILT THIS SECTION */}
      <WhyIBuiltThis
        explanation={t('khadmaty.why.explanation')}
        highlights={t('khadmaty.why.highlights')}
      />

      {/* ARCHITECTURE FLOW SECTION */}
      <ArchitectureFlow steps={khadmatyArchSteps} />

      {/* PROJECT STATISTICS CARDS */}
      <section className="py-16 px-4 bg-accent/5 border-y border-accent/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="glass-card rounded-xl p-4 sm:p-6 text-center">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-accent mb-1">
                <AnimatedCounter end={4} />
              </p>
              <p className="text-secondary text-xs sm:text-sm font-medium">{t('khadmaty.stats.roles')}</p>
            </div>
            <div className="glass-card rounded-xl p-4 sm:p-6 text-center">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-cyan-400 mb-1">
                <AnimatedCounter end={15} suffix="+" />
              </p>
              <p className="text-secondary text-xs sm:text-sm font-medium">{t('khadmaty.stats.categories')}</p>
            </div>
            <div className="glass-card rounded-xl p-4 sm:p-6 text-center">
              <p className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-emerald-400 mb-1">
                {t('khadmaty.stats.realtimeLabel')}
              </p>
              <p className="text-secondary text-xs sm:text-sm font-medium">{t('khadmaty.stats.streams')}</p>
            </div>
            <div className="glass-card rounded-xl p-4 sm:p-6 text-center">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-amber-400 mb-1">
                100%
              </p>
              <p className="text-secondary text-xs sm:text-sm font-medium">{t('khadmaty.stats.ui')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROLE NAVIGATION STICKY TAB BAR */}
      <div className="sticky top-0 z-40 bg-bg/90 backdrop-blur-md border-b border-accent/15 py-3 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 overflow-x-auto no-scrollbar">
          {roleConfigs.map((role) => {
            const Icon = role.icon
            const isActive = activeTab === role.id
            return (
              <button
                key={role.id}
                onClick={() => scrollToRole(role.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 shrink-0 ${
                  isActive
                    ? 'bg-accent text-text shadow-lg shadow-accent/25 scale-[1.03]'
                    : 'glass text-secondary hover:text-text hover:bg-accent/10'
                }`}
              >
                <Icon size={16} />
                <span>{role.title}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/20 font-mono">
                  {roleImages[role.id]?.length || 0}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* SCREEN SHOWCASE FOR EACH ROLE */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-32">
          {roleConfigs.map((role) => {
            const Icon = role.icon
            const screens = roleImages[role.id] || []

            return (
              <div key={role.id} id={`role-${role.id}`} className="scroll-mt-28">
                {/* Role Header */}
                <div className="glass-card rounded-2xl p-8 mb-16 relative overflow-hidden border border-accent/20">
                  <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl ${role.color} rounded-full blur-[100px] pointer-events-none`} />

                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div className={`p-3 rounded-xl glass ${role.accentColor}`}>
                        <Icon size={28} />
                      </div>
                      <div>
                        <span className={`text-xs font-mono px-3 py-1 rounded-full border ${role.bgBadge} block w-fit mb-1`}>
                          {role.badge}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold">
                          {role.title} {t('khadmaty.persona')}
                        </h2>
                      </div>
                    </div>

                    <p className="text-secondary text-base sm:text-lg leading-relaxed max-w-3xl mb-6">
                      {role.intro}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 pt-4 border-t border-accent/10">
                      {role.capabilities.map((cap, ci) => (
                        <div key={ci} className="flex items-center gap-2.5 text-xs sm:text-sm text-text/90">
                          <CheckCircle2 size={16} className={role.accentColor} />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Screenshots List with Alternating Layout */}
                <div className="space-y-24">
                  {screens.map((screen, idx) => {
                    const isEven = idx % 2 === 0
                    return (
                      <motion.div
                        key={screen.filename + idx}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.6, ease: easePremium }}
                        className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
                      >
                        {/* Mockup Image */}
                        <div
                          className={`w-full lg:w-2/5 shrink-0 ${
                            isEven ? 'lg:order-1' : 'lg:order-2'
                          }`}
                        >
                          <button
                            onClick={() => openLightboxForImage(screen.img)}
                            className="group relative w-full focus:outline-none text-left"
                            aria-label={`View ${screen.title} fullscreen`}
                          >
                            <div className="absolute -inset-2 bg-gradient-to-r from-accent/20 via-accent-secondary/20 to-cyan-500/20 rounded-[36px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="phone-mockup relative z-10 transition-transform duration-500 group-hover:scale-[1.02]">
                              <div className="phone-screen">
                                <img
                                  src={screen.img}
                                  alt={screen.title}
                                  loading="lazy"
                                  className="phone-image"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                                  <span className="px-4 py-2 glass rounded-full text-xs text-text font-semibold backdrop-blur-md border border-accent/30 shadow-xl">
                                    {t('khadmaty.screenCard.clickToExpand')}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </button>
                        </div>

                        {/* Screen Content Details */}
                        <div
                          className={`w-full lg:w-3/5 ${
                            isEven ? 'lg:order-2' : 'lg:order-1'
                          }`}
                        >
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-mono text-xs mb-3 border border-accent/20">
                            <span>{t('projectPage.screen')} {String(idx + 1).padStart(2, '0')}</span>
                            <span>•</span>
                            <span>{screen.category}</span>
                          </div>

                          <h3 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                            {screen.title}
                          </h3>

                          <p className="text-secondary text-base leading-relaxed mb-6">
                            {screen.desc}
                          </p>

                          <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-accent/10">
                            <div className="glass rounded-xl p-4 border border-accent/10">
                              <span className="text-xs text-accent font-mono uppercase tracking-wider block mb-1">
                                {t('khadmaty.screenCard.userExperience')}
                              </span>
                              <p className="text-xs text-secondary leading-relaxed">
                                {t('khadmaty.screenCard.userExperienceDesc')}
                              </p>
                            </div>
                            <div className="glass rounded-xl p-4 border border-accent/10">
                              <span className="text-xs text-cyan-400 font-mono uppercase tracking-wider block mb-1">
                                {t('khadmaty.screenCard.businessValue')}
                              </span>
                              <p className="text-xs text-secondary leading-relaxed">
                                {t('khadmaty.screenCard.businessValueDesc')}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* TECHNICAL HIGHLIGHTS SECTION */}
      <section className="py-20 px-4 border-t border-accent/10 bg-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-mono text-xs uppercase tracking-widest block mb-2">
              {t('khadmaty.techHighlights.badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              {t('khadmaty.techHighlights.title')} <span className="gradient-text">{t('khadmaty.techHighlights.titleAccent')}</span>
            </h2>
            <p className="text-secondary text-base sm:text-lg max-w-2xl mx-auto mt-3">
              {t('khadmaty.techHighlights.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[Smartphone, Database, Lock, Layers, MessageSquare, Compass].map((Icon, i) => {
              const items = t('khadmaty.techHighlights.items')
              const item = Array.isArray(items) ? items[i] : null
              const colors = ['text-accent', 'text-cyan-400', 'text-amber-400', 'text-emerald-400', 'text-purple-400', 'text-rose-400']
              if (!item) return null
              return (
                <div key={i} className="glass-card rounded-2xl p-6">
                  <Icon className={`${colors[i]} mb-4`} size={28} />
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-secondary text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* USER EXPERIENCE HIGHLIGHTS */}
      <section className="py-20 px-4 border-t border-accent/10">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-accent/20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <span className="text-accent font-mono text-xs uppercase tracking-widest block mb-2">
                {t('khadmaty.ux.badge')}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
                {t('khadmaty.ux.title')} <span className="gradient-text">{t('khadmaty.ux.titleAccent')}</span>
              </h2>
              <p className="text-secondary text-base sm:text-lg leading-relaxed mb-8">
                {t('khadmaty.ux.desc')}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center">
                {(() => {
                  const metrics = t('khadmaty.ux.metrics')
                  const metricColors = ['text-accent', 'text-cyan-400', 'text-emerald-400', 'text-amber-400']
                  if (!Array.isArray(metrics)) return null
                  return metrics.map((m, i) => (
                    <div key={i} className="glass rounded-xl p-3 sm:p-4">
                      <p className={`${metricColors[i]} font-bold text-sm sm:text-base mb-1`}>{m.label}</p>
                      <p className="text-secondary text-xs">{m.desc}</p>
                    </div>
                  ))
                })()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 sm:py-24 px-4 border-t border-accent/10 bg-bg relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            {t('khadmaty.cta.title')} <span className="gradient-text">{t('khadmaty.cta.titleAccent')}</span>
          </h2>

          <p className="text-secondary text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            {t('khadmaty.cta.desc')}
          </p>

          <Link
            to="/#contact"
            className="inline-flex items-center gap-3 px-9 py-4 bg-accent text-text font-bold text-base rounded-2xl hover:bg-accent-secondary transition-all duration-300 shadow-xl shadow-accent/30 hover:shadow-accent/50 hover:scale-[1.03]"
          >
            <span>{t('khadmaty.cta.btn')}</span>
            <ChevronRight size={18} className={isRtl ? 'rotate-180' : ''} />
          </Link>
        </div>
      </section>


      {/* LIGHTBOX COMPONENT */}
      {lightboxIndex !== null && (
        <Lightbox
          images={allScreenshotsList}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  )
}

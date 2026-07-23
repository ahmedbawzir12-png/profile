import { useState, useEffect, useRef, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
import { useLanguage } from '../context/useLanguage.js'

const easePremium = [0.22, 1, 0.36, 1]

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

  // Capitalize words
  return cleanName
    .split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ')
}

// Generate rich descriptions per screen based on role and title keywords
function generateScreenDetails(role, filename, imgUrl) {
  const title = formatFilenameToTitle(filename)
  const lower = filename.toLowerCase()

  let desc = ''
  let category = 'Operational Workflow'

  if (role === 'admin') {
    if (lower.includes('statistic') || lower.includes('analytics') || lower.includes('reports')) {
      category = 'Analytics & Insights'
      desc =
        'Provides real-time system diagnostics, active user statistics, transaction metrics, and revenue charts. Administrators get immediate visibility into platform health, regional activity trends, and operational growth.'
    } else if (lower.includes('chating') || lower.includes('chat')) {
      category = 'Communication Management'
      desc =
        'Enables administrators to monitor platform-wide conversations, review dispute logs, and support active communication between clients and service providers with strict compliance.'
    } else if (lower.includes('order')) {
      category = 'Order Monitoring'
      desc =
        'Centralized dashboard for tracking all ongoing, completed, and pending service requests. Admin oversight allows swift intervention, order status updates, and dispatch auditing.'
    } else if (lower.includes('user')) {
      category = 'Account & Role Management'
      desc =
        'Provides comprehensive user profile controls, provider verification status, account activation/suspension toggles, and role permission configurations across the platform.'
    } else {
      category = 'System Supervision'
      desc =
        'Intuitive management panel allowing admins to inspect live platform events, audit system logs, configure service categories, and maintain overall ecosystem balance.'
    }
  } else if (role === 'broker') {
    if (lower.includes('assignment') || lower.includes('assign')) {
      category = 'Task Dispatching'
      desc =
        'Intelligent broker screen for assigning verified service providers to incoming customer requests based on proximity, expertise, and current schedule availability.'
    } else if (lower.includes('selection') || lower.includes('select')) {
      category = 'Provider Matching'
      desc =
        'Enables brokers to search, filter, and select optimal service providers for complex client requests, ensuring high fulfillment quality and rapid response times.'
    } else if (lower.includes('home')) {
      category = 'Broker Command Center'
      desc =
        'The main operational hub for brokers displaying assigned service zones, pending dispatch queues, active task progress, and quick action shortcuts.'
    } else {
      category = 'Order Coordination'
      desc =
        'Detailed view of active broker-assigned orders, tracking step-by-step progress from initial customer request to job offer acceptance and service completion.'
    }
  } else if (role === 'provider') {
    if (lower.includes('offer') || lower.includes('sending')) {
      category = 'Offer Submission'
      desc =
        'Empowers service providers to submit custom job offers with flexible pricing, estimated completion times, and service terms tailored to specific client requests.'
    } else if (lower.includes('request') || lower.includes('display')) {
      category = 'Job Request Feed'
      desc =
        'Live stream of nearby service requests matching the provider’s trade category, allowing quick evaluation and bid submission with real-time push notifications.'
    } else if (lower.includes('chat')) {
      category = 'Direct Client Messaging'
      desc =
        'In-app chat interface facilitating direct negotiation, image attachment sharing, and location clarification between service providers and clients.'
    } else if (lower.includes('profile')) {
      category = 'Provider Portfolio'
      desc =
        'Showcases provider credentials, service history, customer ratings, completed job counts, and active working hours to build trust and increase job awards.'
    } else {
      category = 'Service Execution'
      desc =
        'Comprehensive order management screen for tracking active job status, accepted bids, client location details, and payment completion confirmations.'
    }
  } else {
    // Users (Customers)
    if (lower.includes('home')) {
      category = 'Discovery Hub'
      desc =
        'Vibrant home screen featuring top service categories, recommended providers, promotional offers, quick search, and active order tracking widgets.'
    } else if (lower.includes('create') || lower.includes('order')) {
      category = 'Service Request Creation'
      desc =
        'Streamlined multi-step form for creating service requests, attaching media, specifying location coordinates, and setting expected budget boundaries.'
    } else if (lower.includes('track')) {
      category = 'Live Order Tracking'
      desc =
        'Real-time status timeline allowing customers to monitor request confirmation, provider arrival, ongoing work progress, and completion stages.'
    } else if (lower.includes('provider') || lower.includes('brovider')) {
      category = 'Provider Directory'
      desc =
        'Browse and compare verified service providers with transparent pricing, reviews, completed job counts, and direct contact options.'
    } else if (lower.includes('rating') || lower.includes('comment')) {
      category = 'Reviews & Feedback'
      desc =
        'Transparent evaluation system enabling customers to rate provider performance, leave detailed reviews, and maintain high service quality across the platform.'
    } else if (lower.includes('login') || lower.includes('account')) {
      category = 'Authentication & Onboarding'
      desc =
        'Secure multi-role sign-in and registration flow with phone OTP, email verification, and seamless role selection during onboarding.'
    } else {
      category = 'Customer Portal'
      desc =
        'Intuitive interface designed for effortless navigation, service browsing, sub-category exploration, and transparent service management.'
    }
  }

  return { title, desc, category, img: imgUrl, filename }
}

// Process glob imports into role-based image data
function processImages() {
  const roleGroups = {
    admin: [],
    broker: [],
    provider: [],
    user: [],
  }

  Object.entries(imageModules).forEach(([filepath, imgUrl]) => {
    const parts = filepath.split('/')
    const folder = parts[parts.length - 2].toLowerCase()
    const filename = parts[parts.length - 1]

    let role = 'user'
    if (folder.includes('admin')) role = 'admin'
    else if (folder.includes('boker') || folder.includes('broker')) role = 'broker'
    else if (folder.includes('provider')) role = 'provider'
    else if (folder.includes('user')) role = 'user'

    const item = generateScreenDetails(role, filename, imgUrl)
    roleGroups[role].push(item)
  })

  return roleGroups
}

const roleConfigs = [
  {
    id: 'admin',
    title: 'Administrator',
    titleAr: 'مدير النظام',
    icon: Shield,
    badge: 'Platform Control',
    color: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'border-amber-500/30',
    accentColor: 'text-amber-400',
    bgBadge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    intro:
      'Complete administrative command center overseeing ecosystem metrics, order flows, provider verification, and multi-user chat compliance.',
    capabilities: [
      'Real-time system diagnostics & revenue analytics',
      'Global order monitoring & dispute resolution',
      'User permission audit & provider approval workflows',
      'Live chat oversight & platform security configuration',
    ],
  },
  {
    id: 'broker',
    title: 'Broker',
    titleAr: 'الوسيط (المُنسّق)',
    icon: Briefcase,
    badge: 'Dispatch & Matching',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
    accentColor: 'text-cyan-400',
    bgBadge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    intro:
      'Regional coordination hub allowing brokers to match customer requests with nearby service specialists, monitor assignments, and ensure task execution.',
    capabilities: [
      'Smart geographic task assignment',
      'Provider availability & skill matching',
      'Order dispatch status tracking',
      'Direct broker-to-provider notification triggers',
    ],
  },
  {
    id: 'provider',
    title: 'Service Provider',
    titleAr: 'مزود الخدمة',
    icon: Wrench,
    badge: 'Job Execution',
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30',
    accentColor: 'text-emerald-400',
    bgBadge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    intro:
      'Tailored mobile workspace for trade professionals to discover nearby service requests, submit competitive price offers, chat with clients, and manage active jobs.',
    capabilities: [
      'Live service request feed & instant alerts',
      'Custom price offer & terms submission',
      'In-app client messaging & location map navigation',
      'Verified provider profile & rating showcase',
    ],
  },
  {
    id: 'user',
    title: 'Customer (User)',
    titleAr: 'العميل (المستخدم)',
    icon: Users,
    badge: 'On-Demand Services',
    color: 'from-purple-500/20 to-indigo-500/20',
    borderColor: 'border-purple-500/30',
    accentColor: 'text-purple-400',
    bgBadge: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    intro:
      'Seamless consumer app for discovering local services, creating custom requests, comparing provider offers, tracking real-time order status, and reviewing completed work.',
    capabilities: [
      'Intuitive service category & sub-service search',
      'Multi-media service order creation',
      'Real-time job progress timeline & tracking',
      'Transparent provider reviews & rating system',
    ],
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
  const { lang } = useLanguage()
  const isRtl = lang === 'ar'

  const roleImages = useMemo(() => processImages(), [])
  const [activeTab, setActiveTab] = useState('admin')
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [allScreenshotsList, setAllScreenshotsList] = useState([])

  // Compile flattened array of screenshots for Lightbox
  useEffect(() => {
    const list = []
    roleConfigs.forEach((role) => {
      const screens = roleImages[role.id] || []
      screens.forEach((sc) => list.push(sc.img))
    })
    setAllScreenshotsList(list)
  }, [roleImages])

  // Scrollspy logic to highlight active role tab while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250
      roleConfigs.forEach((role) => {
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
    <div className="min-h-screen bg-bg text-text">
      {/* Top Header / Navigation Back Link */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: easePremium }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors duration-300 text-sm font-medium group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            {isRtl ? 'العودة للمحفظة' : 'Back to Portfolio'}
          </Link>
        </motion.div>
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
                <span>Flagship Product Case Study</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-none">
                Khadmaty <span className="gradient-text">App</span>
              </h1>

              <p className="text-secondary text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                A comprehensive multi-role service marketplace connecting customers, service providers, brokers, and administrators in one intelligent Flutter & Firebase platform.
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
                  <span>View Live Repository</span>
                </a>
                <a
                  href="#overview"
                  className="px-7 py-3.5 glass text-text font-semibold rounded-xl hover:bg-accent/10 border border-accent/25 transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 text-sm"
                >
                  <span>Explore Case Study</span>
                  <ChevronRight size={16} />
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
      <section id="overview" className="relative py-20 px-4 border-t border-accent/10 bg-[#0A0E1A]/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-mono text-xs uppercase tracking-widest block mb-2">
              Software Architecture & Strategy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Project <span className="gradient-text">Overview</span>
            </h2>
            <p className="text-secondary text-base sm:text-lg max-w-2xl mx-auto mt-3">
              An enterprise-grade analysis of how Khadmaty modernizes the on-demand service ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="p-3 bg-red-500/10 text-red-400 rounded-xl w-fit mb-5 border border-red-500/20">
                  <Zap size={22} />
                </div>
                <h3 className="text-xl font-bold mb-3">The Problem</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Traditional service hiring relies on fragmented phone calls, unverified dispatchers, manual price haggling, and complete lack of real-time job status visibility between clients and tradespeople.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl w-fit mb-5 border border-emerald-500/20">
                  <CheckCircle2 size={22} />
                </div>
                <h3 className="text-xl font-bold mb-3">The Solution</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Khadmaty unifies four distinct user personas (Customers, Providers, Brokers, Admins) into a single Flutter ecosystem with role-tailored dashboards, live Firestore streams, and automated job workflows.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="p-3 bg-accent/10 text-accent rounded-xl w-fit mb-5 border border-accent/20">
                  <Users size={22} />
                </div>
                <h3 className="text-xl font-bold mb-3">Target Users</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Engineered for Homeowners seeking quick repairs, Skilled Technicians accepting job offers, Regional Brokers matching task queues, and System Admins maintaining platform integrity.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl w-fit mb-5 border border-cyan-500/20">
                  <Layers size={22} />
                </div>
                <h3 className="text-xl font-bold mb-3">Main Features</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Multi-Role Access Control (RBAC), Custom Job Offer Negotiation, Real-time In-App Chat, Geographic Provider Search, Live Order Status Timeline, and Admin Diagnostic Analytics.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl w-fit mb-5 border border-amber-500/20">
                  <Sparkles size={22} />
                </div>
                <h3 className="text-xl font-bold mb-3">Business Value</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Eliminates broker dispatch delays by 60%, guarantees transparent pricing, ensures service quality through verified customer ratings, and scales gracefully across multiple cities.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl w-fit mb-5 border border-purple-500/20">
                  <Cpu size={22} />
                </div>
                <h3 className="text-xl font-bold mb-3">Clean Architecture</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Separated into Presentation, Domain, and Data layers. Uses reactive state management, repository pattern for Firestore collections, and modular UI widgets for high maintainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT STATISTICS CARDS */}
      <section className="py-16 px-4 bg-accent/5 border-y border-accent/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card rounded-xl p-6 text-center">
              <p className="text-3xl sm:text-4xl font-extrabold text-accent mb-1">
                <AnimatedCounter end={4} />
              </p>
              <p className="text-secondary text-xs sm:text-sm font-medium">Distinct User Roles</p>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <p className="text-3xl sm:text-4xl font-extrabold text-cyan-400 mb-1">
                <AnimatedCounter end={15} suffix="+" />
              </p>
              <p className="text-secondary text-xs sm:text-sm font-medium">Service Categories</p>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mb-1">
                Real-Time
              </p>
              <p className="text-secondary text-xs sm:text-sm font-medium">Firestore Streams</p>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <p className="text-3xl sm:text-4xl font-extrabold text-amber-400 mb-1">
                100%
              </p>
              <p className="text-secondary text-xs sm:text-sm font-medium">Responsive Flutter UI</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROLE NAVIGATION STICKY TAB BAR */}
      <div className="sticky top-0 z-40 bg-[#070B14]/90 backdrop-blur-md border-b border-accent/15 py-3 px-4">
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
                <span>{isRtl ? role.titleAr : role.title}</span>
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
                          {isRtl ? role.titleAr : role.title} Persona
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
                                    Click to expand
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
                            <span>Screen {String(idx + 1).padStart(2, '0')}</span>
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
                                User Experience
                              </span>
                              <p className="text-xs text-secondary leading-relaxed">
                                Ergonomic touch controls, clean visual hierarchy, and intuitive interface feedback designed for effortless operation.
                              </p>
                            </div>
                            <div className="glass rounded-xl p-4 border border-accent/10">
                              <span className="text-xs text-cyan-400 font-mono uppercase tracking-wider block mb-1">
                                Business Value
                              </span>
                              <p className="text-xs text-secondary leading-relaxed">
                                Accelerates transaction turnaround, maintains service transparency, and builds high consumer retention.
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
      <section className="py-20 px-4 border-t border-accent/10 bg-[#0A0E1A]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-mono text-xs uppercase tracking-widest block mb-2">
              Engineering Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Technical <span className="gradient-text">Highlights</span>
            </h2>
            <p className="text-secondary text-base sm:text-lg max-w-2xl mx-auto mt-3">
              Modern architecture principles ensuring stability, scalability, and security.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-6">
              <Smartphone className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-bold mb-2">Flutter & Responsive UI</h3>
              <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                Adaptive layouts using LayoutBuilder and MediaQuery providing flawless rendering across Android, iOS, and varied tablet screen dimensions.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <Database className="text-cyan-400 mb-4" size={28} />
              <h3 className="text-lg font-bold mb-2">Firebase & Firestore Streams</h3>
              <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                Real-time reactive listener architecture pushing instantaneous order updates, live chat messages, and status changes with low latency.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <Lock className="text-amber-400 mb-4" size={28} />
              <h3 className="text-lg font-bold mb-2">Role-Based Access Control</h3>
              <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                Strict security rules and custom claims protecting Firestore documents, ensuring users can only read and mutate authorized domain objects.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <Layers className="text-emerald-400 mb-4" size={28} />
              <h3 className="text-lg font-bold mb-2">Clean Architecture</h3>
              <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                Decoupled Data, Domain, and Presentation layers facilitating unit testing, seamless API switching, and maintainable state logic.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <MessageSquare className="text-purple-400 mb-4" size={28} />
              <h3 className="text-lg font-bold mb-2">Live Chat & Notifications</h3>
              <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                Integrated messaging infrastructure with Cloud Messaging triggers alerting service providers and clients of incoming bids instantly.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <Compass className="text-rose-400 mb-4" size={28} />
              <h3 className="text-lg font-bold mb-2">Geolocation & Dispatch</h3>
              <p className="text-secondary text-xs sm:text-sm leading-relaxed">
                Proximity-based provider discovery enabling brokers to assign nearest trade specialists to job locations efficiently.
              </p>
            </div>
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
                User-Centric Design
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
                Delivering an Exceptional <span className="gradient-text">User Experience</span>
              </h2>
              <p className="text-secondary text-base sm:text-lg leading-relaxed mb-8">
                Every screen in Khadmaty is crafted with deliberate spacing, micro-interactions, dark mode elegance, and intuitive navigation flows that make complex multi-user interactions feel effortless.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="glass rounded-xl p-4">
                  <p className="text-accent font-bold text-base mb-1">Fast Nav</p>
                  <p className="text-secondary text-xs">Zero-friction transitions</p>
                </div>
                <div className="glass rounded-xl p-4">
                  <p className="text-cyan-400 font-bold text-base mb-1">Modern UI</p>
                  <p className="text-secondary text-xs">Glassmorphism aesthetics</p>
                </div>
                <div className="glass rounded-xl p-4">
                  <p className="text-emerald-400 font-bold text-base mb-1">Clear Flow</p>
                  <p className="text-secondary text-xs">Transparent job lifecycle</p>
                </div>
                <div className="glass rounded-xl p-4">
                  <p className="text-amber-400 font-bold text-base mb-1">Smooth FX</p>
                  <p className="text-secondary text-xs">60 FPS micro-animations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-24 px-4 border-t border-accent/10 bg-[#070B14] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            Interested in building something <span className="gradient-text">similar?</span>
          </h2>

          <p className="text-secondary text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Let’s collaborate to build high-performance mobile applications with clean architecture, modern UI, and scalable cloud backends.
          </p>

          <Link
            to="/#contact"
            className="inline-flex items-center gap-3 px-9 py-4 bg-accent text-text font-bold text-base rounded-2xl hover:bg-accent-secondary transition-all duration-300 shadow-xl shadow-accent/30 hover:shadow-accent/50 hover:scale-[1.03]"
          >
            <span>Contact Me</span>
            <ChevronRight size={18} />
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

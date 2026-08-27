const en = {
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
  },
  hero: {
    available: 'Available for projects',
    hi: "Hi, I'm",
    prefix: 'a',
    roles: ['Flutter Developer', 'AI Workflow Builder', 'Project Manager'],
    subtitle:
      'I build high-quality Flutter applications, craft AI-powered workflows, and deliver projects on time with precision and clean architecture.',
    cta: 'View Projects',
    contactBtn: 'Contact Me',
    scroll: 'SCROLL',
  },
  about: {
    label: 'About',
    heading: 'Building Apps That',
    headingAccent: 'Matter',
    subtitle:
      'Flutter developer who thinks like a PM, builds like an architect, and ships like a startup.',
    stats: {
      projects: { value: '5+', label: 'Projects Completed', numeric: 5, suffix: '+' },
      experience: { value: '1+', label: 'Years of Experience', numeric: 1, suffix: '+' },
      technologies: { value: '4+', label: 'Core Technologies', numeric: 4, suffix: '+' },
    },
    philosophy: [
      {
        title: 'My Workflow',
        desc: 'I combine Flutter expertise with AI-driven automation to build high-quality apps at speed. Every project gets clean architecture, pixel-perfect UI, and smooth delivery.',
      },
      {
        title: 'My Mindset',
        desc: 'I believe in building smart, not just hard. AI tools accelerate my workflow, but craftsmanship defines the result. Code should be clean, interfaces should be beautiful, and users should feel the difference.',
      },
    ],
    strengths: [
      {
        title: 'Fast Executor',
        desc: 'I ship quality work fast. AI-powered workflows let me deliver in days, not weeks — without cutting corners.',
      },
      {
        title: 'Smart Builder',
        desc: 'Every line of code serves a purpose. I architect solutions that scale, perform, and stay maintainable.',
      },
      {
        title: 'Project Focused',
        desc: 'Deadlines matter. I manage scope, communicate clearly, and deliver on time — every time.',
      },
      {
        title: 'AI-Enhanced',
        desc: 'I leverage AI to automate, optimize, and accelerate development while keeping full control of quality.',
      },
    ],
  },
  projects: {
    label: 'Projects',
    heading: 'Featured',
    headingAccent: 'Work',
    subtitle:
      'Flutter applications built with clean architecture and premium user experiences.',
    list: [
      {
        title: 'Water Project Management System',
        desc: 'Production-grade dual-platform (Android & Windows) water project management system built from scratch with offline-first architecture, local SQLite, and automated Firebase synchronization.',
      },
      {
        title: 'Khadmaty App',
        desc: 'Comprehensive multi-role service marketplace platform connecting customers, service providers, brokers, and administrators in one intelligent ecosystem.',
      },
      {
        title: 'Masrofy App',
        desc: 'Smart expense management app with clean UI, real-time transaction tracking, and insightful spending analytics.',
      },
      {
        title: 'Qatta Management App',
        desc: 'Modern management system for organizing operations, tracking activities, and streamlining team workflows.',
      },
      {
        title: 'AL Dafter App',
        desc: 'Professional bookkeeping and financial organization application with real-time reporting and dashboards.',
      },
    ],
    github: 'GitHub',
    livePreview: 'Live Preview',
  },
  skills: {
    label: 'Skills',
    heading: 'My',
    headingAccent: 'Toolkit',
    subtitle: 'Technologies and expertise I bring to every project.',
    list: [
      { name: 'Flutter' },
      { name: 'Firebase' },
      { name: 'React' },
      { name: 'AI Automation' },
      { name: 'UI/UX' },
      { name: 'Project Mgmt' },
    ],
  },
  github: {
    label: 'GitHub',
    heading: 'Open Source',
    headingAccent: 'Work',
    subtitle: "Projects I've built and contributed to.",
    viewRepo: 'View Repository',
    repos: [
      {
        name: 'Khadmaty App',
        desc: 'Multi-role service marketplace built with Flutter, Firebase, and Clean Architecture.',
      },
      {
        name: 'Masrofy App',
        desc: 'Smart expense tracking with real-time analytics and clean architecture.',
      },
      {
        name: 'Qatta App',
        desc: 'Modern team management system with streamlined workflows and reporting.',
      },
      {
        name: 'AL Dafter App',
        desc: 'Professional bookkeeping app with real-time dashboards and reporting.',
      },
    ],
  },
  contact: {
    label: 'Contact',
    heading: "Let's Work",
    headingAccent: 'Together',
    subtitle: 'Have a project in mind? Let\'s build something great.',
    email: 'Email',
    location: 'Location',
    worldwide: 'Available Worldwide',
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'ahmedbawzyr73@gmail.com',
      messagePlaceholder: 'Tell me about your project...',
      send: 'Send Message',
    },
  },
  footer: {
    tagline: 'Built with precision.',
  },
  loader: {
    loading: 'Loading',
  },

  // ─── Shared project page UI strings ───────────────────────────────────────
  projectPage: {
    backToPortfolio: 'Back to Portfolio',
    caseStudy: 'Case Study',
    viewLive: 'View Live',
    sourceCode: 'Source Code',
    clickToExpand: 'Click to expand',
    screen: 'Screen',
    whyBuilt: {
      badge: 'Product Purpose & Vision',
      title: 'Why I Built This',
    },
    architecture: {
      badge: 'Software Engineering Flow',
      title: 'Application Architecture',
      subtitle: 'Structured data processing pipeline and system layered abstraction.',
    },
  },

  // ─── Masrofy ───────────────────────────────────────────────────────────────
  masrofy: {
    title: 'Masrofy',
    titleAccent: 'App',
    subtitle:
      'A modern expense management application designed to help users organize daily transactions, monitor spending, and maintain complete financial records through a clean and intuitive user experience.',
    why: {
      explanation:
        'Masrofy was built to simplify personal expense management and enhance daily financial awareness. It replaces chaotic manual tracking with a simple, intuitive experience that enables fast transaction recording and organized financial history.',
      highlights: [
        'Daily expense tracking',
        'Better financial awareness',
        'Simple and intuitive experience',
        'Fast transaction recording',
        'Organized financial history',
      ],
    },
    arch: [
      { title: 'Flutter App', icon: 'Smartphone' },
      { title: 'Local Business Logic', icon: 'Cpu' },
      { title: 'SQLite / Local Storage', icon: 'Database' },
      { title: 'Expense Categories', icon: 'Layers' },
      { title: 'Transactions', icon: 'FileText' },
      { title: 'Analytics Dashboard', icon: 'BarChart3' },
    ],
    screens: [
      {
        title: 'Dashboard Overview',
        desc: 'Provides a complete snapshot of your financial activity at a glance. Users can quickly monitor total income, expenses, and balance across all accounts from a single, centralized view.',
      },
      {
        title: 'Detailed Analytics',
        desc: 'Delivers in-depth breakdowns of spending patterns and income sources. Helps users identify trends, track progress toward financial goals, and make informed decisions about their budget.',
      },
      {
        title: 'Expense Management',
        desc: 'Allows users to record, categorize, and monitor every expense with precision. The interface ensures accurate financial tracking and provides clear visibility into where money is being spent.',
      },
      {
        title: 'Add Expense',
        desc: 'Streamlines the process of logging new expenses with an intuitive form interface. Users can quickly enter amount, category, date, and notes to maintain up-to-date financial records.',
      },
      {
        title: 'Income Tracking',
        desc: 'Offers a dedicated space for managing all income streams. Users can view, sort, and analyze their earnings to maintain a clear picture of their total revenue and financial health.',
      },
      {
        title: 'Add Income',
        desc: 'Simplifies recording new income entries with a clean and efficient input form. Ensures every earning is captured accurately for comprehensive financial reporting and analysis.',
      },
      {
        title: 'Archives',
        desc: 'Stores historical financial data in an organized and accessible manner. Users can review past transactions, export records, and maintain a complete audit trail of their financial activity.',
      },
    ],
  },

  // ─── Qatta ────────────────────────────────────────────────────────────────
  qatta: {
    title: 'Qatta',
    titleAccent: 'Management',
    subtitle:
      'Modern management solution for organizing members, tracking expenses, and managing daily operations efficiently.',
    why: {
      explanation:
        'Qatta was designed to organize members and manage shared expenses in an efficient and transparent way. It eliminates ambiguity in group budgets, simplifies split calculations, and ensures every participant has clear visibility into shared records.',
      highlights: [
        'Member management',
        'Shared expense tracking',
        'Organized records',
        'Better financial visibility',
      ],
    },
    arch: [
      { title: 'Flutter App', icon: 'Smartphone' },
      { title: 'Member Management', icon: 'Users' },
      { title: 'Shared Expenses', icon: 'Layers' },
      { title: 'Financial Calculations', icon: 'Calculator' },
      { title: 'Local Database', icon: 'Database' },
      { title: 'Reports', icon: 'BarChart3' },
    ],
    screens: [
      {
        title: 'Dashboard Overview',
        desc: "Provides a complete overview of key activities, metrics, and important information. Users can quickly monitor the application's status and access core functionality from a single place.",
      },
      {
        title: 'Expense Management',
        desc: 'Allows users to record, organize, and monitor expenses efficiently. The interface helps maintain accurate financial records and provides clear visibility into spending activities.',
      },
      {
        title: 'Member Management',
        desc: 'Designed for managing member information, maintaining organized records, and simplifying daily administrative tasks.',
      },
    ],
  },

  // ─── AL Dafter ────────────────────────────────────────────────────────────
  aldafter: {
    title: 'AL Dafter',
    titleAccent: 'App',
    subtitle:
      'A modern bookkeeping and debt management application that helps users organize customers, record financial transactions, monitor balances, and simplify daily financial management through an intuitive and professional interface.',
    why: {
      explanation:
        'AL Dafter was created to replace traditional paper bookkeeping with a modern digital solution. It simplifies daily merchant operations by organizing customer accounts, tracking outstanding debts, and ensuring accurate financial record-keeping.',
      highlights: [
        'Customer management',
        'Debt tracking',
        'Financial organization',
        'Faster daily operations',
        'Accurate record keeping',
      ],
    },
    arch: [
      { title: 'Flutter App', icon: 'Smartphone' },
      { title: 'Customer Management', icon: 'Users' },
      { title: 'Debt Management', icon: 'ShieldAlert' },
      { title: 'SQLite Database', icon: 'Database' },
      { title: 'Financial Reports', icon: 'BarChart3' },
      { title: 'Backup & Restore', icon: 'HardDrive' },
    ],
    screens: [
      {
        title: 'Dashboard Overview',
        desc: 'Serves as the central hub of the application, presenting a comprehensive snapshot of all financial activity including outstanding debts, customer balances, and recent transactions. Users can instantly assess their financial standing and access the most critical features from one unified view.',
      },
      {
        title: 'Customer Management',
        desc: 'Provides a powerful interface for organizing and managing all customer records in one place. Users can add new customers, view contact details, track individual balances, and maintain a complete history of interactions to strengthen business relationships.',
      },
      {
        title: 'Transaction Tracking',
        desc: 'Enables users to record, categorize, and monitor every financial transaction with precision. The clean interface ensures accurate bookkeeping by capturing payment details, dates, and associated customers, giving complete visibility into the flow of money.',
      },
      {
        title: 'Lite Mode',
        desc: 'Offers a lightweight, distraction-free viewing experience optimized for quick access to essential information. Users who prefer a simpler interface can toggle this mode to focus purely on the data that matters most without visual complexity.',
      },
      {
        title: 'Application Settings',
        desc: 'Delivers a centralized control panel for personalizing the application experience. Users can configure notification preferences, adjust display settings, manage data backup options, and tailor the application to match their specific workflow requirements.',
      },
    ],
  },

  // ─── Khadmaty ─────────────────────────────────────────────────────────────
  khadmaty: {
    heroBadge: 'Flagship Product Case Study',
    subtitle:
      'A comprehensive multi-role service marketplace connecting customers, service providers, brokers, and administrators in one intelligent Flutter & Firebase platform.',
    viewLiveRepo: 'View Live Repository',
    exploreCaseStudy: 'Explore Case Study',
    overview: {
      badge: 'Software Architecture & Strategy',
      title: 'Project',
      titleAccent: 'Overview',
      subtitle: 'An enterprise-grade analysis of how Khadmaty modernizes the on-demand service ecosystem.',
      problem: {
        title: 'The Problem',
        desc: 'Traditional service hiring relies on fragmented phone calls, unverified dispatchers, manual price haggling, and complete lack of real-time job status visibility between clients and tradespeople.',
      },
      solution: {
        title: 'The Solution',
        desc: 'Khadmaty unifies four distinct user personas (Customers, Providers, Brokers, Admins) into a single Flutter ecosystem with role-tailored dashboards, live Firestore streams, and automated job workflows.',
      },
      targetUsers: {
        title: 'Target Users',
        desc: 'Engineered for Homeowners seeking quick repairs, Skilled Technicians accepting job offers, Regional Brokers matching task queues, and System Admins maintaining platform integrity.',
      },
      mainFeatures: {
        title: 'Main Features',
        desc: 'Multi-Role Access Control (RBAC), Custom Job Offer Negotiation, Real-time In-App Chat, Geographic Provider Search, Live Order Status Timeline, and Admin Diagnostic Analytics.',
      },
      businessValue: {
        title: 'Business Value',
        desc: 'Eliminates broker dispatch delays by 60%, guarantees transparent pricing, ensures service quality through verified customer ratings, and scales gracefully across multiple cities.',
      },
      cleanArch: {
        title: 'Clean Architecture',
        desc: 'Separated into Presentation, Domain, and Data layers. Uses reactive state management, repository pattern for Firestore collections, and modular UI widgets for high maintainability.',
      },
    },
    stats: {
      roles: 'Distinct User Roles',
      categories: 'Service Categories',
      streams: 'Firestore Streams',
      ui: 'Responsive Flutter UI',
      realtimeLabel: 'Real-Time',
    },
    why: {
      explanation:
        'Khadmaty was created to solve the difficulty of connecting customers, service providers, brokers, and administrators through one scalable platform. By digitizing regional dispatching and direct offer negotiations, it eliminates communication bottlenecks and establishes transparent service delivery.',
      highlights: [
        'Multi-role architecture',
        'Marketplace concept',
        'Organized service management',
        'Better communication',
        'Scalable business model',
      ],
    },
    techHighlights: {
      badge: 'Engineering Excellence',
      title: 'Technical',
      titleAccent: 'Highlights',
      subtitle: 'Modern architecture principles ensuring stability, scalability, and security.',
      items: [
        {
          title: 'Flutter & Responsive UI',
          desc: 'Adaptive layouts using LayoutBuilder and MediaQuery providing flawless rendering across Android, iOS, and varied tablet screen dimensions.',
        },
        {
          title: 'Firebase & Firestore Streams',
          desc: 'Real-time reactive listener architecture pushing instantaneous order updates, live chat messages, and status changes with low latency.',
        },
        {
          title: 'Role-Based Access Control',
          desc: 'Strict security rules and custom claims protecting Firestore documents, ensuring users can only read and mutate authorized domain objects.',
        },
        {
          title: 'Clean Architecture',
          desc: 'Decoupled Data, Domain, and Presentation layers facilitating unit testing, seamless API switching, and maintainable state logic.',
        },
        {
          title: 'Live Chat & Notifications',
          desc: 'Integrated messaging infrastructure with Cloud Messaging triggers alerting service providers and clients of incoming bids instantly.',
        },
        {
          title: 'Geolocation & Dispatch',
          desc: 'Proximity-based provider discovery enabling brokers to assign nearest trade specialists to job locations efficiently.',
        },
      ],
    },
    ux: {
      badge: 'User-Centric Design',
      title: 'Delivering an Exceptional',
      titleAccent: 'User Experience',
      desc: 'Every screen in Khadmaty is crafted with deliberate spacing, micro-interactions, dark mode elegance, and intuitive navigation flows that make complex multi-user interactions feel effortless.',
      metrics: [
        { label: 'Fast Nav', desc: 'Zero-friction transitions' },
        { label: 'Modern UI', desc: 'Glassmorphism aesthetics' },
        { label: 'Clear Flow', desc: 'Transparent job lifecycle' },
        { label: 'Smooth FX', desc: '60 FPS micro-animations' },
      ],
    },
    cta: {
      title: 'Interested in building something',
      titleAccent: 'similar?',
      desc: "Let's collaborate to build high-performance mobile applications with clean architecture, modern UI, and scalable cloud backends.",
      btn: 'Contact Me',
    },
    roles: {
      admin: {
        title: 'Administrator',
        badge: 'Platform Control',
        intro:
          'Complete administrative command center overseeing ecosystem metrics, order flows, provider verification, and multi-user chat compliance.',
        capabilities: [
          'Real-time system diagnostics & revenue analytics',
          'Global order monitoring & dispute resolution',
          'User permission audit & provider approval workflows',
          'Live chat oversight & platform security configuration',
        ],
      },
      broker: {
        title: 'Broker',
        badge: 'Dispatch & Matching',
        intro:
          'Regional coordination hub allowing brokers to match customer requests with nearby service specialists, monitor assignments, and ensure task execution.',
        capabilities: [
          'Smart geographic task assignment',
          'Provider availability & skill matching',
          'Order dispatch status tracking',
          'Direct broker-to-provider notification triggers',
        ],
      },
      provider: {
        title: 'Service Provider',
        badge: 'Job Execution',
        intro:
          'Tailored mobile workspace for trade professionals to discover nearby service requests, submit competitive price offers, chat with clients, and manage active jobs.',
        capabilities: [
          'Live service request feed & instant alerts',
          'Custom price offer & terms submission',
          'In-app client messaging & location map navigation',
          'Verified provider profile & rating showcase',
        ],
      },
      user: {
        title: 'Customer (User)',
        badge: 'On-Demand Services',
        intro:
          'Seamless consumer app for discovering local services, creating custom requests, comparing provider offers, tracking real-time order status, and reviewing completed work.',
        capabilities: [
          'Intuitive service category & sub-service search',
          'Multi-media service order creation',
          'Real-time job progress timeline & tracking',
          'Transparent provider reviews & rating system',
        ],
      },
    },
    screenCard: {
      userExperience: 'User Experience',
      userExperienceDesc:
        'Ergonomic touch controls, clean visual hierarchy, and intuitive interface feedback designed for effortless operation.',
      businessValue: 'Business Value',
      businessValueDesc:
        'Accelerates transaction turnaround, maintains service transparency, and builds high consumer retention.',
      clickToExpand: 'Click to expand',
    },
    persona: 'Persona',
    screenTitles: {
      adminMonitoring: 'Admin Monitoring Dashboard',
      reportsAnalytics: 'Reports And Analytics Display Screen',
      systemStatistics: 'System Statistics Display Screen',
      chatManagement: 'Chat Management Screen',
      ordersManagement: 'Orders Management Screen',
      ratingsManagement: 'Ratings Management Screen',
      usersManagement: 'User Management Screen',

      brokerOrdersDetails: 'Broker Orders Details Screen',
      providerOrderDetailsEntry: 'Service Provider Order Details Entry Screen',
      providerSelection: 'Service Provider Selection Screen',
      providerTaskAssignment: 'Service Provider Task Assignment Screen',
      brokerDashboard: 'Broker Dashboard',
      brokerOrdersScreen: 'Broker Orders Screen',

      providerOrderDetails: 'Provider Order Details Screen',
      orderStatusAfterAcceptance: 'Order Status After Offer Acceptance Screen',
      requestsDisplay: 'Job Requests Display Screen',
      sendingJobOffer: 'Sending A Job Offer To The Client Screen',
      providerChat: 'Provider Chatting Screen',
      providerProfile: 'Profile Screen',
      providerDashboard: 'Provider Dashboard',

      acceptRejectOrder: 'Accept Or Reject Offer Screen',
      providerCard: 'Service Provider Card Screen',
      createAccountBroker: 'Create Account As Broker Screen',
      createAccountBrokerStep: 'Broker Registration Step Screen',
      createAccountProvider: 'Create Account As Provider Screen',
      createOrder: 'Create Service Order Screen',
      customerHome: 'Customer Home Screen',
      login: 'Login Screen',
      providersDirectory: 'Service Providers Directory Screen',
      ratingReview: 'Rating And Review Screen',
      searchLocation: 'Search Providers By Location Screen',
      subService: 'Service Categories Management Screen',
      trackOrder: 'Track Order Status Screen',
      userComments: 'Customer Comments And Reviews Screen',
      notifications: 'Notifications Screen',
      adminDashboard: 'Admin Dashboard',
    },
  },
  waterProject: {
    hero: {
      label: 'WATER PROJECT MANAGEMENT SYSTEM',
      title: 'From Idea to a Real',
      titleAccent: 'Working System',
      subtitle: 'A complete water project management system built from scratch and currently used in real-world daily operations.',
      badge: 'Production System',
      platforms: ['Android Mobile', 'Windows Desktop', 'Offline-First', 'Firebase Sync'],
    },
    highlight: {
      badge: 'REAL-WORLD IMPACT',
      title: 'Built independently from idea to production.',
      subtitle: 'Currently used in real-world daily operations to manage water utility projects efficiently.',
    },
    whyIBuiltThis: {
      explanation: 'This project holds a special place because it is not just a demo or UI prototype. It is a full-fledged enterprise management system built independently from scratch to solve real operational bottlenecks in water project administration. From initial domain research to offline database design, UI/UX, multi-platform deployment (Android + Windows), and live site execution, every phase was executed to meet rigorous daily usage standards.',
      highlights: [
        'Built completely independently from problem analysis to live deployment.',
        'Actively powers real-world daily operations for water supply project management.',
        'Seamless dual-platform execution sharing the exact same architecture logic on Android and Windows.',
        'Zero data loss architecture through robust offline local caching and queue synchronization.',
      ],
    },
    features: {
      label: 'SYSTEM SCOPE & CAPABILITIES',
      title: 'Core System',
      titleAccent: 'Features',
      subtitle: 'Comprehensive module suite engineered for seamless field and back-office management.',
      list: [
        {
          title: 'Customer Management',
          desc: 'Comprehensive directory for storing customer data, water meter IDs, locations, and account statuses.',
        },
        {
          title: 'Water Meter Readings',
          desc: 'Fast field recording of periodic water meter numbers with input validation and history tracking.',
        },
        {
          title: 'Consumption Calculation',
          desc: 'Automated math engine calculating precise water usage volume based on tiered tariff structures.',
        },
        {
          title: 'Invoice Generation',
          desc: 'Instant generation of detailed customer bills based on actual consumption, previous balance, and tariffs.',
        },
        {
          title: 'Payment Registration',
          desc: 'Real-time entry of payments, partial settlements, and issuing immediate payment receipts.',
        },
        {
          title: 'Accounts & Receivables',
          desc: 'Tracking customer ledger balances, overdue debts, credit balances, and payment histories.',
        },
        {
          title: 'Expense Management',
          desc: 'Recording operational project expenses, fuel costs, maintenance, and categorization.',
        },
        {
          title: 'PDF Reports & Invoices',
          desc: 'Professional document rendering for official printable invoices and summary audit reports.',
        },
        {
          title: 'Interactive Dashboard',
          desc: 'Central command panel displaying operational metrics, total revenue, unpaid bills, and statistics.',
        },
        {
          title: 'Users & Permissions',
          desc: 'Role-based access control protecting critical data, system settings, and audit logs.',
        },
        {
          title: 'Multi-Device Data Sync',
          desc: 'Automated background synchronization engine keeping mobile field devices and office PCs in sync.',
        },
      ],
    },
    offline: {
      label: 'ENGINEERING ARCHITECTURE',
      title: 'Offline-First',
      titleAccent: 'Architecture',
      subtitle: 'Guaranteed uninterrupted field operations even without internet access, synchronizing automatically when online.',
      description: 'The system does not rely on an active internet connection for every operation. All transactions, meter readings, and invoice creations are executed locally first in SQLite/Drift, queued, and synchronized seamlessly with Cloud Firestore when connection is restored.',
      steps: [
        { title: 'Flutter App', subtitle: 'UI & Business Logic' },
        { title: 'Drift / SQLite', subtitle: 'Local Caching & ACID DB' },
        { title: 'Sync Queue', subtitle: 'Transaction Queue & Conflicts' },
        { title: 'Firebase Firestore', subtitle: 'Cloud Persistence & Sync' },
      ],
    },
    platforms: {
      label: 'DUAL PLATFORM ECOSYSTEM',
      title: 'Android & Windows',
      titleAccent: 'Integration',
      subtitle: 'Two dedicated application interfaces sharing a single robust synchronization layer.',
      androidTitle: 'Android Mobile App',
      androidBadge: 'Field Operations',
      androidDesc: 'Designed for field agents to register new customers, log meter readings during rounds, view instant invoice summaries, and work seamlessly on the move.',
      windowsTitle: 'Windows Desktop App',
      windowsBadge: 'Office Administration',
      windowsDesc: 'Optimized for back-office administration: comprehensive project oversight, auditing financial transactions, printing PDF reports/invoices, managing expenses, and user role configuration.',
      sharedTitle: 'Shared Sync & Data Layer',
      sharedDesc: 'Unified Dart business logic and clean architecture layer powering both platforms with 100% data consistency.',
    },
    gallery: {
      label: 'SYSTEM IN ACTION',
      title: 'Interface Case Study &',
      titleAccent: 'Screenshots',
      subtitle: 'Explore actual operational screens from both Android Mobile and Windows Desktop versions.',
      mobileTab: '📱 Android Mobile',
      desktopTab: '💻 Windows Desktop',
      clickToExpand: 'Click to expand view',
      screenCount: 'Screenshots',
    },
    screens: {
      mobile: [
        {
          title: 'System Statistics Dashboard',
          desc: 'Field overview screen showing daily collection totals, active readings counter, and quick access to core field tools.',
        },
        {
          title: 'Customer Directory',
          desc: 'Searchable mobile list of all subscribers with meter numbers, account status indicators, and direct action shortcuts.',
        },
        {
          title: 'Invoices Management',
          desc: 'Mobile billing summary listing issued invoices, payment status indicators (Paid/Pending), and filters.',
        },
        {
          title: 'Expenses Management',
          desc: 'Field expense logger for recording daily maintenance costs, fuel purchases, and operational outlays.',
        },
        {
          title: 'Customer Profile Details',
          desc: 'Detailed view of subscriber profile, meter serial, geolocation data, balance summary, and transaction history.',
        },
        {
          title: 'Invoice Details & Breakdown',
          desc: 'Complete bill breakdown displaying current reading, previous reading, net units consumed, tariff rate, and calculated subtotal.',
        },
        {
          title: 'Additional Invoice Specifications',
          desc: 'Extended view for invoice payment history, partial payment logs, notes, and direct invoice share options.',
        },
      ],
      desktop: [
        {
          title: 'Executive Admin Dashboard',
          desc: 'Comprehensive Windows desktop dashboard presenting high-level analytical charts, revenue trends, reading completion rates, and system alerts.',
        },
        {
          title: 'Report Generation Suite',
          desc: 'Advanced reporting tool on Windows to filter project metrics by date range, customer sector, tariff group, or payment status.',
        },
        {
          title: 'Desktop Customer Management Directory',
          desc: 'Full-screen administrative data grid for managing customer records, bulk edits, account creation, and subscription status.',
        },
        {
          title: 'PDF Invoice Document Generation',
          desc: 'Official invoice layout preview optimized for thermal and A4 printing with official headers, QR breakdown, and itemized billing.',
        },
        {
          title: 'Desktop Invoices Ledger',
          desc: 'Centralized financial billing matrix displaying all issued invoices across the project with multi-column sorting and bulk export.',
        },
        {
          title: 'Desktop Expense Ledger',
          desc: 'Detailed administrative ledger for tracking project operational costs, categorizing spending, and managing receipts.',
        },
        {
          title: 'Customer Account Profile',
          desc: 'Desktop comprehensive customer view showing long-term consumption trends, payment ledger history, and meter inspection notes.',
        },
        {
          title: 'Final Audit Summary Report',
          desc: 'Exportable administrative audit report displaying total water volume distributed, collected revenue, net balance, and outstanding liabilities.',
        },
      ],
    },
    process: {
      label: 'DEVELOPMENT JOURNEY',
      title: 'From Idea to',
      titleAccent: 'Production',
      subtitle: 'The 12-step engineering roadmap followed to build a dependable software system for daily operations.',
      steps: [
        { number: '01', title: 'Problem Understanding', desc: 'Engaging with project operations to understand ground challenges in water distribution.' },
        { number: '02', title: 'Requirements Analysis', desc: 'Defining system scope, tariff models, reading cycles, and administrative workflows.' },
        { number: '03', title: 'Database Design', desc: 'Structuring relational schemas for local SQLite/Drift and Cloud Firestore collections.' },
        { number: '04', title: 'UI/UX Design', desc: 'Crafting intuitive mobile & desktop interfaces customized for field & office environments.' },
        { number: '05', title: 'Core Programming', desc: 'Implementing BLoC state management and clean architecture layers in Dart/Flutter.' },
        { number: '06', title: 'Offline-First Architecture', desc: 'Building local SQLite caching engines using Drift for zero-latency database operations.' },
        { number: '07', title: 'Sync Queue Engine', desc: 'Engineering robust transaction queuing to resolve conflict and sync with Firebase when online.' },
        { number: '08', title: 'Rigorous Testing', desc: 'Testing edge cases: offline reads, network timeouts, large data grids, and math validations.' },
        { number: '09', title: 'Android Deployment', desc: 'Building, optimizing, and deploying APKs for field agents on mobile devices.' },
        { number: '10', title: 'Windows Desktop Build', desc: 'Compiling native Windows desktop applications with multi-window and PDF print support.' },
        { number: '11', title: 'Troubleshooting & Perf Tuning', desc: 'Optimizing database query indices, memory usage, and background sync routines.' },
        { number: '12', title: 'Real Production Execution', desc: 'Deploying the system into active daily operational usage for managing the water project.' },
      ],
    },
    techStack: {
      label: 'TECHNOLOGY STACK',
      title: 'Built With Modern',
      titleAccent: 'Technologies',
      subtitle: 'Proven tools and frameworks selected for high performance, reliability, and multi-platform stability.',
      list: [
        { name: 'Flutter', category: 'Cross-Platform Framework' },
        { name: 'Dart', category: 'Programming Language' },
        { name: 'Clean Architecture', category: 'Software Design' },
        { name: 'BLoC Pattern', category: 'State Management' },
        { name: 'Drift / SQLite', category: 'Local Relational Database' },
        { name: 'Firebase Authentication', category: 'Security & Auth' },
        { name: 'Cloud Firestore', category: 'Cloud Database & Sync' },
        { name: 'Offline-First Architecture', category: 'System Architecture' },
        { name: 'Sync Queue Engine', category: 'Data Synchronization' },
        { name: 'Dependency Injection', category: 'GetIt / Injectable' },
        { name: 'PDF Generation', category: 'Document Export' },
        { name: 'Responsive UI', category: 'Mobile & Desktop Design' },
      ],
    },
    challenges: {
      label: 'ENGINEERING SOLUTIONS',
      title: 'Technical',
      titleAccent: 'Challenges',
      subtitle: 'Overcoming complex real-world software engineering obstacles during development.',
      list: [
        {
          title: 'Unstable Network Environments',
          desc: 'Field agents often operate in remote areas without reliable cellular connectivity. Solution: Local-first persistence using Drift/SQLite ensured uninterrupted operation.',
        },
        {
          title: 'Dual-Platform State Synchronization',
          desc: 'Ensuring data modified on mobile field devices seamlessly updates office Windows desktops without race conditions. Solution: Transaction-based Sync Queue sending delta logs to Cloud Firestore.',
        },
        {
          title: 'Accurate Tariff & Billing Calculations',
          desc: 'Water consumption tariffs require non-linear step calculations. Solution: Isolated pure Dart domain logic with automated unit tests for math accuracy.',
        },
        {
          title: 'Native PDF Document Export',
          desc: 'Generating crisp printable invoices and multi-page audit reports natively on desktop and mobile. Solution: Customized PDF rendering engine with Arabic typography support.',
        },
      ],
    },
    result: {
      label: 'PROJECT OUTCOME',
      title: 'The',
      titleAccent: 'Result',
      subtitle: 'Transforming operational challenges into a dependable, production-grade software solution.',
      text: 'The Water Project Management System successfully transitioned from an operational necessity into a live, highly reliable production system used in daily operations. Beyond writing code, the core value lies in taking full ownership of a complex domain problem, engineering a resilient offline-first multi-platform architecture, and delivering software that continuous business operations rely upon every single day.',
    },
  },
}

export default en

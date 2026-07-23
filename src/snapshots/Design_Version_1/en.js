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
      providerProfile: 'Provider Profile Screen',
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
}

export default en

import ProjectPage from '../components/ProjectPage.jsx'

import dashbordImg from '../assets/images/AL-Dafter-app/dashbord.jpg'
import customersImg from '../assets/images/AL-Dafter-app/customers.jpg'
import expensesImg from '../assets/images/AL-Dafter-app/expenses.jpg'
import liteModeImg from '../assets/images/AL-Dafter-app/lite mode.jpg'
import settingsImg from '../assets/images/AL-Dafter-app/settings.jpg'

const screenshots = [dashbordImg, customersImg, expensesImg, liteModeImg, settingsImg]

const screens = [
  {
    title: 'Dashboard Overview',
    desc: 'Serves as the central hub of the application, presenting a comprehensive snapshot of all financial activity including outstanding debts, customer balances, and recent transactions. Users can instantly assess their financial standing and access the most critical features from one unified view.',
    img: dashbordImg,
    align: 'right',
  },
  {
    title: 'Customer Management',
    desc: 'Provides a powerful interface for organizing and managing all customer records in one place. Users can add new customers, view contact details, track individual balances, and maintain a complete history of interactions to strengthen business relationships.',
    img: customersImg,
    align: 'left',
  },
  {
    title: 'Transaction Tracking',
    desc: 'Enables users to record, categorize, and monitor every financial transaction with precision. The clean interface ensures accurate bookkeeping by capturing payment details, dates, and associated customers, giving complete visibility into the flow of money.',
    img: expensesImg,
    align: 'right',
  },
  {
    title: 'Lite Mode',
    desc: 'Offers a lightweight, distraction-free viewing experience optimized for quick access to essential information. Users who prefer a simpler interface can toggle this mode to focus purely on the data that matters most without visual complexity.',
    img: liteModeImg,
    align: 'left',
  },
  {
    title: 'Application Settings',
    desc: 'Delivers a centralized control panel for personalizing the application experience. Users can configure notification preferences, adjust display settings, manage data backup options, and tailor the application to match their specific workflow requirements.',
    img: settingsImg,
    align: 'right',
  },
]

const whyIBuiltThis = {
  explanation:
    'AL Dafter was created to replace traditional paper bookkeeping with a modern digital solution. It simplifies daily merchant operations by organizing customer accounts, tracking outstanding debts, and ensuring accurate financial record-keeping.',
  highlights: [
    'Customer management',
    'Debt tracking',
    'Financial organization',
    'Faster daily operations',
    'Accurate record keeping',
  ],
}

const architectureSteps = [
  { title: 'Flutter App', icon: 'Smartphone' },
  { title: 'Customer Management', icon: 'Users' },
  { title: 'Debt Management', icon: 'ShieldAlert' },
  { title: 'SQLite Database', icon: 'Database' },
  { title: 'Financial Reports', icon: 'BarChart3' },
  { title: 'Backup & Restore', icon: 'HardDrive' },
]

export default function ALDaftProject() {
  return (
    <ProjectPage
      title={<>AL Dafter <span className="gradient-text">App</span></>}
      subtitle="A modern bookkeeping and debt management application that helps users organize customers, record financial transactions, monitor balances, and simplify daily financial management through an intuitive and professional interface."
      techs={['Flutter', 'SQLite', 'Debt Logic', 'Backup & Sync']}
      whyIBuiltThis={whyIBuiltThis}
      architectureSteps={architectureSteps}
      screens={screens}
      screenshots={screenshots}
      github="https://github.com/ahmedbawzir12-png"
      live="https://github.com/ahmedbawzir12-png"
    />
  )
}

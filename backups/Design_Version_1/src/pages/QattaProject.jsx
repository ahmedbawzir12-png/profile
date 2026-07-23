import ProjectPage from '../components/ProjectPage.jsx'

import dashbordImg from '../assets/images/qatta/dashbord.jpg'
import expensesImg from '../assets/images/qatta/expenses.jpg'
import membersImg from '../assets/images/qatta/members.jpg'

const screenshots = [dashbordImg, expensesImg, membersImg]

const screens = [
  {
    title: 'Dashboard Overview',
    desc: 'Provides a complete overview of key activities, metrics, and important information. Users can quickly monitor the application\u2019s status and access core functionality from a single place.',
    img: dashbordImg,
    align: 'right',
  },
  {
    title: 'Expense Management',
    desc: 'Allows users to record, organize, and monitor expenses efficiently. The interface helps maintain accurate financial records and provides clear visibility into spending activities.',
    img: expensesImg,
    align: 'left',
  },
  {
    title: 'Member Management',
    desc: 'Designed for managing member information, maintaining organized records, and simplifying daily administrative tasks.',
    img: membersImg,
    align: 'right',
  },
]

const whyIBuiltThis = {
  explanation:
    'Qatta was designed to organize members and manage shared expenses in an efficient and transparent way. It eliminates ambiguity in group budgets, simplifies split calculations, and ensures every participant has clear visibility into shared records.',
  highlights: [
    'Member management',
    'Shared expense tracking',
    'Organized records',
    'Better financial visibility',
  ],
}

const architectureSteps = [
  { title: 'Flutter App', icon: 'Smartphone' },
  { title: 'Member Management', icon: 'Users' },
  { title: 'Shared Expenses', icon: 'Layers' },
  { title: 'Financial Calculations', icon: 'Calculator' },
  { title: 'Local Database', icon: 'Database' },
  { title: 'Reports', icon: 'BarChart3' },
]

export default function QattaProject() {
  return (
    <ProjectPage
      title={<>Qatta <span className="gradient-text">Management</span></>}
      subtitle="Modern management solution for organizing members, tracking expenses, and managing daily operations efficiently."
      techs={['Flutter', 'Firebase', 'Cloud Firestore', 'Financial Logic']}
      whyIBuiltThis={whyIBuiltThis}
      architectureSteps={architectureSteps}
      screens={screens}
      screenshots={screenshots}
      github="https://github.com/ahmedbawzir12-png"
      live="https://github.com/ahmedbawzir12-png"
    />
  )
}

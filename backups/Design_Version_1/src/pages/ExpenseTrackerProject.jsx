import ProjectPage from '../components/ProjectPage.jsx'

import dashbordImg from '../assets/images/Expense Tracker/dashbord.jpg'
import dashbord2Img from '../assets/images/Expense Tracker/dashbord (2).jpg'
import expensesImg from '../assets/images/Expense Tracker/expenses.jpg'
import addExpensesImg from '../assets/images/Expense Tracker/add expenses.jpg'
import incomeImg from '../assets/images/Expense Tracker/income.jpg'
import addIncomeImg from '../assets/images/Expense Tracker/add income (2).jpg'
import archivesImg from '../assets/images/Expense Tracker/archives.jpg'

const screenshots = [dashbordImg, dashbord2Img, expensesImg, addExpensesImg, incomeImg, addIncomeImg, archivesImg]

const screens = [
  {
    title: 'Dashboard Overview',
    desc: 'Provides a complete snapshot of your financial activity at a glance. Users can quickly monitor total income, expenses, and balance across all accounts from a single, centralized view.',
    img: dashbordImg,
    align: 'right',
  },
  {
    title: 'Detailed Analytics',
    desc: 'Delivers in-depth breakdowns of spending patterns and income sources. Helps users identify trends, track progress toward financial goals, and make informed decisions about their budget.',
    img: dashbord2Img,
    align: 'left',
  },
  {
    title: 'Expense Management',
    desc: 'Allows users to record, categorize, and monitor every expense with precision. The interface ensures accurate financial tracking and provides clear visibility into where money is being spent.',
    img: expensesImg,
    align: 'right',
  },
  {
    title: 'Add Expense',
    desc: 'Streamlines the process of logging new expenses with an intuitive form interface. Users can quickly enter amount, category, date, and notes to maintain up-to-date financial records.',
    img: addExpensesImg,
    align: 'left',
  },
  {
    title: 'Income Tracking',
    desc: 'Offers a dedicated space for managing all income streams. Users can view, sort, and analyze their earnings to maintain a clear picture of their total revenue and financial health.',
    img: incomeImg,
    align: 'right',
  },
  {
    title: 'Add Income',
    desc: 'Simplifies recording new income entries with a clean and efficient input form. Ensures every earning is captured accurately for comprehensive financial reporting and analysis.',
    img: addIncomeImg,
    align: 'left',
  },
  {
    title: 'Archives',
    desc: 'Stores historical financial data in an organized and accessible manner. Users can review past transactions, export records, and maintain a complete audit trail of their financial activity.',
    img: archivesImg,
    align: 'right',
  },
]

export default function ExpenseTrackerProject() {
  return (
    <ProjectPage
      title={<>Expense Tracker <span className="gradient-text">App</span></>}
      subtitle="A modern expense management application designed to help users organize daily transactions, monitor spending, and maintain complete financial records through a clean and intuitive user experience."
      techs={['Flutter', 'Firebase', 'Cloud Firestore']}
      screens={screens}
      screenshots={screenshots}
      github="https://github.com/ahmedbawzir12-png"
      live="https://github.com/ahmedbawzir12-png"
    />
  )
}

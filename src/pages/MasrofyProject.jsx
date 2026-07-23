import { useMemo } from 'react'
import ProjectPage from '../components/ProjectPage.jsx'
import { useLanguage } from '../context/useLanguage.js'

import dashbordImg from '../assets/images/masrofy/dashbord.jpg'
import dashbord2Img from '../assets/images/masrofy/dashbord (2).jpg'
import expensesImg from '../assets/images/masrofy/expenses.jpg'
import addExpensesImg from '../assets/images/masrofy/add expenses.jpg'
import incomeImg from '../assets/images/masrofy/income.jpg'
import addIncomeImg from '../assets/images/masrofy/add income (2).jpg'
import archivesImg from '../assets/images/masrofy/archives.jpg'

const screenshots = [dashbordImg, dashbord2Img, expensesImg, addExpensesImg, incomeImg, addIncomeImg, archivesImg]
const imgList = [dashbordImg, dashbord2Img, expensesImg, addExpensesImg, incomeImg, addIncomeImg, archivesImg]
const alignList = ['right', 'left', 'right', 'left', 'right', 'left', 'right']

export default function MasrofyProject() {
  const { t, lang } = useLanguage()
  const isAr = lang === 'ar'

  const title = (
    <>
      {t('masrofy.title')} <span className="gradient-text">{t('masrofy.titleAccent')}</span>
    </>
  )

  const screens = useMemo(() => {
    const screensData = t('masrofy.screens')
    if (!Array.isArray(screensData)) return []
    return screensData.map((s, i) => ({
      title: s.title,
      desc: s.desc,
      img: imgList[i] || imgList[0],
      align: alignList[i] || 'right',
    }))
  }, [isAr]) // eslint-disable-line react-hooks/exhaustive-deps

  const whyIBuiltThis = useMemo(() => ({
    explanation: t('masrofy.why.explanation'),
    highlights: t('masrofy.why.highlights'),
  }), [isAr]) // eslint-disable-line react-hooks/exhaustive-deps

  const architectureSteps = t('masrofy.arch')

  return (
    <ProjectPage
      title={title}
      subtitle={t('masrofy.subtitle')}
      techs={['Flutter', 'SQLite', 'Clean Architecture', 'Local Storage']}
      whyIBuiltThis={whyIBuiltThis}
      architectureSteps={architectureSteps}
      screens={screens}
      screenshots={screenshots}
      github="https://github.com/ahmedbawzir12-png"
      live="https://github.com/ahmedbawzir12-png"
    />
  )
}

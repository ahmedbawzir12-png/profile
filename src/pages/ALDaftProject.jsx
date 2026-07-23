import { useMemo } from 'react'
import ProjectPage from '../components/ProjectPage.jsx'
import { useLanguage } from '../context/useLanguage.js'

import dashbordImg from '../assets/images/AL-Dafter-app/dashbord.jpg'
import customersImg from '../assets/images/AL-Dafter-app/customers.jpg'
import expensesImg from '../assets/images/AL-Dafter-app/expenses.jpg'
import liteModeImg from '../assets/images/AL-Dafter-app/lite mode.jpg'
import settingsImg from '../assets/images/AL-Dafter-app/settings.jpg'

const screenshots = [dashbordImg, customersImg, expensesImg, liteModeImg, settingsImg]
const imgList = [dashbordImg, customersImg, expensesImg, liteModeImg, settingsImg]
const alignList = ['right', 'left', 'right', 'left', 'right']

export default function ALDaftProject() {
  const { t, lang } = useLanguage()
  const isAr = lang === 'ar'

  const title = (
    <>
      {t('aldafter.title')} <span className="gradient-text">{t('aldafter.titleAccent')}</span>
    </>
  )

  const screens = useMemo(() => {
    const screensData = t('aldafter.screens')
    if (!Array.isArray(screensData)) return []
    return screensData.map((s, i) => ({
      title: s.title,
      desc: s.desc,
      img: imgList[i] || imgList[0],
      align: alignList[i] || 'right',
    }))
  }, [isAr]) // eslint-disable-line react-hooks/exhaustive-deps

  const whyIBuiltThis = useMemo(() => ({
    explanation: t('aldafter.why.explanation'),
    highlights: t('aldafter.why.highlights'),
  }), [isAr]) // eslint-disable-line react-hooks/exhaustive-deps

  const architectureSteps = t('aldafter.arch')

  return (
    <ProjectPage
      title={title}
      subtitle={t('aldafter.subtitle')}
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

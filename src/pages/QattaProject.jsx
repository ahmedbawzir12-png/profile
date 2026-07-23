import { useMemo } from 'react'
import ProjectPage from '../components/ProjectPage.jsx'
import { useLanguage } from '../context/useLanguage.js'

import dashbordImg from '../assets/images/qatta/dashbord.jpg'
import expensesImg from '../assets/images/qatta/expenses.jpg'
import membersImg from '../assets/images/qatta/members.jpg'

const screenshots = [dashbordImg, expensesImg, membersImg]
const imgList = [dashbordImg, expensesImg, membersImg]
const alignList = ['right', 'left', 'right']

export default function QattaProject() {
  const { t, lang } = useLanguage()
  const isAr = lang === 'ar'

  const title = (
    <>
      {t('qatta.title')} <span className="gradient-text">{t('qatta.titleAccent')}</span>
    </>
  )

  const screens = useMemo(() => {
    const screensData = t('qatta.screens')
    if (!Array.isArray(screensData)) return []
    return screensData.map((s, i) => ({
      title: s.title,
      desc: s.desc,
      img: imgList[i] || imgList[0],
      align: alignList[i] || 'right',
    }))
  }, [isAr]) // eslint-disable-line react-hooks/exhaustive-deps

  const whyIBuiltThis = useMemo(() => ({
    explanation: t('qatta.why.explanation'),
    highlights: t('qatta.why.highlights'),
  }), [isAr]) // eslint-disable-line react-hooks/exhaustive-deps

  const architectureSteps = t('qatta.arch')

  return (
    <ProjectPage
      title={title}
      subtitle={t('qatta.subtitle')}
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

import { createContext, useState, useEffect, useCallback, useMemo } from 'react'
import en from '../translations/en.js'
import ar from '../translations/ar.js'

const translations = { en, ar }
const STORAGE_KEY = 'ahmed-portfolio-lang'

function getInitialLanguage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'ar' || stored === 'en') return stored
  } catch {
    // localStorage not available
  }
  return 'en'
}

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // localStorage not available
    }
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang === 'ar' ? 'ar' : 'en'
  }, [lang])

  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'))
  }, [])

  const t = useCallback(
    (path) => {
      const keys = path.split('.')
      let result = translations[lang]
      for (const key of keys) {
        if (result == null) return path
        result = result[key]
      }
      return result ?? path
    },
    [lang],
  )

  const value = useMemo(() => ({ lang, toggleLanguage, t }), [lang, toggleLanguage, t])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}




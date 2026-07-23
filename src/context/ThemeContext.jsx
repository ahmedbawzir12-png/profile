import { createContext, useState, useEffect, useCallback, useMemo } from 'react'

const STORAGE_KEY = 'ahmed-portfolio-theme'
const VALID_THEMES = ['dark', 'light', 'khadmaty']

function getInitialTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && VALID_THEMES.includes(stored)) return stored
  } catch {
    // localStorage unavailable
  }
  return 'dark'
}

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(getInitialTheme)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // localStorage unavailable
    }
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const setTheme = useCallback((newTheme) => {
    if (VALID_THEMES.includes(newTheme)) {
      setThemeState(newTheme)
    }
  }, [])

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

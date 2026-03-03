import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { type Lang, translations } from '../i18n/translations'

type Translations = (typeof translations)['pt']

const STORAGE_KEY = 'cv-noemi-lang'
const VALID_LANGS: Lang[] = ['pt', 'es', 'en']

function readStoredLang(): Lang {
  if (typeof window === 'undefined') return 'pt'
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored && VALID_LANGS.includes(stored as Lang)) return stored as Lang
  return 'pt'
}

const LanguageContext = createContext<{
  lang: Lang
  setLang: (lang: Lang) => void
  t: Translations
} | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang)
  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang)
    localStorage.setItem(STORAGE_KEY, newLang)
  }, [])
  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}

import { useLanguage } from '../context/LanguageContext'
import type { Lang } from '../i18n/translations'

const labels: Record<Lang, string> = {
  pt: 'PT',
  es: 'ES',
  en: 'EN',
}

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="language-switcher flex gap-0.5 rounded-full p-1">
      {(['pt', 'es', 'en'] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          className={`language-switcher-btn px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
            lang === l ? 'language-switcher-btn--active' : ''
          }`}
          title={l === 'pt' ? 'Português' : l === 'es' ? 'Español' : 'English'}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  )
}

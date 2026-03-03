import { useCallback } from 'react'
import { useLanguage } from '../context/LanguageContext'

const links = [
  { id: 'experiencia', key: 'experience' as const },
  { id: 'formacao', key: 'education' as const },
  { id: 'competencias', key: 'skills' as const },
  { id: 'projetos', key: 'projects' as const },
  { id: 'contacto', key: 'contact' as const },
] as const

export function NavLinks() {
  const { t } = useLanguage()
  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <nav className="hidden md:flex items-center gap-1" aria-label="Navegação por secções">
      {links.map(({ id, key }) => (
        <button
          key={id}
          type="button"
          onClick={() => scrollTo(id)}
          className="nav-link px-3 py-2 rounded-lg text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors"
        >
          {t.nav[key]}
        </button>
      ))}
    </nav>
  )
}

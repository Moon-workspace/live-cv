import { useCallback } from 'react'
import { Typewriter } from './components/Typewriter'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { NavLinks } from './components/NavLinks'
import { FadeInSection } from './components/FadeInSection'
import { LanguageLevels } from './components/LanguageLevels'
import { SocialLinks } from './components/SocialLinks'
import { useLanguage } from './context/LanguageContext'
import { cvPdfByLang, contactEmail, whatsappLink, profileLinks } from './config/links'

function App() {
  const { t, lang } = useLanguage()
  const scrollToContact = useCallback(() => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
  }, [])
  const year = new Date().getFullYear()

  return (
    <div className={`bg-page bg-page-${lang} text-slate-800 antialiased`}>
      {/* Barra superior: minimalista */}
      <header className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-5 py-3 md:px-8 bg-transparent backdrop-blur-md border-b border-transparent">
        <div className="flex items-center gap-6">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="logo-n-link flex-shrink-0 w-8 h-8 rounded-full inline-flex items-center justify-center overflow-hidden"
            aria-label="Voltar ao topo"
          >
            <span className="logo-n-bg" aria-hidden="true" />
            <span className="logo-n-letter text-slate-900 font-bold text-sm">N</span>
          </a>
          <NavLinks />
        </div>
        <LanguageSwitcher />
      </header>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-6 pt-16">
        <div className="max-w-5xl lg:max-w-6xl mx-auto w-full text-center md:text-left">
          <div className="motion-enable animate-fade-in">
            <h1
              className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight name-gradient name-gradient-${lang}`}
            >
              Noemi Colubali
            </h1>
            <p className="mt-5 text-lg text-slate-600 min-h-[2.5rem] leading-relaxed">
              <Typewriter text={t.typewriter} />
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={cvPdfByLang[lang]}
                download
                className="px-6 py-3 rounded-full gradient-btn text-slate-900 font-semibold text-base primary-cta inline-block"
              >
                {t.hero.downloadCv}
              </a>
              <button
                type="button"
                onClick={scrollToContact}
                className="px-5 py-2.5 rounded-full border-2 border-slate-300 text-slate-700 font-medium text-sm hover:bg-slate-100 hover:border-slate-400 transition-all"
              >
                {t.hero.contactLink}
              </button>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <SocialLinks />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 gradient-hero pointer-events-none" aria-hidden />
      </section>

      <main
        key={lang}
        className="main-lang-transition max-w-5xl lg:max-w-6xl mx-auto px-6 py-16 md:py-24 space-y-20"
      >
        {/* Experiência */}
        <FadeInSection>
          <section id="experiencia" className="scroll-mt-20">
            <h2 className="section-title text-xl md:text-2xl pb-2 mb-6">
              {t.sections.experience.title}
            </h2>
            <div className="space-y-4">
              {t.sections.experience.jobs.map((job) => (
                <article key={`${job.role}-${job.company}`} className="card-clean p-5 md:p-6">
                  <div className="flex flex-wrap justify-between gap-2">
                    <p className="font-semibold text-slate-900">{job.role}</p>
                    <p className="text-slate-500 text-sm">{job.period}</p>
                  </div>
                  <p className="text-slate-500 text-sm mt-0.5">{job.company}</p>
                  <p className="text-slate-600 mt-3 text-[15px] leading-relaxed">
                    {job.description}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </FadeInSection>

        {/* Formação */}
        <FadeInSection>
          <section id="formacao" className="scroll-mt-20">
            <h2 className="section-title text-xl md:text-2xl pb-2 mb-6">
              {t.sections.education.title}
            </h2>
            <div className="space-y-3">
              {t.sections.education.items.map((item) => (
                <article key={`${item.title}-${item.place}`} className="card-clean p-5">
                  <p className="font-semibold text-slate-900">{item.title}</p>
                  <p className="text-slate-500 text-sm mt-0.5">{item.place}</p>
                </article>
              ))}
            </div>
          </section>
        </FadeInSection>

        {/* Competências */}
        <FadeInSection>
          <section id="competencias" className="scroll-mt-20">
            <h2 className="section-title text-xl md:text-2xl pb-2 mb-5">
              {t.sections.skills.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {t.sections.skills.list.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </FadeInSection>

        {/* Projetos */}
        <FadeInSection>
          <section id="projetos" className="scroll-mt-20">
            <h2 className="section-title text-xl md:text-2xl pb-2 mb-6">
              {t.sections.projects.title}
            </h2>
            <div className="space-y-4">
              {t.sections.projects.items.map((project) => (
                <article key={project.name} className="card-clean p-5 md:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-semibold text-slate-900">{project.name}</p>
                    {'status' in project && project.status && (
                      <span className="status-pill">{project.status}</span>
                    )}
                  </div>
                  <p className="text-slate-600 mt-3 text-[15px] leading-relaxed">
                    {project.description}
                  </p>
                  {'techs' in project && project.techs && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.techs.map((tech) => (
                        <span key={tech} className="tech-pill">
                          <span className="tech-pill-dot" aria-hidden="true" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        </FadeInSection>

        {/* Certificados + Línguas */}
        <FadeInSection>
          <section className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="section-title text-xl md:text-2xl pb-2 mb-4">
                {t.sections.certificates.title}
              </h2>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                {t.sections.certificates.text}
              </p>
            </div>
            <div>
              <h2 className="section-title text-xl md:text-2xl pb-2 mb-4">
                {t.sections.languages.title}
              </h2>
              <LanguageLevels items={t.sections.languages.items} tone={lang} />
            </div>
          </section>
        </FadeInSection>

        {/* Contacto */}
        <FadeInSection>
          <section id="contacto" className="scroll-mt-20 pt-4">
            <h2 className="section-title text-xl md:text-2xl pb-2 mb-8 text-center md:text-left">
              {t.contact.title}
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <article className="card-clean p-5 md:p-6 flex flex-col items-center text-center gap-2.5">
                <h3 className="text-sm font-semibold text-slate-900">WhatsApp</h3>
                <p className="text-xs text-slate-500">Resposta mais rápida</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 px-4 py-2 rounded-full bg-emerald-500 text-white font-semibold text-xs shadow-sm hover:bg-emerald-400 hover:shadow-md primary-cta inline-flex items-center gap-1.5"
                >
                  {t.contact.whatsappCta}
                </a>
              </article>
              <article className="card-clean p-5 md:p-6 flex flex-col items-center text-center gap-2.5">
                <h3 className="text-sm font-semibold text-slate-900">Email</h3>
                <p className="text-xs text-slate-500 truncate max-w-full">{contactEmail}</p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="mt-2 px-4 py-2 rounded-full border border-slate-300 text-slate-700 font-medium text-xs hover:bg-slate-100 hover:border-slate-400 transition-all inline-flex items-center gap-1.5"
                >
                  {t.contact.ctaEmail}
                </a>
              </article>
              <article className="card-clean p-5 md:p-6 flex flex-col items-center text-center gap-2.5">
                <h3 className="text-sm font-semibold text-slate-900">LinkedIn</h3>
                <p className="text-xs text-slate-500">Perfil profissional</p>
                <a
                  href={profileLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 px-4 py-2 rounded-full border border-slate-300 text-slate-700 font-medium text-xs hover:bg-slate-100 hover:border-slate-400 transition-all inline-flex items-center gap-1.5"
                >
                  {t.contact.ctaLinkedIn}
                </a>
              </article>
            </div>
          </section>
        </FadeInSection>
      </main>

      <footer className="border-t border-transparent py-6 mt-12">
        <div className="max-w-5xl lg:max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="footer-brand"
              aria-label={`MOON-WORKSPACE ${year}`}
            >
              <span className="footer-mark" aria-hidden="true">
                <span className="footer-mark-label">MW</span>
              </span>
              <span className="footer-brand-text">
                © {year} MOON-WORKSPACE
              </span>
            </button>
          </div>
          <SocialLinks variant="footer" />
        </div>
      </footer>
    </div>
  )
}

export default App
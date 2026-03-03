import { useState, useEffect, useRef } from 'react'

type LangItem = { name: string; level: string; percent: number }
type Tone = 'pt' | 'es' | 'en'

export function LanguageLevels({ items, tone = 'pt' }: { items: readonly LangItem[]; tone?: Tone }) {
  const [visible, setVisible] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="space-y-5">
      {items.map((item, i) => (
        <div key={item.name} className="space-y-2">
          <div className="flex justify-between items-baseline gap-2">
            <span className="font-semibold text-slate-800">{item.name}</span>
            <span className="text-sm text-slate-600">
              {item.level}
            </span>
          </div>
          <div
            className="h-2.5 w-full rounded-full bg-slate-100 overflow-hidden"
            role="progressbar"
            aria-valuenow={item.percent}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${item.name}: ${item.level}`}
          >
            <div
              className={`h-full rounded-full gradient-bar lang-bar-${tone}`}
              style={{
                width: visible || reducedMotion ? `${item.percent}%` : '0%',
                transition: reducedMotion ? 'none' : 'width 1s ease-out',
                transitionDelay: reducedMotion ? '0ms' : `${i * 120}ms`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

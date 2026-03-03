import { useState, useEffect } from 'react'

const typingSpeed = 80
const pauseAtEnd = 2000
const restartDelay = 500

type Props = { text: string }

export function Typewriter({ text }: Props) {
  const [displayed, setDisplayed] = useState('')
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setIsPaused(false)
  }, [text])

  useEffect(() => {
    if (isPaused) {
      const restart = setTimeout(() => {
        setDisplayed('')
        setIsPaused(false)
      }, restartDelay)
      return () => clearTimeout(restart)
    }

    if (displayed.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1))
      }, typingSpeed)
      return () => clearTimeout(timeout)
    }

    const pause = setTimeout(() => setIsPaused(true), pauseAtEnd)
    return () => clearTimeout(pause)
  }, [text, displayed, isPaused])

  return (
    <span className="min-h-[1.5em] inline-block" aria-live="polite" aria-atomic="true">
      {displayed}
      <span className="animate-pulse" aria-hidden="true">|</span>
    </span>
  )
}

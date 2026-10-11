import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from '../utils/motion'

/**
 * Marca un elemento como "visto" la primera vez que entra en pantalla.
 * Lo usan las tarjetas (contenido que administra React) para el fade esotérico por CSS.
 */
export function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      setInView(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView]
}

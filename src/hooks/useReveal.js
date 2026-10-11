import { useEffect } from 'react'
import $ from 'jquery'
import { prefersReducedMotion } from '../utils/motion'

const HIDDEN = { opacity: 0, position: 'relative', top: 34, filter: 'blur(12px)', transform: 'scale(0.97)' }
const CLEAN = { opacity: '', position: '', top: '', filter: '', transform: '' }

/**
 * Fade esotérico con jQuery para los bloques `[data-reveal]`: cada bloque emerge
 * lentamente de la niebla (desenfoque + ligero ascenso + escala) al entrar en pantalla.
 * Sólo anima estilos de contenedores estáticos (títulos y bloques); nunca el
 * contenido que administra React.
 * Opcional: `data-reveal-delay="120"` retrasa la animación (ms).
 */
export function useReveal(containerRef) {
  useEffect(() => {
    const root = containerRef.current
    if (!root || prefersReducedMotion() || !('IntersectionObserver' in window)) return undefined

    const $items = $(root).find('[data-reveal]')
    $items.css(HIDDEN)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const $item = $(entry.target)
          const delay = Number($item.attr('data-reveal-delay')) || 0

          $item.delay(delay).animate(
            { opacity: 1, top: 0 },
            {
              duration: 1100,
              easing: 'swing',
              step(now, fx) {
                if (fx.prop !== 'opacity') return
                $(this).css({
                  filter: `blur(${((1 - now) * 12).toFixed(2)}px)`,
                  transform: `scale(${(0.97 + 0.03 * now).toFixed(4)})`,
                })
              },
              complete() {
                $(this).css(CLEAN)
              },
            },
          )
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12 },
    )
    $items.each((_, el) => observer.observe(el))

    return () => {
      observer.disconnect()
      $items.stop(true).css(CLEAN)
    }
  }, [containerRef])
}

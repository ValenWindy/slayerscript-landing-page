import { useLayoutEffect } from 'react'
import $ from 'jquery'
import { prefersReducedMotion } from '../utils/motion'

/**
 * Aparición escalonada de las líneas decorativas de la ventana de código del Hero.
 * Las líneas son contenido estático (no dependen del estado de React).
 */
export function useCodeTyping(windowRef) {
  useLayoutEffect(() => {
    const root = windowRef.current
    if (!root || prefersReducedMotion()) return undefined

    const $lines = $(root).find('[data-code-line]')
    $lines.css('opacity', 0)
    $lines.each((index, el) => {
      $(el)
        .delay(500 + index * 170)
        .animate({ opacity: 1 }, 260, () => $(el).css('opacity', ''))
    })

    return () => {
      $lines.stop(true).css('opacity', '')
    }
  }, [windowRef])
}

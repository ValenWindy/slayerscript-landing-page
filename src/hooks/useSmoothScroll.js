import { useEffect } from 'react'
import $ from 'jquery'
import { prefersReducedMotion } from '../utils/motion'

/**
 * Desplazamiento suave con jQuery hacia las secciones.
 * Escucha clics en enlaces `a[data-scroll][href^="#"]` mediante un único
 * manejador delegado, que se elimina al desmontar (sin eventos duplicados).
 * No escribe el #hash en la URL: así, al recargar, la página vuelve a la portada.
 */
export function useSmoothScroll(offset = 72) {
  useEffect(() => {
    const handleClick = function (event) {
      const href = this.getAttribute('href')
      if (!href || href.length < 2 || href[0] !== '#') return

      const target = document.getElementById(href.slice(1))
      if (!target) return

      event.preventDefault()
      const top = Math.max(0, $(target).offset().top - offset)

      const finish = () => {
        target.focus({ preventScroll: true })
      }

      if (prefersReducedMotion()) {
        window.scrollTo(0, top)
        finish()
        return
      }

      $('html, body')
        .stop(true)
        .animate({ scrollTop: top }, 650, 'swing')
        .promise()
        .done(finish)
    }

    $(document).on('click.slayerScroll', 'a[data-scroll]', handleClick)

    return () => {
      $(document).off('click.slayerScroll', 'a[data-scroll]', handleClick)
      $('html, body').stop(true)
    }
  }, [offset])
}

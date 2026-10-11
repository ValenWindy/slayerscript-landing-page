import { useEffect, useState } from 'react'

/**
 * Devuelve true cuando se hizo scroll más allá de `fraction` del alto de la ventana.
 * Se usa para mostrar la barra compacta una vez que el Hero quedó atrás.
 */
export function useScrolledPast(fraction = 0.55) {
  const [past, setPast] = useState(false)

  useEffect(() => {
    const update = () => setPast(window.scrollY > window.innerHeight * fraction)
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [fraction])

  return past
}

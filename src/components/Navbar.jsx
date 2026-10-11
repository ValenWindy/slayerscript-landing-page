import { useEffect, useState } from 'react'
import Icon from './Icon'
import { NAV_ITEMS } from '../data/navigation'

// Barra compacta: aparece al dejar atrás el Hero (arriba de todo, la navegación vive sobre el logo).
export default function Navbar({ activeId, onNavigate, visible }) {
  const [menuOpen, setMenuOpen] = useState(false)

  // Cerrar el menú móvil con Escape.
  useEffect(() => {
    if (!menuOpen) return undefined
    const handleKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [menuOpen])

  // Si la barra se oculta, cerramos el menú.
  useEffect(() => {
    if (!visible) setMenuOpen(false)
  }, [visible])

  const handleLinkClick = (id) => {
    onNavigate(id)
    setMenuOpen(false)
  }

  return (
    <header className={`navbar${visible ? ' is-visible' : ''}`}>
      <div className="navbar__inner container">
        <a
          className="navbar__brand"
          href="#inicio"
          data-scroll
          onClick={() => handleLinkClick('inicio')}
          aria-label="SlayerScript, ir al inicio"
        >
          <span className="navbar__mark" aria-hidden="true">{'</>'}</span>
          <span className="navbar__name">SlayerScript</span>
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
        </button>

        <nav
          id="main-menu"
          className={`navbar__menu${menuOpen ? ' is-open' : ''}`}
          aria-label="Principal"
        >
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  data-scroll
                  className={`navbar__link${activeId === item.id ? ' is-active' : ''}`}
                  aria-current={activeId === item.id ? 'page' : undefined}
                  onClick={() => handleLinkClick(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

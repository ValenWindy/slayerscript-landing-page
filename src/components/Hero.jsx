import logo from '../assets/logo.png'
import { NAV_ITEMS } from '../data/navigation'

export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title" tabIndex={-1}>
      <div className="hero__stage">
        <nav className="hero__nav" aria-label="Secciones">
          <ul>
            {NAV_ITEMS.map((item, index) => (
              <li key={item.id} className="mist-in" style={{ '--d': `${1500 + index * 130}ms` }}>
                <a href={`#${item.id}`} data-scroll>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <h1 id="hero-title" className="hero__logo">
          <img src={logo} alt="SlayerScript" width="733" height="584" decoding="async" />
        </h1>

        <p className="hero__motto mist-in" style={{ '--d': '2100ms' }}>
          Aprender, Prácticar y No Abandonar
        </p>
      </div>

      <span className="hero__cue" aria-hidden="true" />
    </section>
  )
}

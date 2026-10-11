import Icon from './Icon'
import SectionHeading from './SectionHeading'
import { contactChannels } from '../data/profile'
import { isExternalUrl, isValidUrl } from '../utils/url'

function isContactUrl(url) {
  return isValidUrl(url) || (typeof url === 'string' && url.startsWith('mailto:'))
}

export default function Contact() {
  return (
    <section id="contacto" className="section section--last" aria-labelledby="contacto-title" tabIndex={-1}>
      <div className="container">
        <SectionHeading id="contacto-title" kicker="04 · contacto" title="Contacto">
          Si querés conocer el proyecto, el mejor lugar para empezar es GitHub. Ahí vas a
          encontrar las tareas de cada capítulo.
        </SectionHeading>

        <ul className="contact__grid" data-reveal>
          {contactChannels.map((channel) => {
            const active = isContactUrl(channel.url)
            const inner = (
              <>
                <span className="contact__icon"><Icon name={channel.icon} size={22} /></span>
                <span className="contact__label">{channel.label}</span>
                <span className="contact__hint">{active ? channel.hint : 'Sin configurar'}</span>
              </>
            )
            return (
              <li key={channel.id}>
                {active ? (
                  <a
                    className="contact__item"
                    href={channel.url}
                    {...(isExternalUrl(channel.url) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="contact__item is-disabled" aria-disabled="true">{inner}</div>
                )}
              </li>
            )
          })}
        </ul>

        <div className="contact__back" data-reveal>
          <a className="btn btn--ghost" href="#inicio" data-scroll>
            <Icon name="up" size={18} /> Volver al inicio
          </a>
        </div>
      </div>
    </section>
  )
}

import Icon from './Icon'
import SectionHeading from './SectionHeading'
import { contactChannels, profile } from '../data/profile'
import { isExternalUrl, isValidUrl } from '../utils/url'


function getBioLinks() {
  const seen = new Set()
  return contactChannels.filter((channel) => {
    if (!isValidUrl(channel.url) || seen.has(channel.url)) return false
    seen.add(channel.url)
    return true
  })
}

export default function Bio() {
  const name = profile.authorName.trim() || 'Autor de SlayerScript'
  const links = getBioLinks()

  return (
    <section id="bio" className="section" aria-labelledby="bio-title" tabIndex={-1}>
      <div className="container">
        <SectionHeading id="bio-title" kicker="01 · bio" title="Sobre mí" />

        <div className="bio__grid">
          <div className="bio__card" data-reveal>
            <div className="avatar">
              {profile.avatarSrc ? (
                <img src={profile.avatarSrc} alt={`Foto de ${name}`} width="160" height="160" />
              ) : (
                <div className="avatar__placeholder" role="img" aria-label="Avatar provisional">
                  <Icon name="user" size={56} />
                </div>
              )}
              {!profile.avatarSrc && <span className="avatar__badge">foto provisional</span>}
            </div>
            <p className="bio__name">{name}</p>
            <ul className="bio__links">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    className="btn btn--ghost btn--sm"
                    href={link.url}
                    {...(isExternalUrl(link.url)
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    <Icon name={link.icon ?? 'link'} size={16} />
                    {link.label}
                    <Icon name="external" size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bio__text">
            <p className="bio__intro" data-reveal data-reveal-delay="80">{profile.intro}</p>

            <div className="panel" data-reveal data-reveal-delay="140">
              <h3 className="panel__title">
                <span className="mono">~/recorrido</span>
              </h3>
              <p>{profile.journey}</p>
            </div>

            <div className="panel" data-reveal data-reveal-delay="200">
              <h3 className="panel__title">
                <span className="mono">~/tecnologías</span>
              </h3>
              <ul className="tag-list" aria-label="Tecnologías y herramientas">
                {profile.technologies.map((tech) => (
                  <li key={tech} className="tag tag--mono">{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

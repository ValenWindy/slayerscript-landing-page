import Icon from './Icon'
import { isExternalUrl, isValidUrl } from '../utils/url'

export default function ResourceButton({ label, icon, url, context, variant = 'ghost' }) {
  const className = `btn btn--${variant} btn--sm`

  if (!isValidUrl(url)) {
    return (
      <button type="button" className={className} disabled aria-disabled="true">
        <Icon name={icon} size={16} />
        <span>{label}</span>
        <span className="btn__soon">Próximamente</span>
      </button>
    )
  }

  const external = isExternalUrl(url)
  return (
    <a
      className={className}
      href={url}
      aria-label={context ? `${label}: ${context}` : label}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <Icon name={icon} size={16} />
      <span>{label}</span>
      {external && <Icon name="external" size={14} />}
    </a>
  )
}

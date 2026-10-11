import Icon from './Icon'
import ResourceButton from './ResourceButton'
import { useInView } from '../hooks/useInView'

const TYPE_ICONS = {
  'Documentación': 'doc',
  'Artículo': 'book',
  Video: 'video',
  Repositorio: 'repo',
  Ejercicio: 'code',
  Herramienta: 'tool',
}

export default function MaterialCard({ item, index = 0 }) {
  const [ref, inView] = useInView()
  const titleId = `material-${item.id}-title`
  const icon = TYPE_ICONS[item.type] ?? 'link'

  return (
    <article
      ref={ref}
      className={`card material-card mist${inView ? ' is-in' : ''}`}
      style={{ '--d': `${(index % 3) * 110}ms` }}
      aria-labelledby={titleId}
    >
      <div className="material-card__icon">
        <Icon name={icon} size={22} />
      </div>
      <div className="material-card__body">
        <ul className="tag-list" aria-label="Etiquetas">
          <li className="tag tag--accent">{item.category}</li>
          <li className="tag">{item.type}</li>
          {item.chapter != null && (
            <li className="tag tag--mono">cap. {String(item.chapter).padStart(2, '0')}</li>
          )}
          {item.demo && <li className="tag tag--demo">demo</li>}
        </ul>
        <h3 id={titleId} className="card__title">{item.title}</h3>
        <p className="card__text">{item.description}</p>
        <ResourceButton label="Abrir recurso" icon="link" url={item.url} context={item.title} />
      </div>
    </article>
  )
}

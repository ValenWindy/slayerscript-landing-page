import ResourceButton from './ResourceButton'
import { useInView } from '../hooks/useInView'

export default function ChapterCard({ chapter, index = 0 }) {
  const { number, title, description, tags, resources } = chapter
  const [ref, inView] = useInView()
  const padded = String(number).padStart(2, '0')
  const titleId = `chapter-${chapter.id}-title`

  return (
    <article
      ref={ref}
      className={`card chapter-card mist${inView ? ' is-in' : ''}`}
      style={{ '--d': `${(index % 3) * 110}ms` }}
      aria-labelledby={titleId}
    >
      <header className="chapter-card__head">
        <span className="chapter-card__number" aria-label={`Capítulo ${number}`}>
          <span className="mono">cap.</span> {padded}
        </span>
        <ul className="tag-list" aria-label="Temas">
          {tags.map((tag) => (
            <li key={tag} className="tag">{tag}</li>
          ))}
        </ul>
      </header>

      <h3 id={titleId} className="card__title">{title}</h3>
      <p className="card__text">{description}</p>

      <div className="chapter-card__actions">
        <ResourceButton label="Ver material" icon="doc" url={resources.material} context={title} variant="primary" />
        <ResourceButton label="Ver video" icon="video" url={resources.video} context={title} />
        <ResourceButton label="Ir a la tarea" icon="github" url={resources.task} context={title} />
      </div>
    </article>
  )
}

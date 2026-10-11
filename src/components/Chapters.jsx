import { useMemo, useState } from 'react'
import ChapterCard from './ChapterCard'
import Icon from './Icon'
import SectionHeading from './SectionHeading'
import { chapters } from '../data/chapters'

export default function Chapters() {
  const [query, setQuery] = useState('')
  const [order, setOrder] = useState('asc')

  const visible = useMemo(() => {
    const term = query.trim().toLowerCase()
    return chapters
      .filter(
        (chapter) =>
          term === '' ||
          chapter.title.toLowerCase().includes(term) ||
          chapter.description.toLowerCase().includes(term),
      )
      .sort((a, b) => (order === 'asc' ? a.number - b.number : b.number - a.number))
  }, [query, order])

  const clearSearch = () => setQuery('')

  return (
    <section id="capitulos" className="section" aria-labelledby="capitulos-title" tabIndex={-1}>
      <div className="container">
        <SectionHeading id="capitulos-title" kicker="02 · capítulos" title="Capítulos">
          Cada capítulo reúne tres recursos: material de estudio, un video explicativo y una
          tarea práctica en GitHub. Los recursos sin publicar aparecen como “Próximamente”.
        </SectionHeading>

        <div className="toolbar" data-reveal>
          <div className="field field--search">
            <label htmlFor="chapter-search" className="sr-only">Buscar capítulos por nombre o descripción</label>
            <Icon name="search" size={18} />
            <input
              id="chapter-search"
              type="search"
              placeholder="Buscar por nombre o descripción"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              autoComplete="off"
            />
          </div>

          <div className="field field--select">
            <label htmlFor="chapter-order">Orden</label>
            <select id="chapter-order" value={order} onChange={(event) => setOrder(event.target.value)}>
              <option value="asc">Número ascendente</option>
              <option value="desc">Número descendente</option>
            </select>
          </div>
        </div>

        <p className="result-count" role="status" aria-live="polite">
          {visible.length} {visible.length === 1 ? 'capítulo' : 'capítulos'}
        </p>

        {visible.length > 0 ? (
          <div className="grid grid--chapters">
            {visible.map((chapter, index) => (
              <ChapterCard key={chapter.id} chapter={chapter} index={index} />
            ))}
          </div>
        ) : (
          <div className="empty" role="status">
            <p className="empty__title">No encontramos capítulos con esa búsqueda.</p>
            <button type="button" className="btn btn--ghost btn--sm" onClick={clearSearch}>
              Limpiar búsqueda
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

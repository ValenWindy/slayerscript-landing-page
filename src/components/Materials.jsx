import { useMemo, useState } from 'react'
import Icon from './Icon'
import MaterialCard from './MaterialCard'
import SectionHeading from './SectionHeading'
import { materials } from '../data/materials'

export default function Materials() {
  const [query, setQuery] = useState('')

  const visible = useMemo(() => {
    const term = query.trim().toLowerCase()
    return materials.filter((item) => term === '' || item.title.toLowerCase().includes(term))
  }, [query])

  const clearSearch = () => setQuery('')

  return (
    <section id="material" className="section" aria-labelledby="material-title" tabIndex={-1}>
      <div className="container">
        <SectionHeading id="material-title" kicker="03 · material" title="Material">
          Biblioteca general de recursos que complementa el material de cada capítulo:
          documentación oficial, herramientas y enlaces del proyecto.
        </SectionHeading>

        <div className="toolbar" data-reveal>
          <div className="field field--search">
            <label htmlFor="material-search" className="sr-only">Buscar material por título</label>
            <Icon name="search" size={18} />
            <input
              id="material-search"
              type="search"
              placeholder="Buscar por título"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              autoComplete="off"
            />
          </div>
        </div>

        <p className="result-count" role="status" aria-live="polite">
          {visible.length} {visible.length === 1 ? 'recurso' : 'recursos'}
        </p>

        {visible.length > 0 ? (
          <div className="grid grid--materials">
            {visible.map((item, index) => (
              <MaterialCard key={item.id} item={item} index={index} />
            ))}
          </div>
        ) : (
          <div className="empty" role="status">
            <p className="empty__title">No hay recursos que coincidan con la búsqueda.</p>
            <button type="button" className="btn btn--ghost btn--sm" onClick={clearSearch}>
              Limpiar búsqueda
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

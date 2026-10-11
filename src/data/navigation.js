// Los cuatro links de navegación. El logo lleva a Inicio.
// `id` coincide con el id de cada <section> en la página.
export const NAV_ITEMS = [
  { id: 'bio', label: 'Bio' },
  { id: 'capitulos', label: 'Capítulos' },
  { id: 'material', label: 'Material' },
  { id: 'contacto', label: 'Contacto' },
]

// Incluye Inicio para saber cuándo estamos arriba de todo.
export const SECTION_IDS = ['inicio', ...NAV_ITEMS.map((item) => item.id)]

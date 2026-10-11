import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/global.css'

// Al recargar (F5) queremos empezar siempre en la portada, con el menú arriba del logo:
// desactivamos la restauración automática del scroll y limpiamos el #hash de la URL.
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}
if (window.location.hash) {
  window.history.replaceState(null, '', window.location.pathname + window.location.search)
}
window.scrollTo(0, 0)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

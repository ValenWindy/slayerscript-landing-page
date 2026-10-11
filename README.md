# SlayerScript

> **Los programadores se hacen programando.**

Sitio web personal de **SlayerScript**, un proyecto para aprender programación con práctica, lógica y constancia. Reúne el catálogo de capítulos del curso de JavaScript, con el material, el video y la tarea de cada uno, junto con una presentación del autor y los canales de contacto.

- Canal de YouTube: [@Slayer-Script](https://www.youtube.com/@Slayer-Script)
- Repositorio de tareas: [SlayerScript/SlayerScript-JavaScript](https://github.com/SlayerScript/SlayerScript-JavaScript)

---

## Contenido

- [Secciones del sitio](#secciones-del-sitio)
- [Tecnologías](#tecnologías)
- [Requisitos](#requisitos)
- [Instalación y uso](#instalación-y-uso)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Cómo editar el contenido](#cómo-editar-el-contenido)
- [Reactivar la sección Material](#reactivar-la-sección-material)
- [Uso de jQuery](#uso-de-jquery)
- [Accesibilidad y rendimiento](#accesibilidad-y-rendimiento)
- [Diseño](#diseño)
- [Despliegue](#despliegue)
- [Autor](#autor)

---

## Secciones del sitio

| Sección | Descripción |
|---|---|
| **Inicio** | Portada con el logo, la navegación y el lema. El logo entra desde el frente hacia el fondo y cada elemento emerge con un fade suave. |
| **Bio** | Presentación del autor: foto, texto introductorio, recorrido, tecnologías y enlaces a perfiles. |
| **Capítulos** | Catálogo de capítulos en tarjetas, con búsqueda por nombre o descripción y orden por número. Cada capítulo tiene tres recursos: **Ver material**, **Ver video** e **Ir a la tarea**. |
| **Contacto** | Enlaces a GitHub, YouTube, LinkedIn y correo, más un botón para volver al inicio. |
| **Material** | Biblioteca general de recursos (documentación, herramientas, repositorios) con búsqueda por título. **Está implementada pero desactivada por ahora**; ver [Reactivar la sección Material](#reactivar-la-sección-material). |

**Detalles de comportamiento**

- La barra de navegación compacta aparece al dejar atrás la portada. Arriba de todo, los enlaces viven sobre el logo.
- El enlace de la sección activa se resalta mientras se hace scroll.
- En móviles, la barra se convierte en un menú desplegable.
- Si un recurso todavía no está disponible (valor `null` o URL inválida), la tarjeta muestra **"Próximamente"** y deshabilita el botón.
- Los enlaces externos se abren en una pestaña nueva con `rel="noopener noreferrer"`.
- No hay formularios de contacto: no existe un servicio que procese mensajes, así que no se simula uno.

## Tecnologías

| Herramienta | Uso |
|---|---|
| [React 18](https://react.dev/) | Interfaz y estado, con componentes reutilizables |
| [Vite 5](https://vitejs.dev/) | Servidor de desarrollo y compilación |
| [jQuery 3](https://jquery.com/) | Efectos visuales puntuales (ver [Uso de jQuery](#uso-de-jquery)) |
| CSS3 | Estilos, animaciones y diseño responsive, en un único archivo sin frameworks |
| JavaScript moderno (ES6+) | Lógica de la aplicación |

El sitio **no** usa Next.js, Angular, Vue, Bootstrap ni Tailwind CSS.

## Requisitos

- [Node.js](https://nodejs.org/) 18 o superior
- npm (se instala junto con Node.js)

## Instalación y uso

```bash
# 1. Clonar el repositorio y entrar a la carpeta
git clone <url-del-repositorio>
cd slayerscript

# 2. Instalar las dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

Por defecto el sitio queda disponible en `http://localhost:5173`.

| Comando | Qué hace |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo con recarga en caliente |
| `npm run build` | Genera la versión de producción en la carpeta `dist/` |
| `npm run preview` | Sirve localmente la versión compilada, para probarla antes de publicar |

## Estructura del proyecto

```text
slayerscript/
├── public/
│   ├── favicon.svg
│   └── foto-perfil.jpg          # foto de la sección Bio
├── src/
│   ├── assets/
│   │   ├── logo.png             # logo de la portada
│   │   └── bg.jpg               # imagen de fondo (nubes y llamas)
│   ├── components/
│   │   ├── Navbar.jsx           # barra compacta con menú móvil
│   │   ├── Hero.jsx             # portada: navegación, logo y lema
│   │   ├── Bio.jsx              # sección "Sobre mí"
│   │   ├── Chapters.jsx         # catálogo, búsqueda y orden
│   │   ├── ChapterCard.jsx      # tarjeta de capítulo
│   │   ├── Materials.jsx        # biblioteca de material (desactivada)
│   │   ├── MaterialCard.jsx     # tarjeta de recurso
│   │   ├── Contact.jsx          # canales de contacto
│   │   ├── Footer.jsx
│   │   ├── ResourceButton.jsx   # botón de recurso: enlace o "Próximamente"
│   │   ├── SectionHeading.jsx   # encabezado reutilizable de sección
│   │   └── Icon.jsx             # iconos SVG
│   ├── data/
│   │   ├── chapters.js          # capítulos y sus recursos
│   │   ├── materials.js         # biblioteca de material
│   │   ├── profile.js           # datos del autor y canales de contacto
│   │   └── navigation.js        # enlaces de la barra de navegación
│   ├── hooks/
│   │   ├── useActiveSection.js  # sección visible (IntersectionObserver)
│   │   ├── useScrolledPast.js   # muestra la barra al salir de la portada
│   │   ├── useSmoothScroll.js   # scroll suave con jQuery
│   │   ├── useReveal.js         # fade de aparición con jQuery
│   │   └── useInView.js         # fade de las tarjetas (React + CSS)
│   ├── styles/
│   │   └── global.css           # tokens, fondo, componentes y responsive
│   ├── utils/
│   │   ├── url.js               # validación de URLs
│   │   └── motion.js            # detección de prefers-reduced-motion
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

Los **datos** (`src/data/`), los **componentes** (`src/components/`) y los **estilos** (`src/styles/`) están separados: para agregar o cambiar contenido no hace falta tocar la estructura visual.

## Cómo editar el contenido

### Capítulos: `src/data/chapters.js`

Cada capítulo es un objeto con su número, título, descripción, etiquetas y tres recursos:

```js
{
  id: 'cap-09',
  number: 9,
  title: 'Funciones, nivel 1',
  description: 'Declaración de funciones, funciones flecha, parámetros y argumentos, return y funciones de expresión.',
  tags: ['Funciones', 'Arrow functions', 'return'],
  resources: {
    material: null,                                  // enlace al material, o null
    video: 'https://youtu.be/xxxxxxxxxxx',           // enlace al video, o null
    task: TASKS_REPO_URL,                            // enlace a la tarea en GitHub, o null
  },
},
```

- Los tres recursos se configuran de forma independiente. Un valor `null` (o una URL que no empiece con `http://` o `https://`) muestra **"Próximamente"** y deshabilita el botón.
- La constante `TASKS_REPO_URL`, al principio del archivo, apunta al repositorio donde están todas las tareas. Si cambia, se actualiza en un solo lugar.
- Para agregar un capítulo, copiá un bloque, cambiá el `id` y el `number`, y completá los datos.

### Autor y contacto: `src/data/profile.js`

- `profile`: nombre, texto de presentación, recorrido y lista de tecnologías de la sección Bio.
- `avatarSrc`: ruta de la foto de perfil. El archivo vive en `public/` (por ejemplo `public/foto-perfil.jpg`, que se referencia como `'/foto-perfil.jpg'`). Con `null` se muestra un avatar provisional con el cartelito "foto provisional".
- `contactChannels`: canales de la sección Contacto. **También son los botones de enlace de la Bio**, así que se configuran en un solo lugar. Un canal con `url: null` aparece como "Sin configurar". Para el correo se usa el prefijo `mailto:`:

```js
{ id: 'email', label: 'Correo', icon: 'mail', url: 'mailto:tu-correo@ejemplo.com', hint: 'Escribime por correo' },
```

### Navegación: `src/data/navigation.js`

Lista los enlaces de la barra. Cada `id` debe coincidir con el `id` de su `<section>`.

## Reactivar la sección Material

El código de la sección Material está completo (`Materials.jsx`, `MaterialCard.jsx` y `src/data/materials.js`), pero hoy no se muestra. Para activarla:

1. En `src/App.jsx`, descomentá el `import Materials ...` y la línea `<Materials />` dentro de `<main>`.
2. En `src/data/navigation.js`, descomentá el enlace `{ id: 'material', label: 'Material' }`.
3. Opcional: la numeración de los títulos de sección (`01 · bio`, `02 · capítulos`, `03 · material`, `03 · contacto`) está escrita a mano en cada componente. Al volver a mostrar Material, cambiá el de `Contact.jsx` a `04 · contacto`.

Los recursos de la biblioteca se editan en `src/data/materials.js`: título, descripción, categoría, tipo, enlace y capítulo relacionado.

## Uso de jQuery

React controla la interfaz y todo el estado. jQuery se usa de forma **limitada y justificada**, solo para efectos visuales sobre elementos estáticos:

| Hook | Efecto |
|---|---|
| `useSmoothScroll` | Desplazamiento suave hacia cada sección al usar la navegación |
| `useReveal` | Aparición progresiva (fade con desenfoque, ascenso y escala) de títulos y bloques al entrar en pantalla |

Reglas que sigue el código:

- Los efectos se inicializan dentro de `useEffect` y se limpian al desmontar, sin eventos duplicados al volver a renderizar.
- jQuery nunca manipula contenido cuyo estado administra React; las tarjetas de capítulos y de material hacen su fade con CSS (`useInView`).
- Todo respeta `prefers-reduced-motion`.

## Accesibilidad y rendimiento

- Navegación completa por teclado, con estados `:focus-visible` visibles y enlace para saltar a los capítulos.
- Etiquetas `aria-*` en menú, filtros, botones de recursos y resultados de búsqueda.
- Estados vacíos para búsquedas sin resultados.
- Validación de las URL antes de renderizar un enlace.
- Con `prefers-reduced-motion: reduce` se desactivan las animaciones.
- Animaciones moderadas basadas en `transform` y `opacity`; la imagen de fondo está optimizada (1920 px, JPG progresivo).
- Diseño responsive para escritorio, portátiles, tablets y teléfonos, sin desbordamiento horizontal.

## Diseño

- **Paleta:** fondo negro azulado sobre una imagen de nubes y llamas, con el rojo del logo como color principal y un naranja brasa como acento. Texto en blanco suave y gris claro.
- **Tipografías** (Google Fonts): [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) para el lema y los títulos, [Inter](https://fonts.google.com/specimen/Inter) para el texto y [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) para etiquetas y detalles.
- **Fondo:** imagen con un velo oscuro para que nunca dificulte la lectura, y un movimiento lento y discreto.

## Despliegue

`npm run build` genera una carpeta `dist/` con archivos estáticos que se pueden publicar en cualquier hosting estático (Netlify, Vercel, Cloudflare Pages, GitHub Pages, etc.).

Si se publica en GitHub Pages dentro de una subruta (`https://usuario.github.io/nombre-del-repo/`), hay que indicarla en `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  base: '/nombre-del-repo/',
})
```

Además, las imágenes referenciadas desde `public/` (como la foto de perfil) deberían escribirse sin la barra inicial, o usando `import.meta.env.BASE_URL`, para que funcionen bajo esa subruta.

## Autor

**Valentin Rodriguez Lloret**

- GitHub: [@ValenWindy](https://github.com/ValenWindy)
- YouTube: [@Slayer-Script](https://www.youtube.com/@Slayer-Script)

*SlayerScript · Aprender, practicar y no abandonar.*
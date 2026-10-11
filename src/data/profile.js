// Datos del autor y de contacto.

export const GITHUB_URL = 'https://github.com/ValenWindy'
export const YOUTUBE_URL = 'https://www.youtube.com/@Slayer-Script'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/valentin-eduardo-rodriguez-lloret-b8440415b/'
export const EMAIL_URL = 'mailto:theslayerscript@gmail.com'

export const profile = {
  authorName: 'Valentin Rodriguez Lloret',
  avatarSrc: '/foto-perfil.jpg',
  intro:
    'Soy un desarrollador en formación apasionado por la programación, la tecnología y la creación de proyectos propios. Creé SlayerScript como un espacio para documentar mi aprendizaje, poner a prueba mis conocimientos y compartir recursos que puedan ayudar a otros a dar sus primeros pasos en el mundo del desarrollo. Mi objetivo es seguir creciendo como programador, aprender nuevas tecnologías y transformar cada idea en un proyecto funcional.',
  journey:
    'Mi camino en la programación comenzó con la curiosidad de entender cómo funcionan las cosas detrás de una pantalla. Con el tiempo, esa curiosidad se convirtió en ganas de aprender, experimentar y construir mis propios proyectos. A lo largo de mi formación fui explorando distintos lenguajes, herramientas y tecnologías, combinando el estudio de conceptos con la práctica. Cada proyecto representa una oportunidad para enfrentar nuevos desafíos, cometer errores y encontrar mejores soluciones. Hoy, SlayerScript forma parte de ese recorrido: un lugar donde convierto lo aprendido en código y sigo construyendo mi camino como desarrollador.',

  technologies: ['JavaScript', 'Node.Js', 'React', 'Vite', 'jQuery', 'CSS3', 'Bootstrap', 'SQL', 'TailwindCSS', 'Git y GitHub'],
  links: [
    { id: 'github', label: 'GitHub', url: GITHUB_URL },
    { id: 'youtube', label: 'YouTube', url: YOUTUBE_URL },
    { id: 'linkedin', label: 'LinkedIn', url: LINKEDIN_URL },
  ],
}

// Canales de la sección Contacto (y enlaces de la Bio).

export const contactChannels = [
  { id: 'github', label: 'GitHub', icon: 'github', url: GITHUB_URL, hint: 'Repositorios y tareas' },
  { id: 'youtube', label: 'YouTube', icon: 'video', url: YOUTUBE_URL, hint: 'Canal con los videos' },
  { id: 'linkedin', label: 'LinkedIn', icon: 'link', url: LINKEDIN_URL, hint: 'Perfil profesional' },
  { id: 'email', label: 'Correo', icon: 'mail', url: EMAIL_URL, hint: 'theslayerscript@gmail.com' },
]

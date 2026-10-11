import { useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Bio from './components/Bio'
import Chapters from './components/Chapters'
import Materials from './components/Materials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { SECTION_IDS } from './data/navigation'
import { useActiveSection } from './hooks/useActiveSection'
import { useReveal } from './hooks/useReveal'
import { useScrolledPast } from './hooks/useScrolledPast'
import { useSmoothScroll } from './hooks/useSmoothScroll'

export default function App() {
  const mainRef = useRef(null)
  const [activeId, setActiveId] = useActiveSection(SECTION_IDS)
  const navVisible = useScrolledPast(0.55)

  useSmoothScroll(72)
  useReveal(mainRef)

  return (
    <>
      <div className="backdrop" aria-hidden="true" />

      <a className="skip-link" href="#capitulos" data-scroll>Saltar a los capítulos</a>
      <Navbar activeId={activeId} onNavigate={setActiveId} visible={navVisible} />

      <main ref={mainRef}>
        <Hero />
        <Bio />
        <Chapters />
        <Materials />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

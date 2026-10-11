export default function SectionHeading({ id, kicker, title, children }) {
  return (
    <header className="section-heading" data-reveal>
      <p className="kicker">{kicker}</p>
      <h2 id={id}>{title}</h2>
      {children && <p className="section-heading__lead">{children}</p>}
    </header>
  )
}

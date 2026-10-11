export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="mono">
          &copy; {new Date().getFullYear()} SlayerScript
        </p>
        <p className="footer__note">Hecho con React, Vite, jQuery y CSS3.</p>
      </div>
    </footer>
  )
}

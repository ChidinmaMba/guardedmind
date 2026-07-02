import { useState } from 'react'
import './Header.css'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#approach', label: 'Approach' },
  { href: '#bio', label: 'Clinician' },
  { href: '#contact', label: 'Contact' },
]

export default function Header({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner container">
        <a href="#" className="header__logo" onClick={closeMenu}>
          <span className="header__logo-mark" aria-hidden="true">◈</span>
          <span className="header__logo-text">
            Guarded Mind
            <small>Wellness Center</small>
          </span>
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`} aria-label="Main">
          <ul className="header__links">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} onClick={closeMenu}>{label}</a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary header__cta" onClick={closeMenu}>
            Schedule a Consultation
          </a>
        </nav>

        <button
          type="button"
          className={`header__toggle ${menuOpen ? 'header__toggle--open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

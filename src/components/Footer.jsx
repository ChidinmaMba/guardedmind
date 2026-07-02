import './Footer.css'
import {
  BUSINESS_ADDRESS_LINE1,
  BUSINESS_ADDRESS_LINE2,
  BUSINESS_PHONE,
  BUSINESS_PHONE_DISPLAY,
} from '../constants/business'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">Guarded Mind Wellness Center</span>
          <p>Compassionate psychiatric care in Sykesville &amp; Westminster, Maryland.</p>
          <address className="footer__contact">
            {BUSINESS_ADDRESS_LINE1}
            <br />
            {BUSINESS_ADDRESS_LINE2}
            <br />
            <a href={`tel:${BUSINESS_PHONE}`}>{BUSINESS_PHONE_DISPLAY}</a>
          </address>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#approach">Approach</a>
          <a href="#bio">Clinician</a>
          <a href="#contact">Contact</a>
        </nav>

        <p className="footer__copy">
          &copy; {year} Guarded Mind Wellness Center. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

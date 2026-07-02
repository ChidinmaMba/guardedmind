import { ACCEPTED_INSURANCES } from '../constants/insurance'
import './Insurance.css'

export default function Insurance() {
  return (
    <section id="insurance" className="section insurance">
      <div className="container">
        <span className="section-label">Coverage</span>
        <h2 className="section-title">Accepted Insurance</h2>
        <p className="section-intro insurance__intro">
          We accept the following insurance plans, as well as private pay via Zelle.
          Contact us to verify your coverage and benefits.
        </p>

        <ul className="insurance__grid">
          {ACCEPTED_INSURANCES.map(({ name, logo, alt }) => (
            <li key={name} className="insurance__item">
              <div className="insurance__logo-wrap">
                <img src={logo} alt={alt} className="insurance__logo" loading="lazy" />
              </div>
              <span className="insurance__name">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

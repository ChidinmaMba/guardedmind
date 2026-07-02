import './Hero.css'
import { CLINICIAN_CREDENTIALS } from '../constants/clinician'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
      </div>

      <div className="container hero__content">
        <div className="hero__badge">Sykesville / Westminster, Maryland</div>

        <h1 id="hero-title" className="hero__title">
          Compassionate care for your heart and mind
        </h1>

        <p className="hero__subtitle">
          At Guarded Mind Wellness Center, we provide evidence-based psychiatric
          evaluation, medication management, and psychotherapy in a safe, supportive
          space—helping adolescents through older adults find clarity, balance, and peace.
        </p>

        <div className="hero__actions">
          <a href="#contact" className="btn btn-primary">Get Started</a>
          <a href="#about" className="btn btn-secondary">Learn More</a>
        </div>

        <dl className="hero__meta">
          <div className="hero__meta-item">
            <dt>Ages Served</dt>
            <dd>Adolescents, Adults &amp; Older Adults</dd>
          </div>
          <div className="hero__meta-item">
            <dt>Session Type</dt>
            <dd>In-Person &amp; Telehealth</dd>
          </div>
          <div className="hero__meta-item">
            <dt>Credentials</dt>
            <dd>{CLINICIAN_CREDENTIALS}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

import './Bio.css'
import {
  CLINICIAN_NAME,
  CLINICIAN_CREDENTIALS,
  CLINICIAN_NAME_WITH_CREDENTIALS,
} from '../constants/clinician'
import PsychologyTodaySeal from './PsychologyTodaySeal'

export default function Bio() {
  return (
    <section id="bio" className="section bio">
      <div className="container">
        <div className="bio__card">
          <div className="bio__visual">
            <div className="bio__avatar">
              <img
                src="/images/mom.jpg"
                alt={CLINICIAN_NAME_WITH_CREDENTIALS}
                className="bio__avatar-img"
              />
            </div>
            <div className="bio__credentials">
              <p className="bio__name">{CLINICIAN_NAME}</p>
              <p className="bio__title">{CLINICIAN_CREDENTIALS}</p>
              <p className="bio__subtitle">Board-Certified Psychiatric Mental Health Nurse Practitioner</p>
            </div>
            <PsychologyTodaySeal />
          </div>

          <div className="bio__content">
            <span className="section-label">Meet Your Clinician</span>
            <h2 className="section-title">Clinician Bio</h2>

            <div className="bio__text">
              <p>
                I am a Board-Certified Psychiatric Mental Health Nurse Practitioner ({CLINICIAN_CREDENTIALS})
                with over 16 years of nursing experience across education, neurology/medical-surgical
                care, and public health. My professional journey has given me a deep understanding
                of how physical, emotional, and social health intertwine. I am passionate about
                helping individuals achieve balance through compassionate listening, evidence-based
                treatment, and collaborative care.
              </p>
              <p>
                I provide comprehensive psychiatric evaluations, medication management, and
                supportive psychotherapy for adolescents through older adults. My areas of focus
                include anxiety, depression, trauma and PTSD, ADHD, and adjustment difficulties.
                I believe in meeting clients where they are and empowering them to become active
                participants in their healing process.
              </p>
              <p>
                At Guarded Mind Wellness Center, I strive to create a space where clients feel
                seen, valued, and supported—because everyone deserves the opportunity to live
                with peace, purpose, and mental clarity.
              </p>
            </div>

            <div className="bio__stats">
              <div className="bio__stat">
                <span className="bio__stat-value">16+</span>
                <span className="bio__stat-label">Years of Nursing Experience</span>
              </div>
              <div className="bio__stat">
                <span className="bio__stat-value bio__stat-value--credentials">{CLINICIAN_CREDENTIALS}</span>
                <span className="bio__stat-label">Credentials</span>
              </div>
              <div className="bio__stat">
                <span className="bio__stat-value">All Ages</span>
                <span className="bio__stat-label">Adolescents to Older Adults</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

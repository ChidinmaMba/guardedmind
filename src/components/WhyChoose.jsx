import './WhyChoose.css'

const reasons = [
  {
    title: 'Compassionate, person-centered care',
    description: 'Every interaction is guided by empathy and respect for your unique journey.',
  },
  {
    title: 'Holistic & evidence-based approaches',
    description: 'Integrating proven clinical methods with attention to your whole self.',
  },
  {
    title: 'Prevention & emotional resilience',
    description: 'Building lasting tools and insight—not just managing symptoms.',
  },
  {
    title: 'Culturally sensitive & inclusive',
    description: 'A welcoming environment where everyone feels seen and valued.',
  },
  {
    title: 'Flexible scheduling & telehealth',
    description: 'In-person visits in Sykesville/Westminster or virtual sessions from home.',
  },
]

export default function WhyChoose() {
  return (
    <section className="section why">
      <div className="container">
        <div className="why__header">
          <span className="section-label">Why Us</span>
          <h2 className="section-title">Why Choose Guarded Mind Wellness Center</h2>
          <p className="section-intro">
            At Guarded Mind Wellness Center, we&apos;re here to help you nurture balance,
            strengthen resilience, and move toward a more grounded and peaceful life.
          </p>
        </div>

        <ul className="why__list">
          {reasons.map(({ title, description }) => (
            <li key={title} className="why__item">
              <span className="why__icon" aria-hidden="true">◈</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

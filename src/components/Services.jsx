import './Services.css'

const services = [
  {
    title: 'Psychiatric Evaluation',
    description: 'Comprehensive assessment to understand your mental health needs and develop a personalized treatment plan.',
    icon: '◉',
  },
  {
    title: 'Medication Management',
    description: 'Thoughtful, evidence-based prescribing with ongoing monitoring to support your wellbeing.',
    icon: '◎',
  },
  {
    title: 'Psychotherapy',
    description: 'Supportive therapy to explore experiences, build insight, and develop lasting coping strategies.',
    icon: '◇',
  },
]

const specialties = [
  'Anxiety',
  'Depression',
  'Trauma / PTSD',
  'ADHD',
  'Bipolar Disorder',
  'Life Transitions',
  'Stress Management',
]

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <span className="section-label">What We Offer</span>
        <h2 className="section-title">Services &amp; Specialties</h2>
        <p className="section-intro">
          Personalized psychiatric care tailored to your unique needs—available in person
          or via telehealth throughout Sykesville, Westminster, and surrounding Maryland communities.
        </p>

        <div className="services__grid">
          {services.map(({ title, description, icon }) => (
            <article key={title} className="services__card">
              <span className="services__icon" aria-hidden="true">{icon}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <div className="services__specialties">
          <h3>What we Treat</h3>
          <ul className="services__tags">
            {specialties.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

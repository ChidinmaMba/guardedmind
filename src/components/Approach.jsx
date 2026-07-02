import './Approach.css'

const modalities = [
  'Supportive Therapy',
  'Motivational Interviewing (MI)',
  'Psychoeducation',
  'Cognitive Behavioral Strategies (CBT-informed)',
  'Mindfulness and Stress Reduction',
  'Solution-Focused Brief Therapy (SFBT)',
]

export default function Approach() {
  return (
    <section id="approach" className="section approach">
      <div className="container">
        <div className="approach__header">
          <span className="section-label">How We Work</span>
          <h2 className="section-title">Therapeutic Approach</h2>
        </div>

        <div className="approach__grid">
          <div className="approach__content">
            <p>
              My approach to care emphasizes <strong>prevention</strong>,{' '}
              <strong>empowerment</strong>, and <strong>collaboration</strong>. I utilize
              Supportive Therapy, Motivational Interviewing (MI), and Psychoeducation to
              help clients explore their experiences, understand their emotions, and
              develop healthy coping strategies.
            </p>
            <p>
              Treatment is personalized to your unique needs and may include medication
              management, therapy, or a combination of both. My goal is to help you not
              only manage symptoms but also build insight and tools for long-term wellbeing.
            </p>
          </div>

          <div className="approach__modalities">
            <h3>Treatment Modalities</h3>
            <ul>
              {modalities.map((item) => (
                <li key={item}>
                  <span className="approach__check" aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="approach__pillars">
          <div className="approach__pillar">
            <span className="approach__pillar-num">01</span>
            <h4>Prevention</h4>
            <p>Building skills and awareness before crises arise</p>
          </div>
          <div className="approach__pillar">
            <span className="approach__pillar-num">02</span>
            <h4>Empowerment</h4>
            <p>Helping you become an active participant in your healing</p>
          </div>
          <div className="approach__pillar">
            <span className="approach__pillar-num">03</span>
            <h4>Collaboration</h4>
            <p>Working together to create a plan that fits your life</p>
          </div>
        </div>
      </div>
    </section>
  )
}

import './Expect.css'

const steps = [
  {
    step: '1',
    title: 'Share Your Story',
    description: 'We begin by understanding your experiences, concerns, and what brings you to care.',
  },
  {
    step: '2',
    title: 'Define Your Goals',
    description: 'Together, we identify what you hope to achieve and what balance looks like for you.',
  },
  {
    step: '3',
    title: 'Create Your Plan',
    description: 'We develop a personalized treatment plan supporting your overall mental and emotional health.',
  },
  {
    step: '4',
    title: 'Grow Together',
    description: 'Every session is grounded in empathy, respect, and belief in your capacity to heal and grow.',
  },
]

export default function Expect() {
  return (
    <section className="section expect">
      <div className="container">
        <div className="expect__inner">
          <div className="expect__intro">
            <span className="section-label">Your Journey</span>
            <h2 className="section-title">What to Expect</h2>
            <p>
              In our first session, we&apos;ll talk about your story, your goals, and what
              brings you to care. Together, we&apos;ll create a plan that supports your
              overall mental and emotional health. Every session is grounded in empathy,
              respect, and a belief in your capacity to heal and grow.
            </p>
          </div>

          <ol className="expect__steps">
            {steps.map(({ step, title, description }) => (
              <li key={step} className="expect__step">
                <span className="expect__step-num" aria-hidden="true">{step}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

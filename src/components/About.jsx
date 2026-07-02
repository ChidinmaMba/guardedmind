import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__content">
          <span className="section-label">Our Mission</span>
          <h2 className="section-title">About Guarded Mind Wellness Center</h2>

          <div className="about__text">
            <p>
              At Guarded Mind Wellness Center, we believe mental wellness begins with
              intentionally caring for your heart and mind. Our mission is to promote
              emotional healing and psychological wellbeing through compassionate,
              culturally sensitive, and evidence-based care.
            </p>
            <p>
              We understand that reaching out for support is not always easy. Whether you
              are struggling with anxiety, mood changes, or past trauma—or simply seeking
              to feel more balanced—we provide a safe and supportive space to help you
              find clarity and peace.
            </p>
            <p>
              Inspired by the idea that our thoughts and emotions shape the way we live,
              our vision is to help individuals strengthen emotional resilience, heal
              deeply, and live with greater purpose and authenticity.
            </p>
          </div>
        </div>

        <aside className="about__aside" aria-label="Practice highlights">
          <blockquote className="about__quote">
            <p>
              &ldquo;Healing begins when we feel heard and supported.&rdquo;
            </p>
          </blockquote>
          <div className="about__vision">
            <h3>Our Vision</h3>
            <p>
              To help individuals strengthen emotional resilience, heal deeply, and
              live with greater purpose and authenticity.
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}

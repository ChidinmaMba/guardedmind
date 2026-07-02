import './Contact.css'
import {
  BUSINESS_ADDRESS_LINE1,
  BUSINESS_ADDRESS_LINE2,
  BUSINESS_PHONE,
  BUSINESS_PHONE_DISPLAY,
} from '../constants/business'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__card">
          <div className="contact__content">
            <span className="section-label">Get in Touch</span>
            <h2 className="section-title">Begin Your Journey to Wellness</h2>
            <p>
              Taking the first step toward mental wellness is an act of courage. Whether
              you&apos;re ready to schedule an appointment or simply have questions about
              our services, we&apos;re here to help.
            </p>

            <div className="contact__details">
              <div className="contact__detail">
                <span className="contact__detail-label">Address</span>
                <address className="contact__address">
                  {BUSINESS_ADDRESS_LINE1}
                  <br />
                  {BUSINESS_ADDRESS_LINE2}
                </address>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-label">Phone</span>
                <a href={`tel:${BUSINESS_PHONE}`} className="contact__link">
                  {BUSINESS_PHONE_DISPLAY}
                </a>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-label">Session Options</span>
                <span>In-Person &amp; Telehealth Available</span>
              </div>
              <div className="contact__detail">
                <span className="contact__detail-label">Ages Served</span>
                <span>Adolescents, Adults &amp; Older Adults</span>
              </div>
            </div>
          </div>

          <div className="contact__cta-panel">
            <h3>Ready to connect?</h3>
            <p>
              Reach out to schedule a consultation and take the first step toward
              balance, resilience, and lasting emotional wellness.
            </p>
            <a
              href="https://chikaodi-mba.clientsecure.me/contact-widget"
              className="btn btn-primary contact__btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

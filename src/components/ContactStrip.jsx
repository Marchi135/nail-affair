function ContactStrip() {
  return (
    <section className="contact-strip" id="contact">
      <div className="contact-strip-grid">

        <a href="tel:+27652962587" className="contact-item">
          <span className="contact-icon">📞</span>
          <div>
            <small>Call</small>
            <p>+27 65 296 2587</p>
          </div>
        </a>

        <a
          href="https://wa.me/27652962587"
          target="_blank"
          rel="noreferrer"
          className="contact-item"
        >
          <span className="contact-icon">💬</span>
          <div>
            <small>WhatsApp</small>
            <p>+27 65 296 2587</p>
          </div>
        </a>

        <div className="contact-item">
          <span className="contact-icon">📍</span>
          <div>
            <small>Location</small>
            <p>Benoni, South Africa</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactStrip;

import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `Hello Nail Affair!

Name: ${formData.fullName}
Email: ${formData.email || "Not provided"}

Message:
${formData.message}`;

    const whatsappUrl =
      `https://wa.me/27652962587?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="contact-page">
      <div className="contact-heading">
        <p>NAIL AFFAIR</p>
        <h1>Let's Get in Touch</h1>
        <p>
          Have a question about our treatments?
          We'd love to hear from you.
        </p>
      </div>

      <div className="contact-layout">
        <section className="contact-info">
          <h2>Contact Information</h2>

          <div className="contact-info-card">
            <h3>Call Us</h3>
            <a href="tel:+27652962587">
              065 296 2587
            </a>
          </div>

          <div className="contact-info-card">
            <h3>WhatsApp</h3>
            <a
              href="https://wa.me/27652962587"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat with us on WhatsApp
            </a>
          </div>

          <div className="contact-info-card">
            <h3>Visit Our Salon</h3>
            <p>85 Woburn Street</p>
            <p>Benoni, South Africa</p>
          </div>

          <div className="contact-info-card">
            <h3>Book an Appointment</h3>
            <p>
              Ready for your next beauty treatment?
            </p>
            <a href="/booking">
              Explore Our Booking Page
            </a>
          </div>
        </section>

        <section className="contact-form-card">
          <h2>Send Us a Message</h2>
          <p>
            Complete the form to prepare your
            enquiry for WhatsApp.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="contact-name">
                Full Name *
              </label>
              <input
                id="contact-name"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">
                Email Address (Optional)
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">
                Your Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              Continue to WhatsApp
            </button>

            <p className="contact-form-note">
              Your message will open in WhatsApp.
              You must press Send there to deliver it.
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}

export default Contact;


import { useState } from "react";

function BookingForm({ selectedDate, selectedTime, onBack }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    notes: "",
  });

  const [confirmed, setConfirmed] = useState(false);

  const services = [
    "Acrylic Nails",
    "Gel Nails",
    "Acrylic Toes",
    "Gel Toes",
    "Classic Lashes",
    "Hybrid Lashes",
    "Volume Lashes",
    "Microblading",
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <section className="booking-confirmation">
        <h2>Booking Details Recorded! 💗</h2>
        <p>
          Thank you, {formData.fullName}.
          Here is your appointment request summary.
        </p>

        <div className="booking-review">
          <p><strong>Service:</strong> {formData.service}</p>
          <p><strong>Date:</strong> {selectedDate}</p>
          <p><strong>Time:</strong> {selectedTime}</p>
          <p><strong>Name:</strong> {formData.fullName}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          {formData.email && (
            <p><strong>Email:</strong> {formData.email}</p>
          )}
          {formData.notes && (
            <p><strong>Notes:</strong> {formData.notes}</p>
          )}
        </div>

        <p>
          This is a preview only. Your appointment has not
          yet been sent to the salon.
        </p>

        <button
          type="button"
          className="booking-back-btn"
          onClick={() => setConfirmed(false)}
        >
          Edit Details
        </button>
      </section>
    );
  }

  return (
    <section className="booking-form-container">
      <div className="booking-form-heading">
        <p>NAIL AFFAIR</p>
        <h2>Your Booking Details</h2>
        <p>Complete your details to continue.</p>
      </div>

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name *</label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 082 123 4567"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="service">Select Service *</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Choose a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="notes">Special Requests</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Any nail art or style preferences?"
            rows="4"
          />
        </div>

        <div className="booking-review">
          <h3>Appointment Summary</h3>
          <p><strong>Date:</strong> {selectedDate}</p>
          <p><strong>Time:</strong> {selectedTime}</p>
        </div>

        <div className="booking-form-actions">
          <button
            type="button"
            className="booking-back-btn"
            onClick={onBack}
          >
            Back
          </button>

          <button type="submit" className="book-btn">
            Review Booking
          </button>
        </div>
      </form>
    </section>
  );
}

export default BookingForm;


import { useState } from "react";

function CustomerDetails({
  customer,
  onChange,
  onBack,
  onContinue,
}) {
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!customer.fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!/^[0-9+\s()-]{9,20}$/.test(customer.phone.trim())) {
      setError("Please enter a valid contact number.");
      return;
    }

    if (
      customer.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email.trim())
    ) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    onContinue();
  };

  return (
    <section className="booking-customer-details">
      <div className="booking-step-heading">
        <p>STEP 03</p>
        <h2>Your Details</h2>
        <p>Tell us how we can contact you.</p>
      </div>

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name *</label>
          <input
            id="fullName"
            type="text"
            value={customer.fullName}
            onChange={(e) =>
              onChange("fullName", e.target.value)
            }
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            id="phone"
            type="tel"
            value={customer.phone}
            onChange={(e) =>
              onChange("phone", e.target.value)
            }
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email (Optional)</label>
          <input
            id="email"
            type="email"
            value={customer.email}
            onChange={(e) =>
              onChange("email", e.target.value)
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="notes">Special Requests</label>
          <textarea
            id="notes"
            rows="4"
            value={customer.notes}
            onChange={(e) =>
              onChange("notes", e.target.value)
            }
            placeholder="Nail design, allergies, or special requests..."
          />
        </div>

        {error && (
          <p role="alert" className="booking-error">
            {error}
          </p>
        )}

        <div className="booking-navigation">
          <button
            type="button"
            className="booking-back-btn"
            onClick={onBack}
          >
            Back to Calendar
          </button>

          <button type="submit" className="book-btn">
            Review Booking
          </button>
        </div>
      </form>
    </section>
  );
}

export default CustomerDetails;

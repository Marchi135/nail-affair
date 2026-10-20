
import { useState } from "react";

function BookingReview({
  selectedServices,
  availableServices,
  selectedDate,
  selectedTime,
  customer,
  onBack,
  onEditServices,
  onEditDateTime,
}) {
  const [confirmed, setConfirmed] = useState(false);

  const chosenServices = availableServices.filter((service) =>
    selectedServices.includes(service.id)
  );

  const totalPrice = chosenServices.reduce((total, service) => {
    const price = Number(
      String(service.price).replace(/[^\d.]/g, "")
    );

    return total + (Number.isFinite(price) ? price : 0);
  }, 0);

  const hasStartingPrices = chosenServices.some((service) =>
    String(service.price).includes("+")
  );

  if (confirmed) {
    return (
      <section className="booking-confirmation">
        <div className="confirmation-icon">✓</div>

        <h2>Booking Details Recorded!</h2>

        <p>
          Thank you, {customer.fullName}.
        </p>

        <p>
          Your appointment details have been reviewed.
        </p>

        <p className="booking-price-note">
          This is a booking preview only. Your appointment
          has not yet been sent to Nail Affair or saved
          to a booking system.
        </p>

        <button
          type="button"
          className="booking-back-btn"
          onClick={() => setConfirmed(false)}
        >
          Back to Review
        </button>
      </section>
    );
  }

  return (
    <section className="booking-review-page">
      <div className="booking-step-heading">
        <p>STEP 04</p>
        <h2>Review Your Booking</h2>
        <p>Please check your details before continuing.</p>
      </div>

      <div className="review-card">
        <div className="review-section-heading">
          <h3>Selected Treatments</h3>

          <button type="button" onClick={onEditServices}>
            Edit
          </button>
        </div>

        {chosenServices.map((service) => (
          <div className="review-row" key={service.id}>
            <span>{service.name}</span>
            <strong>{service.price}</strong>
          </div>
        ))}

        <div className="review-total">
          <strong>Estimated Total</strong>
          <strong>R{totalPrice}</strong>
        </div>

        {hasStartingPrices && (
          <p className="booking-price-note">
            Some treatments have starting prices.
            Your final price may vary.
          </p>
        )}
      </div>

      <div className="review-card">
        <div className="review-section-heading">
          <h3>Appointment Details</h3>

          <button type="button" onClick={onEditDateTime}>
            Edit
          </button>
        </div>

        <div className="review-row">
          <span>Date</span>
          <strong>{selectedDate}</strong>
        </div>

        <div className="review-row">
          <span>Time</span>
          <strong>{selectedTime}</strong>
        </div>
      </div>

      <div className="review-card">
        <div className="review-section-heading">
          <h3>Customer Information</h3>

          <button type="button" onClick={onBack}>
            Edit
          </button>
        </div>

        <div className="review-row">
          <span>Full Name</span>
          <strong>{customer.fullName}</strong>
        </div>

        <div className="review-row">
          <span>Phone</span>
          <strong>{customer.phone}</strong>
        </div>

        {customer.email && (
          <div className="review-row">
            <span>Email</span>
            <strong>{customer.email}</strong>
          </div>
        )}

        {customer.notes && (
          <div className="review-row">
            <span>Special Requests</span>
            <strong>{customer.notes}</strong>
          </div>
        )}
      </div>

      <div className="booking-navigation">
        <button
          type="button"
          className="booking-back-btn"
          onClick={onBack}
        >
          Back to Your Details
        </button>

        <button
          type="button"
          className="book-btn"
          onClick={() => setConfirmed(true)}
        >
          Confirm Booking Preview
        </button>
      </div>
    </section>
  );
}

export default BookingReview;

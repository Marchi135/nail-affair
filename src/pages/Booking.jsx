import { useState } from "react";

import CustomerDetails from "../components/CustomerDetails";
import Calendar from "../components/Calendar";
import TimeSlots from "../components/TimeSlots";
import ServiceSelection from "../components/ServiceSelection";

import services from "../data/services";

// Prepare the service list from services.js
const availableServices = services.flatMap((category) =>
  category.services.map((service, index) => ({
    id: `${category.category}-${index}`,
    name: service.name,
    price: service.price,
    category: category.category,
    icon: category.icon,
  })),
);

function Booking() {
  // Booking progress
  const [step, setStep] = useState(1);

  // Selected treatments
  const [selectedServices, setSelectedServices] = useState([]);

  // Appointment date and time
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Customer information
  const [customer, setCustomer] = useState({
    fullName: "",
    phone: "",
    email: "",
    notes: "",
  });

  // Update customer information
  const handleCustomerChange = (field, value) => {
    setCustomer((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  // Select or remove a treatment
  const toggleService = (serviceId) => {
    setSelectedServices((previous) =>
      previous.includes(serviceId)
        ? previous.filter((id) => id !== serviceId)
        : [...previous, serviceId],
    );
  };

  // Select appointment date
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  return (
    <main className="booking-page">
      <div className="booking-heading">
        <p>NAIL AFFAIR</p>
        <h1>Book Your Appointment</h1>
        <p>Luxury Nails. Beautiful You.</p>
      </div>

      {/* Booking progress indicator */}
      <div className="booking-progress">
        <span className={step === 1 ? "active" : ""}>01 Services</span>

        <span className={step === 2 ? "active" : ""}>02 Date & Time</span>

        <span className={step === 3 ? "active" : ""}>03 Your Details</span>

        <span className={step === 4 ? "active" : ""}>04 Review</span>
      </div>

      {/* STEP 1: Select services */}
      {step === 1 && (
        <ServiceSelection
          availableServices={availableServices}
          selectedServices={selectedServices}
          onToggleService={toggleService}
          onContinue={() => setStep(2)}
        />
      )}

      {/* STEP 2: Select date and time */}
      {step === 2 && (
        <>
          <div className="booking-layout">
            <Calendar
              selectedDate={selectedDate}
              onSelectDate={handleDateChange}
            />

            <TimeSlots
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              onSelectTime={setSelectedTime}
            />
          </div>

          <div className="booking-navigation">
            <button
              type="button"
              className="booking-back-btn"
              onClick={() => setStep(1)}
            >
              Back to Services
            </button>

            <button
              type="button"
              className="book-btn"
              disabled={!selectedDate || !selectedTime}
              onClick={() => setStep(3)}
            >
              Continue to Your Details
            </button>
          </div>
        </>
      )}

      {/* STEP 3: Customer details */}
      {step === 3 && (
        <CustomerDetails
          customer={customer}
          onChange={handleCustomerChange}
          onBack={() => setStep(2)}
          onContinue={() => setStep(4)}
        />
      )}

      {/* STEP 4: Booking review */}
      {step === 4 && (
        <section className="booking-placeholder">
          <h2>Review Your Booking</h2>

          <p>Thank you, {customer.fullName}!</p>

          <p>Your booking details are ready for review.</p>

          <button
            type="button"
            className="booking-back-btn"
            onClick={() => setStep(3)}
          >
            Edit Your Details
          </button>
        </section>
      )}
    </main>
  );
}

export default Booking;
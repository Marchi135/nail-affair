
import { useState } from "react";
import Calendar from "../components/Calendar";
import TimeSlots from "../components/TimeSlots";
import BookingForm from "../components/BookingForm";

function Booking() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showForm, setShowForm] = useState(false);

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

      {!showForm ? (
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

          {selectedDate && selectedTime && (
            <div className="booking-summary">
              <h3>Your Appointment</h3>
              <p>Date: {selectedDate}</p>
              <p>Time: {selectedTime}</p>

              <button
                type="button"
                className="book-btn"
                onClick={() => setShowForm(true)}
              >
                Continue to Booking Form
              </button>
            </div>
          )}
        </>
      ) : (
        <BookingForm
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          onBack={() => setShowForm(false)}
        />
      )}
    </main>
  );
}

export default Booking;


const timeSlots = [
  "09:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00"
];

function TimeSlots({ selectedDate, selectedTime, onSelectTime }) {
  return (
    <div className="time-slots">
      <h2>Available Time Slots</h2>

      <p>
        {selectedDate
          ? "Choose your preferred appointment time."
          : "Please select a date first."}
      </p>

      <div className="time-grid">
        {timeSlots.map((time) => (
          <button
            type="button"
            key={time}
            disabled={!selectedDate}
            className={
              selectedTime === time
                ? "time-slot selected"
                : "time-slot"
            }
            onClick={() => onSelectTime(time)}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TimeSlots;

import { useState } from "react";

function Calendar({ selectedDate, onSelectDate }) {
  const [currentMonth, setCurrentMonth] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  );

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const days = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  const changeMonth = (amount) => {
    setCurrentMonth(new Date(year, month + amount, 1));
  };

  const isCurrentMonth =
    year === today.getFullYear() && month === today.getMonth();

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button
          type="button"
          onClick={() => changeMonth(-1)}
          disabled={isCurrentMonth}
        >
          ‹
        </button>

        <h2>
          {currentMonth.toLocaleDateString("en-ZA", {
            month: "long",
            year: "numeric",
          })}
        </h2>

        <button type="button" onClick={() => changeMonth(1)}>
          ›
        </button>
      </div>

      <div className="calendar-grid">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div className="calendar-weekday" key={day}>
            {day}
          </div>
        ))}

        {Array.from({ length: firstDay }, (_, index) => (
          <div key={`empty-${index}`} />
        ))}

        {days.map((day) => {
          const date = new Date(year, month, day);
          const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

          const isPast = date < today;

          return (
            <button
              type="button"
              key={dateString}
              disabled={isPast}
              className={
                selectedDate === dateString
                  ? "calendar-day selected"
                  : "calendar-day"
              }
              onClick={() => onSelectDate(dateString)}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;

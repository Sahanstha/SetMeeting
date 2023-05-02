import React, { useState } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDate } from "utils/DateSlice";
const Calendar = () => {
  const minDate = new Date();
  const [selectedDate, setSelectedDate] = useState(null);
  const dispatch = useDispatch();
  minDate.setDate(minDate.getDate() - 1);
  useEffect(() => {
    flatpickr("#my-calendar", {
      mode: "single",
      dateFormat: "dd",
      disable: [
        { from: "01/01/1990", to: minDate },
        function (date) {
          return date.getDay() === 0;
        },
      ],
      locale: {
        firstDayOfWeek: 1,
      },
      inline: true,
      onChange: (selectedDates, dateStr) => {
        setSelectedDate(selectedDates[0]);
        dispatch(setDate(selectedDates[0].toLocaleDateString()));
      },
    });
  }, []);
  return (
    <div id="my-calendar">
      {selectedDate && (
        <p className="text-center mb-3 font-bold">
          Date: {selectedDate.toLocaleDateString()}
        </p>
      )}
    </div>
  );
};
export default Calendar;

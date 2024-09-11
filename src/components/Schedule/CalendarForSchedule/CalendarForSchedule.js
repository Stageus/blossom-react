import React, { useState } from "react";
import { StyledCalendar } from "../../../styles/CalendarStyle";
// import "react-calendar/dist/Calendar.css";

// ===== component =====
const CalendarForSchedule = () => {
  // === state ===
  const [selectedDate, setSelectedDate] = useState(new Date());

  // const formatDay = (local, date) => date.getDate();
  // formatDay 함수는 첫 번째 매개변수로 locale을, 두 번째 매개변수로 date를 받기 때문애 locale을 사용하지 않더라도 순서를 맞춰 코드를 작성해야 함

  return (
    <StyledCalendar
      onChange={setSelectedDate}
      value={selectedDate}
      calendarType="gregory"
      formatDay={(local, date) => date.getDate()}
    />
  );
};

export default CalendarForSchedule;

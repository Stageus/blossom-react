import React, { useEffect, useState } from "react";
import { StyledCalendar } from "./CalendarStyle";
// ===== components import =====
import ScheduleDetailModal from "../Modal/ScheduleDetailModal";

// ===== component =====
const CalendarForSchedule = () => {
  // === state ===
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [schedules, setSchedules] = useState({});

  const handleAddSchedule = (newSchedule) => {
    setSchedules((prevSchedules) => ({
      ...prevSchedules,
      [selectedDate.toDateString()]: [
        ...(prevSchedules[selectedDate.toDateString()] || []),
        newSchedule,
      ],
    }));
  };

  const handleUpdateSchedule = (index, updatedSchedule) => {
    setSchedules((prevSchedules) => {
      const updatedSchedules = { ...prevSchedules };
      updatedSchedules[selectedDate.toDateString()][index] = updatedSchedule;
      return updatedSchedules;
    });
  };

  const handleDeleteSchedule = (index) => {
    setSchedules((prevSchedules) => {
      const updatedSchedules = { ...prevSchedules };
      updatedSchedules[selectedDate.toDateString()].splice(index, 1);
      return updatedSchedules;
    });
  };

  // formatDay 함수는 첫 번째 매개변수로 locale을, 두 번째 매개변수로 date를 받기 때문애 locale을 사용하지 않더라도 순서를 맞춰 코드를 작성해야 함

  return (
    <>
      {isDetailModalOpen && (
        <ScheduleDetailModal
          setIsOpen={() => setIsDetailModalOpen(false)}
          onAddSchedule={handleAddSchedule}
          schedules={schedules}
          selectedDate={selectedDate}
          onUpdateSchedule={handleUpdateSchedule}
          onDeleteSchedule={handleDeleteSchedule}
        />
      )}

      <StyledCalendar
        onChange={setSelectedDate}
        value={selectedDate}
        calendarType="gregory"
        formatDay={(local, date) => date.getDate()}
        minDetail="year"
        onClickDay={() => setIsDetailModalOpen(true)}
        tileClassName={({ date, view }) => {
          if (view === "month" && schedules[date.toDateString()]) {
            return "react-calendar__tile--hasSchedule";
          }
        }}
      />
    </>
  );
};

export default CalendarForSchedule;

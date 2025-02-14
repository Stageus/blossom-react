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

  const handleAddSchedule = (sortedSchedules) => {
    setSchedules((prevSchedules) => ({
      ...prevSchedules,
      [selectedDate.toDateString()]: sortedSchedules,
    }));
  };

  const handleUpdateSchedule = (sortedSchedules) => {
    setSchedules((prevSchedules) => ({
      ...prevSchedules,
      [selectedDate.toDateString()]: sortedSchedules,
    }));
  };

  const handleDeleteSchedule = (sortedSchedules) => {
    setSchedules((prevSchedules) => ({
      ...prevSchedules,
      [selectedDate.toDateString()]: sortedSchedules,
    }));
  };

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

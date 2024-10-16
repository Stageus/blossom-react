import React from "react";

// ===== styles import =====
import FlexBox from "../styles/FlexStyle";
// ===== components import =====
import CalendarForSchedule from "../components/Schedule/CalendarForSchedule/CalendarForSchedule.test";
// import CalendarForSchedule from "../components/Schedule/CalendarForSchedule/CalendarForSchedule";

// ===== component =====
const Schedule = () => {
  return (
    <FlexBox $row="center" $col="center" $width="100%" $height="100vh">
      <CalendarForSchedule />
    </FlexBox>
  );
};

export default Schedule;

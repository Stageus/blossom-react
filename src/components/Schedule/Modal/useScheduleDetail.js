import { useState } from "react";
import { sortSchedulesByTime } from "../../../utils/sortation";

export const useScheduleDetail = ({
  onAddSchedule,
  onUpdateSchedule,
  onDeleteSchedule,
  schedules,
  selectedDate,
  setIsOpen,
}) => {
  const [newSchedule, setNewSchedule] = useState({ time: "00:00", text: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingSchedule, setEditingSchedule] = useState({ time: "00:00", text: "" });

  const handleAddSchedule = () => {
    if (newSchedule.text.trim() === "") return;

    const currentDateStr = selectedDate.toDateString();
    const currentSchedules = schedules[currentDateStr] || [];
    const newScheduleList = [...currentSchedules, newSchedule];
    const sortedSchedules = sortSchedulesByTime(newScheduleList);

    onAddSchedule(sortedSchedules); // 전체 정렬된 리스트를 전달
    setNewSchedule({ time: "00:00", text: "" });
    setIsOpen(false);
  };

  const handleEditSchedule = (index) => {
    setIsEditing(true);
    setEditingIndex(index);
    const schedule = schedules[selectedDate.toDateString()][index];
    setEditingSchedule({
      time: schedule.time || "00:00",
      text: schedule.text || schedule, // 기존 데이터 호환성을 위한 처리
    });
  };

  const handleUpdateSchedule = () => {
    if (editingSchedule.text.trim() === "") return;

    const currentDateStr = selectedDate.toDateString();
    const currentSchedules = schedules[currentDateStr] || [];
    const updatedSchedules = [...currentSchedules];
    updatedSchedules[editingIndex] = editingSchedule;
    const sortedSchedules = sortSchedulesByTime(updatedSchedules);

    onUpdateSchedule(sortedSchedules); // 전체 정렬된 리스트를 전달
    setIsEditing(false);
    setEditingIndex(null);
    setEditingSchedule({ time: "00:00", text: "" });
  };

  const handleDeleteSchedule = (index) => {
    if (window.confirm("삭제하시겠습니까?")) {
      const currentDateStr = selectedDate.toDateString();
      const currentSchedules = schedules[currentDateStr] || [];
      const updatedSchedules = currentSchedules.filter((_, i) => i !== index);
      const sortedSchedules = sortSchedulesByTime(updatedSchedules);

      onDeleteSchedule(sortedSchedules); // 전체 정렬된 리스트를 전달
    }
  };

  return {
    newSchedule,
    setNewSchedule,
    isEditing,
    editingSchedule,
    setEditingSchedule,
    handleAddSchedule,
    handleEditSchedule,
    handleUpdateSchedule,
    handleDeleteSchedule,
  };
};

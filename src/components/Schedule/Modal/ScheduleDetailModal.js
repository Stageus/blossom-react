import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// ===== stlye import =====
import FlexBox from "../../../styles/FlexStyle";

// ===== component import =====
import Modal from "../../Common/Modal/Modal";

// ===== component =====
const ScheduleDetailModal = ({
  setIsOpen,
  onAddSchedule,
  schedules,
  selectedDate,
  onUpdateSchedule,
  onDeleteSchedule,
}) => {
  const [newSchedule, setNewSchedule] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingSchedule, setEditingSchedule] = useState("");

  useEffect(() => {
    // 마운트 시, 일정 상세 내용 출력
  }, []);

  const handleAddSchedule = () => {
    onAddSchedule(newSchedule);
    setIsOpen(false);
  };

  const handleEditSchedule = (index) => {
    setIsEditing(true);
    setEditingIndex(index);
    setEditingSchedule(schedules[selectedDate.toDateString()][index]);
  };

  const handleUpdateSchedule = () => {
    onUpdateSchedule(editingIndex, editingSchedule);
    setIsEditing(false);
    setEditingIndex(null);
    setEditingSchedule("");
  };

  const handleDeleteSchedule = (index) => {
    if (window.confirm("삭제하시겠습니까?")) {
      onDeleteSchedule(index);
    }
  };

  return ReactDOM.createPortal(
    <Modal setIsOpen={setIsOpen}>
      <FlexBox>
        <div>
          {schedules[selectedDate.toDateString()]?.map((schedule, index) => (
            <div key={index}>
              <span>{schedule}</span>
              <button onClick={() => handleEditSchedule(index)}>수정</button>
              <button onClick={() => handleDeleteSchedule(index)}>삭제</button>
            </div>
          ))}
        </div>
        {isEditing ? (
          <>
            <input
              type="text"
              value={editingSchedule}
              onChange={(e) => setEditingSchedule(e.target.value)}
              placeholder="일정을 수정하세요"
            />
            <button onClick={handleUpdateSchedule}>수정 완료</button>
          </>
        ) : (
          <>
            <input
              type="text"
              value={newSchedule}
              onChange={(e) => setNewSchedule(e.target.value)}
              placeholder="일정을 입력하세요"
            />
            <button onClick={handleAddSchedule}>추가</button>
          </>
        )}
      </FlexBox>
    </Modal>,
    document.getElementById("modal-root"),
  );
};

export default ScheduleDetailModal;

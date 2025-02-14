import React from "react";
import ReactDOM from "react-dom";

// ===== stlye import =====
import FlexBox from "../../../styles/FlexStyle";
import { Button } from "../../../styles/ButtonStyle";
import P from "../../../styles/TextStyle";

// ===== component import =====
import Modal from "../../Common/Modal/Modal";
import InputField from "../../Common/InputField/InputField";

// ===== custom hook import =====
import { useScheduleDetail } from "./useScheduleDetail";

// ===== component =====
const ScheduleDetailModal = ({
  setIsOpen,
  onAddSchedule,
  schedules,
  selectedDate,
  onUpdateSchedule,
  onDeleteSchedule,
}) => {
  const {
    newSchedule,
    setNewSchedule,
    isEditing,
    editingSchedule,
    setEditingSchedule,
    handleAddSchedule,
    handleEditSchedule,
    handleUpdateSchedule,
    handleDeleteSchedule,
  } = useScheduleDetail({
    onAddSchedule,
    onUpdateSchedule,
    onDeleteSchedule,
    schedules,
    selectedDate,
    setIsOpen,
  });

  console.log(schedules);

  return ReactDOM.createPortal(
    <Modal
      setIsOpen={setIsOpen}
      width="32rem"
      height={Object.keys(schedules).length > 0 ? "32rem" : "8rem"}
      contentBackgroundColor="#FCF5EE"
    >
      <FlexBox
        $dir="col"
        $row="between"
        $col="center"
        $width="100%"
        $height="100%"
        $padding="1.25rem"
      >
        {/* 일정 출력 */}
        <FlexBox $dir="col" $width="100%" $gap="0.5rem">
          {schedules[selectedDate.toDateString()]?.map((schedule, index) => (
            <FlexBox key={index} $width="100%" $row="between">
              <FlexBox
                $backgroundColor="#FFFFFF"
                $width="75%"
                $height="1.75rem"
                $col="center"
                $margin="0 0 0.5rem 0"
              >
                <P $fontSize="1.25rem" $padding="0 0.5rem 0 0.5rem">
                  {schedule.time} | {schedule.text}
                </P>
              </FlexBox>

              <FlexBox $width="22%" $row="between">
                <Button
                  $width="48%"
                  $height="1.75rem"
                  $fontSize="1.15rem"
                  $borderRadius="4px"
                  onClick={() => handleEditSchedule(index)}
                >
                  수정
                </Button>
                <Button
                  $width="48%"
                  $height="1.75rem"
                  $fontSize="1.15rem"
                  $borderRadius="4px"
                  onClick={() => handleDeleteSchedule(index)}
                >
                  삭제
                </Button>
              </FlexBox>
            </FlexBox>
          ))}
        </FlexBox>
        {/* 일정 수정 */}
        {isEditing ? (
          <FlexBox $width="100%" $row="between" $borderTop="1px solid black" $padding="1rem 0 0 0">
            <FlexBox $width="83%" $row="between">
              <InputField
                type="time"
                value={editingSchedule.time}
                onChange={(e) => setEditingSchedule({ ...editingSchedule, time: e.target.value })}
                width="8rem"
                borderRadius="12px"
              />
              <InputField
                type="text"
                value={editingSchedule.text}
                onChange={(e) => setEditingSchedule({ ...editingSchedule, text: e.target.value })}
                placeholderMessage="일정을 수정하세요."
                width="16rem"
                borderRadius="12px"
              />
            </FlexBox>
            <Button
              $height="3.75rem"
              $borderRadius="12px"
              $fontSize="1.25rem"
              $padding="1rem"
              onClick={handleUpdateSchedule}
            >
              수정
            </Button>
          </FlexBox>
        ) : (
          // 일정 추가
          <>
            <FlexBox $width="100%">
              <P $fontWeight="600">우리의 약속을 기록해 보세요! ✨</P>
            </FlexBox>

            <FlexBox
              $width="100%"
              $row="between"
              $col="center"
              $borderTop={Object.keys(schedules).length > 0 ? "1px solid black" : "none"}
              $padding="1rem 0 0 0"
            >
              <FlexBox $width="83%" $dir="row" $row="between" $col="center">
                <InputField
                  type="time"
                  value={newSchedule.time}
                  onChange={(e) => setNewSchedule({ ...newSchedule, time: e.target.value })}
                  width="8rem"
                  borderRadius="12px"
                />
                <InputField
                  value={newSchedule.text}
                  onChange={(e) => setNewSchedule({ ...newSchedule, text: e.target.value })}
                  placeholderMessage="일정을 입력하세요."
                  width="16rem"
                  borderRadius="12px"
                />
              </FlexBox>
              <Button
                $height="3.75rem"
                $borderRadius="12px"
                $fontSize="1.25rem"
                $padding="1rem"
                onClick={handleAddSchedule}
              >
                추가
              </Button>
            </FlexBox>
          </>
        )}
      </FlexBox>
    </Modal>,
    document.getElementById("modal-root"),
  );
};

export default ScheduleDetailModal;

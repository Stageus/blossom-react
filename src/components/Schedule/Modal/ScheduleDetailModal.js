import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// ===== stlye import =====
import FlexBox from "../../../styles/FlexStyle";

// ===== component import =====
import Modal from "../../Common/Modal";

// ===== component =====
const ScheduleDetailModal = ({ setIsOpen }) => {
  const [scheduleDate, setScheduleDate] = useState([]);

  useEffect(() => {
    // 마운트 시, 일정 상세 내용 출력
  }, []);

  return ReactDOM.createPortal(
    <Modal setIsOpen={setIsOpen}>
      <FlexBox></FlexBox>
    </Modal>,
    document.getElementById("modal-root"),
  );
};

export default ScheduleDetailModal;

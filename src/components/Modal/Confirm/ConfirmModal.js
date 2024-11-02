import React from "react";

// ===== styles import =====
import { P } from "../../../styles/TextStyle";
import { Button } from "../../../styles/ButtonStyle";

// ===== components import =====
import FlexBox from "../../../styles/FlexStyle";
import Modal from "../../Common/Modal/Modal";

// ===== component =====
const ConfirmModal = ({ message, setIsOpen, onClick }) => {
  // message : String
  // setIsOpen : Funtion
  // onClick : Funtion

  return (
    <Modal setIsOpen={() => setIsOpen(false)}>
      <FlexBox $dir="col" $row="between" $col="center" $height="8rem">
        {/* 이 부분 수정하면 좋을 듯, 객체로만 적어야 하니 불편 */}
        {message?.map((line, index) => (
          <P key={index} $fontSize="32px">
            {line}
          </P>
        ))}
        <FlexBox $width="27rem" $row="between" $margin="10px 0 0 0">
          <Button
            $width="12.75rem"
            $height="3.25rem"
            $backgroundColor="#D6D6D6"
            onClick={() => setIsOpen(false)}
          >
            취소
          </Button>
          <Button $width="12.75rem" $height="3.25rem" $backgroundColor="#E1F2FB" onClick={onClick}>
            확인
          </Button>
        </FlexBox>
      </FlexBox>
    </Modal>
  );
};

export default ConfirmModal;

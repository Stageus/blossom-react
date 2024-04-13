import React from "react";

// ===== styles import =====
import { P } from "../../styles/TextStyle";
import { Button } from "../../styles/ButtonStyle";

// ===== components import =====
import FlexBox from "../../styles/FlexStyle";
import Modal from "../Common/Modal";

// ===== component =====
const ConfirmModal = ({ message, setIsOpen, onClick }) => {
  // message : String
  // setIsOpen : Funtion
  // onClick : Funtion

  return (
    <Modal setIsOpen={() => setIsOpen(false)}>
      <FlexBox $dir="col" $row="between" $col="center" $height="8rem">
        <P $fontSize="32px">{message}</P>
        <FlexBox $width="27rem" $row="between">
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

import React from "react";

// ===== styles import =====
import { P } from "../../../styles/TextStyle";
import { Button } from "../../../styles/ButtonStyle";

// ===== components import =====
import FlexBox from "../../../styles/FlexStyle";
import Modal from "../../Common/Modal/Modal";

// ===== component =====
const ConfirmModal = ({ message, setIsOpen, onClick }) => {
  // message : String or Array
  // setIsOpen : Function
  // onClick : Function

  const renderMessage = () => {
    if (Array.isArray(message)) {
      return message.map((line, index) => (
        <P key={index} $fontSize="32px">
          {line}
        </P>
      ));
    }
    return <P $fontSize="32px">{message}</P>;
  };

  return (
    <Modal setIsOpen={() => setIsOpen(false)}>
      <FlexBox $dir="col" $row="between" $col="center" $height="8rem">
        {renderMessage()}
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

import React from "react";

// ===== styles import =====
import { Button } from "../../../styles/ButtonStyle";
import { P } from "../../../styles/TextStyle";

// ===== components import =====
import FlexBox from "../../../styles/FlexStyle";
import Modal from "../../Common/Modal/Modal";

// ===== component =====
const AlertModal = ({ message, hasFunc, onClick, setIsOpen }) => {
  // message : String
  // hasFunc : Boolean
  // onClick : Function
  // setIsOpen : Function

  const handleClick = hasFunc ? onClick : () => setIsOpen(false);

  return (
    <Modal setIsOpen={handleClick}>
      <FlexBox $dir="col" $row="between" $col="center" $height="8rem">
        <P $fontSize="32px">{message}</P>
        <Button
          $width="12.75rem"
          $height="3.25rem"
          $backgroundColor="#FBE8E7"
          onClick={handleClick}
        >
          확인
        </Button>
      </FlexBox>
    </Modal>
  );
};

export default AlertModal;

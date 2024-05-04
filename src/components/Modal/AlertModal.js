import React from "react";

// ===== styles import =====
import { Button } from "../../styles/ButtonStyle";
import { P } from "../../styles/TextStyle";

// ===== components import =====
import FlexBox from "../../styles/FlexStyle";
import Modal from "../Common/Modal";

// ===== component =====
const AlertModal = ({ message, hasFunc, onClick, setIsOpen }) => {
  // message : String
  // hasFunc : Boolean
  // onClick : Funtion
  // setIsOpen : Funtion

  return (
    <Modal setIsOpen={hasFunc ? onClick : () => setIsOpen(false)}>
      <FlexBox $dir="col" $row="between" $col="center" $height="8rem">
        <P $fontSize="32px">{message}</P>
        {hasFunc ? (
          <Button $width="12.75rem" $height="3.25rem" $backgroundColor="#E1F2FB" onClick={onClick}>
            확인
          </Button>
        ) : (
          <Button
            $width="12.75rem"
            $height="3.25rem"
            $backgroundColor="#E1F2FB"
            onClick={() => setIsOpen(false)}
          >
            확인
          </Button>
        )}
      </FlexBox>
    </Modal>
  );
};

export default AlertModal;

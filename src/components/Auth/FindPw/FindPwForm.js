import React from "react";

// ===== styles import =====
import FlexBox from "../../../styles/FlexStyle";
import Div from "../../../styles/LayoutStyle";
import { Span } from "../../../styles/TextStyle";
import { Button } from "../../../styles/ButtonStyle";

// ===== components import =====
import ErrorMessage from "../../Common/ErrorMessage/ErrorMessage";
import InputField from "../../Common/InputField/InputField";

// ===== hooks import =====
import useFindPw from "./useFindPw";

// ===== component =====
const FindPwForm = () => {
  // === useFindPw ===
  const { idRef, nameRef, submitRef, findPwError, handleSendPhonenumber, handleFindPw } =
    useFindPw();

  // === return ===
  return (
    <>
      {/* 비밀번호 찾기 Input Field */}
      <FlexBox $dir="col" $row="between" $width="25.625rem" $height="22rem">
        <InputField
          hasLabel="true"
          labelMessage="아이디"
          padding="0 0 0 10px"
          border="3px solid #FFC4D0"
          borderRadius="8px"
          fontSize="18px"
          type="text"
          inputRef={idRef}
        />
        <InputField
          hasLabel="true"
          labelMessage="이름"
          padding="0 0 0 10px"
          border="3px solid #FFC4D0"
          borderRadius="8px"
          fontSize="18px"
          type="text"
          inputRef={nameRef}
        />
        <InputField
          hasLabel="true"
          labelMessage="전화번호"
          padding="0 0 0 10px"
          border="3px solid #FFC4D0"
          borderRadius="8px"
          fontSize="18px"
          inputType="phone"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              submitRef.current.click();
            }
          }}
          onValidateAndSend={handleSendPhonenumber}
        />
        {findPwError && <ErrorMessage message={findPwError} />}
      </FlexBox>

      {/* 비밀번호 찾기 Button */}
      <Button
        $width="25.625rem"
        $height="5rem"
        $margin="30px 0 30px 0"
        $borderRadius="8px"
        ref={submitRef}
        onClick={handleFindPw}
      >
        확인
      </Button>
    </>
  );
};

export default FindPwForm;

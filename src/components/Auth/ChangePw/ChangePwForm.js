import React from "react";

// ===== styles import =====
import FlexBox from "../../../styles/FlexStyle";
import { Button } from "../../../styles/ButtonStyle";
// ===== components import =====
import ErrorMessage from "../../Common/ErrorMessage/ErrorMessage";
import InputField from "../../Common/InputField/InputField";
import AlertModal from "../../Modal/Alert/AlertModal";
// ===== hooks import =====
import useChangePw from "./useChangePw";

// ===== component =====
const ChangePwForm = () => {
  // === useChangePw ===
  const {
    pwRef,
    confirmPwRef,
    submitRef,
    pwError,
    confirmPwError,
    failModalOpen,
    setFailModalOpen,
    handleValidatePw,
    handleConfirmPw,
    handleChangePw,
  } = useChangePw();
  // === return ===
  return (
    <>
      {/* 비밀번호 변경 실패 Modal */}
      {failModalOpen && (
        <AlertModal message="비밀번호 변경에 실패했습니다." setIsOpen={setFailModalOpen} />
      )}

      {/* 새로운 비밀번호 Input Field 및 Error Message */}
      <FlexBox $dir="col" $row="between" $width="25.625rem" $height="16rem">
        <InputField
          hasLabel="true"
          labelMessage="비밀번호"
          padding="0 0 0 10px"
          border="3px solid #FFC4D0"
          borderRadius="8px"
          fontSize="18px"
          type="password"
          placeholderMessage="영어, 숫자를 필수 포함한 8자 ~ 15자를 입력해 주세요. (특수문자 허용)"
          inputRef={pwRef}
          onBlur={handleValidatePw}
          autoFocus={true}
        />
        {pwError && <ErrorMessage message={pwError} />}

        {/* 새로운 비밀번호 확인 Input Field 및 Error Message */}
        <InputField
          hasLabel="true"
          labelMessage="비밀번호 확인"
          padding="0 0 0 10px"
          border="3px solid #FFC4D0"
          borderRadius="8px"
          fontSize="18px"
          type="password"
          placeholderMessage="입력하신 비밀번호와 동일하게 입력해 주세요."
          inputRef={confirmPwRef}
          onBlur={handleConfirmPw}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              submitRef.current.click();
            }
          }}
        />
        {confirmPwError && <ErrorMessage message={confirmPwError} />}
      </FlexBox>

      {/* 비밀번호 찾기 Button */}
      <Button
        $width="25.625rem"
        $height="5rem"
        $margin="30px 0 50px 0"
        $borderRadius="8px"
        ref={submitRef}
        onClick={handleChangePw}
      >
        확인
      </Button>
    </>
  );
};

export default ChangePwForm;

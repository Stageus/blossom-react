import React from "react";
import { useNavigate } from "react-router-dom";

// ===== styles import =====
import FlexBox from "../../../styles/FlexStyle";
import { Button } from "../../../styles/ButtonStyle";
// ===== components import =====
import InputField from "../../Common/InputField";
import ErrorMessage from "../../Common/ErrorMessage";
import AlertModal from "../../Modal/AlertModal";
// ===== hooks import =====
import useSetup from "./useSetup";

// ===== component =====
const SetupForm = () => {
  // === navigate ===
  const navigate = useNavigate();
  // === useSetup ===
  const {
    nicknameRef,
    firstDayRef,
    submitRef,
    setupError,
    tokenErrorModalOpen,
    matchingError,
    handleClickSettingButton,
  } = useSetup();
  // === return ===
  return (
    <>
      {tokenErrorModalOpen && (
        <AlertModal
          hasFunc={true}
          message="로그인이 필요합니다."
          onClick={() => navigate("/login")}
        />
      )}

      {matchingError && (
        <AlertModal
          hasFunc={true}
          message="매칭이 필요합니다."
          onClick={() => navigate("/matching")}
        />
      )}

      <FlexBox $dir="col" $row="between" $width="25.625rem" $height="15rem">
        <InputField hasLabel="true" labelMessage="애칭" fontSize="18px" inputRef={nicknameRef} />
        <InputField
          hasLabel="true"
          labelMessage="기념일"
          fontSize="18px"
          type="date"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              submitRef.current.click();
            }
          }}
          inputRef={firstDayRef}
        />

        {setupError && <ErrorMessage message={setupError} />}
      </FlexBox>

      <Button
        $width="25.625rem"
        $height="5rem"
        $margin="30px 0 0 0"
        ref={submitRef}
        onClick={handleClickSettingButton}
      >
        확인
      </Button>
    </>
  );
};

export default SetupForm;

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// ===== styles import =====
import FlexBox from "../../styles/FlexStyle";
import { Button } from "../../styles/ButtonStyle";

// ===== utils import =====
import { isNicknameValid } from "../../utils/validation";

// ===== components import =====
import InputField from "../Common/InputField";
import ErrorMessage from "../Common/ErrorMessage";
import AlertModal from "../Modal/AlertModal";

// ===== component =====
const SetupForm = () => {
  // === ref ===
  const nicknameRef = useRef("");
  const firstDayRef = useRef("");

  // === state ===
  const [setupError, setSetupError] = useState(false);
  const [tokenErrorModalOpen, setTokenErrorModalOpen] = useState(false);

  // === navigate ===
  const navigate = useNavigate();

  useEffect(() => {
    // 초기 설정 성공 시, 메인 페이지로 이동
    // 초기 설정 실패 시, Error Message 출력
  }, []);

  const handleCloseErrorModal = () => {
    navigate("/login");
  };

  const handleClickSettingButton = () => {
    const nickname = nicknameRef.current.value;
    const firstDay = firstDayRef.current.value;

    // 애칭, 기념일 유효성 검사
    if (!isNicknameValid(nickname) || firstDay.trim() === "") {
      setSetupError("애칭 혹은 기념일을 확인해 주세요.");
    } else {
      // 초기 설정 API 호출 코드
      const status = 401;

      if (status === 400) {
        setSetupError("애칭 혹은 기념일을 확인해 주세요.");
      } else if (status === 401) {
        setSetupError("");
        setTokenErrorModalOpen(true);
      } else if (status === 404) {
        setSetupError("매칭이 필요합니다.");
        // 매칭 페이지로 이동
      } else if (status === 409) {
        setSetupError("연인과의 정보가 이미 존재합니다.");
        // 메인 페이지로 이동?
      } else {
        navigate("/");
      }
    }
  };

  return (
    <>
      {tokenErrorModalOpen && (
        <AlertModal hasFunc={true} message="로그인이 필요합니다." onClick={handleCloseErrorModal} />
      )}

      <FlexBox $dir="col" $row="between" $width="25.625rem" $height="15rem">
        <InputField hasLabel="true" labelMessage="애칭" fontSize="18px" inputRef={nicknameRef} />
        <InputField
          hasLabel="true"
          labelMessage="기념일"
          fontSize="18px"
          type="date"
          inputRef={firstDayRef}
        />

        {setupError && <ErrorMessage message={setupError} />}
      </FlexBox>

      <Button
        $width="25.625rem"
        $height="5rem"
        $margin="30px 0 0 0"
        onClick={handleClickSettingButton}
      >
        확인
      </Button>
    </>
  );
};

export default SetupForm;

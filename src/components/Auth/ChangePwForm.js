import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// ===== styles import =====
import FlexBox from "../../styles/FlexStyle";
import { Button } from "../../styles/ButtonStyle";

// ===== utils import =====
import { isPwValid } from "../../utils/validation";

// ===== components import =====
import ErrorMessage from "../Common/ErrorMessage";
import InputField from "../Common/InputField";
import AlertModal from "../Modal/AlertModal";

// ===== component =====
const ChangePwForm = () => {
  // === ref ===
  const pwRef = useRef("");
  const confirmPwRef = useRef("");

  // === state ===
  const [pwError, setPwError] = useState("");
  const [confirmPwError, setConfirmPwError] = useState("");
  const [failModalOpen, setFailModalOpen] = useState(false);

  // === navigate ===
  const navigate = useNavigate();

  useEffect(() => {
    // 비밀번호 변경 성공 시, 로그인 페이지로 이동
    // 비밀번호 변경 실패 시, Error Message 출력
  }, []);

  const handleValidatePw = () => {
    const password = pwRef.current.value;

    if (!isPwValid(password)) {
      setPwError("비밀번호 형식이 올바르지 않습니다.");
    } else {
      setPwError("");
    }
  };

  const handleConfirmPw = () => {
    const password = pwRef.current.value;
    const confirmPassword = confirmPwRef.current.value;

    if (password !== confirmPassword || confirmPassword.trim() === "") {
      setConfirmPwError("비밀번호가 일치하지 않습니다.");
    } else {
      setConfirmPwError("");
    }
  };

  const handleChangePw = () => {
    setPwError("");
    setConfirmPwError("");

    if (!pwError && !confirmPwError) {
      // const password = pwRef.current.value;
      // const confirmPassword = confirmPwRef.current.value;
      // 비밀번호 변경 API 호출 코드
      const status = 200;

      if (status === 400) {
        setFailModalOpen(true);
      } else if (status === 401) {
        setConfirmPwError("비밀번호가 일치하지 않습니다.");
      } else if (status === 404) {
        setFailModalOpen(true);
      } else if (status === 500) {
        return;
      } else {
        navigate("/login"); // 로그인 페이지로 이동
      }
    } else {
      setFailModalOpen(true);
    }
  };

  return (
    <>
      {/* 비밀번호 변경 실패 Modal */}
      {failModalOpen && (
        <AlertModal message="비밀번호 변경에 실패했습니다." setIsOpen={setFailModalOpen} />
      )}

      {/* 비밀번호 변경 Input Field */}
      <FlexBox $dir="col" $row="between" $width="25.625rem" $height="16rem">
        <InputField
          hasLabel="true"
          labelMessage="비밀번호"
          fontSize="18px"
          type="password"
          placeholderMessage="영어, 숫자를 필수 포함한 8자 ~ 15자를 입력해 주세요. (특수문자 허용)"
          inputRef={pwRef}
          onBlur={handleValidatePw}
          autoFocus={true}
        />
        {pwError && <ErrorMessage message={pwError} />}

        <InputField
          hasLabel="true"
          labelMessage="비밀번호 확인"
          fontSize="18px"
          type="password"
          placeholderMessage="입력하신 비밀번호와 동일하게 입력해 주세요."
          inputRef={confirmPwRef}
          onBlur={handleConfirmPw}
        />
        {confirmPwError && <ErrorMessage message={confirmPwError} />}
      </FlexBox>

      {/* 비밀번호 찾기 Button */}
      <Button $width="25.625rem" $height="5rem" $margin="30px 0 50px 0" onClick={handleChangePw}>
        확인
      </Button>
    </>
  );
};

export default ChangePwForm;

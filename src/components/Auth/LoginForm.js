import React, { useState, useRef, useEffect } from "react";

// ===== styles import =====
import FlexBox from "../../styles/FlexStyle";
import { Button } from "../../styles/ButtonStyle";

// ===== utils import =====
import { isIdValid, isPwValid } from "../../utils/validation";

// ===== components import =====
import InputField from "../../components/Common/InputField";

const LoginForm = () => {
  // === ref ===
  const IdRef = useRef("");
  const passwordRef = useRef("");

  // === state ===
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    // 로그인 실패 시, Error Message 출력
    // 로그인 성공 시, 세션 저장 및 초기 설정 페이지 혹은 메인 페이지로 이동
  }, []);

  const handleLogin = () => {
    const id = IdRef.current.value;
    const password = passwordRef.current.value;

    // 아이디, 비밀번호 유효성 검사
    if (!isIdValid(id) || !isPwValid(password)) {
      setLoginError(true);
    } else {
      // 로그인 에러 메세지 초기화
      setLoginError(false);

      // 로그인 API 호출 코드

      // 페이지 이동
    }
  };

  return (
    <>
      {/* 로그인 Input Field */}
      <FlexBox $dir="col" $row="between" $width="25.625rem" $height="9.875rem">
        <InputField inputRef={IdRef} placeholderMessage="아이디 입력" />
        <InputField inputRef={passwordRef} type="password" placeholderMessage="비밀번호 입력" />
        {/* {loginError && <ErrorMessage message="로그인에 실패했습니다." />} */}
      </FlexBox>

      {/* 로그인 Button */}
      <Button $width="25.625rem" $height="5rem" onClick={handleLogin}>
        로그인
      </Button>
    </>
  );
};

export default LoginForm;

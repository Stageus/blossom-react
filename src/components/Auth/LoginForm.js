import React, { useState, useRef, useEffect } from "react";

// ===== styles import =====
import FlexBox from "../../styles/FlexStyle";
import { Button } from "../../styles/ButtonStyle";

// ===== components import =====
import InputField from "../../components/Common/InputField";

const LoginForm = () => {
  // === ref ===
  const IdRef = useRef("");
  const passwordRef = useRef("");

  useEffect(() => {
    // 로그인 실패 시, Error Message 출력
    // 로그인 성공 시, 초기 설정 페이지 혹은 메인 페이지로 이동
  }, [response]);

  const handleLogin = () => {
    // 아이디, 비밀번호 유효성 검사
    // 로그인 API 통신 코드
  };

  return (
    <>
      {/* 로그인 Input Field */}
      <FlexBox dir="col" row="between" width="25.625rem" height="9.875rem">
        <InputField inputRef={IdRef} placeholderMessage="아이디 입력" />
        <InputField inputRef={passwordRef} type="password" placeholderMessage="비밀번호 입력" />
      </FlexBox>

      {/* 로그인 Button */}
      <Button width="25.625rem" height="5rem" onClick={handleLogin}>
        로그인
      </Button>
    </>
  );
};

export default LoginForm;

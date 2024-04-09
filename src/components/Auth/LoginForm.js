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

  return (
    <>
      {/* 로그인 Input Field */}
      <FlexBox dir="col" row="between" width="25.625rem" height="9.875rem">
        <InputField inputRef={IdRef} placeholderMessage="아이디 입력" />
        <InputField inputRef={passwordRef} type="password" placeholderMessage="비밀번호 입력" />
      </FlexBox>

      {/* 로그인 Button */}
      <Button width="25.625rem" height="5rem">
        로그인
      </Button>
    </>
  );
};

export default LoginForm;

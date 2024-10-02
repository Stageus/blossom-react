import React from "react";

// ===== styles import =====
import FlexBox from "../../../styles/FlexStyle";
import { Button } from "../../../styles/ButtonStyle";
// ===== components import =====
import InputField from "../../Common/InputField";
import ErrorMessage from "../../Common/ErrorMessage";
// ===== hooks import =====
import useLogin from "./useLogin";

// ===== component =====
const LoginForm = () => {
  // === useLogin ===
  const { idRef, passwordRef, submitRef, loginError, handleLogin } = useLogin();
  // === return ===
  return (
    <>
      {/* 로그인 Input Field (아이디, 비밀번호) */}
      <FlexBox $dir="col" $row="between" $width="25.625rem" $height="9.875rem">
        <InputField
          padding="0 0 0 10px"
          border="3px solid #FFC4D0"
          borderRadius="8px"
          inputRef={idRef}
          placeholderMessage="아이디 입력"
        />
        <InputField
          padding="0 0 0 10px"
          border="3px solid #FFC4D0"
          borderRadius="8px"
          inputRef={passwordRef}
          type="password"
          placeholderMessage="비밀번호 입력"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              submitRef.current.click();
            }
          }}
        />
      </FlexBox>

      {/* 로그인 에러 시 출력되는 Error Message */}
      {loginError && (
        <FlexBox $width="25.625rem" $margin="15px 0 10px 0">
          <ErrorMessage message={loginError} />
        </FlexBox>
      )}

      {/* 로그인 Button */}
      <Button
        $width="25.625rem"
        $height="5rem"
        $margin="30px 0 50px 0"
        $borderRadius="8px"
        ref={submitRef}
        onClick={handleLogin}
      >
        로그인
      </Button>
    </>
  );
};

export default LoginForm;

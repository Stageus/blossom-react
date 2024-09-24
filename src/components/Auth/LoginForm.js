import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

// ===== styles import =====
import FlexBox from "../../styles/FlexStyle";
import { Button } from "../../styles/ButtonStyle";
// ===== utils & hook import =====
import { isIdValid, isPwValid } from "../../utils/validation";
import useAxios from "../../hooks/useAxios";
// ===== components import ====
import InputField from "../../components/Common/InputField";
import ErrorMessage from "../Common/ErrorMessage";

// ===== component =====
const LoginForm = () => {
  // === ref ===
  const idRef = useRef("");
  const passwordRef = useRef("");
  const submitRef = useRef(null);
  // === state ===
  const [loginError, setLoginError] = useState("");
  // === navigate ===
  const navigate = useNavigate();
  // === useAxios ===
  const { data, loading, error, statusCode, fetchData } = useAxios(
    "/api/login", // 로그인 api 주소, 추후 백엔드 서버 구축 후 연결
    "POST",
    {},
    false,
    false,
  );

  const handleLogin = async () => {
    const id = idRef.current.value;
    const pw = passwordRef.current.value;

    // 유효성 검사
    if (!isIdValid(id) || !isPwValid(pw)) {
      setLoginError("아이디와 비밀번호를 입력하세요.");
    } else {
      setLoginError(""); // 로그인 에러 메세지 초기화

      // 로그인 API 호출
      await fetchData({
        body: {
          id, // 아이디
          pw, // 비밀번호
        },
      });

      // 로그인 성공 및 실패 처리
      if (statusCode === 200) {
        localStorage.setItem("token", data.token); // JWT 토큰을 로컬 스토리지에 저장
        setLoginError("");
        navigate("/");
      } else if (statusCode === 401 || statusCode === 400) {
        setLoginError("아이디 또는 비밀번호가 잘못되었습니다.");
      } else if (statusCode === 404) {
        setLoginError("해당 계정이 존재하지 않습니다.");
      } else if (statusCode === 500) {
        setLoginError("서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
      }
    }
  };

  return (
    <>
      {/* 로그인 Input Field */}
      <FlexBox $dir="col" $row="between" $width="25.625rem" $height="9.875rem">
        <InputField inputRef={idRef} placeholderMessage="아이디 입력" />
        <InputField
          inputRef={passwordRef}
          type="password"
          placeholderMessage="비밀번호 입력"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault(); // 엔터 기본 동작 방지
              submitRef.current.click(); // 마지막 필드에서 엔터가 눌리면 버튼 클릭
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
        ref={submitRef}
        onClick={handleLogin}
      >
        로그인
      </Button>
    </>
  );
};

export default LoginForm;

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ===== utils & hook import =====
import { isIdValid, isPwValid } from "../../../utils/validation";
import useAxios from "../../../hooks/useAxios";

// ===== custom hook =====
const useLogin = () => {
  // === ref ===
  const idRef = useRef("");
  const passwordRef = useRef("");
  const submitRef = useRef(null);

  // === state ===
  const [loginError, setLoginError] = useState("");

  // === navigate ===
  const navigate = useNavigate();

  // === api ===
  const { data, statusCode, fetchData } = useAxios(
    "/account/login", // 로그인 api 주소
    "POST",
    {},
    false,
    false,
  );

  useEffect(() => {
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
  }, [statusCode, data, navigate]);

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
    }
  };

  // === return ===
  return { idRef, passwordRef, submitRef, loginError, handleLogin };
};

export default useLogin;

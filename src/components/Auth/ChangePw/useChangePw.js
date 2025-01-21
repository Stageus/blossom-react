import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ===== utils & hooks import =====
import { isPwValid } from "../../../utils/validation";
import useAxios from "../../../hooks/useAxios";

// ===== custom hook =====
const useChangePw = () => {
  // === ref ===
  const pwRef = useRef("");
  const confirmPwRef = useRef("");
  const submitRef = useRef(null);

  // === state ===
  const [pwError, setPwError] = useState("");
  const [confirmPwError, setConfirmPwError] = useState("");
  const [failModalOpen, setFailModalOpen] = useState(false);

  // === navigate ===
  const navigate = useNavigate();

  // === api ===
  const { statusCode, fetchData } = useAxios(
    "/account/pw", // 비밀번호 변경 api 주소
    "PUT",
    {},
    false,
    false,
  );

  // 비밀번호 유효성 검사
  const handleValidatePw = () => {
    const password = pwRef.current.value;

    if (!isPwValid(password)) {
      setPwError("비밀번호 형식이 올바르지 않습니다.");
    } else {
      setPwError("");
    }
  };

  // 비밀번호 확인 유효성 검사
  const handleConfirmPw = () => {
    const password = pwRef.current.value;
    const confirmPassword = confirmPwRef.current.value;

    if (password !== confirmPassword || confirmPassword.trim() === "") {
      setConfirmPwError("비밀번호가 일치하지 않습니다.");
    } else {
      setConfirmPwError("");
    }
  };

  useEffect(() => {
    if (statusCode === 200) {
      navigate("/login");
    } else if (statusCode === 401) {
      setConfirmPwError("비밀번호가 일치하지 않습니다.");
    } else if ([400, 404, 500].includes(statusCode)) {
      setFailModalOpen(true);
    }
  }, [statusCode, navigate]);

  const handleChangePw = async () => {
    const newPw = pwRef.current.value;
    const newPwCheck = confirmPwRef.current.value;

    // 비밀번호 변경 API 호출
    if (!pwError && !confirmPwError) {
      await fetchData({
        body: {
          newPw, // 새로운 비밀번호
          newPwCheck, // 새로운 비밀번호 확인
        },
      });
    } else {
      setFailModalOpen(true);
    }
  };

  // === return ===
  return {
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
  };
};

export default useChangePw;

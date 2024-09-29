import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

// ===== utils import =====
import { isNicknameValid } from "../../../utils/validation";
import useAxios from "../../../hooks/useAxios";

// ===== custom hook =====
const useSetup = () => {
  // === ref ===
  const nicknameRef = useRef("");
  const firstDayRef = useRef("");
  const submitRef = useRef(null);
  // === state ===
  const [setupError, setSetupError] = useState(false);
  const [tokenErrorModalOpen, setTokenErrorModalOpen] = useState(false);
  const [matchingError, setMatchingError] = useState(false);
  // === navigate ===
  const navigate = useNavigate();
  // === api ===
  const { data, statusCode, fetchData } = useAxios("/couple/inform", "POST", {}, true, false);

  // 설정하기 버튼 클릭 시, 실행되는 이벤트 함수
  const handleClickSettingButton = async () => {
    const nickname = nicknameRef.current.value;
    const firstDay = firstDayRef.current.value;

    // 애칭, 기념일 유효성 검사
    if (!isNicknameValid(nickname) || firstDay.trim() === "") {
      setSetupError("애칭 혹은 기념일을 확인해 주세요.");
    } else {
      // 초기 설정 API 호출
      await fetchData({
        nickname,
        startDate: firstDay,
      });

      if (statusCode === 200) {
        navigate("/");
      } else if (statusCode === 400) {
        setSetupError("애칭 혹은 기념일을 확인해 주세요.");
      } else if (statusCode === 401) {
        setSetupError("");
        setTokenErrorModalOpen(true);
      } else if (statusCode === 404) {
        setSetupError("");
        setMatchingError(true);
      } else if (statusCode === 409) {
        setSetupError("연인과의 정보가 이미 존재합니다.");
      }
    }
  };

  return {
    nicknameRef,
    firstDayRef,
    submitRef,
    setupError,
    tokenErrorModalOpen,
    matchingError,
    handleClickSettingButton,
  };
};

export default useSetup;

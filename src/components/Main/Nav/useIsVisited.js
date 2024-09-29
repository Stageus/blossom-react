import { useNavigate } from "react-router-dom";

// ===== custom hook =====
const useIsVisited = () => {
  // === navigate ===
  const navigate = useNavigate();

  // 방문 기록 저장
  const saveVisitRecord = () => {
    const now = new Date().getTime();
    localStorage.setItem("visitRecord", now);
  };

  // 방문 기록 비교
  const hasVisitedToday = () => {
    const visitTime = localStorage.getItem("visitRecord");

    if (visitTime) {
      const now = new Date().getTime();
      const timeDifference = now - visitTime;

      // 24시간 (밀리초로 계산)
      const hours24 = 24 * 60 * 60 * 1000;

      if (timeDifference < hours24) {
        return true;
      }
    }

    return false;
  };

  // 문답 버튼 클릭 시
  const handleClickQnAButton = () => {
    if (hasVisitedToday()) {
      navigate("/qnalist");
    } else {
      saveVisitRecord();
      navigate("/qna/today");
    }
  };

  return [handleClickQnAButton];
};

export default useIsVisited;

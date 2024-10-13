import { useState, useEffect } from "react";

// ===== util & hook import =====
import useAxios from "../../hooks/useAxios";
import { calculateAnniversary } from "../../utils/calculation";

// ===== custom hook =====
const useMainData = () => {
  // === state ===
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  // === api ===
  const { data, statusCode } = useAxios(
    "/couple/inform", // 초기 정보 불러오기 api 주소, 추후 백엔드 서버 구축 후 연결
    "GET",
    {},
    true,
    true,
  );

  if (statusCode === 400) {
    setIsErrorModalOpen("요청이 올바르지 않습니다.");
  } else if (statusCode === 401) {
    setIsErrorModalOpen("로그인이 필요합니다."); // 토큰 에러
  } else if (statusCode === 403) {
    setIsErrorModalOpen("접근 권한이 없습니다."); // 토큰 에러, 접근 권한 없음
  } else if (statusCode === 404) {
    setIsErrorModalOpen("요청 데이터가 존재하지 않습니다.");
  } else if (statusCode === 500) {
    setIsErrorModalOpen("서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
  }

  const today = new Date().toISOString().slice(0, 10); // 초기 기념일 데이터 설정 시 필요한 값

  const initialData = data
    ? {
        myNickname: data.myNickname,
        partnerNickname: data.partnerNickname,
        imageUrl: data.imageUrl, // 기본 이미지 처리 : 있으면 그대로, 없으면 기본 이미지
        startDate: calculateAnniversary(data.startDate, today),
      }
    : null;

  return { isErrorModalOpen, initialData };
};

export default useMainData;

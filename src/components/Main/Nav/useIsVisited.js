import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isVisitedPageState } from "../../../recoil/visitedPageState"; // Recoil

// ===== Custom Hook =====
const useIsVisited = () => {
  const [visitedToday, setVisitedToday] = useRecoilState(isVisitedPageState);

  useEffect(() => {
    const lastVisit = localStorage.getItem("lastVisit"); // 로컬 스토리지에서 마지막 방문 날짜 가져오기
    const today = new Date().toDateString(); // 오늘 날짜 가져오기

    // 아래 if문 코드를 삼항연산자로 변경
    lastVisit === today
      ? setVisitedToday(true)
      : (setVisitedToday(false), localStorage.setItem("lastVisit", today));

    // if (lastVisit === today) {
    //   setVisitedToday(true);
    // } else {
    //   setVisitedToday(false);
    //   localStorage.setItem("lastVisit", today);
    // }
  }, [visitedToday, setVisitedToday]);

  return [visitedToday];
};

export default useIsVisited;

// 이 파일은 정렬 위한 유틸 함수들을 모아놓은 파일입니다.

// 시간을 비교하여 정렬하는 함수
export const sortSchedulesByTime = (scheduleList) => {
  return [...scheduleList].sort((a, b) => {
    // 시간 문자열을 Date 객체로 변환하여 비교
    const today = new Date();
    const [hoursA, minutesA] = (a.time || "00:00").split(":");
    const [hoursB, minutesB] = (b.time || "00:00").split(":");

    const timeA = new Date(today.setHours(hoursA, minutesA, 0));
    const timeB = new Date(today.setHours(hoursB, minutesB, 0));

    return timeA - timeB;
  });
};

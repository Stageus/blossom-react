// 이 파일은 숫자 계산을 위한 유틸 함수들을 모아놓은 파일입니다.

// 기념일 계산
export function calculateAnniversary(startDateStr, endDateStr) {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  const differenceInTime = endDate.getTime() - startDate.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24) + 1;

  return Math.floor(differenceInDays);
}

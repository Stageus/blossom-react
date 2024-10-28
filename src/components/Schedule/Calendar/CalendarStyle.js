import styled from "styled-components";
import Calendar from "react-calendar";

export const StyledCalendar = styled(Calendar)`
  /* react-calendar style */
  width: 64.063rem;
  max-width: 100%;
  min-height: 25rem;
  background-color: #fcf5ee;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  line-height: 1;

  /* button style */
  // common button
  button {
    margin: 0;
    border: 0;
    outline: none;
  }

  .react-calendar button:enabled:hover {
    cursor: pointer;
  }

  .react-calendar--doubleView {
    width: 700px;
  }

  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }

  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }

  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    box-sizing: border-box;
  }

  // react-calendar__navigation: 연/월 네비게이션 컨트롤
  .react-calendar__navigation {
    display: flex;
    align-items: center;
    height: 4.375rem;
    position: relative;
    z-index: 0;
    background-color: #ffedec;
    padding: 16px;
    border-bottom: 1px solid #d0d0d0;
    border-radius: 10px 10px 0 0;
    margin-bottom: 1em;
  }

  .react-calendar__navigation button {
    height: 4.375rem;
    min-width: 4.375rem;
    border-radius: 10px;
    background: none;
  }

  /* 네비게이션 왼쪽 화살표 */
  .react-calendar__navigation__arrow.react-calendar__navigation__prev2-button {
    position: absolute;
    left: 75px; /* 원하는 위치로 조정 */
  }

  .react-calendar__navigation__arrow.react-calendar__navigation__prev-button {
    position: absolute;
    left: 15px; /* 원하는 위치로 조정 */
  }

  /* 네비게이션 오른쪽 화살표 */
  .react-calendar__navigation__arrow.react-calendar__navigation__next2-button {
    position: absolute;
    right: 75px; /* 원하는 위치로 조정 */
  }
  .react-calendar__navigation__arrow.react-calendar__navigation__next-button {
    position: absolute;
    right: 15px; /* 원하는 위치로 조정 */
  }

  .react-calendar__navigation__label {
    width: fit-content;
    flex-grow: 0 !important;
    margin: 0 auto; /* 자동으로 가운데 정렬 */
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #ffd7d6;
  }

  /* .react-calendar__navigation button:disabled {
    background-color: #f0f0f0;
  } */

  // react-calendar__tile: 개별 날짜 셀
  .react-calendar__tile {
    max-width: 100%;
    height: 6.25rem;
    background: none;
    color: #333;
    padding: 10px;
    font-size: 16px;
    text-align: center;
    border-radius: 6px;

    line-height: 16px;

    &:hover {
      background-color: #f9e6dc;
    }
    &:focus {
      background-color: #f9e6dc;
    }
  }

  // 오늘 날짜 셀
  .react-calendar__tile--now {
    background: none;
    border: 2px solid #ffd7d6;
    position: relative;
    z-index: 0;
    border-radius: 10px;

    &:hover {
      background: #f9e6dc;
    }
    &:focus {
      background: #f9e6dc;
    }
  }

  /* "today" 텍스트 추가 */
  .react-calendar__tile--now::after {
    content: "today";
    position: absolute;
    bottom: 5px;
    right: 5px;
    font-size: 0.75rem;
    color: #ffd7d6;
    background: white;
    padding: 2px 5px;
    border-radius: 4px;
    font-weight: bold;
  }

  // react-calendar__tile--hasActive: 선택된 날짜를 포함한 타일
  .react-calendar__tile--hasActive {
    background: #ffb8b7;
    color: white;
  }

  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #ffc7c6;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #ffb8b7;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font: inherit;
    font-size: 0.75em;
    font-weight: bold;
    padding: 10px 0;
    border-bottom: 1px solid #d0d0d0;

    abbr {
      text-decoration: none;
    }
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font: inherit;
    font-size: 0.75em;
    font-weight: bold;
  }

  /* 평일 요일 스타일 */
  .react-calendar__month-view__weekdays__weekday {
    flex: 1 0 12% !important;
    text-align: center;
    // padding: 0.5em;
    // padding: 10px 0;
    font-weight: bold;
  }

  /* 주말 요일 스타일 */
  .react-calendar__month-view__weekdays__weekday--weekend {
    flex: 1 0 12% !important;
    text-align: center;
    padding: 10px 0;
    font-weight: bold;
  }

  /* 공통 속성을 덮어쓰기 위해 !important 사용 */
  .react-calendar__month-view__weekdays__weekday,
  .react-calendar__month-view__weekdays__weekday--weekend {
    max-width: none !important;
  }

  // react-calendar__month-view__days__day--weekend: 주말
  .react-calendar__month-view__days__day--weekend {
    color: red;
  }

  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font: inherit;
    font-size: 0.75em;
    font-weight: bold;
  }

  .react-calendar__month-view__days__day--weekend {
    color: #d10000;
  }

  .react-calendar__month-view__days__day--neighboringMonth,
  .react-calendar__decade-view__years__year--neighboringDecade,
  .react-calendar__century-view__decades__decade--neighboringCentury {
    color: #757575;
  }

  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }

  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
    color: #ababab;
  }

  .react-calendar__month-view__days__day--neighboringMonth:disabled,
  .react-calendar__decade-view__years__year--neighboringDecade:disabled,
  .react-calendar__century-view__decades__decade--neighboringCentury:disabled {
    color: #cdcdcd;
  }

  // 범위 선택 시의 hover 상태
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  }
`;

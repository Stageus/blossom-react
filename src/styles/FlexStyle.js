import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  flex-direction: ${({ dir }) => setFlexDirection(dir)};
  justify-content: ${({ row }) => setJustifyContent(row)};
  align-items: ${({ col }) => setAlignItems(col)};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

// flex-box의 flex-direction 설정
const setFlexDirection = (dir) => {
  switch (dir) {
    case "col":
      return "column";
  }
};

// flex-box 안의 justify-content 값 설정
const setJustifyContent = (row) => {
  switch (row) {
    case "center":
      return "center";
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    case "between":
      return "space-between";
    case "around":
      return "space-around";
    case "evenly":
      return "space-evenly";
    default:
      return "flex-start";
  }
};

// flex-box 안의 align-items 값 설정
const setAlignItems = (col) => {
  switch (col) {
    case "center":
      return "center";
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    case "baseline":
      return "baseline";
    case "stretch":
      return "stretch";
    default:
      return "stretch";
  }
};

export default FlexBox;

import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;

  /* dimensions */
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};

  /* colors */
  background-color: ${(props) => props.bgColor || "pink"};
  color: ${(props) => props.textColor || "white"};

  /* fonts */
  /* font 설정 여부 고민 중 */
  font-size: ${(props) => props.size || "32px"};
  font-weight: ${(props) => props.weight || "400"};

  /* border */
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.borderRadius || "0"};

  &:hover {
    ${(props) => props.hoverColor || "pink"};
  }
`;

import styled from "styled-components";

export const Button = styled.button`
  /* dimensions */
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};

  /* colors */
  background-color: ${(props) => props.backgroundColor || "#FFC4D0"};
  color: ${(props) => props.textColor || "#32250F"};

  /* fonts */
  /* font 설정 여부 고민 중 */
  font-size: ${(props) => props.size || "32px"};
  font-weight: ${(props) => props.weight || "400"};

  /* border */
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.borderRadius || "0"};

  &:hover {
    ${(props) => props.hoverColor || "#F7DDDE"};
  }
`;

import styled from "styled-components";

export const Button = styled.button`
  /* dimensions */
  width: ${(props) => props.$width || "fit-content"};
  height: ${(props) => props.$height || "fit-content"};

  /* colors */
  background-color: ${(props) => props.$backgroundColor || "#FFC4D0"};
  color: ${(props) => props.$textColor || "#32250F"};

  /* fonts */
  font-size: ${(props) => props.$size || "32px"};
  font-weight: ${(props) => props.$weight || "400"};

  /* border */
  border: ${(props) => props.$border || "none"};
  border-radius: ${(props) => props.$borderRadius || "0"};

  /* spacing */
  margin: ${(props) => props.$margin || "0"};
  padding: ${(props) => props.$padding || "0"};

  &:disabled {
    background-color: #d9d9d9;
  }

  &:hover {
    background-color: ${(props) => props.$hoverColor || "#F7DDDE"};
  }
`;

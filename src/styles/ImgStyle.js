import styled from "styled-components";

export const Img = styled.img`
  /* dimensions */
  width: ${(props) => props.$width || "fit-content"};
  height: ${(props) => props.$height || "fit-content"};

  /* spacing */
  margin: ${(props) => props.$margin || "0"};
  padding: ${(props) => props.$padding || "0"};

  /* border */
  border-radius: ${(props) => props.$borderRadius || "none"};
`;

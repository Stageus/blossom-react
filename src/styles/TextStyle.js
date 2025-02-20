import styled from "styled-components";

export const P = styled.p`
  /* colors */
  color: ${(props) => props.$textColor || "#32250F"};

  /* fonts */
  font-size: ${(props) => props.$fontSize || "16px"};
  font-weight: ${(props) => props.$fontWeight || "400"};
  margin: ${(props) => props.$margin || "0"};
  padding: ${(props) => props.$padding || "0"};

  /* filter */
  filter: ${(props) => props.$filter || "none"};
`;

export const Label = styled.label`
  /* colors */
  color: ${(props) => props.$textColor || "#32250F"};

  /* fonts */
  font-size: ${(props) => props.$fontSize || "48px"};

  /* spacing */
  margin: ${(props) => props.$margin || "0"};
  padding: ${(props) => props.$padding || "0"};
`;

export const Span = styled.span`
  /* colors */
  color: ${(props) => props.$textColor || "#32250F"};

  /* fonts */
  font-size: ${(props) => props.$fontSize || "16px"};

  /* spacing */
  margin: ${(props) => props.$margin || "0"};
  padding: ${(props) => props.$padding || "0"};
`;

export const H1 = styled.h1`
  /* dimensions */
  width: ${(props) => props.$width || "fit-content"};
  height: ${(props) => props.$height || "fit-content"};

  /* colors */
  color: ${(props) => props.$textColor || "#32250F"};

  /* fonts */
  font-size: ${(props) => props.$fontSize || "48px"};
  margin: ${(props) => props.$margin || "0"};
  padding: ${(props) => props.$padding || "0"};

  text-align: ${(props) => props.$textAlign || null};
`;

export default P;

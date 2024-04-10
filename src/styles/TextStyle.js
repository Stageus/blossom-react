import styled from "styled-components";

export const P = styled.p`
  /* colors */
  color: ${(props) => props.$textColor || "#32250F"};

  /* fonts */
  font-size: ${(props) => props.$fontSize || "18px"};
  margin: ${(props) => props.$margin || "0"};
  padding: ${(props) => props.$padding || "0"};
`;

export const Label = styled.label`
  /* colors */
  color: ${(props) => props.$textColor || "#32250F"};

  /* fonts */
  font-size: ${(props) => props.$fontSize || "42px"};

  /* spacing */
  margin: ${(props) => props.$margin || "0"};
  padding: ${(props) => props.$padding || "0"};
`;

export const Span = styled.span`
  /* colors */
  color: ${(props) => props.$textColor || "#32250F"};

  /* fonts */
  font-size: ${(props) => props.$fontSize || "18px"};

  /* spacing */
  margin: ${(props) => props.$margin || "0"};
  padding: ${(props) => props.$padding || "0"};
`;

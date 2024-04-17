import styled from "styled-components";

export const Div = styled.div`
  /* dimensions */
  width: ${(props) => props.$width || "fit-content"};
  height: ${(props) => props.$height || "fit-content"};

  /* colors */
  background-color: ${(props) => props.$backgroundColor || null};
  opacity: ${(props) => props.$opacity || null};

  /* border */
  border: ${(props) => props.$border || "none"};
  border-top: ${(props) => props.$borderTop || "none"};
  border-bottom: ${(props) => props.$borderBottom || "none"};

  /* spacing */
  margin: ${(props) => props.$margin || "0"};
  padding: ${(props) => props.$padding || "0"};

  /* alignment */
  position: ${(props) => props.$position || null};
  top: ${(props) => props.$top || null};
  bottom: ${(props) => props.$bottom || null};
  left: ${(props) => props.$left || null};
  right: ${(props) => props.$right || null};
  z-index: ${(props) => props.$zIndex || null};
  text-align: ${(props) => props.$textAlign || "none"};

  box-sizing: border-box;
`;

export const Tr = styled.tr`
  /* dimensions */
  width: ${(props) => props.$width || "fit-content"};
  height: ${(props) => props.$height || "fit-content"};

  /* spacing */
  margin: ${(props) => props.$margin || "0"};
  padding: ${(props) => props.$padding || "0"};
`;

export const Td = styled.td`
  /* dimensions */
  width: ${(props) => props.$width || "fit-content"};
  height: ${(props) => props.$height || "fit-content"};
  min-width: ${(props) => props.$minWidth || null};

  /* spacing */
  padding: ${(props) => props.$padding || "0"};
`;

export default Div;

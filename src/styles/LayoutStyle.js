import styled from "styled-components";

export const Div = styled.div`
  /* dimensions */
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};

  /* colors */
  background-color: ${(props) => props.bgColor || null};

  /* border */
  border: ${(props) => props.border || "none"};
  border-top: ${(props) => props.borderTop || "none"};
  border-bottom: ${(props) => props.borderBottom || "none"};

  /* spacing */
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};

  /* alignment */
  text-align: ${(props) => props.textAlign || "none"};

  box-sizing: border-box;
`;

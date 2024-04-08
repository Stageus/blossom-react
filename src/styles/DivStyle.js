import styled from "styled-components";

export const Div = styled.div`
  /* dimensions */
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};

  box-sizing: border-box;
`;

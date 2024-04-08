import styled from "styled-components";

export const P = styled.p`
  color: ${(props) => props.textColor || "#32250F"};
  font-size: ${(props) => props.fontSize || "18px"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
`;

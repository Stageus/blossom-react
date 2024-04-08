import styled from "styled-components";

export const Input = styled.input`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "70px"};
  color: ${(props) => props.textColor || "#434343"};
`;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  // 배민 도현체
  @font-face {
    font-family: 'BMDOHYEON';
    src: url("/fonts/BMDOHYEON_otf.otf") format('opentype');
  }

  * {
  font-family: 'BMDOHYEON', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #FCF5EE;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  p {
    margin: 0;
  }

  input, select {
    background-color: #fff;
    outline: 0;
  }

  input[type="password"] {
    font-family: sans-serif;
  }

  input[type="password"]::placeholder {
    font-family: 'BMDOHYEON', sans-serif;
  }

  textarea {
    outline: 0;
    resize: none;
  }

  a:hover, button:hover, input[type="submit"] {
    cursor: pointer;
  }

`;

export default GlobalStyle;

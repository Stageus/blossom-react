import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap");

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }

  *, body {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #FCF5EE;
  }

  h1 {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 600;
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
    font-family: 'Noto Sans KR', sans-serif;
  }

  input[type="password"]::placeholder {
    font-family: 'Noto Sans KR', sans-serif;
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

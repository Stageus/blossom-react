import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'KoddiUD_Regular';
    font-weight: 400;
    font-display: swap;
    src: url("/fonts/KoddiUDOnGothic-Regular.woff2") format ('woff2');
  }

  @font-face {
    font-family: 'KoddiUD_Bold';
    font-weight: 600;
    src: url("/fonts/KoddiUDOnGothic-Bold.woff2") format ('woff2');
  }

  @font-face {
    font-family: 'KoddiUD_ExtraBold';
    font-weight: 800;
    src: url("/fonts/KoddiUDOnGothic-ExtraBold.woff2") format ('woff2');
  }

  *, body {
    font-family: 'KoddiUD_Regular', Arial, sans-serif;
    font-weight: 400;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #FCF5EE;
  }

  h1 {
    font-family: 'KoddiUD_Bold', Arial, sans-serif;
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
    font-family: 'KoddiUD_Bold', Arial, sans-serif;
  }

  input[type="password"]::placeholder {
    font-family: 'KoddiUD_Bold', Arial, sans-serif;
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

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Gilroy';
    src: url("/fonts/Gilroy-Regular.woff2") format('woff2'),
       url("/fonts/Gilroy-Regular.ttf") format('truetype');
       font-weight: 400;
}
@font-face {
    font-family: 'Gilroy';
    src: url("/fonts/Gilroy-Bold.woff2") format('woff2'),
       url("/fonts/Gilroy-Bold.ttf") format('truetype');
       font-weight: 800;
}

  body {
    font-family: "Gilroy";
    background: #fafafa;
    color: #3c3c3c;
  }
`;

export default GlobalStyle;

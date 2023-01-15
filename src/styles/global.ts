import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Gilroy";
    src: url("/fonts/Gilroy-Regular.woff2") format("woff2"),
      url("/fonts/Gilroy-Regular.ttf") format("truetype");
    font-weight: 400;
  }
  @font-face {
    font-family: "Gilroy";
    src: url("/fonts/Gilroy-Bold.woff2") format("woff2"),
      url("/fonts/Gilroy-Bold.ttf") format("truetype");
    font-weight: 800;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    height: 100vh;
    min-width: 300px;
    position: relative;
    flex-direction: column;
    font-family: "Gilroy";
    font-size: 1rem;
    background: #fafafa;
    color: #3c3c3c;
	color: green;
    margin: 0;
    background: #fff;
	h1 {
		font-size: 20px;
	}
	&:hover {
		background: green;
	}
	-webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    &::-webkit-scrollbar {
      width: 7px;
    }
    &::-webkit-scrollbar:horizontal {
      height: 7px;
    }

    &::-webkit-scrollbar-track {
      background: rgba(50, 50, 50, 0.1);
      border-radius: 1em;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 1em;
      background: linear-gradient(180deg, #ffcb35 0%, #ff0066 100%);
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    @media screen and (max-width: 768px) {
      display: block;
    }
  }

  * {
    box-sizing: border-box;
	margin: 0;
  }

  *:after,
  *:before {
    display: block;
    line-height: 1;
  }

  /* @mixin cut-text {
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	margin-bottom: 0;
	overflow: hidden;
} */

  input:invalid {
    box-shadow: none;
  }
  input:moz-submit-invalid {
    box-shadow: none;
  }
  textarea:invalid {
    box-shadow: none;
  }
  textarea:moz-submit-invalid {
    box-shadow: none;
  }

  img {
    border: 0;
    display: block;
  }

  ul,
  ol {
    padding-left: 0;
  }
  ul {
    list-style-type: none;
  }
  ol {
    list-style-position: inside;
  }

  button[disabled],
  html input[disabled] {
    cursor: default;
  }
  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;

export default GlobalStyle;

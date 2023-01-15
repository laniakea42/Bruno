import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./components/index";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import { baseTheme } from "./styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={{ baseTheme }}> */}
      <GlobalStyle />
      <Index />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./utils/utils";
import SwapProvider from "./Context/SwapContext/SwapProvider";
import { ThemeProvider } from "./Context/ThemeContext/ThemeProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <ThemeProvider>
        <SwapProvider>
          <App />
        </SwapProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);

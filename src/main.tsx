import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import "@npm-questionpro/wick-ui-lib/dist/fonts/icon.css";
import "@npm-questionpro/wick-ui-lib/dist/style.css";
import { WuToast } from "@npm-questionpro/wick-ui-lib";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <App />
      <WuToast />
    </Router>
  </StrictMode>
);

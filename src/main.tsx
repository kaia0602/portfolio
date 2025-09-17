import React from "react";
import ReactDOM from "react-dom/client";
import ThemedApp from "./App";
import { ThemeProviderCtx } from "./app/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProviderCtx>
      <ThemedApp />
    </ThemeProviderCtx>
  </React.StrictMode>
);

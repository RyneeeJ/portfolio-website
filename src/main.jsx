import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ObserverProvider from "./contexts/ObserverContext.jsx";
import MobileNavProvider from "./contexts/MobileNavContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ObserverProvider>
      <MobileNavProvider>
        <App />
      </MobileNavProvider>
    </ObserverProvider>
  </StrictMode>,
);

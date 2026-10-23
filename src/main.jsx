import React from "react";
import { createRoot } from "react-dom/client";
import App from "./omar/engine.jsx";
import "./omar/layout.css";
import "./omar/orbit.css";
import "./omar/light.css";
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

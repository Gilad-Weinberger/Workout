import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./scss/main.css";
import App from "./App.jsx";
import { WorkoutsContextProvider } from "../src/context/workoutContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WorkoutsContextProvider>
      <App />
    </WorkoutsContextProvider>
  </StrictMode>
);

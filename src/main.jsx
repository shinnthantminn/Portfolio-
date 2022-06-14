import react from "react";
import reactDom from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

reactDom.createRoot(document.querySelector("#root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./Pages/Home";
import { Router } from "./Router";
import "./styles/global.css";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

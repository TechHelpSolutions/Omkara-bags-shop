import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css"; // Agar tumhara CSS global path alag hai to adjust kar lena

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

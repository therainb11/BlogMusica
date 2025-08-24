// Renderizado del punto de entrada principal de la aplicación React
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../styles/blog.css"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

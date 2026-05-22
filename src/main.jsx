import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Home/App.jsx";
import "./index.css"; // <-- O CSS Global precisa ser importado aqui para valer no site todo!

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

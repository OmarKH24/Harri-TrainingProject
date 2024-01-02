import React from "react";
import ReactDOM from "react-dom/client";
//bootstrap links
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
//icons links "Fontawesome"
import "@fortawesome/fontawesome-free/css/all.min.css";
//custome "generall" css
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);

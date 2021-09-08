import React from "react";
import ReactDOM from "react-dom";
import "./CssSheets/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App id="content" />
  </BrowserRouter>,
  document.getElementById("root")
);

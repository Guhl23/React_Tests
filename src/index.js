import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const rootElement = document.getElementById("root");
// const element = document.createElement("div");
// element.textContent = "Hello World";
// element.className = "container";
// rootElement.appendChild(element);
const element = React.createElement(
  "div",
  { className: "container" },
  "Hello World"
);
ReactDOM.render(element, rootElement);

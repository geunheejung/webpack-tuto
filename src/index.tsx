import * as React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import sum from "./sum";
import "../reset.css";

const rootNode = document.getElementById("root") as HTMLElement;

sum(1, 2);

ReactDom.createRoot(rootNode).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

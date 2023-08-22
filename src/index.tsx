import * as React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

const rootNode = document.getElementById('root') as HTMLElement;

ReactDom.createRoot(rootNode).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

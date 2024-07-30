import * as React from "react";
import ReactDOM from "react-dom/client";
import { CatFacts } from "./components/cat-facts/CatFacts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CatFacts />
  </React.StrictMode>,
);

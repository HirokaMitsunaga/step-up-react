import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";
import { Practice1 } from "./practices/Practice1";
import { Practice2 } from "./practices/Practice2";
import { Practice3 } from "./practices/Practice3";
import { Practice4 } from "./practices/Practice4";

// const root = createRoot(document.getElementById("app"));

// root.render(
//   <StrictMode>
//     <Practice1 />
//     <Practice2 />
//     <Practice3 />
//     <Practice4 />
//   </StrictMode>
// );
const rootElement = document.getElementById("app");

if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <Practice1 />
      <Practice2 />
      <Practice3 />
      <Practice4 />
    </StrictMode>
  );
} else {
  console.error("Root element not found.");
}

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MealContextProvider from "./context/MealContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MealContextProvider>
    <App />
  </MealContextProvider>
);

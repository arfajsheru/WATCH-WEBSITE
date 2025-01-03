import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import ShopContextProvider from "./Context/shopContext.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
  </BrowserRouter>
);

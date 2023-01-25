import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CountriesProvider } from "./contexts/CountriesContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <CountriesProvider>
          <App />
        </CountriesProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import i18next from "i18next";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme"
import { ToastContainer,Flip } from "react-toastify";
import { Provider } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <ThemeProvider theme={theme}>
        <ToastContainer rtl/>
          <App />
        </ThemeProvider>
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import i18next from "i18next";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { AuthProvider } from "./component/hooks/useAuth";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <ThemeProvider theme={theme}>
        <ToastContainer rtl />
        <Provider store={store}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </Provider>
      </ThemeProvider>
    </I18nextProvider>
  </BrowserRouter>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SnackbarProvider } from "notistack";
import AppProvider from "./context/appContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={2}>
      <AppProvider>
        <App />
      </AppProvider>
    </SnackbarProvider>
  </React.StrictMode>
);

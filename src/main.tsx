import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";

import theme from "./theme/theme.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</ThemeProvider>
)

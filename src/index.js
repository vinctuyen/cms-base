import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./theme/style.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#FB8122',
      },
      secondary: {
        main: '#1D2228',
      },
      grey: {
        main: '#E1E2E2',
      }
    },
});
ReactDOM.render(
  <BrowserRouter>
  <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

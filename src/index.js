import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "./reset.css";
import "./styles.css";

import { Provider } from "react-redux";
import store from "./store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);

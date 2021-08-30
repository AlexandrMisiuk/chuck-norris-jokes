import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
// import rootReducer from './reducers'
// const store = createStore(rootReducer)

import App from "./App";
import "./reset.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </StrictMode>,
  rootElement
);

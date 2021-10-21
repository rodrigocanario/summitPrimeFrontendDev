import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { CookiesProvider } from "react-cookie";
import { applyMiddleware, compose, createStore } from "redux";
import allReducers from "./Redux/Reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

let store = createStore(allReducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Provider>,
  document.getElementById("root")
);

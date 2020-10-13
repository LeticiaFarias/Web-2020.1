import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import storeConfig from "./store/storeConfig.js";

ReactDOM.render(
  <Provider storeConfig={storeConfig()}>
    <App />
  </Provider>,
  document.getElementById("root")
);

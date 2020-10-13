import { createStore } from "redux";

import reducer from "./reducers/reducer.js";

function storeConfig() {
  return createStore(reducer);
}

export default storeConfig;

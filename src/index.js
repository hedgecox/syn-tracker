import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducers from "./redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

import App from "./components/App";
import "./base.css";

ReactDOM.render(
    <Provider store={createStore(reducers, composeWithDevTools())}>
        <App />
    </Provider>,
    document.querySelector("#root")
);

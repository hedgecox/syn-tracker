import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducers from "./redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

import { loadState, saveState } from "./localStorage";
import App from "./components/App";
import "./base.css";

const persistedState = loadState();

console.log(persistedState);

const store = createStore(reducers, persistedState, composeWithDevTools());

store.subscribe(() => {
	console.log("Saving state");
	saveState(store.getState());
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#root")
);

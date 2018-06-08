import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./store/reducers";
import defaultState from "./store/state";
let store = createStore(reducers,defaultState);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

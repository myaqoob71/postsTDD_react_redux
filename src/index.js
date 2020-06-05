import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './createStore';
import App from './app';

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
document.getElementById("app"));
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import configureStore from "./store/index";
import App from './App';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route exact path='/' component={App}/>
        </Router>
    </Provider>, document.getElementById('root'));

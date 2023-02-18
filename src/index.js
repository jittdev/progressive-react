import React from 'react';
//import ReactDOM from 'react-dom'; we're importing createRoot instead
import { createRoot } from "react-dom/client";
import { Provider, connect } from 'react-redux';
import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import { logger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk'; //waits to see if an action returns a function instead of an object
import './index.css';
import App from './containers/App';
import { searchRobots, requestRobots } from "./reducers";
import 'tachyons';
// import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))
const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>);


// ReactDOM.render(<App />, document.getElementById('root')); <--old react
// registerServiceWorker();

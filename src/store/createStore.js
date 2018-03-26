import { applyMiddleware, compose, createStore as createReduxStore, combineReducers } from 'redux';
import {ConnectedRouter, connectRouter, routerMiddleware} from "connected-react-router";
import createHistory from "history/createBrowserHistory";
import thunk from 'redux-thunk';

import { updateLocation } from './location';
import { makeRootReducer } from "./reducers";

const createStore = (initialState = {}, initialReducer = {}) => {
  const history = createHistory();
  const middleware = [thunk, routerMiddleware(history)];
  const enhancers = [];
  let composeEnhancers = compose;

  if (process.env.NODE_ENV === "development") {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === "function") {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }
  
  const store = createReduxStore(
    connectRouter(history)(combineReducers(initialReducer)),
    // makeRootReducer(initialReducer),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware), 
      ...enhancers
    )
  );
  
  store.unsubscribeHistory = history.listen(updateLocation(store));

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const reducers = require("./reducers").default;
      store.replaceReducer(reducers(store.asyncReducers));
    });
  }
  
  store.asyncReducers = { ...initialReducer };
  
  return store;
};

export default createStore;

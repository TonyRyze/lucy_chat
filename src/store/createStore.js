import { applyMiddleware, compose, createStore as createReduxStore } from 'redux';
import { routerMiddleware } from "react-router-redux";
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
    makeRootReducer(initialReducer),
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

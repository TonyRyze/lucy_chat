import { applyMiddleware, compose, createStore as createReduxStore } from 'redux';
import {ConnectedRouter, routerMiddleware, routerReducer} from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import thunk from 'redux-thunk';
import counterReducer from '../routes/Hello/modules/Hello';

const createStore = (initialState = {}) => {
  const history = createHistory();
  const middleware = [thunk, routerMiddleware(history)];
  const enhancers = [];
  let composeEnhancers = compose;

  if(process.env.NODE_ENV === 'development') {
    if(typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }

  const store = createReduxStore(
    counterReducer,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store;
}

export default createStore;

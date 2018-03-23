import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {ConnectedRouter, routerMiddleware, routerReducer} from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { Provider } from 'react-redux';

import Hello from './routes/Hello/';
import createStore from './store/createStore';

const store = createStore(window.__INITIAL_STATE__);

console.log(ConnectedRouter);
const history = createHistory();

const App = (props) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="container">
            <Router>
              <Switch>
                <Route path="/" exact component={Hello}></Route>
              </Switch>
            </Router>
        </div>
      </ConnectedRouter>
    </Provider>
  )
};

export default App;
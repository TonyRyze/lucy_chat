import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";

import createStore from "../store/createStore";
import reducer, { key } from "../store/location";
import { routes } from "../routes/";
//import Hello from '../routes/Hello';
//import List from '../routes/List';

export const store = createStore(
  {},
  {
    [key]: reducer
  }
);

const history = createHistory();

console.log(routes);
const App = props => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
          <Router>
            <div className="container">
              <Switch>
                {renderRoutes(routes)}
              </Switch>
              <div className="link">
                <Link to={{ pathname: "/", state: { name: "ryan" } }}>Hello</Link>
                <br />
                <Link to={{ pathname: "/list", state: { name: "jey" } }}>
                  List
                </Link>
              </div>
            </div>
          </Router>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;

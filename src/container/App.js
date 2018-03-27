import React from "react";
import { withRouter } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { Provider } from "react-redux";

import createStore from "../store/createStore";
import reducer, { key } from "../store/location";
import Main from '../layouts/main';

export const store = createStore(
  {},
  {
    [key]: reducer
  }
);

const history = createHistory();

const WithRouterComponent = withRouter(Main);

const App = props => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
          <WithRouterComponent />
      </ConnectedRouter>
    </Provider>
  );
};

export default App;

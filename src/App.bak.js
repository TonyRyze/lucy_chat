import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { Provider } from "react-redux";

import createStore from "../store/createStore";
import reducer, { key } from "../store/location";

import Hello from './routes/Hello';
import List from './routes/List';

export const store = createStore(
  {},
  {
    [key]: reducer
  }
);

const history = createHistory();

const lazyLoader = importComponent =>
  class AsyncComponent extends React.Component {
    state = { C: null };

    async componentDidMount() {
      const { default: C } = await importComponent();
      this.setState({ C });
    }

    render() {
      const { C } = this.state;
      return C ? <C {...this.props} /> : null;
    }
  };

const App = props => {
  return <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="container">
          <Router>
            <Switch>
              <Route exact path="/" component={Hello} />
              <Route path="/list" component={List} />
            </Switch>
          </Router>
          <div className="link">
            <Link to={{ pathname: "/", state: { name: "ryan" } }}>Hello</Link>
            <br />
            <Link to={{ pathname: "/list", state: { name: "jey" } }}>
              List
            </Link>
          </div>
        </div>
      </ConnectedRouter>
    </Provider>;
};

export default App;

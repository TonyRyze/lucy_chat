import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ConnectedRouter } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { Provider } from 'react-redux';

import createStore from './store/createStore';
import reducer, { key } from './store/location';

export const store  = createStore({} , {
  [key]: reducer
});

const history = createHistory();

const lazyLoader = (importComponent) => (
  class AsyncComponent extends React.Component {
    state = { C: null }

    async componentDidMount () {
      const { default: C } = await importComponent();
      this.setState({ C });
    }

    render () {
      const { C } = this.state;
      return C ? <C {...this.props} /> : null;
    }
  }
);

const App = (props) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="container">
            <Router>
              <Switch>
                <Route exact path='/' component={lazyLoader(() => import('./routes/Hello'))}></Route>
                <Route path='/list' component={lazyLoader(() => import('./routes/List'))}></Route>
              </Switch>
            </Router>
            <div className="link">
              <Link to={{ pathname: '/', query: { name: 'ryan' } }}>Hello</Link>
              <br />
              <Link to={{ pathname: '/list', query: { name: 'jey' } }}>List</Link>
            </div>
        </div>
      </ConnectedRouter>
    </Provider>
  )
};

export default App;
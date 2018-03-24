import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from '../routes/Home/index';

export default class App extends React.Component {

  shouldComponentUpdate(){
    return false;
  }
  
  render () {
    return (
      <Provider store={this.props.store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home.component}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}


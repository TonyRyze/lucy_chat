import React from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import { routes } from "../routes/";
//import Hello from '../routes/Hello';
//import List from '../routes/List';

const Main = props => {
  return (
    <div className="container">
      <h1>App</h1>
      <Router>
        {renderRoutes(routes)}
      </Router> 
      <div className="link">
        <Link to={{ pathname: "/", state: { name: "ryan" } }}>Hello</Link>
        <br />
        <Link to={{ pathname: "/list", state: { name: "jey" } }}>
          List
        </Link>
      </div>   
    </div>
  );
};

export default Main;

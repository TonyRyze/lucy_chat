import React from "react";

export function asyncComponent(importComponent) {
    class AsyncComponent extends React.PureComponent {
      state = { 
        Component: null 
      };

      async componentDidMount() {
        const { default: Component } = await importComponent();
        this.setState({ Component });
      }

      render() {
        const { Component } = this.state;
        return Component ? <Component {...this.props} /> : null;
      }
    }

    return AsyncComponent;
}

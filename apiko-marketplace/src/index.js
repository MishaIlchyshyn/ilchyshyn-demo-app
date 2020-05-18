import React from "react";
import ReactDOM from "react-dom";
import Router from "./scenes/router";
import { Provider, connect } from "react-redux";
import store from "./store/createStore";
import { appOperations } from "./modules/app";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    props.dispatch(appOperations.init());
  }

  render() {
    if (this.props.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="root">
        <Router />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.app.isLoading,
  };
}

const AppConnect = connect(mapStateToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <AppConnect />
  </Provider>,
  document.getElementById("root")
);

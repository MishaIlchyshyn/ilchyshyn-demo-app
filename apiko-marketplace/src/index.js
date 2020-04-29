import React from 'react';
import ReactDOM from 'react-dom';
import Router from "./scenes/router";

import './styles.css';

class App extends React.Component {
  render() {
    return (
      <div className="root">
          <Router />
      </div>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Index from './components/Index.js';

class App extends React.Component {
  render() {
    return (
      <div className="nav">
        <Link to="app">Home</Link>
        <Link to="index">Index</Link>
      </div>
    );
  }
};

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/index" component={Index}/>
    </Route>
  </Router>
), document.getElementById('root'))

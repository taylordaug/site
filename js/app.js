import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Home from './components/Home.js';
import Me from './components/Me.js';

export class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar">Home</span>
              <span className="icon-bar">Me</span>
              <span className="icon-bar">Portfolio</span>
            </button>
            <a className="navbar-brand" href="#">Brand</a>
          </div>
          <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="me">Me</Link></li>
          </ul>
        </nav>

        <div className="container">

        {this.props.children}
        </div>

      </div>
    );
  }
};

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/me" component={Me} />
    </Route>
  </Router>
), document.getElementById('root'))

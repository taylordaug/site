import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Home from './components/Home.js';
import Me from './components/Me.js';

export class App extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="me">Me</Link></li>
          </ul>
        </nav>

        {this.props.children}

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

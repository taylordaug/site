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
          <div className="container-fluid">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/" className="navbar-brand">
                <img className="logo" alt='taylor-daugherty' src={require('./../images/Logo.png')}/>
              </Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li className="active"><Link to="/">home<span className="sr-only">(current)</span></Link></li>
                <li><Link to="/me">me</Link></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">portfolio <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><Link to="/">project 1</Link></li>
                    <li><Link to="/">project 2</Link></li>
                    <li><Link to="/">project 3</Link></li>
                  </ul>
                </li>
                <li role="separator" className="divider"></li>
                <li><Link to="/contact">contact</Link></li>
              </ul>

            </div>
          </div>
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

import React from 'react';
import About from './About';
import Topics from './Topics';
import Home from './Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class BasicExample extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
  
          <hr />
  
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
    );
  }
}

export default BasicExample

  

